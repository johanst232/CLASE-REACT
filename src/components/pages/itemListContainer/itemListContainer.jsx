import { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "./itemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

const itemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    const getProducts = new Promise((res) => {
      const filteredProducts = products.filter(
        (product) => product.category === categories
      );
      res(categories ? filteredProducts : products);
    });

    getProducts.then((response) => {
      setItems(response);
    });
  }, [categories]);

  return <ItemList items={items} />;
};

export default itemListContainer;
