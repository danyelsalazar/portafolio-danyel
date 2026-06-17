import "./App.css";
import { Contacto } from "./components/Contacto";
import { Footer } from "./components/Footer";
import { Habilidades } from "./components/Habilidades";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MisProyectos } from "./components/Proyectos";
import { SobreMi } from "./components/SobreMi";

function App() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <MisProyectos />
        <Habilidades />
        <SobreMi />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

export default App;
