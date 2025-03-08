import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]); // El carrito ahora almacena objetos { product, quantity }
  const [products, setProducts] = useState([
    { id: 1, name: "Zapato Impermeable 1", price: 50 },
    { id: 2, name: "Zapato Impermeable 2", price: 60 },
    { id: 3, name: "Zapato Impermeable 3", price: 70 },
  ]);
  const [editingProduct, setEditingProduct] = useState(null);

  const handleLogin = (username, isAdmin) => {
    setUser({ username, isAdmin });
  };

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.product.id === product.id);
    if (existingProduct) {
      // Si el producto ya está en el carrito, incrementa la cantidad
      setCart(
        cart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agrega con cantidad 1
      setCart([...cart, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.product.id !== id));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

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

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route
          path="/"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/admin"
          element={
            user?.isAdmin ? (
              <AdminPanel
                products={products}
                deleteProduct={deleteProduct}
                setEditingProduct={setEditingProduct}
                addProduct={addProduct}
                editProduct={editProduct}
              />
            ) : (
              <p>Acceso denegado</p>
            )
          }
        />
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </Router>
  );
};

export default App;