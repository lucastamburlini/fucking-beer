import logoFuckingBeer from "../assets/img/logoFuckingBeer.png";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logoFuckingBeer} alt="" />
          </div>
          <div className="navbar">
            <ul>
              <li>
                <a href="#">TIENDA</a>
              </li>
              <li>
                <a href="#">HOLA</a>
              </li>
              <li>
                <a href="#">OFERTAS DE LA SEMANA</a>
              </li>
              <li>
                <a href="#">CONTACTO</a>
              </li>
              <li>
                <a href="#">PRODUCTOS</a>
              </li>
              <li>
                <a href="#">EQUIPO</a>
              </li>
            </ul>
          </div>
          <div className="icons">
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <PersonIcon />
              </li>
              <li>
                <ShoppingCartIcon />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
