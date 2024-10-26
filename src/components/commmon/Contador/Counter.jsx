import { Button } from "@mui/material";
import React from "react";

export const Counter = ({ contador, sumar, restar }) => {
  return (
    <div>
      <Button onClick={sumar}>sumar</Button>
      <h1>contador:{contador}</h1>
      <Button onClick={restar}>restar</Button>
      <Button>Agregar al carrito</Button>
    </div>
  );
};
