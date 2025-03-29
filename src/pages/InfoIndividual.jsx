import React, { useEffect, useState } from 'react' // Se importan React y los hooks
import { getInfo } from '../services/llamados'; // Se importa la función para obtener datos
import "../styles/Infoindividual.css"; // Se importan los estilos
import Navbar from '../components/Navbar'; // Se importa la barra de navegación

function InfoIndividual() {
  const [adopcion, setAdopcion] = useState([]); // Estado inicializado como un arreglo vacío

  useEffect(() => {
    async function traerAdopcion() {
      const datos = await getInfo("adopciones", localStorage.getItem("idAdopt")) // Se obtiene la información de la adopción
      setAdopcion(datos) // Se actualiza el estado
      console.log(adopcion); // Se muestra en consola
    }
    traerAdopcion()
  }, []) // Se ejecuta solo al montar el componente

  return (
    <>
      <Navbar /> {/* Se muestra la barra de navegación */}
      <div>
        <section className='cont-foto'> 
          <img src={adopcion.fotoMascota} alt="Foto de la mascota" className='img-foto' />
          <p className='txt-foto'>{adopcion.nombreMascota}</p>
        </section>
        <div className='cont-otraInfo'>
          <h3>Otra información</h3>
          <ul>
            <li>Tiene {adopcion.edadMascota}</li>
            <li>Es un {adopcion.razaMascota}</li>
            <li>Vacunas al día: {adopcion.vacunasAlDia}</li>
            <li>Está castrado: {adopcion.castrado}</li>
            <li>Es {adopcion.sexo}</li>
          </ul>
        </div>
        <section className='cont-descripcion'>
          <article>
            <p>{adopcion.descripcionMascota}</p>
          </article>
        </section>
      </div>
    </>
  )
}

export default InfoIndividual; // Se exporta el componente
