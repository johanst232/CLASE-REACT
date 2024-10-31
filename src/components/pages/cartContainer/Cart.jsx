import { Button } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const Cart = ({ cart, LimpiarCarrito, deleteProductbyId, total }) => {
  return (
    <div>
      <h2>este es el carrito</h2>
      {cart.map((product) => {
        return (
          <div key={product.id}>
            <h2>titulo {product.title}</h2>
            <h2>precio {product.price}</h2>
            <h2>cantidad {product.quantity}</h2>
            <h2>sub total {product.price * product.quantity}</h2>
            <Button onClick={() => deleteProductbyId(product.id)}>
              eliminar
            </Button>
          </div>
        );
      })}
      <Button onClick={LimpiarCarrito}>Limpiar carrito</Button>
      <h2>El total a pagar es: {total}</h2>
      <Link to={"/checkout"}>
        <Button>Ir a pagar</Button>
      </Link>
    </div>
  );
};

export default Cart;
