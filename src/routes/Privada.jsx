import React from 'react'; // Importa React
import { Link } from "react-router-dom"; // Importa Link para redirigir al usuario a la página de login

function Privada({ children }) { // Componente Privada que recibe 'children' como prop, usado para renderizar contenido protegido
  // Función para verificar si el usuario está autenticado
  function usuarioValido() {
    const usuario = localStorage.getItem("idUsuario"); // Obtiene el ID del usuario desde el almacenamiento local
    if (usuario) { // Si existe el ID de usuario en el almacenamiento local, significa que el usuario está autenticado
      return true; // El usuario está autenticado
    } else {
      return false; // El usuario no está autenticado
    }
  }
  return (
    <>
      {usuarioValido() ? children : ( // Si el usuario está autenticado, muestra el contenido protegido
        <div>Usted no inició sesión, por favor inicie sesión <Link to={"/login"}>Login</Link></div> // Si no está autenticado, muestra un mensaje y un enlace al login
      )}
    </>
  )
}
export default Privada; 
