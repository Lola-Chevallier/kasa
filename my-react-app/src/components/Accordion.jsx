import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/accordion.scss";

const Accordion = ({ title, content, contentClass = "", headerClass="", className="" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${className}`}>
      <button className={`accordion-header ${headerClass}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronUp} />
      </button>
      {isOpen && (
        <div className={`accordion-content ${contentClass}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default Accordion;