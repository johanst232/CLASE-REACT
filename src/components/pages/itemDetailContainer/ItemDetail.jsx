import React from "react";
import CounterContainer from "../../commmon/Contador/CounterContainer";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <h2>ya tienes en el carrito {totalItems}</h2>

      <CounterContainer
        onAdd={onAdd}
        stock={item.stock}
        totalItems={totalItems}
      />
    </div>
  );
};

export default ItemDetail;
