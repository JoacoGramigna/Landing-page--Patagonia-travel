import React from "react";

import "./ButtonHamburger.css";

const ButtonHamburger = ({onClick, isMenuOpen}) => {
  return (
    <div onClick={onClick} className={`icon nav-icon-8 ${isMenuOpen ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default ButtonHamburger;
