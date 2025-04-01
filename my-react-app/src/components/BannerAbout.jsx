import React from "react";
import bannerAboutImage from "../../src/assets/images/banner-about-img.webp";
import styles from "../styles/bannerAbout.module.scss";

const BannerAbout = () => {
    return (
        <div className={styles.bannerAbout}>
            <img src={bannerAboutImage} alt="Paysage montagneux et ciel bleu"/>
        </div>
    );
};

export default BannerAbout;