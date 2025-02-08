import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const AdminPanel = () => {
    const [products, setProducts] = useState([
        { id: 1, name: "Zapato Impermeable 1", price: 50 },
        { id: 2, name: "Zapato Impermeable 2", price: 60 },
        { id: 3, name: "Zapato Impermeable 3", price: 70 },
    ]);
    const [editingProduct, setEditingProduct] = useState(null);

    const addProduct = (product) => {
        setProducts([...products, { ...product, id: Date.now() }]);
    };

    const editProduct = (updatedProduct) => {
        setProducts(
            products.map((product) =>
                product.id === updatedProduct.id ? updatedProduct : product
            )
        );
        setEditingProduct(null);
    };

    const deleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div>
            <h2>Panel de Administración</h2>
            <ProductForm
                addProduct={addProduct}
                editProduct={editProduct}
                editingProduct={editingProduct}
            />
            <ProductList
                products={products}
                deleteProduct={deleteProduct}
                setEditingProduct={setEditingProduct}
            />
        </div>
    );
};

export default AdminPanel;