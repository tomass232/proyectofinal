import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { posData } from "../services/llamados";

function Publicaranuncios() {
  const [publicarAnuncio, setpublicarAnuncio] = useState("");


  async function subirAnuncio() {
    const anuncio = {
      publicarAnuncio: publicarAnuncio,
      idUsuario:localStorage.getItem("idUsuario"),
      nombreUsuario: localStorage.getItem("nombreUsuario")
    };
    await posData(anuncio, "anuncios"); // Envia los datos al backend
  }
  

  return (
    <>
      {/* Navbar en la parte superior */}
      <header>
        <Navbar />
      </header>

      <main>
        {/* Título de la sección */}
        <h2 className="text-center mt-3">Publicar anuncio</h2>

        <section>
          <form className="d-flex flex-column gap-3 w-25 mx-auto">

            <label>Anuncio</label>
            <input
              type="text"
              onChange={(evento) => setpublicarAnuncio(evento.target.value)}
              placeholder="Descripcion del anuncio"
            />

            {/* Botón para enviar el formulario */}
            <button onClick={subirAnuncio}>Enviar</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Publicaranuncios; 