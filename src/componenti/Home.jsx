import { useState } from 'react'
import Carosello from './Carosello'
import Footer from './Footer'
import HomeStyle from '/src/moduli css/Home.module.css'
import { Link } from 'react-router-dom'
function App() {


  return (
    <>
      <Carosello />
      <Link to="/login" className={HomeStyle.linkSconto}>
        <h2>Accedi al nostro sito per ricevere il 30% di sconto sul tuo prossimo acquisto!</h2>
      </Link>
      <div className={HomeStyle.collezione}>
        <img src="src/media/cortina.jpeg" alt="collezione inverno- cortina" className={HomeStyle.imgCollezione}/>
        <h3 className={HomeStyle.sloganCollezione}>Nuova collezione in mostra a Cortina</h3>
      </div>
      <Footer />
    </>
  )
}

export default App
