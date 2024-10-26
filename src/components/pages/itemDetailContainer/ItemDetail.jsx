import React from "react";
import CounterContainer from "../../commmon/Contador/CounterContainer";

const itemDetail = ({ item }) => {
  return (
    <div>
      <h1>{item.tittle}</h1>
      <CounterContainer />
    </div>
  );
};

export default itemDetail;
