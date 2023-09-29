import React from  "react";
import  ReactDOM  from "react-dom/client";
import ApiComponent from "./components/app";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'))


root.render(
    <React.StrictMode>
        <ApiComponent/>

    </React.StrictMode>
)