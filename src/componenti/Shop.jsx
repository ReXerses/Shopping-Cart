import { useEffect, useState } from "react";
import Footer from "./Footer";
import { useShop } from "./ShopHook";
import { useContext } from "react";
import { AppContext } from "./Navbar";

const Shop = () => {

    const {risultato, error, loading} = useShop();
    const { ricerca, setRicerca} = useContext(AppContext);

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
            console.log(risultato)
            console.log(ricerca)

        }
    }, [risultato, ricerca]);

    if(error) return <p>È stato riscontrato un errore nel network.</p>
    if(loading) return <p>Caricamento...</p>

    return (
        <>
            <div>
                <h2>bngwsfgneg</h2>
            </div>
            <Footer />
        </>
    )
}

export default Shop;