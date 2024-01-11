import React from "react"
import { Link, useLocation } from "react-router-dom"
//import NavbarCss from 'src/moduli css/Navbar.module.css'
import styles from '/src/moduli css/Navbar.module.css';

const Navbar = () => {
    const location = useLocation();
    return (
        <nav className={styles.contenitoreNavbar}>
            <div className={styles.titolo}>
                <h1>nome brand</h1>
            </div>

            <div className={styles.secondaRiga}>
                <ul className={styles.contenitoreLink}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/shop" className={(location.pathname === '/shop') ? styles.selezionato : styles.nonSelezionato}>Shop</Link>
                    </li>
                    <li>
                        <span>Our Brand</span>
                    </li>
                </ul>

                <div className={styles.contenitoreButton}>
                    <form action="" method="get">
                        <input type="text" name="search" id="search" />
                        <button type="submit"></button>
                    </form>

                    <button className="User"></button>
                    <button className="Cart"></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;