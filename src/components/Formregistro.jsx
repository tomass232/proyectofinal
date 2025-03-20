import { useState } from "react"
import{posData} from "../services/llamados"
import "../styles/registro.css";
import { Link } from "react-router-dom";
function Formregistro(){
    const [nombre,setNombre] = useState("")
    const [clave,setClave] = useState("")
    const [nacimiento,setNacimiento] = useState("")
    const [residencia,setResidencia] = useState("")
    const [direccion,setDireccion] = useState("")
    const [mascotas,setMascotas] = useState("")
    const [espacio,setEspacio] = useState("")
    async function guardarDatos() {
        const usuarios ={
            "nombre":nombre, 
            "clave":clave,
            "nacimiento":nacimiento,
            "residencia":residencia,
            "direccion":direccion,
            "mascotas":mascotas,
            "espacio":espacio
        }
        await posData(usuarios,"usuarios")
    }
    return(
        <>
        <h1>Crear Cuenta</h1>
        <form>
            <label htmlFor="">Nombre Usuario</label>
            <input type="text" placeholder="Nombre usuario" onChange={(evento)=>setNombre(evento.target.value)} />
            <label htmlFor="">Clave</label>
            <input type="password" placeholder="Clave usuario" onChange={(evento)=>setClave(evento.target.value)} />
            <label htmlFor="">Fecha de naciemiento</label>
            <input type="date" placeholder="Fecha de nacimiento" onChange={(evento)=>setNacimiento(evento.target.value)} />
            <label htmlFor="">Residencia propia o alquilado</label>
            <select onChange={(evento)=>setResidencia(evento.target.value)}>
              <option value="" selected disabled>Seleccione tipo de residencia</option>
              <option value="alquilada">Alquilada</option>
              <option value="propia">Propia</option>
            </select>
            <label htmlFor="">Direccion</label>
            <input type="text" placeholder="Direccion" onChange={(evento)=>setDireccion(evento.target.value)} />
            <label htmlFor="">Cantidad de mascotas</label>
            <input type="number" placeholder="Mascotas" onChange={(evento)=>setMascotas(evento.target.value)} />
            <label htmlFor="">Cuenta con suficiente espacio para mascotas?</label>
            <select onChange={(evento)=>setEspacio(evento.target.value)}>
            <option value="" selected disabled>Tiene suficiente espacio?</option>
              <option value="alquilada">Si</option>
              <option value="propia">No</option>
            </select>
            <Link to={"/"}>Ir a login</Link>
            <button onClick={guardarDatos}>registrarse</button>
        </form>
        </>  
    )
}
export default Formregistro