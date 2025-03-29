import NavbarComponent from "../components/Navbar"; // Importa el componente de la barra de navegación

function Home() {
    return (
        <>
            {/* Renderiza la barra de navegación */}
            <NavbarComponent />

            {/* Contenedor principal con texto centrado */}
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Bienvenido a nuestra página de adopción</h1> {/* Título principal */}
                <p>Encuentra un amigo para siempre.</p> {/* Mensaje sobre adopción */}
                <p>Estamos buscando más dueños responsables.</p> {/* Mensaje para incentivar la adopción responsable */}
            </div>
        </>
    );
}

export default Home; // Exporta el componente para ser utilizado en otras partes de la aplicación

