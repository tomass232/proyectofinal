import React from 'react' 
import Navbar from '../components/Navbar' 
import '../styles/Contacto.css'; 

function Contacto() {
  return (
    <>
      <Navbar /> 
      <div className='div-contacto'>
      <h4 className='letra-h4'>📍 Dirección: Costado norte del parque Centenario de Desamparados </h4> 
      <h4 className='letra-h4'>📞 Teléfono: (506) 2217-3500 </h4>
      <h4 className='letra-h4'>📧 Correo: comunicacion@desamparados.go.cr </h4>
      <h4 className='letra-h4'>🕒 Horario de atención: Lunes a viernes de 8:00 a.m. a 4:00 p.m  </h4> 
      <h4 className='letra-h4'>📱 Redes sociales:
        <br />
        <a href="https://www.desamparados.go.cr/es" className='letra-h4'>Página oficial de la municipalidad de desamparados</a>
        <br />
        <a href="https://www.youtube.com/channel/UCkaBSMbgBnzEUuowilq8hKQ" className='letra-h4'>YouTube</a>
        <br />
        <a href="https://www.instagram.com/munidesampa/?locale=es&hl=en" className='letra-h4'>Instagram</a>
        <br />
        <a href="https://www.facebook.com/MuniDesamparados" className='letra-h4'>Facebook</a> </h4>
      <br />
      <h4 className='letra-h4'> Si necesitas reportar un caso de maltrato animal o solicitar información sobre adopciones contáctanos.</h4>
      <h4 className='letra-h4'>¡Juntos podemos hacer la diferencia!</h4>
      </div>
    </>
  )
}
export default Contacto 
