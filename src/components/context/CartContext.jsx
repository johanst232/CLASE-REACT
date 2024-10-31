import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const agregarAlCarrito = (product) => {
    let existe = Cart.some((element) => product.id === element.id);
    if (existe) {
      let newArray = Cart.map((elemento) => {
        if (elemento.id === product.id) {
          return { ...elemento, quantity: product.quantity };
        } else {
          return elemento;
        }
      });
      setCart(newArray);
    } else {
      setCart([...Cart, product]);
    }
  };
  const LimpiarCarrito = () => {
    setCart([]);
  };

  const deleteProductbyId = (id) => {
    const arrayFiltered = Cart.filter((product) => product.id !== id);
    setCart(arrayFiltered);
  };

  const getTotal = () => {
    let totalCarrito = Cart.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    return totalCarrito;
  };
  const getTotalProducts = () => {
    let totalProducts = Cart.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);
    return totalProducts;
  };
  const getQuantityById = (id) => {
    let product = Cart.find((element) => element.id === id);
    return product ? product.quantity : 1;
  };

  let data = {
    Cart,
    agregarAlCarrito,
    LimpiarCarrito,
    deleteProductbyId,
    getTotal,
    getTotalProducts,
    getQuantityById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
