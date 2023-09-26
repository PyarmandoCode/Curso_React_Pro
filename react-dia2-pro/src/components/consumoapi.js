import React, { useState, useEffect } from "react";


function ConsumoApiUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        //Realizar una solictud a una API-ASINCRONA
        fetch('https://api.escuelajs.co/api/v1/users')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>{item.email} {item.name}</div>
            ))}
        </div>
    )

}

export default ConsumoApiUsers;