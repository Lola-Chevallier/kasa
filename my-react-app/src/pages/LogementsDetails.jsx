import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/logementsDetails.module.scss";
import { getLogementById } from "../DataLogements";

const LogementsDetails = () => {
  const { id } = useParams(); // Récupère l’ID depuis l’URL
  const fullLogement = getLogementById(id); // Cherche le bon logement

  return (
    <div className={styles.LogementsDetails}>
      <div className={styles.LogementsDetailsContent}>

        <img src={fullLogement.cover} alt={fullLogement.title} />
        <h2>{fullLogement.title}</h2>
        <p>{fullLogement.description}</p>

        <p>Localisation : {fullLogement.location}</p>
        <p>Équipements :</p>
        <ul>
          {fullLogement.equipments.map((equip, index) => (
            <li key={index}>{equip}</li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default LogementsDetails;