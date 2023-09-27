import React from "react"

class MiComponente extends React.Component {
    //CallBack son funciones que se pasan como argumentos a otras funciones y se ejecutan cuando ocurre un evento o se compelta la operacion asincrona.
    handleClick=() => {
        console.log('El Boton fue clickeado');

    }

render() {
    return (
        <button onClick={this.handleClick}>Pulsame</button>
    )
}    
}

export default MiComponente;
