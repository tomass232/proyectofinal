import { useState } from "react";
import { getInfo } from "../services/llamados"; // Se importa la función para obtener datos
import { useNavigate } from "react-router-dom"; // Se importa la función para redireccionar
import { Link } from "react-router-dom"; // Se importan los enlaces de navegación
import "../styles/Login.css"; // Se importan los estilos

function Formlogin() {
    const [nombreUsuario, setNombreUsuario] = useState(""); // Estado para el nombre de usuario
    const [claveUsuario, setClaveUsuario] = useState(""); // Estado para la clave del usuario
    const navigate = useNavigate(); // Hook para la navegación

    async function validacionUsuario(e) {
        e.preventDefault();
        const datos = await getInfo("usuarios"); // Se obtienen los usuarios
        const usuarioEncontrado = datos.find(usuario => usuario.nombre === nombreUsuario && usuario.clave === claveUsuario);
        
        if (usuarioEncontrado) {
            navigate("/home"); // Redirige si las credenciales son correctas
            localStorage.setItem("idUsuario", usuarioEncontrado.id);
            localStorage.setItem("nombreUsuario", usuarioEncontrado.nombre);
        }
    }

    return (
        <>
            <form className="formulario-login">
                <h1 className="h1-login">Login</h1>
                <label>Nombre Usuario</label>
                <input className="input-login" onChange={(evento) => setNombreUsuario(evento.target.value)} type="text" />
                
                <label>Clave Usuario</label>
                <input className="input-login" onChange={(evento) => setClaveUsuario(evento.target.value)} type="password" />
                
                {/* Enlaces para registro y home */}
                <Link to={"/registro"}>Ir a registro</Link>  
                <Link to={"/home"}>Home</Link>

                {/* Botón para iniciar sesión */}
                <button className="button-login" onClick={validacionUsuario}>Ingresar</button>
            </form>
        </>
    )
}

export default Formlogin; // Se exporta el componente
