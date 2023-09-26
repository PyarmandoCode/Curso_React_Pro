import { useRef } from "react"; //Hooks

const Rectanguloarea = () =>{
    //Declarar las constantes de los elementos del dom
    const anchoRef= useRef();
    const altoRef = useRef();
    const resultadoRef= useRef();

    const calcular =() => {
        const anchovalue=anchoRef.current.value;
        const altovalue=altoRef.current.value;
        const r= anchovalue*altovalue;
        resultadoRef.current.innerHTML=r;
        console.log("Resultado de rectangulo"+resultadoRef);

    }

    return <div>
        <input type="text" ref={anchoRef}/>
        <input type="text" ref={altoRef}/>
        <button onClick={calcular}>Enviar</button>
        <div ref = {resultadoRef}></div>
    </div>
}

export default Rectanguloarea;