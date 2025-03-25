import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo Kasa" />
      <nav className="link-header">
        <Link to="/">Accueil</Link>
        <Link to="/about">À propos</Link>
      </nav>
    </header>
  );
};

export default Header;