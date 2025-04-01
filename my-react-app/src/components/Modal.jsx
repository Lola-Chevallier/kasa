import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/modal.module.scss";
import Header from "./Header"; 

const Modal = ({ logement, onClose }) => { 
    return (
        <div className={styles.modal}>
            {/* on met le header avec les liens qui ferment la modale*/}
            <Header onClose={onClose}/>
            
            <div className={styles.modalContent}>
                <h2>{logement.title}</h2>
                <img src={logement.image} alt={logement.title}/>
                <p>{logement.description}</p>
            </div>
        </div>
    );
};

export default Modal;