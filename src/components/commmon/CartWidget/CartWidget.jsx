import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const cartWidget = () => {
  const { Cart } = useContext(CartContext);
  return (
    <div className="logoCart">
      <Badge badgeContent={Cart.length} color="primary">
        <ShoppingBagIcon />
      </Badge>
    </div>
  );
};

export default cartWidget;
