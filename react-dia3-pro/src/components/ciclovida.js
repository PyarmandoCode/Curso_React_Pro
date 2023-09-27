import React, {Component} from "react";


class Contador extends Component {
    //Montar en el Doom Renderizado o Inicializando
    constructor(props) {
        super(props);
        this.state = {contador :0} 
    }
    
    //se llama despues que el componente en el Dom
    componentDidMount() {
        this.intervalId = setInterval(() =>{
            this.setState((prevState) => ({contador:prevState.contador +1}));
        },1000)

    }

    //Se llama despues de cada actualizacion del componente

    componentDidUpdate(prevState) {
        console.log("Valor Anterior",prevState.contador);
        console.log("Valor Actual",this.state.contador)

    }

    //Se llama antes que el componente se desmonte

    componentWillUnmount() {
        clearInterval(this.intervalId);
        console.log("Componente Desmontado")
    }

    render() {
        return (
            <div>
                <h2>Contador : {this.state.contador}</h2>
            </div>
        )

    }
}

export default Contador;