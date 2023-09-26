import React, { useState } from "react";


function Estilo() {
    const [color, setColor] = useState('black')

    const HandleMouseEnter = () => {
        setColor('blue');
    };

    const HandleMouseLeave = () => {
        setColor('black');
    };

    return (
        <div>
            <p

                onMouseEnter={HandleMouseEnter}
                onMouseLeave={HandleMouseLeave}
                style={{ color: color }}
            >
                Pasa el Mouse sobre mi
            </p>
        </div >
    )


}

export default Estilo;