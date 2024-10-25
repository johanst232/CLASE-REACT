import CartWidget from "../../commmon/cartWidget/cartWidget";
import "./navbar.css";

const navbar = () => {
  const categories = [
    { title: "NOSOTROS" },
    { title: "TIENDA" },
    { title: "CONTACTO" },
  ];
  return (
    <div className="container-nav">
      <h3>FARENHEITE</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.title}>{category.title}</li>
        ))}
      </ul>
      <CartWidget />
    </div>
  );
};

export default navbar;
