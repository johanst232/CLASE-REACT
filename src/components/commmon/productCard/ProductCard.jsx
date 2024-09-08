import "./ProductCard.css";

const ProductCard = ({ nombre, precio }) => {
  return (
    <div className="Card-container">
      <h3>{nombre}</h3>
      <h3>{precio}</h3>
      <button>Ver Producto</button>
    </div>
  );
};

export default ProductCard;
