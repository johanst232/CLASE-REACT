import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../config-firebase";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { toast } from "sonner";

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [OrderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { Cart, getTotal, LimpiarCarrito } = useContext(CartContext);
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
    toast.success(`el id de su compra es es: ${OrderId}`, { duration: 5000 });
    toast.success(`Su compra se realizo con exito`, { duration: 5000 });
  };

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
        LimpiarCarrito();
      })
      .finally(() => {
        setIsLoading(false);
      });

    order.items.forEach((elemento) => {
      updateDoc(doc(db, "productos", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  if (isLoading) {
    return (
      <div style={{ marginTop: 200 }}>
        <center>
          <img src="https://res.cloudinary.com/ddfbid0mk/image/upload/v1730349902/tgktt-jordan_wzsmqj.gif" />
          <h2>cargando....</h2>
        </center>
      </div>
    );
  }
  return (
    <div className="d-flex container-fluid align-items-center justify-items-center flex-column mt-5 pt-5">
      <h2>CHECKOUT</h2>

      {OrderId ? (
        handleRedirect()
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="d-flex flex-column mt-5 align-items-center justify-items-center">
            <TextField
              onChange={handleChange}
              name="name"
              type="text"
              label="Name"
              id="outlined-start-adornment"
              sx={{ m: 1, width: 500 }}
              slotProps={{}}
            />
            <TextField
              onChange={handleChange}
              name="phone"
              type="text"
              label="phone"
              id="outlined-start-adornment"
              sx={{ m: 1, width: 500 }}
              slotProps={{}}
            />
            <TextField
              onChange={handleChange}
              name="email"
              type="text"
              label="email"
              id="outlined-start-adornment"
              sx={{ m: 1, width: 500 }}
              slotProps={{}}
            />
            <Button sx={{ width: 300 }} type="submit">
              COMPRAR
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Checkout;
