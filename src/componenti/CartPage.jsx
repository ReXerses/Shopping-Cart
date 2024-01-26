import Footer from "./Footer";
import stile from '/src/moduli css/CartPage.module.css'
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./Navbar";

const CartPage = () => {
    const { isLogged, carrello, setCarrello } = useContext(AppContext);
    const [acquistoTerminato, setAcquistoTerminato] = useState(false);

    console.log(carrello);

    const gestisciCancellazione = (index) => {
        const nuovoCarrello = [...carrello.slice(0, index), ...carrello.slice(index + 1)];
        setCarrello(nuovoCarrello);
    }

    const gestisciAumentoQuantità = (index) => {
        const nuovoCarrello = [...carrello];
        nuovoCarrello[index].quantità = nuovoCarrello[index].quantità + 1;
        setCarrello(nuovoCarrello);
    }

    const gestisciDiminuzioneQuantità = (index) => {
        if (carrello[index].quantità > 1) {
            const nuovoCarrello = [...carrello];
            nuovoCarrello[index].quantità = nuovoCarrello[index].quantità - 1;
            setCarrello(nuovoCarrello);
        }
    }

    const gestisciAcquistoTerminato = () => {
        if(!acquistoTerminato && (carrello.length > 0)) {
            const nuovoCarrello = [];
            setCarrello(nuovoCarrello);
            setAcquistoTerminato(true);
        }
    }

    let sommaFinale = 0;

    carrello.map((articolo) => {
        sommaFinale += (articolo.prezzo * articolo.quantità);
    })

    useEffect(() => { // animazione termine acquisto.
        if(acquistoTerminato) {
            setTimeout(() => {
                setAcquistoTerminato(false);
              }, 3000);  
        }
    },[acquistoTerminato])


    return (
        <>
            <div className={stile.contenitoreShoppingCart}>

                {acquistoTerminato && <div className={stile.confermaAcquisto}></div>}

                <div className={stile.shoppingCart}>
                    <h3 className={stile.h3}>Shopping Cart</h3>

                    <div>

                        {carrello.map((articolo, index) =>  (
                            <div key={articolo.id} className={stile.articolo}>

                                <button className={stile.cancellaBtn} onClick={() => gestisciCancellazione(index)}>x</button>

                                <img src={articolo.img} alt={articolo.title} className={stile.img} />

                                <div className={stile.titolo}>{articolo.titolo}</div>

                                <div className={stile.contenitoreQuantità}>

                                    <button className={stile.cancellaBtn} onClick={() => gestisciDiminuzioneQuantità(index)}>-</button>

                                    <span>{articolo.quantità}</span>

                                    <button className={stile.cancellaBtn} onClick={() => gestisciAumentoQuantità(index)}>+</button>

                                </div>

                                <div className={stile.prezzo}>

                                    {(isLogged) ? (
                                        <span>{((articolo.prezzo - articolo.prezzo / 100 * 30) * articolo.quantità).toFixed(2)} €</span>
                                    ) : (
                                        <span>{(articolo.prezzo * articolo.quantità).toFixed(2)} €</span>
                                    )}
                        
                                </div>

                            </div>
                        ))}

                    </div>
                    <h3>Total:</h3>
                    <div className={stile.contenitoreCheckout}>
                        
                        {(isLogged) ? (
                                <span>{(sommaFinale - sommaFinale / 100 * 30).toFixed(2)} €</span>
                        ) : (
                                <span>{sommaFinale.toFixed(2)} €</span>
                        )}

                        <button className={stile.checkOutBtn} onClick={gestisciAcquistoTerminato}>Check out</button>
                    </div>

                </div>

            </div>

            <Footer />
        </>
    )
}

export default CartPage;