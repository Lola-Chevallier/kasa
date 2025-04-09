import React from "react";
import styles from "../styles/Cards.module.scss";
import { Link } from "react-router-dom";

const Card = ({ logement, onClick }) => {

    return (
        <Link to={`/logement/${logement.id}`} className={styles.cardLink}>
            <div className={styles.card} onClick={onClick} role="button" tabIndex="0">
                <img src={logement.image} alt={logement.title}/>
                <h2>{logement.title}</h2>
            </div>           
        </Link>
    );
};
 
export default Card;

//l.7 à 9 récupération des données via props : maintenant, chaque Card reçoit les données d'un logement via props, ce qui la rend réutilisable.