import React, { useContext, useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const { agregarAlCarrito } = useContext(CartContext);
  const { id } = useParams();
  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItems(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let productsInCart = { ...item, quantity };
    agregarAlCarrito(productsInCart);
  };
  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
