import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { deleteData, getInfo,patchData } from '../services/llamados'
import Cards from '../components/Cards'
import { useNavigate } from 'react-router-dom'
import "../styles/Adopcion.css"
function Adopcion() {
  const [adopciones, setAdopciones] = useState([])
  const [recarga, setRecarga] = useState(false)
  const [nombreMascota, setNombreMascota] = useState("")
  const [edadMascota, setEdadMascota] = useState("")
  const [razaMascota, setRazaMascota] = useState("")
  const [vacunasAlDia, setVacunasAlDia] = useState(false)
  const [castrado, setCastrado] = useState(false)
  const [sexo, setSexo] = useState("")
  const [mostrar, setMostrar] = useState(false)
  const [descripcionMascota, setDescripcionMascota] = useState("")
  const navigate = useNavigate()

  async function eliminarAdopcion(id) {
    await deleteData("adopciones", id)
    setRecarga(!recarga)
  }


  function editarAdopcion(id) {
    localStorage.setItem("idMascota",id)
    setMostrar(!mostrar)
  }
  async function enviarEdicion(id) {
    const mascota = {
      nombreMascota: nombreMascota,
      edadMascota: edadMascota,
      razaMascota: razaMascota,
      vacunasAlDia: vacunasAlDia ? "Sí" : "No",
      castrado: castrado ? "Sí" : "No",
      sexo: sexo,
      adoptado: false,
      descripcionMascota: descripcionMascota
    }
    await patchData(mascota, "adopciones",id)
  }
    useEffect(() => {
      async function traerAdopciones() {
        const listaAdopciones = await getInfo("adopciones")
        setAdopciones(listaAdopciones)
      }
      traerAdopciones()
    }, [recarga])

    function enter(id) {
      navigate('/infoIndividual')
      localStorage.setItem("idAdopt",id)
  }
    return (
      <>
        <header>
          <Navbar />
        </header>

        <main>
          <div className='listaMascotas' >
            {adopciones.map((adopt) => {
              return (
                <Cards
                  key={adopt.id}
                  nombre={adopt.nombreMascota}
                  img={adopt.fotoMascota}
                  raza={adopt.razaMascota}
                  castrado={adopt.castrado}
                  sexo={adopt.sexo}
                  vacunas={adopt.vacunasAlDia}
                  edad={adopt.edadMascota}
                  adoptado={adopt.adoptado == true ? "Sí" : "No"}
                  btnEliminar={() => eliminarAdopcion(adopt.id)}
                  btnEditar={() => editarAdopcion(adopt.id)}
                  enter={()=>enter(adopt.id)}
                />
              )
            })}
          </div>
          {mostrar && (
          <div>
              <label htmlFor="">Nombre de la mascota</label>
              <input type="text" onChange={(evento) => setNombreMascota(evento.target.value)} placeholder='Nombre de la mascota' />

              <label htmlFor="">Edad de la mascota (en años y meses )</label>
              <input type="text" onChange={(evento) => setEdadMascota(evento.target.value)} placeholder='Edad de la mascota' />

              <label htmlFor="">Raza de la mascota</label>
              <input type="text" onChange={(evento) => setRazaMascota(evento.target.value)} placeholder='Raza de la mascota' />

              <label htmlFor="">Vacunas al día</label>
              <div>
                <label htmlFor="">SÍ</label>
                <input type="checkbox" name="" id="" onChange={(evento) => {
                  setVacunasAlDia(true)
                }} />
                <label htmlFor="">NO</label>
                <input type="checkbox" name="" id="" onChange={(evento) => {
                  setVacunasAlDia(false)
                }} />
              </div>

              <label htmlFor="">Castrado</label>
              <div>
                <label htmlFor="">SÍ</label>
                <input type="checkbox" onChange={(evento) => {
                  setCastrado(true)
                  evento.target.checked
                }} />
                <label htmlFor="">NO</label>
                <input type="checkbox" onChange={(evento) => {
                  setCastrado(false)
                  evento.target.checked
                }} />
              </div>

              <label htmlFor="">Sexo</label>
              <select name="" onChange={(evento) => setSexo(evento.target.value)}>
                <option value="" selected disabled>Seleccione el sexo de la mascota</option>
                <option value="hembra">Hembra</option>
                <option value="macho">Macho</option>
              </select>

              <label htmlFor="">Pequeña descripcion de la mascota</label>
              <input type="text" onChange={(evento) => setDescripcionMascota(evento.target.value)} placeholder='Pequeña descripcion de la mascota' />

              <button onClick={()=>enviarEdicion(localStorage.getItem("idMascota"))}>Enviar</button>
          </div>
          )}
        </main>

      </>
    )
  }

export default Adopcion