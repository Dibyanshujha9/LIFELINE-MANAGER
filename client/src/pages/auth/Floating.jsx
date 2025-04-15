
import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingNeededButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/neededperson");
  };

  return (
    <button className="needed-person-btn" onClick={handleClick}>
      NEEDED PERSON
    </button>
  );
};

export default FloatingNeededButton;

