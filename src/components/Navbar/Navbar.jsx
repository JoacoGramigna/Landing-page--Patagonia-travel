import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/PatagoniaTravelLogo.png";
import ButtonHamburger from "../ButtonHamburger/ButtonHamburger";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  };

  return (
    <nav className={isSticky ? "sticky" : "navbar"}>
      <div className="navbarLogo">
        <img src={Logo} alt="" />
      </div>
      <ul className={`links ${isMenuOpen ? 'active' : '' }`}>
        <li>Home</li>
        <li>Info</li>
        <li>Tours</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
      <div className="navbarIcon">
      <ButtonHamburger isMenuOpen={isMenuOpen} onClick={handleClick}/>
      </div>
      <div className={`initial ${isMenuOpen ? 'active' : '' }`}/>
    </nav>
  );
};

export default Navbar;
