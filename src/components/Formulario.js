import React, { Fragment, useState } from "react";
import uuid from 'uuid/dist/v4'
const Formulario = ({manejarCitas}) => {
  const [cita, guardarCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });


  const [error, actualizarError]  = useState(false); 
const handlerChange = (e) => {
    
    guardarCita({
        ...cita,
         [e.target.name]: e.target.value 

    })
  };

  let {mascota , propietario ,fecha, hora , sintomas } = cita; 

  const handlerSubmit = (e)=>{

    console.log("estas dando click")
   e.preventDefault();
   
   //validar

   if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
      || hora.trim() === '' || sintomas.trim() === '')
    {

        actualizarError(true);
        return;
    }

    actualizarError(false);
   //crear ID

    cita.id = uuid();

   //modificar cita 
   manejarCitas(cita); 

   //resetear el formulario

   guardarCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  }

  return (
    <Fragment>
      <h2> Crear Cita</h2>

   
       {error ? <p  className="alerta-error">Todos los campos son obligatiorios</p> : null }
      <form
      onSubmit={handlerSubmit}
      >
        <label>Nombre Mascota:</label>
        <input
          type="text"
          placeholder="Nombre Mascota"
          name="mascota"
          className="u-full-width"
          onChange={handlerChange}
          value={mascota}
        />
        <label>Nombre Propietario:</label>
        <input
          type="text"
          placeholder="Nombre Propietario"
          name="propietario"
          className="u-full-width"
          onChange={handlerChange}
          value={propietario}
        />
        <label>Fecha:</label>
        <input
          type="date"
          placeholder="Nombre Mascota"
          name="fecha"
          className="u-full-width"
          onChange={handlerChange}
          value={fecha}
        />
        <label>Hora:</label>
        <input
          type="time"
          placeholder="Nombre Mascota"
          name="hora"
          className="u-full-width"
          onChange={handlerChange}
          value={hora}
        />

        <label>Sintomas:</label>

        <textarea
          type="text"
          className="u-full-width"
          name="sintomas"
          onChange={handlerChange}
          value={sintomas}
          
        ></textarea>

        <button type="submit" className="u-full-width button-primary">Enviar</button>
      </form>
    </Fragment>
  );
};

export default Formulario;
