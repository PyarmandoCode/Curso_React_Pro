import React from "react";
import ReactDOM from "react-dom/client";
import MiComponente from "./components/callback";
import ConsumoApiUsuarios from "./components/callback_api";
import Contador from "./components/ciclovida";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Contador />
    </React.StrictMode>
)
