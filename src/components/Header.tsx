import React, { useState, useEffect } from 'react';
import "../styles/header.css";

const Header: React.FC = () => {
  // Estado para activar la animación al hacer scroll
  const [scrolled, setScrolled] = useState(false);
  // Estado para abrir/cerrar el menú en móviles
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Si el usuario baja más de 20 píxeles, activa el modo compacto con neón
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-contenedor">
        
        {/* Logo / Prompt izquierdo */}
        <div className="navbar-logo">
          <span className="logo-prompt">danyel@sys:~$</span>
          <span className="logo-texto">./init</span>
        </div>

        {/* Botón de Menú para Celulares (Hamburguesa Táctica) */}
        <button 
          className={`navbar-toggle ${menuOpen ? 'toggle-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span className="linea-b"></span>
          <span className="linea-b"></span>
          <span className="linea-b"></span>
        </button>

        {/* Enlaces de Navegación */}
        <nav className={`navbar-links ${menuOpen ? 'menu-visible' : ''}`}>
          <a href="#home" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-index">01.</span> Home
          </a>
          <a href="#proyectos" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-index">02.</span> Proyectos
          </a>
          <a href="#habilidades" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-index">03.</span> Habilidades
          </a>
          <a href="#sobre-mi" className="nav-item" onClick={() => setMenuOpen(false)}>
            <span className="nav-index">04.</span> Sobre_Mí
          </a>
          <a href="#contacto" className="nav-item nav-btn-contacto" onClick={() => setMenuOpen(false)}>
            contacto()
          </a>
        </nav>

      </div>
    </header>
  );
};

export { Header };
