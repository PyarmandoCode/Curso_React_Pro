import React from "react";
import ReactDOM from "react-dom/client";
//import Ejemplo1 from "./components/ejemplo1";
//import Ejemplo2 from "./components/ejemplo2";
//import Props1 from "./components/props1";
import { Props2 } from "./components/props2";
import Blog from "./components/fragment";
//import Mensaje from "./components/eventos1";
import Estilo from "./components/eventos2";
import HoraActual from "./components/eventos3";
import ConsumoApiUsers from "./components/consumoapi";


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        < ConsumoApiUsers
        />
    </>
)