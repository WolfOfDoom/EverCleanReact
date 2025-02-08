import React from "react";

const ProductList = ({ products, addToCart, deleteProduct, setEditingProduct }) => {
    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
                        <button onClick={() => setEditingProduct(product)}>Editar</button>
                        <button onClick={() => deleteProduct(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;