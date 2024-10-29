import { Button } from "@mui/material";
import React from "react";

export const Counter = ({ contador, sumar, restar, onAdd, stock }) => {
  return (
    <div>
      <Button onClick={sumar} disabled={contador >= stock ? true : false}>
        sumar
      </Button>
      <h1>{contador}</h1>
      <Button onClick={restar} disabled={contador <= 1 ? true : false}>
        restar
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
