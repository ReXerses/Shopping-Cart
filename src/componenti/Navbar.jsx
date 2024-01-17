import React from "react"
import { Link, Outlet, useLocation } from "react-router-dom"
//import NavbarCss from 'src/moduli css/Navbar.module.css'
import styles from '/src/moduli css/Navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    return (
        <div className="paginaIntera">
            <nav className={styles.contenitoreNavbar}>

                    <img src="public/logo.jpeg" alt="logo" className={styles.logo} />

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
        <div className="content">
            <Outlet/>
        </div>
    </div>

    );
}

export default Navbar;