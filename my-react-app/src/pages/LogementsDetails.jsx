import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import styles from "../assets/styles/logementsDetails.module.scss";
import { getLogementById } from "../services/DataLogements";
import Accordion from "../components/Accordion";
import SlideShow from "../components/SlideShow";
import starFilled from "../assets/images/icons/star-filled.svg";
import starEmpty from "../assets/images/icons/star-empty.svg";

const LogementsDetails = () => {
    const { id } = useParams(); // Récupère l’ID depuis l’URL
    const [fullLogement, setFullLogement] = useState(null); 
    const [logementExiste, setLogementExiste] = useState(true); // Nouveau state

    useEffect(() => {
        const logement = getLogementById(id);

        if (logement) {
            setFullLogement(logement); // On stocke le logement trouvé
            setLogementExiste(true);   // OK il existe
        } else {
            setFullLogement(null);     // pas de logement trouvé
            setLogementExiste(false);    
        }
    }, [id]);

    // Si le logement n'existe pas, redirection 404
    if (!logementExiste) {
        return <Navigate to="/notFound404" />;
    }

    // Si on est encore en train de charger
    if (fullLogement === null) {
        return <div>Chargement...</div>;
    }

    // Si tout est prêt, on affiche
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
                            <img
                            key={i}
                            src={i < fullLogement.rating ? starFilled : starEmpty}
                            alt="étoile"
                            className={styles.star}
                          />
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