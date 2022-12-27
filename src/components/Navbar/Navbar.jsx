import "./styles.css";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CartFront from "../CartFront/CartFront";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import {HashLink as Link} from "react-router-hash-link"

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
        <Link to="/#home" offset={-70} smooth>INICIO</Link>
        <Link to="/#products" smooth>PRODUCTOS</Link>
        <Link to="/#about" smooth>SOBRE NOSOTROS</Link>
        <Link to="/#contact" smooth>CONTACTO</Link>
      </ul>
      <div
        className={isMobile ? "iconsMobile" : "icons"}
        onClick={() => setIsMobile(false)}
      >
        <ul>
          <Link  to="/ ">
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
