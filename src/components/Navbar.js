import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3 className="navbar-title">Marvel App </h3>

      <input type="text" placeholder="Search here..."></input>
    </div>
  );
};

export default Navbar;
