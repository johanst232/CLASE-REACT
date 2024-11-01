import React from "react";
import CounterContainer from "../../commmon/Contador/CounterContainer";
import { Typography } from "@mui/material";

const ItemDetail = ({ item, onAdd, totalItems }) => {
  return (
    <div className="d-flex container-fluid align-items-center justify-items-center flex-column">
      <h2>{item.category + " " + item.title}</h2>
      <img src={item.imageUrl} style={{ height: 600, width: 500 }} />
      <h2>Stock Disponible: {item.stock}</h2>

      <CounterContainer
        onAdd={onAdd}
        stock={item.stock}
        totalItems={totalItems}
      />
    </div>
  );
};

export default ItemDetail;
