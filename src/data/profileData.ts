import { DiMongodb, DiReact, DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiHtml5,
  SiCss,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
  SiPostgresql
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import {
  IconoCV,
  IconoExpress,
  IconoGitHub,
  IconoLinkedIn,
  IconoNodeJS,
} from "../components/iconos/iconosContacto";
import type { ProfileHero, Proyectos, SkillCategory } from "../types/profile";

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
    titulo: "Recognitions-app",
    descripcion:
      "Desarrollo de “recognitions-app”, plataforma interna de reconocimiento entre pares y evaluaciones 180°, con un equipo fullstack.",
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
    imagenURL: "/proyecto-reconocimientos-app.png",
    demoURL: "https://recognitions.forit.ar/",
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

// mis habilidades / tecnologias que manejo
export const misHabilidades: SkillCategory[] = [
  {
    titulo: "Frontend Stack",
    lista: [
      { label: "React", icono: DiReact },
      { label: "TypeScript", icono: BiCodeAlt },
      { label: "HTML5", icono: SiHtml5 },
      { label: "CSS3", icono: SiCss },
    ],
  },
  {
    titulo: "Backend & Base de Datos",
    lista: [
      { label: "Node.js", icono: DiNodejs },
      { label: "Express", icono: SiExpress },
      { label: "MongoDB", icono: DiMongodb },
      { label: "Postgresql", icono: SiPostgresql}
    ],
  },
  {
    titulo: "Herramientas & Despliegue",
    lista: [
      { label: "Git & GitHub", icono: SiGit },
      { label: "Postman", icono: SiPostman },
      { label: "Vercel", icono: SiVercel },
      {label: "Render", icono: SiRender}
    ],
  },
];
