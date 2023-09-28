import React, { useEffect, useState } from "react";
import axios from 'axios';

function ApiTokenUsers() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        //Aqui deberias reemplazar 'tu_token_jwt' con tu token real
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
        //Configurar el encabezado de autorizacion con el token JWT
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        //Realiza la solicitud GET del API
        axios
            .get("https://reqres.in/api/users", config)
            .then((response) => {
                //Maneja la respuesta exitosa
                setData(response.data);
            })
            .catch((error) => {
                //Manejamos el Error
                setError(error);
            })

    }, []);
    return (
        <div className="App">
            <h1>API CON JWT en React</h1>
            {error ? (
                <p>Error al cargar el Api</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.nombre}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}

export default ApiTokenUsers();