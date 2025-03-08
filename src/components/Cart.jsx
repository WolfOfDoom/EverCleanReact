import React from "react";

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.product.id}>
                        {item.product.name} - ${item.product.price} (Cantidad: {item.quantity})
                        <button onClick={() => removeFromCart(item.product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;