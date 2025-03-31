import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importa los componentes necesarios para manejar rutas en React
import Login from "../pages/Login"; // Importa la página Login
import Registro from "../pages/Registro"; // Importa la página Registro
import Home from "../pages/Home"; // Importa la página Home
import Adopcion from "../pages/Adopcion"; // Importa la página Adopcion
import PonerEnAdopcion from "../pages/PonerEnAdopcion"; // Importa la página PonerEnAdopcion
import SobreNosotros from "../pages/SobreNosotros"; // Importa la página SobreNosotros
import Anuncios from "../pages/Anuncios"; // Importa la página Anuncios
import Contacto from "../pages/Contacto"; // Importa la página Contacto
import InfoIndividual from "../pages/InfoIndividual"; // Importa la página InfoIndividual
import Privada from "./Privada"; // Importa el componente Privada para proteger las rutas privadas
import Perfil from "../pages/Perfil";
import Publicaranuncios from "../pages/Publicaranuncios";

function Routing() {
    return (
        <Router> 
            <Routes> 
                {/* Definición de las rutas públicas */}
                <Route path="/" element={<Home />} /> 
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} /> 
                <Route path="/home" element={<Home />} /> 
                <Route path="/sobre-nosotros" element={<SobreNosotros />} /> 
                <Route path="/contacto" element={<Contacto />} /> 

                {/* Definición de las rutas privadas */}
                <Route path="/adopcion" element={<Privada children={<Privada children={<Adopcion/>}/>} />} />
                <Route path="/poner-en-adopcion" element={<Privada children={<Privada children={<PonerEnAdopcion/>}/>} />} /> 
                <Route path="/anuncios" element={<Privada children={<Privada children={<Anuncios/>}/>} />} /> 
                <Route path="/panuncios" element={<Privada children={<Privada children={<Publicaranuncios/>}/>} />} /> 
                <Route path="/infoIndividual" element={<Privada children={<Privada children={<InfoIndividual/>}/>} />} /> 
                <Route path="/perfil" element={<Privada children={<Privada children={<Perfil/>}/>} />} /> 

            </Routes>
        </Router>
    );
}

export default Routing; // Exporta el componente Routing para ser utilizado en otras partes de la aplicación
