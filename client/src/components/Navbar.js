import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css';

export const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);
    /**
     * @return Ritorna la navbar dell'applicazione. La navbar contiene:
     *              - Il logo
     *              - Il titolo
     *              - I bottoni per la navigazione:
     *                  I. Home => Cliccandolo visualizza la home dell'applicazione
     *                  II. Documentazione API => Cliccandolo porta alla documentazione Swagger della API
     *                  III. Grafici => Cliccandolo visualizza il grafico dei dati.
     */
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Title */}
                <div>
                    <Link to='/' className='navbar-logo'>
                        pgCOVAPI <i className='fas fa-viruses' />
                    </Link>
                </div>


                {/* Hamburger Menu Icon */}
                <div className='menu-icon' onClick={handleClick}>
                    <i className={menuActive ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                {/* Nav items */}
                <ul className={menuActive ? 'nav-menu active' : 'nav-menu'} onClick={closeMenu}>
                    <li className='menu-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>Home</Link>
                    </li>

                    <li className='menu-item'>
                        <a className='nav-links' href='https://ijn-shalma.github.io/pgCOVAPI/' target='_blank' rel='noreferrer'>Documentazione API</a>
                    </li>

                    <li className='menu-item'>
                        <Link className='nav-links' to='/grafici' onClick={closeMenu}>Grafici</Link>
                    </li>

                    <li className='menu-item'>
                        <Link className='nav-links' to='/mappa' onClick={closeMenu}>Mappa</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
