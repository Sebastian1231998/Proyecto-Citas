import React, {useState,useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'


function App() {

  let citasActuales = JSON.parse(localStorage.getItem('citas'));

  console.log(citasActuales)
  
  if(!citasActuales){
    citasActuales = [];
  }
  const [citas , actualizarCitas] = useState(citasActuales);


  useEffect(()=>{

  
  if(citasActuales){
    citasActuales = localStorage.setItem('citas' , JSON.stringify(citas))
  }else{
    citasActuales = localStorage.setItem('citas' , JSON.stringify([]))
  }

  }, [citas])
  

  const manejarCitas = (cita)=>{

    actualizarCitas([...citas, cita])
  }


  const eliminarCita = (id)=>{

    const citasActualizadas = citas.filter( cita => cita.id !== id);
    actualizarCitas(citasActualizadas);
  }

  let titulo = citas.length == 0 ? 'No hay citas' : 'Citas' ; 
  return (
    <div className="App">
       <h1>Administrador de pacientes</h1>
      
      <div className="container">       
          <div className="row">
              <div className="one-half column">
                <Formulario
                manejarCitas = {manejarCitas}

                 />
              </div>

              <div className="one-half column">


              <h2>{titulo}</h2>
              {citas.map(cita =>

              <Cita 
                   cita={cita}
                   key= {cita.id}
                   eliminarCita = {eliminarCita}
                />
              )}
                </div>
          </div>
     </div>


   </div> 
  );
}

export default App;
