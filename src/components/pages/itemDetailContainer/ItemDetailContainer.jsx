import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../config-firebase";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);
  const { id } = useParams();
  let totalItems = getQuantityById(id);
  useEffect(() => {
    let productosCollection = collection(db, "productos");
    let refDoc = doc(productosCollection, id);
    let getProductos = getDoc(refDoc);
    getProductos.then((res) => setItems({ ...res.data(), id: res.id }));
    /* let product = products.find((product) => product.id === id);
    if (product) {
      setItems(product);
    } */
  }, [id]);

  const onAdd = (quantity) => {
    let subTotal = quantity * item.price;
    let productsInCart = { ...item, quantity, subTotal };
    agregarAlCarrito(productsInCart);
  };
  return <ItemDetail item={item} onAdd={onAdd} totalItems={totalItems} />;
};

export default ItemDetailContainer;
