import { Button } from "@mui/material";
import React from "react";

export const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div className="d-flex">
      <Button onClick={restar} disabled={contador <= 1 ? true : false}>
        restar
      </Button>
      <h1>{contador}</h1>
      <Button onClick={sumar} disabled={contador >= stock ? true : false}>
        sumar
      </Button>

      <Button
        onClick={() => {
          onAdd(contador);
        }}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};
