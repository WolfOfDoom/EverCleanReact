import React, { useState, useEffect } from "react";

const ProductForm = ({ addProduct, editProduct, editingProduct }) => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (editingProduct) {
            setName(editingProduct.name);
            setPrice(editingProduct.price);
            setDescription(editingProduct.description);
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const product = { name, price, description };
        if (editingProduct) {
            editProduct({ ...product, id: editingProduct.id });
        } else {
            addProduct(product);
        }
        setName("");
        setPrice("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
            />
            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">
                {editingProduct ? "Editar Producto" : "Agregar Producto"}
            </button>
        </form>
    );
};

export default ProductForm;