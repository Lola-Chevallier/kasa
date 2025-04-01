import React from "react";
import styles from "../styles/Cards.module.scss";

const Card = ({ logement, onclick }) => {

    return (
            <div className={styles.card} onclick={onclick} role="button" tabIndex="0">
                <img src={logement.image} alt={logement.title}/>
                <h2>{logement.title}</h2>
            </div>
    );
};
 
export default Card;

//l.7 à 9 récupération des données via props : maintenant, chaque Card reçoit les données d'un logement via props, ce qui la rend réutilisable.