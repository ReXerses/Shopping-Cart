import { useContext } from 'react'
import Carosello from './Carosello'
import Footer from './Footer'
import HomeStyle from '/src/moduli css/Home.module.css'
import { AppContext } from './Navbar'
import { Link } from 'react-router-dom'

function App() {
  const { isMobile, isLogged, setCategoria} = useContext(AppContext);

  return (// trasformare la prima parte in un componente a se.
    <>
      <div className={HomeStyle.nuovaCollezione}>

        <div className={HomeStyle.contenitoreShopNow}>

          <h2>The new collection has just arrived!</h2>
          <Link to='/shop' className={HomeStyle.collezioneLinkShop}>SHOP &nbsp;&nbsp; NOW</Link>

        </div>

        <img className={HomeStyle.imgNuovaCollezione} src={isMobile ? '/media/nuovaCollezione/piccola.jpg' : '/media/nuovaCollezione/grande.jpg'} alt="donna in posa con un abito alla moda" />

      </div>

      <div className={HomeStyle.contenitorelinkSconto}>
        
        {isLogged ? (
          <div className={HomeStyle.linkSconto}>
            <h2 >・❥・ You are eligible to receive 30% off your next purchase! ・❥・</h2>
          </div>
        ) :
          <Link to="/login" className={HomeStyle.linkSconto}>
            <h2>・❥・ Access our website to receive a 30% discount on your next purchase! ・❥・</h2>
          </Link>
        }
        

      </div>

      <Carosello />
      <div className={HomeStyle.contenitoreCategorie}>
        <Link onClick={()=> setCategoria('category/electronics')} to='/shop' className={HomeStyle.linkCategoria}>Electronics</Link>
        <Link onClick={()=> setCategoria('category/jewelery')} to='/shop' className={HomeStyle.linkCategoria}>Jewelery</Link>
        <Link onClick={()=> setCategoria(`category/men's clothing`)} to='/shop' className={HomeStyle.linkCategoria}>Men's clothing</Link>
        <Link onClick={()=> setCategoria(`category/women's clothing`)} to='/shop' className={HomeStyle.linkCategoria}>Women's clothing</Link>
      </div>

      <div className={ isMobile ? HomeStyle.contenitoreNewsAppMobile : HomeStyle.contenitoreNewsApp}>
        <div className={HomeStyle.box1}>
          <h3 className={HomeStyle.h3}>Stay in the loop! Subscribe to our newsletter for the latest updates, exclusive offers, and a front-row seat to all the excitement.</h3>
          <button className={HomeStyle.newsBtn}>SIGN &nbsp; UP</button>
        </div>
        <div className={HomeStyle.box2}>
          <h3 className={HomeStyle.h3}>Download our app now and enjoy exclusive discounts that will make you scream with joy!</h3>
          <div>
          <button className={HomeStyle.android}></button>
          <button className={HomeStyle.apple}></button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
