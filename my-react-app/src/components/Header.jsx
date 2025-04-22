import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/LOGO.png";
import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo Kasa" />
      <nav className="link-header">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
};

export default Header;
