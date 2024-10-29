import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const { Cart: cart, LimpiarCarrito } = useContext(CartContext);
  return <Cart cart={cart} LimpiarCarrito={LimpiarCarrito} />;
};

export default CartContainer;
