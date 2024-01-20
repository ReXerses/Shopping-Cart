import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
import styles from '/src/moduli css/Navbar.module.css';
import { useState, useEffect } from "react";

const Navbar = () => {
    const location = useLocation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [isMenuOpen, setIsMenuOpen] = useState (false);
    const [isSearchBar, setIsSearchBar] = useState (false);

    const [tornaInizioBtn, setTornaInizioBtn] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 850);
        };

        // Aggiungo un listener per gestire il ridimensionamento della finestra
        window.addEventListener('resize', handleResize);

        // Elimino il listener quando il componente viene smontato
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY;
      
          setTornaInizioBtn(scrollY > 200); // Se il valore dello scroll è maggiore di 200, attivo il button
        };
      
        window.addEventListener('scroll', handleScroll);
      
        // Elimino il listener quando il componente viene smontato
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="paginaIntera">


                {isMobile ? (
                    <nav className={styles.contenitoreNavbarMobile}>
                    
                            <div className={styles.contenitoreButton}>
                                <button className={ isMenuOpen ? styles.menuAperto : styles.menuChiuso} onClick={() => {setIsMenuOpen(!isMenuOpen); setIsSearchBar(false)}}></button>
                                <button className={ styles.searchBar} onClick={() => {setIsSearchBar(!isSearchBar); setIsMenuOpen(false)}}></button>

                                
                                <button className={styles.user}></button>
                                <button className={styles.cart}></button>
                            </div>

                            {isMenuOpen && (
                                <div>
                                    <ul className={styles.menuVisibile}>
                                        <li className={styles.elementoLista}>
                                            <Link to="/" className={(location.pathname === '/') ? styles.selezionato : styles.nonSelezionato}>HOME</Link>
                                        </li>
                                        <li className={styles.elementoLista}>
                                            <Link to="/shop" className={(location.pathname === '/shop') ? styles.selezionato : styles.nonSelezionato}>SHOP</Link>
                                        </li>
                                        <li className={styles.elementoLista}>
                                            <Link to="/ourBrand" className={(location.pathname === '/ourBrand') ? styles.selezionato : styles.nonSelezionato}>BRAND</Link>
                                        </li>
                                    </ul>
                                </div>
                            )}

                            {isSearchBar && (
                                    <form action="" method="get" className={`${styles.form} ${styles.menuVisibile}`}>
                                        <input type="text" name="search" id="search" className={styles.cercaInput}/>
                                        <button type="submit" className={styles.cercaBtn}></button>
                                    </form>
                            )}

                           
                        </nav>

                ) : ( // viewport desktop
                    <nav className={styles.contenitoreNavbar}>
                        <img src="/logo.jpeg" alt="logo" className={styles.logo} />

                        <ul className={styles.contenitoreLink}>
                            <li>
                                <Link to="/" className={(location.pathname === '/') ? styles.selezionato : styles.nonSelezionato}>HOME</Link>
                            </li>
                            <li>
                                <Link to="/shop" className={(location.pathname === '/shop') ? styles.selezionato : styles.nonSelezionato}>SHOP</Link>
                            </li>
                            <li>
                                <Link to="/ourBrand" className={(location.pathname === '/ourBrand') ? styles.selezionato : styles.nonSelezionato}>BRAND</Link>
                            </li>
                        </ul>

                        <div className={styles.contenitoreButton}>
                            <form action="" method="get" className={styles.form}>
                                <input type="text" name="search" id="search" className={styles.cercaInput}/>
                                <button type="submit" className={styles.cercaBtn}></button>
                            </form>

                            <button className={styles.user}></button>
                            <button className={styles.cart}></button>
                        </div>
                    </nav>
                )}


            
        <div className="content">
            <Outlet context={[isMobile]}/>
            {tornaInizioBtn && (
                <button className={styles.tornaSuBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></button>
            )}
        </div>
    </div>

    );
}

export default Navbar;