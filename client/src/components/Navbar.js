import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/Navbar.css';

export const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleClick = () => setMenuActive(!menuActive);
    const closeMenu = () => setMenuActive(false);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                {/* Title */}
                <div>
                    <Link to='/' className='navbar-logo'>
                        pgCOVAPI <i className='fas fa-viruses'/>
                    </Link>
                </div>
                

                {/* Hamburger Menu Icon */}
                <div className='menu-icon' onClick={handleClick}>
                    <p>MENU</p><i className={menuActive ? 'fas fa-times' : 'fas fa-bars'}/>
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
                </ul>
            </div>
        </nav>
    )
}
