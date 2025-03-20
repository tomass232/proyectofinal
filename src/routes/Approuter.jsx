import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import Home from "../pages/Home";
import Adopcion from "../pages/Adopcion";
import Adoptados from "../pages/Adoptados";
import PonerEnAdopcion from "../pages/PonerEnAdopcion";
import SobreNosotros from "../pages/SobreNosotros";
import Anuncios from "../pages/Anuncios";
import Contacto from "../pages/Contacto";

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/home" element={<Home />} />
                <Route path="/adopcion" element={<Adopcion />} />
                <Route path="/adoptados" element={<Adoptados />} />
                <Route path="/poner-en-adopcion" element={<PonerEnAdopcion />} />
                <Route path="/sobre-nosotros" element={<SobreNosotros />} />
                <Route path="/anuncios" element={<Anuncios />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </Router>
    );
}

export default Routing;
