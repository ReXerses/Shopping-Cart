import { useContext, useState } from 'react'
import React from 'react';
import stile from '/src/moduli css/Card.module.css'
import { AppContext } from './Navbar';

const Card = ({articolo, isLogged}) => {

    const { carrello, setCarrello } = useContext(AppContext);
    const [quantità, setQuantità] = useState(1);
    const [aggiuntoAlCarrello, setAggiuntoAlCarrello] = useState(false);

    const gestisciAcquista = () => {
        if(quantità != 0) {

            setAggiuntoAlCarrello(true);
            // Resetta l'indicatore dopo 2 secondi (durata dell'animazione)
            setTimeout(() => {
                setAggiuntoAlCarrello(false);
                
            }, 2000);

            let oggettoPresente = false; //se l'oggetto è già presente in carrello si aggiorna la quantità senno viene aggiunto normalmente.

            let acquisto = {
                id: articolo.id,
                titolo: articolo.title,
                img : articolo.image,
                prezzo: articolo.price,
                quantità : quantità,
            }

            carrello.map((oggetto,index) => {
                if(oggetto.id === acquisto.id) {
                    let nuovoCarrello = [...carrello];
                    nuovoCarrello[index] = {...oggetto, quantità : quantità + acquisto.quantità}
                    setCarrello(nuovoCarrello);
                    oggettoPresente = true;
                }
            })
            if(!oggettoPresente) {
                setCarrello(prevCarrello => [...prevCarrello, acquisto]); //Il parametro prevCarrello è un argomento della funzione fornito automaticamente da React quando si utilizza la forma di funzione di aggiornamento dello stato con uno stato precedente.
            }
            setQuantità(0);
        }
    }

    return (
        <>
            <div className={stile.card}>
                <div style={ {backgroundImage: `url(${articolo.image})`} } className={stile.img}>
                    {aggiuntoAlCarrello && <span className={ stile.aggiuntoAlCarrello}>Added to cart</span>}
                </div>

                <span>{articolo.title}</span>
                <div className={stile.barraCard}>
                    <div className={stile.contenitoreBtn}>
                        <div className={stile.contenitoreQuantità}>
                            <button className={stile.minus} onClick={() => (quantità > 0) ? setQuantità(quantità-1) : setQuantità(0)}></button>
                            <span>{quantità}</span>
                            <button className={stile.plus} onClick={() => setQuantità(quantità+1)}></button>
                        </div>

                        <button className={stile.buy} onClick={gestisciAcquista}></button>
                    </div>
                    {(isLogged) ? (
                        <span>{((articolo.price - articolo.price / 100 * 30)).toFixed(2)} €</span>
                    ) : (
                        <span>{articolo.price} €</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(Card); // Evita di ri-renderizzare la card ad ogni modifica di stato