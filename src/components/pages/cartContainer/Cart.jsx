import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const Cart = ({ cart, LimpiarCarrito, deleteProductbyId, total }) => {
  return (
    <div className="d-flex container-fluid flex-wrap align-items-center justify-items-center flex-column">
      <TableContainer
        className="mt-5 pt-5"
        component={Paper}
        sx={{
          width: 700,
        }}
      >
        <Table
          sx={{
            minWidth: 700,
          }}
          aria-label="spanning table"
        >
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Carrito
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">SubTotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>

                <TableCell align="right">
                  <Button onClick={() => deleteProductbyId(product.id)}>
                    Delete
                  </Button>
                </TableCell>

                <TableCell align="right">{product.quantity}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">{product.subTotal}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell rowSpan={4} />
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button onClick={LimpiarCarrito}>Clear Cart</Button>
        <Link to={"/checkout"}>
          <Button>Go To Pay</Button>
        </Link>
      </ButtonGroup>
    </div>
  );
};

export default Cart;
