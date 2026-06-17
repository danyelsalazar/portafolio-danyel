import React from 'react';
import { miBiografia } from "../data/profileData";
import "../styles/sobreMi.css";

const SobreMi: React.FC = () => {
  return (
    <section className="about-seccion">
      <div className="about-contenedor">
        
        {/* Título de la sección con prompt de consola */}
        <h2 className="about-titulo">
          Sobre-mi.txt
        </h2>

        {/* Tarjeta de Cristal principal */}
        <div className="about-card">
          
          {/* Botones de Control de Ventana Mac */}
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>

          {/* Pestaña del archivo abierto */}
          <div className="window-tab">
            <p className="tab-title">About.sh</p>
          </div>

          {/* Cuerpo del archivo de texto/consola */}
          <div className="about-terminal-body">
            
            <div className="terminal-linea">
              <span className="terminal-prompt">danyel@portfolio:~$</span>
              <p className="terminal-texto color-resaltado">{miBiografia.presentacion}</p>
            </div>

            <div className="terminal-linea">
              <span className="terminal-prompt">danyel@portfolio:~$</span>
              <p className="terminal-texto">{miBiografia.enfoque}</p>
            </div>

            <div className="terminal-linea">
              <span className="terminal-prompt">danyel@portfolio:~$</span>
              <p className="terminal-texto">{miBiografia.trayectoria}</p>
            </div>

            {/* Bloque de datos curiosos estilo Array u Objeto */}
            <div className="terminal-codigo-bloque">
              <span className="comentario-codigo"># Extra facts about me</span>
              <p className="codigo-linea">
                <span className="palabra-clave">const</span> hobbies: string[] = [
              </p>
              {miBiografia.datosCuriosos.map((curiosidad, index) => (
                <p key={index} className="codigo-linea-indentada">
                  "{curiosidad}"{index < miBiografia.datosCuriosos.length - 1 ? ',' : ''}
                </p>
              ))}
              <p className="codigo-linea">];</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export { SobreMi };
