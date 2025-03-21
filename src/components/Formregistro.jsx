import { useState } from "react"
import { posData } from "../services/llamados"
import "../styles/registro.css";
import { Link } from "react-router-dom";
function Formregistro() {
    const [nombre, setNombre] = useState("")
    const [clave, setClave] = useState("")
    const [nacimiento, setNacimiento] = useState("")
    const [residencia, setResidencia] = useState(null)
    const [direccion, setDireccion] = useState("")
    const [mascotas, setMascotas] = useState("")
    const [espacio, setEspacio] = useState("")
    async function guardarDatos() {
        const usuarios = {
            "nombre": nombre,
            "clave": clave,
            "nacimiento": nacimiento,
            "residencia": residencia ? "priopia" : "alquilada",
            "direccion": direccion,
            "mascotas": mascotas,
            "espacio": espacio
        }
        await posData(usuarios, "usuarios")
    }
    return (
        <>
            <form className="formulario-registro">
                <h1 className="h1">Crear Cuenta</h1>
                <label htmlFor="">Nombre Usuario</label>
                <input className="input" type="text" placeholder="Nombre usuario" onChange={(evento) => setNombre(evento.target.value)} />
                <label htmlFor="">Clave</label>
                <input className="input" type="password" placeholder="Clave usuario" onChange={(evento) => setClave(evento.target.value)} />
                <label htmlFor="">Fecha de naciemiento</label>
                <input className="input" type="date" placeholder="Fecha de nacimiento" onChange={(evento) => setNacimiento(evento.target.value)} />
                <label htmlFor="">Residencia propia o alquilado</label>
                <section className="cont-checks">
                    <div className="cont-propia">
                        <label htmlFor="">Propia</label>
                        <input type="checkbox" name="" id="" onClick={()=>setResidencia(true)}/>
                    </div>
                    <div className="cont-alquilada">
                        <label htmlFor="">Alquilada</label>
                        <input type="checkbox" name="" id="" onClick={()=>setResidencia(false)}/>
                    </div>
                </section>
                <label htmlFor="">Direccion</label>
                <input className="input" type="text" placeholder="Direccion" onChange={(evento) => setDireccion(evento.target.value)} />
                <label htmlFor="">Cantidad de mascotas</label>
                <input className="input" type="number" min={0} placeholder="Mascotas" onChange={(evento) => setMascotas(evento.target.value)} />
                <label htmlFor="">Cuenta con suficiente espacio para mascotas?</label>
                <select className="select" onChange={(evento) => setEspacio(evento.target.value)}>
                    <option value="" selected disabled>Tiene suficiente espacio?</option>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                <Link to={"/login"}>Ir a login</Link>
                <button className="button" onClick={guardarDatos}>registrarse</button>
            </form>
        </>
    )
}
export default Formregistro