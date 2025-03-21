import React, { useState } from 'react';
import '../styles/Navbar.css';  // Esto si el CSS está en la carpeta `styles` fuera de la carpeta `components`

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <div>
            <header className="header">
                <h1>Bienestar animal by tt</h1>
            </header>

            <nav className="navbar">
                <a href="/" className="navItem">Inicio</a>
                <div className="dropdown">
                    <button
                        onClick={toggleDropdown}
                        className="dropbtn"
                    >
                        Adopción
                    </button>
                    {dropdownVisible == true && (
                        <div className="dropdownContent">
                            <a href="/adoptados" className="dropdownItem">Adoptados</a>
                            <a href="/adopcion" className="dropdownItem">Para Adoptar</a>
                            <a href="/poner-en-adopcion" className="dropdownItem">Poner en Adopción</a>
                        </div>
                    )}
                </div>
                <a href="/anuncios" className="navItem">Anuncios</a>
                <a href="/sobre-nosotros" className="navItem">Sobre Nosotros</a>
                <a href="/contacto" className="navItem">Contacto</a>
            </nav>
        </div>
    );
};

export default Navbar;
