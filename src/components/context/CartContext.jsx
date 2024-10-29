import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    setCart([...Cart, product]);
  };
  const LimpiarCarrito = () => {
    setCart([]);
  };
  let data = { Cart, agregarAlCarrito, LimpiarCarrito };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
