import "./styles.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CartFront from "../CartFront/CartFront";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <nav className="navbar">
      <div className="navLogo">
        <img src="./images/logoFuckingBeer.png" alt="logoFuckingBeer" />
      </div>
      <ul
        className={isMobile ? "navLinksMobile" : "navLinks"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/" className="home">
          INICIO
        </Link>
        <Link to="/" className="products">
          PRODUCTOS
        </Link>
        <Link to="/" className="about">
          SOBRE NOSOTROS
        </Link>
        <Link to="/" className="contact">
          CONTACTO
        </Link>
      </ul>
      <div className={isMobile ? "iconsMobile" : "icons"}
        onClick={() => setIsMobile(false)}>
        <ul>
          <Link to="/ ">
            <SearchIcon />
          </Link>
          <Link to="/ ">
            <PersonIcon />
          </Link>
          <Link to="/cartback ">
            <CartFront />
          </Link>
        </ul>
      </div>
      <button className="mobileMenuIcon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <MenuOpenIcon /> : <MenuIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
