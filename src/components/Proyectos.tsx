import { misProyectos } from "../data/profileData";
import "../styles/misProyectos.css"; // Importación de tus nuevos estilos

const MisProyectos = () => {
  return (
    <section className="proyectos-seccion">
      <div className="proyectos-contenedor">
        <h2 className="proyectos-titulo">Mis-Proyectos.md</h2>

        <div className="proyectos-grid">
          {misProyectos.map((proyecto) => {
            const RepoIcono = proyecto.repositorio?.icono;

            return (
              <div key={proyecto.id} className="proyecto-tarjeta">
                {/* Imagen */}
                <div className="proyecto-imagen-contenedor">
                  <img
                    src={proyecto.imagenURL}
                    alt={proyecto.titulo}
                    className="proyecto-imagen"
                  />
                </div>

                {/* Contenido */}
                <div className="proyecto-contenido">
                  <h3 className="proyecto-nombre">{proyecto.titulo}</h3>

                  <p className="proyecto-descripcion">{proyecto.descripcion}</p>

                  {/* Tecnologías */}
                  <div className="proyecto-tecnologias-seccion">
                    <h4 className="proyecto-tecnologias-titulo">Tecnologías</h4>
                    <div className="proyecto-tecnologias-lista">
                      {proyecto.tecnologias.map((tech, index) => {
                        const TechIcono = tech.icono;
                        return (
                          <div
                            key={index}
                            className="proyecto-tecnologia-item"
                            title={tech.label}
                          >
                            <TechIcono size={22} color="#DAF1DE" />
                            <span className="proyecto-tecnologia-texto">
                              {tech.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enlaces (Repo único y Demo condicional) */}
                  <div className="proyecto-enlaces">
                    {proyecto.repositorio &&
                      (() => {
                        // Asignamos el icono a una variable local en Mayúscula
                        const IconoComponente = RepoIcono;

                        // Si es undefined, no renderizamos el enlace (o renderizamos solo el texto)
                        if (!IconoComponente) {
                          return (
                            <a
                              href={proyecto.repositorio.linkURL}
                              target="_blank"
                              rel="noreferrer"
                              className="proyecto-enlace btn enlace-repo"
                            >
                              {proyecto.repositorio.label}
                            </a>
                          );
                        }

                        // 3. Si existe, renderizamos el componente con seguridad
                        return (
                          <a
                            href={proyecto.repositorio.linkURL}
                            target="_blank"
                            rel="noreferrer"
                            className="proyecto-enlace btn enlace-repo"
                          >
                            <IconoComponente size={18} color="#DAF1DE" />
                            {proyecto.repositorio.label}
                          </a>
                        );
                      })()}

                    {proyecto.demoURL && (
                      <a
                        href={proyecto.demoURL}
                        target="_blank"
                        rel="noreferrer"
                        className="proyecto-enlace btn"
                      >
                        Demo en Vivo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { MisProyectos };
