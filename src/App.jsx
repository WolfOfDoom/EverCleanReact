import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Zapato Impermeable 1", price: 50 },
    { id: 2, name: "Zapato Impermeable 2", price: 60 },
    { id: 3, name: "Zapato Impermeable 3", price: 70 },
  ]);

  const handleLogin = (username, isAdmin) => {
    setUser({ username, isAdmin });
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const [editingProduct, setEditingProduct] = useState(null);

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
          element={user?.isAdmin ? <AdminPanel /> : <p>Acceso denegado</p>}
        />
        <Route
          path="/products"
          element={
            <ProductList
              products={products}
              addToCart={addToCart}
              deleteProduct={deleteProduct}
              setEditingProduct={setEditingProduct}
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