import React, { useEffect, useState, UseState } from "react";

function ConsumoApiUsuarios() {
    const [datos, setDatos] = useState([]);
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/users')
            .then((response) => response.json())
            .then((data) => {
                setDatos(data);
            })
            .catch((error) => {
                console.error("Error al Cargar los datos", error)
            });

    }, []);

    return (
        <div>
            <h1>Datos de la Api</h1>
            <ul>
                {datos.map((dato) => (
                    <li key={dato.id}>{dato.email}</li>

                ))}
            </ul>
        </div>
    )
}

export default ConsumoApiUsuarios;