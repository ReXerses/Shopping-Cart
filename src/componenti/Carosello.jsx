import { useState, useEffect } from "react";
import { ImmaginiCarosello } from "./ImmaginiCarosello";
import stile from '/src/moduli css/Carosello.module.css';

const Carosello = () => {
    const [indice , setIndice] = useState(0);
    const [animazione, setAnimazione] = useState(false);

    const prossimaImg = () => {
        setAnimazione(true);
        if (indice === ImmaginiCarosello.length-1) {
            setIndice(0);
        } else {
            setIndice(indice+1);
        }

    }

    const precedenteImg = () => {
        setAnimazione(true);
        if (indice === 0) {
            setIndice(ImmaginiCarosello.length-1);
        } else {
            setIndice(indice-1);
        }

    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimazione(false);
        }, 500); // Durata dell'animazione
        return () => clearTimeout(timer);
    }, [indice]);

    return (
        <div className={stile.containerCarosello}>

            <div className={stile.carosello}>
                <img src={ImmaginiCarosello[indice].img}
                  className={`${stile.slide} ${animazione ? stile.slideTransition : ''}`}
                  alt={`Slide ${indice + 1}`}
                />
            </div>

            <div className={stile.carouselNavigation}>
                <button className={stile.prev} onClick={precedenteImg}></button>

                <div className={stile.dots}>

                    {ImmaginiCarosello.map ((dot, index) => {
                        return   <span key= {dot.id} className={(indice === index) ? stile.active : stile.dot } onClick={() => { setAnimazione(true); setIndice(index)}}></span>
                    })}
    
                </div>
                <button className={stile.next} onClick={prossimaImg}></button>
            </div>
        </div>
    )
}

export default Carosello;