import { DiMongodb, DiReact, DiNodejs } from "react-icons/di";
import {
  SiExpress,
  SiHtml5,
  SiCss,
  SiGit,
  SiPostman,
  SiVercel,
  SiRender,
  SiPostgresql,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiPrisma,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import {
  IconoCV,
  IconoExpress,
  IconoGitHub,
  IconoLinkedIn,
  IconoNodeJS,
  IconoReact,
} from "../components/iconos/iconosContacto";
import type { ProfileHero, Proyectos, SkillCategory, Biografia } from "../types/profile";

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
    titulo: "Recognitions-app (Desarrollo colaborativo)",
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
      {
        icono: SiReact,
        label: "React",
      },
      {
        icono: SiPostgresql,
        label: "Postgresql",
      },
      {
        icono: SiPrisma,
        label: "Prisma",
      },
      {
        icono: SiDocker,
        label: "Docker",
      },
      {
        icono: SiNextdotjs,
        label: "NextJS",
      },
      {
        icono: SiTailwindcss,
        label: "Tailwindcss",
      }
    ],
    imagenURL: "/proyecto-reconocimientos-app.png",
    demoURL: "https://recognitions.forit.ar/",
  },
  {
    id: "2",
    titulo: "Info-Track",
    descripcion:
      "Aplicación web de gestión universitaria para la UNO. Permite el seguimiento del avance académico del estudiante, cálculo dinámico de materias habilitadas por correlativas, alertas de vencimiento de regularidad y un sistema de valoraciones para el cuerpo docente.",
    tecnologias: [
      {
        icono: IconoExpress,
        label: "Express",
      },
      {
        icono: IconoNodeJS,
        label: "NodeJS",
      },
       {
        icono: IconoReact,
        label: "React",
      },
      {
        icono: SiGraphql,
        label: "Graphql",
      },
      {
        icono: SiTypescript,
        label:"TypeScript"
      },
      {
        icono: SiJavascript,
        label:"JavaScript"
      },
      {
        icono: SiCss,
        label: "CSS",
      }
    ],
    imagenURL: "/proyecto-info-track.png",
    repositorio: {
      icono: IconoGitHub,
      label: "Repositorio",
      linkURL: "https://github.com/danyelsalazar/frontend-info-track-UNO.git",
    },
    demoURL: "https://frontend-info-track-46usp0k4t-danyelsalazars-projects.vercel.app/",
  },
  {
    id: "3",
    titulo: "Task",
    descripcion:
      "Aplicación integral para la gestión de tareas con persistencia de datos Creación, edición, filtrado por estado y búsqueda en tiempo real, (esperar unos segundos al entrar para que se active el server)",
    tecnologias: [
      {
        icono: IconoExpress,
        label: "Express",
      },
      {
        icono: IconoNodeJS,
        label: "NodeJS",
      },
       {
        icono: IconoReact,
        label: "React",
      },
      {
        icono: SiJavascript,
        label:"JavaScript"
      },
      {
        icono: SiCss,
        label: "CSS",
      },
      {
        icono: SiMysql,
        label: "Mysql"
      }
    ],
    imagenURL: "/proyecto-task.png",
    repositorio: {
      icono: IconoGitHub,
      label: "Repositorio",
      linkURL: "https://github.com/danyelsalazar/forit-challenge-task.git",
    },
    demoURL: "https://forit-challenge-task.vercel.app/",
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

// biografia
export const miBiografia: Biografia = {
  presentacion: "Soy un desarrollador Full Stack apasionado por construir soluciones web eficientes y escalables utilizando el ecosistema MERN.",
  enfoque: "Mi enfoque actual está centrado en la optimización del rendimiento frontend mediante React y TypeScript, combinándolo con arquitecturas backend limpias y robustas.",
  trayectoria: "Estudiante avanzado de Licenciatura en Informática | Diplomatura en desarrollo web FullStack | Tecnicatura en tecnologias Web, lo que me brinda una sólida base teórica en algoritmos, estructuras de datos y metodologías ágiles.",
  datosCuriosos: [
    "Prefiero el modo oscuro en absolutamente todo.",
    "Bebo café negro como combustible para resolver bugs.",
    "Me encanta desarmar código de otros para entender cómo funciona la ingeniería detrás."
  ]
};
