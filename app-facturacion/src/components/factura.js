import React, { useState } from "react";

function Factura() {
    const [items, setItems] = useState([
        { id: 1, nombre: 'Producto 1', cantidad: 2, precioUnitario: 10 }
    ])

    const agregarItem = () => {
        const nuevoItem = { id: Date.now(), nombre: '', cantidad: 1, precioUnitario: 0 };
        setItems([...items, nuevoItem]);

    }
    return (
        <div>
            <h1>Factura</h1>
            <button>Agregar Producto</button>
            <table>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <input
                                    type="text"
                                    value={item.nombre}

                                >
                                </input>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    value={item.cantidad}

                                >
                                </input>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    value={item.precioUnitario}

                                >
                                </input>
                            </td>

                            <td>${item.cantidad * item.precioUnitario}</td>

                            <td>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <div>
                <p>Subtotal:99.99</p>
                <p>Impuestos(10%):9.9</p>
                <h3>Neto:999.99</h3>
            </div>
        </div>
    )
}

export default Factura;