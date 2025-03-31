import NavbarComponent from "../components/Navbar"; 

function Home() {
    return (
        <>
           
            <NavbarComponent />

            {/* Contenedor principal con texto centrado */}
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Bienvenido a nuestra página de adopción</h1> {/* Título principal */}
                <p>Encuentra un amigo para siempre.</p> 
                <p>Estamos buscando más dueños responsables.</p> 
                <p>Esta es una pagian de Bienestar animal, de la municipalidad de Desamparados, la idea de esta pagina es ayudar a que se puedan poenr en adopcion perros y gatos de uan forma más eficiete, segura y ordenada. </p>
                    <p>Queremos que las personas que adopten sean rresponsables, amen a sus animales y les den la mejor calidad de vida posible. </p>
                    <p>esta pagina nacio de la idea de que no hayan tantos perritos y gatitos en condicion de calle y que puedan tener una mejor vida, tambien que las personas que adoptan sean responsables y ojalá cumplan con tener espacion, y tamvien las ganas de mejorar vidas.</p>
            </div>
        </>
    );
}

export default Home;

