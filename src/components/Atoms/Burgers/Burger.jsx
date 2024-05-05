import PropTypes from "prop-types";
import { useState } from "react";
import "./Burger.css";

const Burger = ({ toggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleMenu(!isOpen);
  };

  return (
    <div className="lg:hidden relative cursor-pointer" onClick={handleClick}>
      <div className="w-6 h-6 relative flex flex-col justify-around items-center">
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
        <div className={`burger-bar ${isOpen ? "open" : ""}`}></div>
      </div>
    </div>
  );
};

Burger.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default Burger;
