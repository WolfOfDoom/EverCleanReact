import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                {user?.isAdmin && (
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                )}
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;