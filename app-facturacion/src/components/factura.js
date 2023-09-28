import React, { useState } from "react";

function Factura() {
    const [items, setItems] = useState([
        { id: 1, nombre: 'Producto 1', cantidad: 2, precioUnitario: 10 }
    ])

    const agregarItem = () => {
        const nuevoItem = { id: Date.now(), nombre: '', cantidad: 1, precioUnitario: 0 };
        setItems([...items, nuevoItem]);

    }

    const eliminarItem=(id) => {
        const nuevosItems = items.filter((item)=>item.id!==id);
        setItems(nuevosItems);
    }

    const calcularSubtotal = () => {
        return items.reduce((total, item) => total + item.cantidad * item.precioUnitario, 0)

    };

    const calcularImpuestos = () => {
        return calcularSubtotal() * 0.1;
    }

    const calcularTotal = () => {
        return calcularSubtotal() + calcularImpuestos();
    }

    const actualizarItem = (id, campo, valor) => {
        const nuevosItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, [campo]: valor }
            }
            return item;
        });
        setItems(nuevosItems);
    }


    return (
        <div>
            <h1>Factura</h1>
            <button onClick={agregarItem}>Agregar Producto</button>
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
                                    onChange={(e)=>actualizarItem(item.id,'nombre',e.target.value)}

                                >
                                </input>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    value={item.cantidad}
                                    onChange={(e)=>actualizarItem(item.id,'cantidad',parseInt(e.target.value,10))}

                                >
                                </input>
                            </td>

                            <td>
                                <input
                                    type="number"
                                    value={item.precioUnitario}
                                    onChange={(e)=>actualizarItem(item.id,'precioUnitario',parseFloat(e.target.value,10))}

                                >
                                </input>
                            </td>

                            <td>${item.cantidad * item.precioUnitario}</td>

                            <td>
                                <button onClick={()=>eliminarItem(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
            <div>
                <p>Subtotal:${calcularSubtotal()}</p>
                <p>Impuestos(10%):${calcularImpuestos()}</p>
                <h3>Neto:${calcularTotal()}</h3>
            </div>
        </div>
    )
}

export default Factura;