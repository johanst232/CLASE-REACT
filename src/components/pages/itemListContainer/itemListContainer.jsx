import ProductCard from "../../commmon/productCard/ProductCard";
import "./itemListContainer.css";

const itemListContainer = ({ gretting }) => {
  return (
    <div className="itemList-Container">
      <h2>{gretting}</h2>
      <h3>LISTA DE PRODUCTOS</h3>
      <div>
        <ProductCard nombre="REMERA" precio={20000} />
        <ProductCard nombre="JEAN" precio={65000} />
      </div>
    </div>
  );
};

export default itemListContainer;
