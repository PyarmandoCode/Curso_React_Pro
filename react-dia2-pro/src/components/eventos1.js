//Hooks
import React, {useState} from "react";

function Mensaje() {
    const [mensaje,setMensaje] = useState('');

    const handleClick = () =>{
        setMensaje("Hola Mundo desde Hooks");
    };

    return (
        <div>
            <button onClick={handleClick}>Mostrar Mensaje</button>
            <p>{mensaje}</p>
        </div>
    )
}

export default Mensaje;