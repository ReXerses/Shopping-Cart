import { useEffect, useState } from 'react'
import React from 'react';
import stile from '/src/moduli css/Card.module.css'

const Card = ({articolo, isLogged}) => {

    const [quantità, setQuantità] = useState(1);
    const [aggiuntoAlCarrello, setAggiuntoAlCarrello] = useState(false);

    const gestisciAcquista = () => {
        if(quantità != 0) {
            setQuantità(0);

            setAggiuntoAlCarrello(true);

            // Resetta l'indicatore dopo 2 secondi (durata dell'animazione)
            setTimeout(() => {
                setAggiuntoAlCarrello(false);
            }, 2000);
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
                            <button className={stile.minus} onClick={() => (quantità > 1) ? setQuantità(quantità-1) : setQuantità(1)}></button>
                            <span>{quantità}</span>
                            <button className={stile.plus} onClick={() => setQuantità(quantità+1)}></button>
                        </div>

                        <button className={stile.buy} onClick={gestisciAcquista}></button>
                    </div>
                    {(isLogged) ? (
                        <span>{((articolo.price - articolo.price / 100 * 30) * quantità).toFixed(2)} €</span>
                    ) : (
                        <span>{articolo.price * quantità} €</span>
                    )}
                </div>
            </div>
        </>
    )
}

export default React.memo(Card);