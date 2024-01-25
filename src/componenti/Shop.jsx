import { useEffect, useState } from "react";
import Footer from "./Footer";
import Card from "./Card";
import LoadingPage from "./LoadingPage";
import { useShop } from "./ShopHook";
import { useContext } from "react";
import { AppContext } from "./Navbar";
import { Link } from "react-router-dom";
import stile from '/src/moduli css/Shop.module.css';

const Shop = () => {

    const {risultato, error, loading} = useShop();
    const { ricerca, isLogged, isMobile, setRicerca, setCategoria} = useContext(AppContext);
    const [categorieAperte, setCategorieAperte] = useState(false);

    const [articoliFiltrati, setArticoliFiltrati] = useState([]);

    useEffect(() => {
        if (risultato && ricerca) {
            
            const articoliFiltrati = risultato.filter((articolo) => {
                // Rimuovi caratteri speciali e rendi tutto minuscolo per una comparazione senza distinzione tra maiuscole e minuscole
                const paroleTitolo = articolo.title.replace(/[^\w\s]/gi, '').toLowerCase().split(' ');
                
                // Rimuovi duplicati e filtra
                return [...new Set(paroleTitolo)].includes(ricerca.toLowerCase());
            });
    
            setArticoliFiltrati(articoliFiltrati);
            console.log(articoliFiltrati);
        } else if (risultato) {
            setArticoliFiltrati(risultato);
            //console.log(articoliFiltrati)
            //console.log(ricerca)

        }
    }, [risultato, ricerca]);

    const gestisciSubmit = (event) => {
        console.log(event)
        event.preventDefault(); // Impedisce il comportamento predefinito del form (ricarica la pagina)
        setCategoria('');
        setRicerca(event.target[0].value);
    };

    if(error) return <p>È stato riscontrato un errore nel network.</p>
    if(loading) return <LoadingPage />

    return (
        <>
            <div className={stile.contenitorelinkSconto}>
        
                {isLogged ? (
                <div className={stile.linkSconto}>
                    <h2 >・❥・ You are eligible to receive 30% off your next purchase! ・❥・</h2>
                </div>
                ) :
                <Link to="/login" className={stile.linkSconto}>
                    <h2>・❥・ Access our website to receive a 30% discount on your next purchase! ・❥・</h2>
                </Link>
                }

            </div>

            <div className={(isMobile) ? stile.contenitoreShopMobile : stile.contenitoreShop}>

                <div className={stile.sideBar}>

                    <form action="" method="get"  onSubmit={gestisciSubmit} className={stile.form}>
                            <input type="text" name="search" id="search"   placeholder="Search" autoComplete="off" className={stile.input}/>
                            <button className={stile.searchBtn} ></button>
                    </form>

                        <div>
                            <div className={stile.categorie}>Categorie <button onClick={() => setCategorieAperte(!categorieAperte)} className={(categorieAperte) ? stile.chiudiCategorieBtn : stile.apriCategorieBtn}></button></div>

                            {categorieAperte && (

                                <ul className={stile.menuVisibile}>
                                    <li className={stile.listElement}>
                                        <button className={stile.listBtn} onClick={() => { setCategoria('category/electronics') ; setRicerca('') }}>Electronics</button>
                                    </li>
                                    <li className={stile.listElement}>
                                        <button className={stile.listBtn} onClick={() => { setCategoria('category/jewelery') ; setRicerca('') }}>Jewelery</button>
                                    </li>
                                    <li className={stile.listElement}>
                                        <button className={stile.listBtn} onClick={() => { setCategoria(`category/men's clothing`) ; setRicerca('') }}>Men's clothing</button>
                                    </li>
                                    <li className={stile.listElement}>
                                        <button className={stile.listBtn} onClick={() => { setCategoria(`category/women's clothing`) ; setRicerca('') }}>Women's clothing</button>
                                    </li>
                                </ul>
                            )}
                        </div>
                


                    
                    

                </div>
                <div className={stile.contenuto}>

                    {(articoliFiltrati.length === 0 ) && <span>No result!</span>}
                    {(loading) && <p>Caricamento...</p>}

                    {articoliFiltrati.map((articolo) => <Card articolo={articolo} key={articolo.id} isLogged={isLogged}/>)}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shop;