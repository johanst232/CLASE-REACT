import React from "react";
import CounterContainer from "../../commmon/Contador/CounterContainer";

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.category + " " + item.title}</h1>
      <CounterContainer />
    </div>
  );
};

export default ItemDetail;
