import { useState } from "react";
import { posData } from "../services/llamados"; // Se importa la función para enviar datos
import "../styles/registro.css"; // Se importan los estilos
import { Link } from "react-router-dom";

function Formregistro() {
    // Estados para almacenar la información del formulario
    const [nombre, setNombre] = useState("");
    const [clave, setClave] = useState("");
    const [nacimiento, setNacimiento] = useState("");
    const [residencia, setResidencia] = useState(null);
    const [direccion, setDireccion] = useState("");
    const [mascotas, setMascotas] = useState("");
    const [espacio, setEspacio] = useState("");

    // Función para guardar los datos del usuario en la base de datos
    async function guardarDatos() {
        const usuarios = {
            "nombre": nombre,
            "clave": clave,
            "nacimiento": nacimiento,
            "residencia": residencia ? "propia" : "alquilada",
            "direccion": direccion,
            "mascotas": mascotas,
            "espacio": espacio
        };
        await posData(usuarios, "usuarios"); // Se envían los datos
    }

    return (
        <>
            {/* Formulario de registro */}
            <form className="formulario-registro">
                <h1 className="h1">Crear Cuenta</h1>

                <label>Nombre Usuario</label>
                <input className="input" type="text" placeholder="Nombre usuario" onChange={(evento) => setNombre(evento.target.value)} />

                <label>Clave</label>
                <input className="input" type="password" placeholder="Clave usuario" onChange={(evento) => setClave(evento.target.value)} />

                <label>Fecha de nacimiento</label>
                <input className="input" type="date" onChange={(evento) => setNacimiento(evento.target.value)} />

                <label>Residencia propia o alquilada</label>
                <section className="cont-checks">
                    <div className="cont-propia">
                        <label>Propia</label>
                        <input type="checkbox" onClick={() => setResidencia(true)} />
                    </div>
                    <div className="cont-alquilada">
                        <label>Alquilada</label>
                        <input type="checkbox" onClick={() => setResidencia(false)} />
                    </div>
                </section>

                <label>Dirección</label>
                <input className="input" type="text" placeholder="Dirección" onChange={(evento) => setDireccion(evento.target.value)} />

                <label>Cantidad de mascotas</label>
                <input className="input" type="number" min={0} placeholder="Mascotas" onChange={(evento) => setMascotas(evento.target.value)} />

                <label>¿Cuenta con suficiente espacio para mascotas?</label>
                <select className="select" onChange={(evento) => setEspacio(evento.target.value)}>
                    <option value="" selected disabled>Tiene suficiente espacio?</option>
                    <option value="si">Sí</option>
                    <option value="no">No</option>
                </select>

                {/* Enlaces de navegación */}
                <Link to={"/login"}>Ir a login</Link>   
                <Link to={"/home"}>Home</Link>

                {/* Botón para registrar */}
                <button className="button" onClick={guardarDatos}>Registrarse</button>
            </form>
        </>
    );
}

export default Formregistro;
