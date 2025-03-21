import { useState } from "react";
import { getInfo } from "../services/llamados";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/Login.css";
function Formlogin() {
    const [nombreUsuario, setNombreUsuario] = useState("")
    const [claveUsuario, setClaveUsuario] = useState("")
    const navigate = useNavigate()
    async function validacionUsuario(e) {
        e.preventDefault()
        const datos = await getInfo("usuarios")
        const usuarioEncontrado = datos.find(usuario => usuario.nombre === nombreUsuario && usuario.clave === claveUsuario)
        if (usuarioEncontrado) {
            navigate("/home")
            localStorage.setItem("idUsuario", usuarioEncontrado.id)
            localStorage.setItem("nombreUsuario", usuarioEncontrado.nombre)
        }
    }
    return (
        <>
            <form className="formulario-login">
                <h1 className="h1-login">Login</h1>
                <label htmlFor="">Nombre Usuario</label>
                <input className="input-login" onChange={(evento) => setNombreUsuario(evento.target.value)} type="text" />
                <label htmlFor="">Clave Usuario</label>
                <input className="input-login" onChange={(evento) => setClaveUsuario(evento.target.value)} type="password" />
                 <Link to={"/registro"}>Ir a registro</Link>
                <button className="button-login" onClick={validacionUsuario}>ingresar</button>
            </form>
        </>
    )
}
export default Formlogin;