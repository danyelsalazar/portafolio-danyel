import React, { useState } from 'react';
import "../styles/contacto.css"; // Importación de los estilos

const Contacto: React.FC = () => {
  // Estados para controlar visualmente el formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  return (
    <section className="contacto-seccion" id='contacto'>
        {/* Título de la sección con prompt de terminal */}
        <h2 className="contacto-titulo">
          Contacto.exe
        </h2>
      <div className="contacto-contenedor">
        

        {/* Tarjeta de Cristal del Formulario */}
        <div className="contacto-card">
          
          {/* Botones de Control Mac */}
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>

          {/* Pestaña del Archivo */}
          <div className="window-tab">
            <p className="tab-title">contact_form.io</p>
          </div>

          {/* Formulario conectado a Formspree */}
          <form 
            action="https://formspree.io/f/meewdwob"
            method="POST"
            className="contacto-formulario"
          >
            
            <div className="terminal-log-info">
              <span className="comentario-codigo"># Estableciendo conexión segura con danygasia2@gmail.com...</span>
              <span className="comentario-success">Status: READY_TO_TRANSMIT</span>
            </div>

            {/* Input: Nombre */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <span className="label-prompt">{`>`}</span> const sender_name =
              </label>
              <input 
                type="text" 
                id="name"
                name="name" 
                required
                placeholder='"Tu nombre o empresa"'
                className="form-input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            {/* Input: Correo */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <span className="label-prompt">{`>`}</span> const sender_email =
              </label>
              <input 
                type="email" 
                id="email"
                name="email" 
                required
                placeholder='"tu-correo@empresa.com"'
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Input: Mensaje */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <span className="label-prompt">{`>`}</span> const message_payload =
              </label>
              <textarea 
                id="message"
                name="message" 
                required
                rows={5}
                placeholder='`Escribe tu propuesta o mensaje aquí...`'
                className="form-input form-textarea"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>

            {/* Botón de Envío Estilo Consola */}
            <button type="submit" className="form-submit-btn">
              transmit_data()
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export { Contacto };
