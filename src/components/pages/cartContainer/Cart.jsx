import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({ cart, LimpiarCarrito }) => {
  return (
    <div>
      <h2>este es el carrito</h2>
      {cart.map((product) => {
        return (
          <div>
            <h2>titulo {product.title}</h2>
            <h2>precio {product.price}</h2>
            <h2>cantidad {product.quantity}</h2>
            <h2>sub total {product.price * product.quantity}</h2>
            <Button>eliminar</Button>
          </div>
        );
      })}
      <Button onClick={LimpiarCarrito}>Limpiar carrito</Button>
    </div>
  );
};

export default Cart;
