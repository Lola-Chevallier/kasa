import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/accordion.scss";


const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
         {/* Icône de flèche dynamique */}
         <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </button>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;