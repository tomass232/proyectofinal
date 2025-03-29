import React, { useState } from 'react';
import '../styles/Navbar.css'; // Se importan los estilos

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false); // Estado para controlar la visibilidad del dropdown

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible); // Alterna la visibilidad del dropdown
    };

    return (
        <div>
            {/* Encabezado */}
            <header className="header">
                <h1>Bienestar animal by tt</h1>
            </header>

            {/* Barra de navegación */}
            <nav className="navbar">
                <a href="/" className="navItem">Inicio</a>

                {/* Sección de adopción con menú desplegable */}
                <div className="dropdown">
                    <button onClick={toggleDropdown} className="dropbtn">
                        Adopción
                    </button>
                    {dropdownVisible && (
                        <div className="dropdownContent">
                            <a href="/adoptados" className="dropdownItem">Adoptados</a>
                            <a href="/adopcion" className="dropdownItem">Para Adoptar</a>
                            <a href="/poner-en-adopcion" className="dropdownItem">Poner en Adopción</a>
                        </div>
                    )}
                </div>

                {/* Otros enlaces de navegación */}
                <a href="/anuncios" className="navItem">Anuncios</a>
                <a href="/sobre-nosotros" className="navItem">Sobre Nosotros</a>
                <a href="/contacto" className="navItem">Contacto</a>
            </nav>
        </div>
    );
};

export default Navbar; // Se exporta el componente

