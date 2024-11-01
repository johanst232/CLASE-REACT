import CartWidget from "../../commmon/cartWidget/cartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = [
    { title: "Todos", path: "/" },
    { title: "remeras", path: "/category/remeras" },
    { title: "jeans", path: "/category/jeans" },
  ];
  return (
    <div className="container-nav">
      <Link to="/">FARENHEITE</Link>
      <ul>
        {categories.map(({ title, path }) => (
          <Link key={title} to={path}>
            {title}
          </Link>
        ))}
      </ul>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
