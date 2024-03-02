import React, { useState, useEffect } from 'react';

function Carrito(props) {
    const [total, setTotal] = useState(0)

    // Calcula el precio total cuando cambien los productos en el carrito
    useEffect(() => {
        let newTotal = 0;
        props.productos.forEach((item) => {
            newTotal += item.precio * item.cantidad;
        });
        setTotal(newTotal);
    }, [props.productos]);

    return (
        <div id='innerCarrito'>
            <h2>Carrito de compras</h2>
            <ul>
                {props.productos.map((item, index) => (
                    <div className='itemCarrito'
                        key={index} >{item.nombre} - ${item.precio} - {item.cantidad} unidades
                        <button id='eliminar' onClick={() => props.onRemoveFromCart(item)}>Eliminar</button>
                    </div>

                )
                )}
            </ul>

            <h3>total: ${total}</h3>
        </div>
    );
};
export default Carrito;