import React from "react";
import { getLogements } from "../DataLogements";

const Card = () => {
    const logements = getLogements();
    console.log(logements);

    return (
        <div>
            {logements.map((logement) => (
                <div key={logement.id}>
                    <img src={logement.image} alt={logement.title}  style={{ border: "2px solid red", width: "200px", height: "auto" }}/>
                    <h2>{logement.title}</h2>
                </div>
            ))}
        </div>
    );
};
 
export default Card;