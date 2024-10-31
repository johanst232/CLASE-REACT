import { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "./itemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../config-firebase";

const itemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categories } = useParams();
  useEffect(() => {
    const productosCollection = collection(db, "productos");

    let consulta = productosCollection;
    if (categories) {
      let productFiltered = query(
        productosCollection,
        where("category", "==", categories)
      );
      consulta = productFiltered;
    }

    getDocs(consulta).then((product) => {
      let array = product.docs.map((elemento) => {
        return { ...elemento.data(), id: elemento.id };
      });
      setItems(array);
    });

    /* const getProducts = new Promise((res) => {
      const filteredProducts = products.filter(
        (product) => product.category === categories
      );
      res(categories ? filteredProducts : products);
    });

    getProducts.then((response) => {
      setItems(response);
    }) */
  }, [categories]);

  return <ItemList items={items} />;
};

export default itemListContainer;
