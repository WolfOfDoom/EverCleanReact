import React, { useState } from "react";
import ProductForm from "./ProductForm";

const AdminPanel = ({ products, deleteProduct, setEditingProduct, addProduct, editProduct }) => {
    const [editingProductLocal, setEditingProductLocal] = useState(null);

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este producto?");
        if (confirmDelete) {
            deleteProduct(id); // Solo elimina si el usuario confirma
        }
    };

    return (
        <div>
            <h2>Panel de Administración</h2>
            <ProductForm
                addProduct={addProduct}
                editProduct={editProduct}
                editingProduct={editingProductLocal}
            />
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => setEditingProductLocal(product)}>Editar</button>
                        <button onClick={() => handleDelete(product.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;