import { IconoCV, IconoGitHub, IconoLinkedIn } from "../components/iconos/iconosContacto";
import type { ProfileHero } from "../types/profile";

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
    { label: "GitHub", 
      url: "https://github.com/danyelsalazar", 
      icono: IconoGitHub },
    { label: "CV", 
      url: "https://drive.google.com/file/d/1hQy8qQgRgU_d1SS4stnaHrVKEk94wr-z/view?usp=sharing", 
      icono: IconoCV },
  ],
};
