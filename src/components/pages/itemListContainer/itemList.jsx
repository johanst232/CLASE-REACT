import React from "react";
import ItemListContainer from "./itemListContainer";
import ProductCard from "../../commmon/productCard/ProductCard";

const itemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        marginTop: "40px",
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default itemList;
