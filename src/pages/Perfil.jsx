import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/Perfil.css"; // Se importan los estilos
import { getInfo } from '../services/llamados';
import { deleteData, patchData } from '../services/llamados';
import Navbar from "../components/Navbar";
function Perfil() {
    const [adopts, setAdopts] = useState([])
    const [recarga, setRecarga] = useState(false)
    const [mostrar, setMostrar] = useState(false)


    useEffect(() => {
        async function traerAdopciones() {
            const datos = await getInfo("adopciones")
            const filtroAdopciones = datos.filter(dato => dato.idUsuario === localStorage.getItem("idUsuario"))
            setAdopts(filtroAdopciones)
        }
        traerAdopciones()
    }, [])

    async function eliminarAdopcion(id) {
        await deleteData("adopciones", id)
        setRecarga(!recarga)
    }


    function editarAdopcion(id) {
        localStorage.setItem("idMascota", id)
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
        await patchData(mascota, "adopciones", id)
    }
    function enter(id) {
        navigate('/infoIndividual')
        localStorage.setItem("idAdopt", id)
    }
    return (
        <div>
               <Navbar />
            <div className='contGrid'>
            {adopts.map((ad => {
                return (
                    <Card style={{ width: '18rem' }}>
                        {/* Se muestra la imagen de la mascota */}
                        <Card.Img variant="top" src={ad.fotoMascota} className='img-card' />
                        <Card.Body>
                            {/* Se muestra el nombre */}
                            <Card.Title>{ad.nombreMascota}</Card.Title>
                            <Card.Text>
                                {/* Se muestran los detalles de la mascota */}
                                <ul>
                                    <li>Nombre: {ad.nombreMascota}</li>
                                    <li>Edad: {ad.edadMascota}</li>
                                    <li>Raza: {ad.razaMascota}</li>
                                    <li>Vacunas al día: {ad.vacunasAlDia}</li>
                                    <li>Está castrado: {ad.castrado}</li>
                                    <li>Sexo: {ad.sexo}</li>
                                    <label htmlFor="">Adoptado</label>
                                    <p type="text">{ad.castrado}</p>
                                </ul>
                            </Card.Text>
                            {/* Botones para ver más información, eliminar y editar */}
                            <div className='d-flex flex-column gap-3'>
                                <Button variant="primary" className='btn btn-success' onClick={enter}>Más información</Button>
                                <Button id='delete' className='btn btn-danger' onClick={()=>eliminarAdopcion(ad.id)}>Eliminar</Button>
                                <Button id='editar' className='btn btn-info' onClick={editarAdopcion}>Editar</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            }))}
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
          </div>
        </div>
    )
}

export default Perfil