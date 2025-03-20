import NavbarComponent from "../components/Navbar";

function Home() {
    return (
        <>
            <NavbarComponent />
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Bienvenido a nuestra página de adopción</h1>
                <p>Encuentra un amigo para siempre.</p>
            </div>
        </>
    );
}

export default Home;
