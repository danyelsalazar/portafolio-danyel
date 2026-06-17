# Danyel Salazar | Portfolio Terminal OS v2.1.0

[![Vercel Deployment](https://shields.io)](https://vercel.app)
[![React TypeScript](https://shields.io)](https://react.dev)
[![Style UI](https://shields.io)](#interfaz-y-diseño)

Un portafolio web modular e interactivo de nivel profesional, diseñado bajo la estética de un Entorno de Desarrollo Integrado (IDE) y terminal de comandos Unix. Desarrollado con el ecosistema de React y TypeScript, implementando optimizaciones de hardware para animaciones fluidas y un diseño adaptable a cualquier dispositivo móvil.

---

## Stack Tecnológico

- **Frontend:** React 18 (Componentes Funcionales Modulares)
- **Tipado Estricto:** TypeScript 5 (Interfaces dedicadas, Casteo de propiedades CSS, Eventos nativos)
- **Estilos y UI:** CSS3 Avanzado (Filtros de cristal translúcido, Variables dinámicas, Media Queries avanzadas)
- **Gestión de Formularios:** Formspree API (Transmisión segura de paquetes de datos de contacto a Gmail)
- **Librería de Iconos:** react-icons (Estructura de renderizado dinámico en mapeos)

---

## Arquitectura del Proyecto

El código está estructurado bajo las mejores prácticas de modularidad, separando estrictamente la lógica de renderizado de la base de datos estática:

```text
├── src/
│   ├── components/
│   │   ├── Header.tsx           # Barra de estado del sistema (Navegación dinámica)
│   │   ├── Hero.tsx             # Panel de presentación con luz interactiva y typing effect
│   │   ├── MisProyectos.tsx     # Grid automatizado de proyectos destacados
│   │   ├── Habilidades.tsx     # Contenedor padre de la matriz de habilidades
│   │   ├── SkillCard.tsx        # Componente hijo aislado (Estados de memoria independientes)
│   │   ├── SobreMi.tsx          # Terminal de biografía ejecutando scripts simulados
│   │   └── Contacto.tsx         # Consola de envío de datos del formulario
│   ├── data/
│   │   └── profileData.ts       # Base de datos estática e interfaces de TypeScript
│   └── styles/                  # Hojas de estilo CSS optimizadas por GPU
```

---

## Características Destacadas

### Comunicación React-CSS mediante Hardware (GPU)
El componente `Hero.tsx` captura de forma nativa en React las coordenadas del cursor del usuario mediante un evento `onMouseMove` tipado estrictamente. Estas variables (`--mouse-x`, `--mouse-y`) se inyectan en línea al HTML para que la GPU procese un haz de luz interactivo en tiempo real con un `radial-gradient` difuminado, logrando un rendimiento fluido libre de bloqueos en el hilo principal.

### Encapsulamiento de Estados de Memoria
Para erradicar bugs de propagación (donde al hacer clic en una tarjeta giraban todas), la sección de Habilidades implementa una arquitectura modular. Cada categoría se aisló en una instancia propia (`SkillCard.tsx`), dándole a cada tarjeta un `useState` independiente en memoria, optimizando los re-renders del Virtual DOM de React.

### Hack del Fondo Fijo en Dispositivos Móviles
Se eliminó la propiedad `background-attachment: fixed` del `body` general (la cual provoca saltos desagradables en móviles debido al redimensionamiento dinámico de la barra de URLs) y se trasladó el fondo completo a un pseudoelemento `body::before` configurado con `position: fixed` y la unidad de altura moderna `100lvh`. Esto congela el fondo en un búfer trasero de renderizado, garantizando un scroll vertical impecable en teléfonos móviles.

### Glassmorphism Blindado para Producción (Vercel)
Se aplicaron los filtros `backdrop-filter: blur()` y sus respectivos prefijos WebKit estructurando el orden de compilación de forma estricta (estándar al final de la directiva) y moviendo el efecto cristalino a pseudoelementos internos. Esto evita que los optimizadores de código (minifiers) de Vercel anulen el efecto al procesar animaciones 3D o transformaciones de escala.

---

## Instalación y Uso Local

Para clonar y ejecutar este proyecto en tu entorno local, sigue estos comandos de terminal:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com
   cd tu-repositorio
   ```

2. **Instalar dependencias necesarias (react-icons incluidas):**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo local:**
   ```bash
   npm run dev
   ```

Abre http://localhost:5173 (o el puerto que te asigne Vite) en tu navegador para ver la aplicación ejecutándose.

---

## Licencia y Autoría

Desarrollado y optimizado por **Danyel Salazar**.  
Sujeto a mejoras continuas del sistema.  
*Execute: shutdown -h now*
