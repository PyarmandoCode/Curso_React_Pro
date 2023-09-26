import React from 'react'

export default function Ejemplo1() {
    const name = "Armando";
    const numero = 30;
    let aprendi = false
    // if (aprendi) {
    //     return <h1>Aprendiendo React +</h1>
    // } else {
    //     return <h1>Se me hace un Poco Dificil</h1>
    // }
    // return (
    //     <h1>{name} {numero} {20+20} {aprendi}</h1>
    // )
    return <h1> {aprendi ? "Aprendiendo React":"No Aprendiendo React"}</h1>
}
