import React, { useEffect, useState } from "react";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import ItemDetail from "./itemDetail";

const ItemDetailContainer = () => {
  const [item, setItems] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let product = products.find((product) => product.id === id);
    if (product) {
      setItems(product);
    }
  }, [id]);
  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
