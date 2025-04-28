import { useState } from "react";
import "../assets/styles/accordion.scss";
import arrow from "../assets/images/icons/arrow.svg";

const Accordion = ({ title, content, contentClass = "", headerClass="", className="" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`accordion ${className}`}>
      <button className={`accordion-header ${headerClass}`} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <img
          src={ arrow }
          alt="flèche"
          className={`accordion-icon ${isOpen ? "rotated" : ""}`}
        />
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