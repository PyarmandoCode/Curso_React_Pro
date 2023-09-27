import React from "react";
import ReactDOM from "react-dom/client";
import MiComponente from "./components/callback";
import ConsumoApiUsuarios from "./components/callback_api";
import Contador from "./components/ciclovida";
import App from "./components/blog/App";
import PokemonApp from "./components/apipokemon";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <PokemonApp />
    </React.StrictMode>
)
