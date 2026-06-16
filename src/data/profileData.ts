import {
  IconoCV,
  IconoExpress,
  IconoGitHub,
  IconoLinkedIn,
  IconoNodeJS,
} from "../components/iconos/iconosContacto";
import type { ProfileHero, Proyectos } from "../types/profile";

// informacion para el hero
export const miPerfil: ProfileHero = {
  name: "DANYEL SALAZAR",
  rol: "Desarrollador Web FullStack",
  description:
    "Full Stack Developer (MERN) | Developer en ForIT | Estudiante de Lic. en Informática",
  photoURL: "/perfil-2.jpg",
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/danyel-salazar-81a189232/",
      icono: IconoLinkedIn,
    },
    {
      label: "GitHub",
      url: "https://github.com/danyelsalazar",
      icono: IconoGitHub,
    },
    {
      label: "CV",
      url: "https://drive.google.com/file/d/1hQy8qQgRgU_d1SS4stnaHrVKEk94wr-z/view?usp=sharing",
      icono: IconoCV,
    },
  ],
};

// informacion para mis proyectos
export const misProyectos: Proyectos[] = [
  {
    id: "1",
    titulo: "E-Commerce MERN",
    descripcion:
      "Plataforma de comercio electrónico con pasarela de pagos, autenticación JWT y panel de administración dinámico.",
    tecnologias: [
      {
        icono: IconoExpress,
        label: "Express",
      },
      {
        icono: IconoNodeJS,
        label: "NodeJS",
      },
    ],
    imagenURL: "/proyecto-2.avif", 
    repositorio: {
      icono: IconoGitHub,
      label: "Repositorio",
      linkURL: "github.com",
    },
    demoURL: "https://vercel.app",
  },
  {
    id: "2",
    titulo: "Task Manager API",
    descripcion:
      "API RESTful avanzada para la gestión de proyectos de equipos con sockets en tiempo real y arquitectura limpia.",
    tecnologias: [
      {
        icono: IconoExpress,
        label: "Express",
      },
      {
        icono: IconoNodeJS,
        label: "NodeJS",
      },
    ],
    imagenURL: "/proyecto-1.avif",
    repositorio: {
      icono: IconoGitHub,
      label: "Repositorio",
      linkURL: "github.com",
    },
  },
];
