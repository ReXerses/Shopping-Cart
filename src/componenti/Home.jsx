import { useState } from 'react'
import Carosello from './Carosello'
import Footer from './Footer'
import HomeStyle from '/src/moduli css/Home.module.css'
import { Link } from 'react-router-dom'

function App({isMobile}) {


  return (// trasformare la prima parte in un componente a se.
    <>
      <div className={HomeStyle.nuovaCollezione}>

        <div className={HomeStyle.contenitoreShopNow}>

          <h2>The new collection has just arrived!</h2>
          <Link to='/shop' className={HomeStyle.collezioneLinkShop}>SHOP &nbsp;&nbsp; NOW</Link>

        </div>

        <img className={HomeStyle.imgNuovaCollezione} src={isMobile ? '/src/media/nuovaCollezione/piccola.jpg' : '/src/media/nuovaCollezione/grande.jpg'} alt="donna in posa con un abito alla moda" />

      </div>

      <div className={HomeStyle.contenitorelinkSconto}>
        
        <Link to="/login" className={HomeStyle.linkSconto}>
          <h2>Access our website to receive a 30% discount on your next purchase!</h2>
        </Link>

      </div>

      <Carosello />
      <div className={HomeStyle.contenitoreCategorie}>
        <Link to='/shop' className={HomeStyle.linkCategoria}>Electronics</Link>
        <Link to='/shop' className={HomeStyle.linkCategoria}>Jewelery</Link>
        <Link to='/shop' className={HomeStyle.linkCategoria}>Men's clothing</Link>
        <Link to='/shop' className={HomeStyle.linkCategoria}>Women's clothing</Link>
      </div>

      <Footer />
    </>
  )
}

export default App
