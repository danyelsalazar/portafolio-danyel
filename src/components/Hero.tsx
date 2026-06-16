import React, { useState } from "react";
import { miPerfil } from "../data/profileData";
import "../styles/hero.css";

const Hero: React.FC = () => {
  // Tipamos el estado como un objeto con coordenadas numéricas exactas
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Tipamos el evento de forma nativa con React.MouseEvent vinculado a un HTMLDivElement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });
  };

  return (
    <div
      className="container-home"
      onMouseMove={handleMouseMove}
      /* Casteamos el objeto style como React.CSSProperties para que acepte variables personalizadas sin quejarse */
      style={
        {
          "--mouse-x": `${coords.x}px`,
          "--mouse-y": `${coords.y}px`,
        } as React.CSSProperties
      }
    >
      {/* Botones de Control de Ventana */}
      <div className="window-controls">
        <span className="control close"></span>
        <span className="control minimize"></span>
        <span className="control maximize"></span>
      </div>
      {/* Simula nombre de archivo */}
      <div className="window-tab">
        <p className="tab-title">Hero.tsx</p>
      </div>

      {/* Bloque Izquierdo: Información y Textos */}
      <div className="section-profile">
        <h1 className="name-profile">{miPerfil.name}</h1>
        <p className="description-profile">{miPerfil.description}</p>

        {/* Indicador de Estado en Vivo */}
        <div className="status-badge">
          <span className="ping-circle"></span>
          <p>Available for work</p>
        </div>

        <div className="links-contacto">
          {miPerfil.links.map((contact) => {
            const IconoComponente = contact.icono;

            return (
              <a
                href={contact.url}
                target="_blank"
                rel="noopener noreferrer"
                key={contact.label}
                className="link btn-contacts-profile"
              >
                <IconoComponente size={28} color="#051f20" />
                {contact.label}
              </a>
            );
          })}
        </div>

        {/* Etiquetas de Tecnologías */}
        <div className="tech-tags">
          <span className="tag">MongoDB</span>
          <span className="tag">Express</span>
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
        </div>
      </div>

      {/* Bloque Derecho: Fotografía de Perfil */}
      <div className="section-profile">
        <div className="container-photo-profile">
          <img
            src={miPerfil.photoURL}
            alt={`${miPerfil.name}, developer`}
            className="img-profile"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
