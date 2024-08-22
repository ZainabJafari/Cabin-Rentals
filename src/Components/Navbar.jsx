import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import navbarLogo from '../assets/navbarLogo.png';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className={`navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <Link to={'/'}><img src={navbarLogo} alt="logo" className='navbar-logo' /></Link> 

            <div className='navbar-link'>
                <ul>
                    <li><Link to={'/'} className='navbar-link-li'>Home</Link></li>
                    <li><Link to={'/cabinlist'} className='navbar-link-li'>Cabins</Link></li>
                    <li><Link to={'/login'}>
                        <svg className='login-logo' xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M20 0C8.95161 0 0 8.95161 0 20C0 31.0484 8.95161 40 20 40C31.0484 40 40 31.0484 40 20C40 8.95161 31.0484 0 20 0ZM20 7.74194C23.9194 7.74194 27.0968 10.9194 27.0968 14.8387C27.0968 18.7581 23.9194 21.9355 20 21.9355C16.0806 21.9355 12.9032 18.7581 12.9032 14.8387C12.9032 10.9194 16.0806 7.74194 20 7.74194ZM20 35.4839C15.2661 35.4839 11.0242 33.3387 8.18548 29.9839C9.70161 27.129 12.6694 25.1613 16.129 25.1613C16.3226 25.1613 16.5161 25.1935 16.7016 25.25C17.75 25.5887 18.8468 25.8065 20 25.8065C21.1532 25.8065 22.2581 25.5887 23.2984 25.25C23.4839 25.1935 23.6774 25.1613 23.871 25.1613C27.3306 25.1613 30.2984 27.129 31.8145 29.9839C28.9758 33.3387 24.7339 35.4839 20 35.4839Z" fill="#CBB26A" />
                        </svg>
                    </Link></li>
                </ul>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="17" viewBox="0 0 23 17" fill="none">
                    <path d="M0 17V14.1667H23V17H0ZM0 9.91667V7.08333H23V9.91667H0ZM0 2.83333V0H23V2.83333H0Z" fill="white" />
                </svg>
            </div>

            <div className={`mobile-menu-links ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-close" onClick={closeMobileMenu}></div>
                <h5 className='meny'>MENY</h5>
                <Link to={'/'} onClick={closeMobileMenu}>Home</Link>
                <Link to={'/cabinlist'} onClick={closeMobileMenu}>Cabins</Link>
                <Link to={'/login'} onClick={closeMobileMenu}>Log in</Link>
            </div>
        </div>
    );
};

export default Navbar;
