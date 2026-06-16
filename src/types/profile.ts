import type { ComponentType } from "react";

export interface LinkContaco {
  label: string;
  url: string;
  icono: ComponentType<{ size?: number; color?: string }>,
}

export interface ProfileHero {
  name: string;
  rol: string;
  description: string;
  photoURL: string;
  links: LinkContaco[];
}

export interface Proyectos {
  id: string;
  titulo: string;
  descripcion: string;
  tecnologias: 
    {
      icono: ComponentType<{ size?: number; color?: string }>,
      label: string;
    }[], //asi acepta multiples objetos, un array de multiples obejtos
  imagenURL: string;
  repositorio?:
    {
      icono: ComponentType<{ size?: number; color?: string }>,
      label: string,
      linkURL: string
    }, //enlace a gitHub
  demoURL?: string; //enlace a la web en vivo, es opcional
}
