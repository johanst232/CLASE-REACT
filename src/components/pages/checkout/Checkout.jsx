import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../config-firebase";
import { Alert, AlertTitle, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [OrderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { Cart, getTotal } = useContext(CartContext);

  let totalP = getTotal();
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const order = {
      buyer: user,
      items: Cart,
      total: totalP,
    };
    let refCollection = collection(db, "orders");
    addDoc(refCollection, order)
      .then((res) => {
        setOrderId(res.id);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h2>CHECKOUT</h2>
      {OrderId ? (
        <Alert
          action={
            <IconButton aria-label="close" color="inherit" size="small">
              <Link to="/">
                <CloseIcon fontSize="inherit" />
              </Link>
            </IconButton>
          }
          sx={{
            textAlign: "center",
          }}
        >
          SU COMPRA SE EFECTUO CON EXITO, EL ID DE COMPRA ES:{OrderId}
        </Alert>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="phone"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <Button type="submit">COMPRAR</Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
