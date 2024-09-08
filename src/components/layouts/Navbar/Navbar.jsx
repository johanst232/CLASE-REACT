import CartWidget from "../../commmon/cartWidget/cartWidget";
import "./navbar.css";

const navbar = () => {
  return (
    <div className="container-nav">
      <h3>FARENHEITE</h3>
      <ul>
        <li>NOSOTROS</li>
        <li>TIENDA</li>
        <li>CONTACTO</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default navbar;
