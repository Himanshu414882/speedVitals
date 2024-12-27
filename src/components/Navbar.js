import React from 'react';
import './Navbar.css'; // Add CSS for styling
import logo from './logo.png';

const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="navbar-logo">
                {/* Logo can be placed in public folder or use import statement if inside src */}
                <img src={logo} alt="Logo" className="logo" />
            </div>
           
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Performance Test</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
