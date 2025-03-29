import React from 'react' // Importa React para usar JSX
import Navbar from '../components/Navbar' // Importa el componente Navbar para incluirlo en la página

function Contacto() {
  return (
    <>
      {/* Renderiza el componente Navbar en la parte superior de la página */}
      <Navbar/>
      {/* Muestra los detalles de contacto */}
      <h4>📍 Dirección: [Dirección de la municipalidad] </h4> {/* Dirección de contacto */}
      <h4>📞 Teléfono: [Número de contacto] </h4> {/* Número de contacto telefónico */}
      <h4>📧 Correo: [Correo electrónico] </h4> {/* Correo electrónico de contacto */}
      <h4>🕒 Horario de atención: [Horario de oficina] </h4> {/* Horario en el que se puede contactar */}
      <h4>📱 Redes sociales: [Enlaces a redes sociales] </h4> {/* Enlaces a las redes sociales para contacto */}
      {/* Espacio en blanco entre secciones */}
      <br />
      <br />
      <br />
      {/* Mensaje final incentivando el contacto y colaboración */}
      <h4> Si necesitas reportar un caso de maltrato animal o solicitar información sobre adopciones y servicios veterinarios, contáctanos.</h4>
      <h4>¡Juntos podemos hacer la diferencia!</h4> {/* Mensaje de motivación para el público */}
    </>
  )
}
export default Contacto // Exporta el componente Contacto para su uso en otras partes de la aplicación
