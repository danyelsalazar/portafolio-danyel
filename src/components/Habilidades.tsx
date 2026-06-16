import React, { useState } from 'react';
import { misHabilidades } from "../data/profileData";
import "../styles/habilidades.css"; 

const Habilidades: React.FC = () => {
  //El estado guarda un número (el índice) o null si ninguna está girada
  const [tarjetaGiradaIndex, setTarjetaGiradaIndex] = useState<number | null>(null);

  const handleClickCard = (index: number) => {
    // Si  se hace clic en la que ya está girada, la cerramos (null). Si no, guardamos su índice.
    setTarjetaGiradaIndex(tarjetaGiradaIndex === index ? null : index);
  };

  return (
    <section className="skills-seccion">
      <div className="skills-contenedor">
        
        <h2 className="skills-titulo">
          Skills Matrix / Inventory
        </h2>

        <div className="skills-categories-grid">
          {misHabilidades.map((categoria, catIndex) => (
            <div 
              key={catIndex} 
              /* Compara si este 'catIndex' es igual al guardado en el estado */
              className={`skills-card-categoria ${tarjetaGiradaIndex === catIndex ? "giro-card" : ""}`}
              /* Le pasamos el índice de la tarjeta actual a la función */
              onClick={() => handleClickCard(catIndex)}
            >
              
              <h3 className="skills-category-title">
                {categoria.titulo}
              </h3>

              <div className="skills-items-list">
                {categoria.lista.map((skill, skillIndex) => {
                  const SkillIcono = skill.icono;
                  return (
                    <div key={skillIndex} className="skill-item">
                      <div className="skill-icon-wrapper">
                        <SkillIcono size={26} color="var(--color-btn)" />
                      </div>
                      <span className="skill-name">{skill.label}</span>
                    </div>
                  );
                })}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export { Habilidades };
