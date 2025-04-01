import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import du hook pour détecter le changement de page
import Banner from "../components/Banner";
import Card from "../components/Card";
import { getLogements } from "../DataLogements";
import Modal from "../components/Modal"
import styles from "../styles/Cards.module.scss";

const Home = () => {

  // État pour gérer la modale
  const [selectedLogement, setSelectedLogement] = useState(null);
  const location = useLocation()

  // Ouvre la modale avec le logement sélectionné
  const openModal = (logement) => {
    setSelectedLogement(logement);
  };

  // Ferme la modale
  const closeModal = () => {
    setSelectedLogement(null);
  };

  useEffect(() => {
    closeModal();
  }, [location.pathname]
  );

  const logements = getLogements()

  return (
    <div>
      <Banner />
      <div className={styles.cardsContainer}>
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} onClick={() => openModal(logement)}/>
        ))} 
      </div>

      {/* Affichage de la modale si un logement est sélectionné */}
      {selectedLogement && <Modal logement={selectedLogement} onClose={closeModal} />}
      
    </div>
  ); 
};
export default Home;

//l.12 à l.16, on récupère tous les logements et on passe chaque logement individuellement à Card via une prop
