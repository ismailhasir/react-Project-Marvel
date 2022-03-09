import { Router, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <h1 className="brand">Marvel App</h1>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
