import React, { Component } from "react";

import Home from "./home";
import About from "./about";
import Contact from "./contact";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            {/* Creando las Rutas Path */}
                            <Link to="/">Quien Soy</Link>
                        </li>
                        <li>
                            <Link to="/about">Mis Habilidades</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contactame</Link>
                        </li>
                    </ul>
                    {/* Creando las Rutas y Enlazando a los componentes*/}
                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/contact" element={<Contact />}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }

}

export default App;