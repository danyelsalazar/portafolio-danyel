import React from 'react';
import { misHabilidades } from "../data/profileData";
import { SkillCard } from "./SkillCard"; // Importamos el nuevo componente hijo
import "../styles/habilidades.css"; 

const Habilidades: React.FC = () => {
  return (
    <section className="skills-seccion">
      <div className="skills-contenedor">
        
        <h2 className="skills-titulo">
          Mis-habilidades-tecnologias.txt
        </h2>

        <div className="skills-categories-grid">
          {misHabilidades.map((categoria, catIndex) => (
            /* Renderizamos el componente hijo pasándole los datos necesarios */
            <SkillCard 
              key={catIndex}
              titulo={categoria.titulo}
              lista={categoria.lista}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export { Habilidades };
