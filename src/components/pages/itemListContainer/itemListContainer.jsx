import { useEffect, useState } from "react";
import ProductCard from "../../commmon/productCard/ProductCard";
import "./itemListContainer.css";
import ItemList from "./itemList";
import { products } from "../../productsMock";

const itemListContainer = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      res(products);
    });
    getProducts.then((response) => {
      setItems(response);
    });
  });

  return <ItemList items={items} />;
};

export default itemListContainer;
