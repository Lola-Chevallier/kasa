import React from "react";
import "../styles/notFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="error-container">
      <h1 className="error">404</h1>
      <h2 className="error-message"><span className="mobil-break">Oups! La page que</span> vous demandez n'existe pas.</h2>

      <nav className="link-header">
        <Link to="/">Retour à la page d'accueil</Link>
      </nav>
    </div>
  );
};
  
  export default NotFound;
  