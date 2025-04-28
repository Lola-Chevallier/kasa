import React from "react";
import styles from "../assets/styles/Footer.module.scss";
import mobileFooter from "../assets/images/footer-mobile.png";
import desktopFooter from "../assets/images/footer-desktop.png";

const Footer = () => { 
    return (
        <footer className={styles.footer}>
            <img className={styles.mobile} src={mobileFooter} alt="footer" />
            <img className={styles.desktop} src={desktopFooter} alt="footer"/>
        </footer>
    );
};

export default Footer