import React from "react"; //Importando la bibiloteca de react
import ReactDOM from "react-dom/client"; //Sirve para manipular el DOM

import Saludar from "./components/saludar";
import  {Otrafuncion}  from "./components/mensajes";
import AboutPage from "./components/aboutpage";
import Profile from "./components/profile";
import Perfil from "./components/perfil";
import Galeriaimagenes from "./components/galeriaimagenes";




const root = ReactDOM.createRoot(document.getElementById('root'))



//Montar el componente en el Div
root.render(
    <div>
       
         <Galeriaimagenes/>
         
    </div>
    
        
    
)