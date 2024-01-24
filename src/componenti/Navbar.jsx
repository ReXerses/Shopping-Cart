import React, { createContext } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import styles from '/src/moduli css/Navbar.module.css';
import { useState, useEffect } from "react";

export const AppContext = createContext();

const Navbar = () => {
    const location = useLocation();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 850);
    const [isMenuOpen, setIsMenuOpen] = useState (false);
    const [isSearchBar, setIsSearchBar] = useState (false);
    const [isUserOpen, setIsUserOpen] = useState (false);
    const [isLogged, setIsLogged] = useState(false);

    const [tornaInizioBtn, setTornaInizioBtn] = useState(false);

    const [userName, setUserName] = useState('');
    const [ricerca, setRicerca] = useState('');
    const [categoria, setCategoria] = useState('');

    const Navigate = useNavigate();

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


    const gestisciAperturaMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSearchBar(false);
        setIsUserOpen(false);
    }

    const gestisciAperturaSearchBar = () => {
        setIsSearchBar(!isSearchBar);
        setIsMenuOpen(false);
        setIsUserOpen(false);
    }

    const gestisciAperturaUser = () => {
        setIsUserOpen(!isUserOpen);
        setIsMenuOpen(false);
        setIsSearchBar(false);
    }

    const gestisciSubmit = (event) => {
        console.log(event)
        event.preventDefault(); // Impedisce il comportamento predefinito del form (ricarica la pagina)
        setCategoria('');
        setRicerca(event.target[0].value);
        Navigate('/shop');
    };

    return (
        <AppContext.Provider value={{ isMobile, isLogged, ricerca, categoria, setIsLogged, setUserName, setRicerca, setCategoria }}>
        <div className="paginaIntera">


                {isMobile ? (
                    <nav className={styles.contenitoreNavbarMobile}>
                    
                            <div className={styles.contenitoreButton}>
                                <button className={ isMenuOpen ? styles.menuAperto : styles.menuChiuso} onClick={gestisciAperturaMenu}></button>
                                <button className={ styles.searchBar} onClick={gestisciAperturaSearchBar}></button>

                                <div>
                                    <button className={styles.user} onClick={() => (isLogged) ? gestisciAperturaUser() : Navigate('/login')}></button>
                                    {isUserOpen && (
                                            <div className={`${styles.form} ${styles.userMenuMobile}`}>
                                                <ul className={styles.ulUser}>
                                                    <li className={styles.liName}>Hello <span style={{ color: '#ffef5e' }}>{userName}</span>,</li>
                                                    <li className={styles.liUserMenu}>Your Profile</li>
                                                    <li className={styles.liUserMenu}>Settings</li>
                                                    <li className={styles.liUserMenu}>Privacy</li>
                                                    <li className={styles.liUserMenu}><button className={styles.liBtn} onClick={() => {setIsLogged(!isLogged); setIsUserOpen(false)}}>Logout</button></li>
                                                </ul>
                                            </div>
                                        )}
                                </div>

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
                                    <form action="" method="get" className={`${styles.form} ${styles.menuVisibile}`} onSubmit={gestisciSubmit}>
                                        <input type="text" name="search" id="search" className={styles.cercaInput} placeholder="backpack" autoComplete="off"/>
                                        <button  className={styles.cercaBtn}></button>
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
                            <form action="" method="get" className={styles.form} onSubmit={gestisciSubmit}>
                                <input type="text" name="search" id="search" className={styles.cercaInput} required placeholder="backpack" autoComplete="off"/>
                                <button  className={styles.cercaBtn} ></button>
                            </form>

                            <div>
                                    <button className={styles.user} onClick={() => (isLogged) ? gestisciAperturaUser() : Navigate('/login')}></button>

                                    {isUserOpen && (
                                            <div className={`${styles.form} ${styles.userMenuMobile}`}>
                                                <ul className={styles.ulUser}>
                                                    <li className={styles.liName}>Hello <span style={{ color: '#ffef5e' }}>{userName}</span>,</li>
                                                    <li className={styles.liUserMenu}>Your Profile</li>
                                                    <li className={styles.liUserMenu}>Settings</li>
                                                    <li className={styles.liUserMenu}>Privacy</li>
                                                    <li className={styles.liUserMenu}><button className={styles.liBtn} onClick={() => {setIsLogged(!isLogged); setIsUserOpen(false)}}>Logout</button></li>
                                                </ul>
                                            </div>
                                    )}
                            </div>

                            <button className={styles.cart}></button>
                        </div>
                        
                    </nav>
                )}


            
        <div className="content">
            <Outlet />
            {tornaInizioBtn && (
                <button className={styles.tornaSuBtn} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}></button>
            )}
        </div>
    </div>
    </AppContext.Provider>

    );
}

export default Navbar;