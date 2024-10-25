import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import "./ProductCard.css";
import { Category } from "@mui/icons-material";

const ProductCard = ({ title, price, description, category }) => {
  return (
    <Card sx={{ width: 300, height: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ textTransform: "uppercase" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {category}
        </Typography>
        <Typography
          sx={{ textTransform: "uppercase" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Ver Producto</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
