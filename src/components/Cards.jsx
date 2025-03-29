import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/Adopcion.css"; // Se importan los estilos

function Cards({img, nombre, edad, raza, vacunas, castrado, sexo, adoptado, btnEliminar, btnEditar, enter}) {
  return (
    <Card style={{ width: '18rem' }}> 
      {/* Se muestra la imagen de la mascota */}
      <Card.Img variant="top" src={img} className='img-card' />
      <Card.Body>
        {/* Se muestra el nombre */}
        <Card.Title>{nombre}</Card.Title> 
        <Card.Text>
          {/* Se muestran los detalles de la mascota */}
          <ul>
            <li>Nombre: {nombre}</li>
            <li>Edad: {edad}</li>
            <li>Raza: {raza}</li>
            <li>Vacunas al día: {vacunas}</li>
            <li>Está castrado: {castrado}</li>
            <li>Sexo: {sexo}</li>
            <label htmlFor="">Adoptado</label>
            <p type="text">{adoptado}</p>
          </ul>
        </Card.Text>
        {/* Botones para ver más información, eliminar y editar */}
        <Button variant="primary" onClick={enter}>Más información</Button>
        <Button id='delete' onClick={btnEliminar}>Eliminar</Button>
        <Button id='editar' onClick={btnEditar}>Editar</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards; // Se exporta el componente
