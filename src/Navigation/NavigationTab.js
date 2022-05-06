import React from "react";

const NavigationTab = ({ title, isActive, setActiveTab }) => {

  const handleClick = () => {
    console.log("clicked")
    setActiveTab(title)
  }

  return (
    <>
      <label className={`navigation__label ${isActive ? "checked" : ""}`} htmlFor={title} onClick={handleClick}>
        {title}
      </label>
    </>
  );
};

export default NavigationTab;
