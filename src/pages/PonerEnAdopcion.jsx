import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { posData } from "../services/llamados";

function PonerEnAdopcion() {
  // Definición de los estados para almacenar la información de la mascota
  const [nombreMascota, setNombreMascota] = useState("");
  const [edadMascota, setEdadMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [vacunasAlDia, setVacunasAlDia] = useState(false);
  const [castrado, setCastrado] = useState(false);
  const [sexo, setSexo] = useState("");
  const [fotoMascota, setFotoMascota] = useState(null);
  const [descripcionMascota, setDescripcionMascota] = useState("");

  // Función para cargar y previsualizar la imagen de la mascota
  const subirImagen = (evento) => {
    const foto = evento.target.files[0]; // Obtiene el archivo seleccionado
    if (foto) {
      const leer = new FileReader(); // Crea un lector de archivos
      leer.onloadend = () => {
        setFotoMascota(leer.result); // Guarda la imagen en formato base64 en el estado
      };
      leer.readAsDataURL(foto); // Lee el archivo como una URL en base64
    }
  };

  // Función para enviar los datos de la mascota a la base de datos
  async function subirMascota() {
    const mascota = {
      nombreMascota: nombreMascota,
      edadMascota: edadMascota,
      razaMascota: razaMascota,
      vacunasAlDia: vacunasAlDia ? "Sí" : "No", // Convierte el booleano en texto
      castrado: castrado ? "Sí" : "No", // Convierte el booleano en texto
      sexo: sexo,
      fotoMascota: fotoMascota,
      adoptado: false, // Se define que la mascota aún no ha sido adoptada
      descripcionMascota: descripcionMascota,
      idUsuario:localStorage.getItem("idUsuario")
    };
    await posData(mascota, "adopciones"); // Envia los datos al backend
  }

  return (
    <>
      {/* Navbar en la parte superior */}
      <header>
        <Navbar />
      </header>

      <main>
        {/* Título de la sección */}
        <h2 className="text-center mt-3">Poner En Adopción</h2>

        <section>
          {/* Formulario para registrar la mascota en adopción */}
          <form className="d-flex flex-column gap-3 w-25 mx-auto">
            {/* Campo para el nombre de la mascota */}
            <label>Nombre de la mascota</label>
            <input
              type="text"
              onChange={(evento) => setNombreMascota(evento.target.value)}
              placeholder="Nombre de la mascota"
            />

            {/* Campo para la edad de la mascota */}
            <label>Edad de la mascota (en años y meses)</label>
            <input
              type="text"
              onChange={(evento) => setEdadMascota(evento.target.value)}
              placeholder="Edad de la mascota"
            />

            {/* Campo para la raza de la mascota */}
            <label>Raza de la mascota</label>
            <input
              type="text"
              onChange={(evento) => setRazaMascota(evento.target.value)}
              placeholder="Raza de la mascota"
            />

            {/* Selección de si la mascota tiene las vacunas al día */}
            <label>Vacunas al día</label>
            <div>
              <label>SÍ</label>
              <input
                type="checkbox"
                onChange={() => setVacunasAlDia(true)}
              />
              <label>NO</label>
              <input
                type="checkbox"
                onChange={() => setVacunasAlDia(false)}
              />
            </div>

            {/* Selección de si la mascota está castrada */}
            <label>Castrado</label>
            <div>
              <label>SÍ</label>
              <input
                type="checkbox"
                onChange={() => setCastrado(true)}
              />
              <label>NO</label>
              <input
                type="checkbox"
                onChange={() => setCastrado(false)}
              />
            </div>

            {/* Selección del sexo de la mascota */}
            <label>Sexo</label>
            <select onChange={(evento) => setSexo(evento.target.value)}>
              <option value="" selected disabled>
                Seleccione el sexo de la mascota
              </option>
              <option value="hembra">Hembra</option>
              <option value="macho">Macho</option>
            </select>

            {/* Campo para la descripción de la mascota */}
            <label>Pequeña descripción de la mascota</label>
            <input
              type="text"
              onChange={(evento) => setDescripcionMascota(evento.target.value)}
              placeholder="Pequeña descripción de la mascota"
            />

            {/* Campo para subir una foto de la mascota */}
            <label>Foto de la mascota</label>
            <input type="file" onChange={subirImagen} />

            {/* Botón para enviar el formulario */}
            <button onClick={subirMascota}>Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default PonerEnAdopcion;