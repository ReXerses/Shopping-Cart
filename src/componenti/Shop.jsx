import { useEffect, useState } from "react";
import Footer from "./Footer";
import Card from "./Card";
import { useShop } from "./ShopHook";
import { useContext } from "react";
import { AppContext } from "./Navbar";
import { Link } from "react-router-dom";
import stile from '/src/moduli css/Shop.module.css';

const Shop = () => {

    const {risultato, error, loading} = useShop();
    const { ricerca, isLogged, setRicerca} = useContext(AppContext);

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
            //console.log(articoliFiltrati);
        } else if (risultato) {
            setArticoliFiltrati(risultato);
            //console.log(risultato)
            //console.log(ricerca)

        }
    }, [risultato, ricerca]);

    if(error) return <p>È stato riscontrato un errore nel network.</p>
    if(loading) return <p>Caricamento...</p>

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

            <div className={stile.contenitoreShop}>

                <div className={stile.sideBar}>sono la sidebar</div>
                <div className={stile.contenuto}>

                    {articoliFiltrati.map((articolo) => <Card articolo={articolo} key={articolo.id} isLogged={isLogged}/>)}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Shop;