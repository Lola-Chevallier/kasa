import React from "react";
import '../assets/styles/banner.scss';
import bannerImage from "../../src/assets/images/banner-img.webP";

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Paysage montagneux"/>
            <div>
                <h1 className="banner-text">
                <span className="mobil-break">Chez vous,</span> partout et ailleurs
                </h1>
            </div>
        </div>
    );
};

export default Banner