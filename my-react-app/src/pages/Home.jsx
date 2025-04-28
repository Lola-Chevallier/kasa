import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { getLogements } from "../services/DataLogements";
import styles from "../assets/styles/Cards.module.scss";

const Home = () => {
  const logements = getLogements();

  return (
    <div>
      <Banner />
      <div className={styles.cardsContainer}>
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </div>
    </div>
  );
};

export default Home;