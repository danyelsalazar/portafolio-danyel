import React from 'react';
import "../styles/footer.css";

const Footer: React.FC = () => {
  // Obtenemos el año actual de forma dinámica
  const anioActual = new Date().getFullYear();

  return (
    <footer className="footer-sistema">
      <div className="footer-contenedor">
        
        {/* Bloque Izquierdo: Copyright e información de compilación */}
        <div className="footer-logs">
          <p className="log-linea">
            <span className="log-tag tag-info">[INFO]</span> © {anioActual} Danyel Salazar. Todos los derechos reservados
          </p>
          <p className="log-linea">
            <span className="log-tag tag-success">[SUCCESS]</span> Creado con React + TypeScript + CSS.
          </p>
        </div>

        {/* Bloque Derecho: Versión simulada del Portafolio */}
        <div className="footer-version">
          <p className="version-texto">
            System_Version: <span className="color-resaltado-v">v2.1.0-stable</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export { Footer };
