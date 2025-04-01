import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import "../styles/header.scss";

const Header = ({ onClose }) => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo Kasa" />
      <nav className="link-header">
        {/* Ferme la modale en cliquant sur les liens */}
        <Link to="/" onClick={onClose}>Accueil</Link>
        <Link to="/about" onClick={onClose}>À propos</Link>
      </nav>
    </header>
  );
};

export default Header;