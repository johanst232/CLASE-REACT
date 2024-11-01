import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext);
  const TotalItems = getTotalProducts();
  return (
    <div className="logoCart">
      <Badge badgeContent={TotalItems} color="primary">
        <ShoppingBagIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;
