import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import Badge from "@mui/material/Badge";
import "./CartWidget.css";

const cartWidget = () => {
  return (
    <div className="logoCart">
      <Badge badgeContent={4} color="primary">
        <ShoppingBagIcon />
      </Badge>
    </div>
  );
};

export default cartWidget;
