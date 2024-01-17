import { useState } from "react";
import { ImmaginiCarosello } from "./ImmaginiCarosello";
import stile from '/src/moduli css/Carosello.module.css';

const Carosello = () => {
    const [indice , setIndice] = useState(0);

    const prossimaImg = () => {

        if (indice === ImmaginiCarosello.length-1) {
            setIndice(0);
        } else {
            setIndice(indice+1);
        }
    }

    const precedenteImg = () => {
        
        if (indice === 0) {
            setIndice(ImmaginiCarosello.length-1);
        } else {
            setIndice(indice-1);
        }
    }

    return (
        <div className={stile.containerCarosello}>

            <div className={stile.carosello}>
                <img src={ImmaginiCarosello[indice].img}  className={stile.slide}/>
            </div>

            <div className={stile.carouselNavigation}>
                <button className={stile.prev} onClick={precedenteImg}></button>

                <div className={stile.dots}>

                    {ImmaginiCarosello.map ((dot, index) => {
                        return   <span key= {dot.id} className={(indice === index) ? stile.active : stile.dot } onClick={() => setIndice(index)}></span>
                    })}
    
                </div>
                <button className={stile.next} onClick={prossimaImg}></button>
            </div>
        </div>
    )
}

export default Carosello;