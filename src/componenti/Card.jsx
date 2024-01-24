import { useEffect, useState } from 'react'
import React from 'react';
import stile from '/src/moduli css/Card.module.css'

const Card = ({articolo, isLogged}) => {

    const [quantità, setQuantità] = useState(0);


    console.log(articolo)
    //if (articolo == undefined) return <p>loading....</p>

    return (
        <>
            <div className={stile.card}>
                <div style={ {backgroundImage: `url(${articolo.image})`} } className={stile.img}></div>

                <span>{articolo.title}</span>
                <div className={stile.barraCard}>
                    <div className={stile.contenitoreBtn}>
                        <div className={stile.contenitoreQuantità}>
                            <button className={stile.minus} onClick={() => (quantità > 0) ? setQuantità(quantità-1) : setQuantità(0)}></button>
                            <span>{quantità}</span>
                            <button className={stile.plus} onClick={() => setQuantità(quantità+1)}></button>
                        </div>

                        <button className={stile.buy}></button>
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