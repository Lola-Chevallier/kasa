import React from "react";
import '../styles/banner.scss';
import bannerImage from "../../src/assets/images/banner-img.webP";

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Paysage montagneux"/>
            <div className="banner-text">
                Chez vous, partout et ailleurs
            </div>
        </div>
    );
};

export default Banner