import React, { useState } from 'react';
import type { SkillCategory } from '../types/profile';


export const SkillCard: React.FC<SkillCategory> = ({ titulo, lista }) => {
  // Cada tarjeta tiene su propio estado totalmente aislado e independiente
  const [giro, setGiro] = useState(false);

  const handleClickCard = () => {
    setGiro(!giro);
  };

  return (
    <div 
      className={`skills-card-categoria ${giro ? "giro-card" : ""}`}
      onClick={handleClickCard}
    >
      {/* Encabezado de la sub-ventana */}
      <h3 className="skills-category-title">{titulo}</h3>

      {/* Lista interna de tecnologías */}
      <div className="skills-items-list">
        {lista.map((skill, skillIndex) => {
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
  );
};
