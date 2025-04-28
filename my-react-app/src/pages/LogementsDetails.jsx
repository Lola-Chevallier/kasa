import React from "react";
import { useParams, Navigate } from "react-router-dom";
import styles from "../assets/styles/logementsDetails.module.scss";
import { getLogementById } from "../services/DataLogements";
import Accordion from "../components/Accordion";
import SlideShow from "../components/SlideShow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from '@fortawesome/free-solid-svg-icons';

const LogementsDetails = () => {
    const { id } = useParams(); // Récupère l’ID depuis l’URL
    const fullLogement = getLogementById(id); // Cherche le bon logement

    // Renvoi vers la page d'erreur si id incorrect
    if (!fullLogement) {
        return <Navigate to="/notFound404"/>;
    }

    return (
        <div className={styles.LogementsDetails}>
            < SlideShow images={fullLogement.pictures} /> 

            <div className={styles.header}>
                <div className={styles.left}>
                    <h1 className={styles.title}>{fullLogement.title}</h1>
                    <p className={styles.location}>{fullLogement.location}</p>
                    <div className={styles.tags}>
                        {fullLogement.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.right}>
                    <div className={styles.host}>
                        <p>{fullLogement.host.name}</p>
                        <img src={fullLogement.host.picture} alt={fullLogement.host.name} />
                    </div>
                    <div className={styles.rating}>
                        {/* gérer les étoiles dynamiquement ici */}
                        {Array.from({ length: 5 }, (_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} className={i < fullLogement.rating ? styles.starFilled : styles.starEmpty}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.accordions}>
                <Accordion title="Description"
                    content={fullLogement.description}
                    contentClass={styles.customDescription}
                    className={styles.customAccordion}
                    headerClass={styles.customHeader} />
                <Accordion title="Équipements"
                    content={
                        <ul>
                            {fullLogement.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                    contentClass={styles.customEquipments}
                    className={styles.customAccordion}
                    headerClass={styles.customHeader}
                />
            </div>
        </div>
    );

};

export default LogementsDetails;