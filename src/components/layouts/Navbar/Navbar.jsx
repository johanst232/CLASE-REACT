import { Link } from "react-router-dom";
import "./Navbar.css";

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
