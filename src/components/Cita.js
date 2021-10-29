import React, { Fragment } from "react";

const Cita = ({ cita , eliminarCita}) => {
  let { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <Fragment>

   <div className="cita">
      <p>  Mascota: <span>{mascota}</span> </p>
      <p>  Propietario: <span>{propietario}</span></p>
      <p>  Fecha: <span>{fecha}</span></p>
      <p>  Hora: <span>{hora}</span></p>
      <p>  Sintomas: <span>{sintomas}</span></p>

      <button type="button" 
      className="button eliminar u-full-width" onClick={ ()=> { eliminarCita(cita.id) }}> Eliminar  &times; </button>
         </div>
    </Fragment>
 
  );
};

export default Cita;
