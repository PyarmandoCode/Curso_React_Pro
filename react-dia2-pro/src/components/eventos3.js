import React, { useState, useEffect } from "react";

function HoraActual() {
    const [hora, SetHora] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            SetHora(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p> La Hora Actual es {hora.toLocaleTimeString()}</p>
        </div>
    )
}

export default HoraActual;