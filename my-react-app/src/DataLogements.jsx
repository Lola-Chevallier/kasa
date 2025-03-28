import logements from "./logements.json"

// infos pour les cards avant click
export const getLogements = () => { 
    const logementsTraites = logements.map((logement) => {
        return {
            id: logement.id,
            title: logement.title,
            image: logement.cover,
        };
    });
    return logementsTraites; // retourne le tableau de logements traités
};

// infos modale au click sur cards
export const getLogementById = (id) => { 
    return logements.find((logement) => logement.id === id);
};