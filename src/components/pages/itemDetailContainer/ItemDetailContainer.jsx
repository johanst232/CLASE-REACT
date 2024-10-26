import React, { useEffect, useState } from "react";
import itemDetail from "./itemDetail";
import { products } from "../../productsMock";
const itemDetailContainer = () => {
  const [item, setItems] = useState({});
  useEffect(() => {
    const id = 1;
    let product = products.find((product) => product.id === id);
    if (product) {
      setItems(product);
    }
  }, [id]);
  return <itemDetail item={item} />;
};

export default itemDetailContainer;
