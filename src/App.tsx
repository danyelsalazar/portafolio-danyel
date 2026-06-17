import './App.css'
import { Contacto } from './components/Contacto'
import { Habilidades } from './components/Habilidades'
import { Hero } from './components/Hero'
import { MisProyectos } from './components/Proyectos'
import { SobreMi } from './components/SobreMi'

function App() {
  return (
    <>
      <Hero/>
      <MisProyectos/>
      <Habilidades/>
      <SobreMi/>
      <Contacto/>
    </>
  )
}

export default App
