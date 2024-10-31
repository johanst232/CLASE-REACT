import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ title, price, description, category, id, imageUrl }) => {
  return (
    <Card sx={{ width: 300, height: 500 }}>
      <CardMedia sx={{ height: 330 }} image={imageUrl} title="Productos" />
      <CardContent>
        <Typography
          sx={{ textTransform: "uppercase" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {category + " " + title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/productDetail/${id}`}>
          <Button size="small">Ver Producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
