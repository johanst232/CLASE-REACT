import React, { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../../context/CartContext";

const CartContainer = () => {
  const {
    Cart: cart,
    LimpiarCarrito,
    deleteProductbyId,
    getTotal,
    columns,
  } = useContext(CartContext);
  let total = getTotal();
  return (
    <Cart
      columns={columns}
      cart={cart}
      LimpiarCarrito={LimpiarCarrito}
      deleteProductbyId={deleteProductbyId}
      total={total}
    />
  );
};

export default CartContainer;
