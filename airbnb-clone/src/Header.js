import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      {/* Airbnb Logo */}
      <img className="header__icon" src="./Images/Airbnb.jpg" alt="Airbnb" />

      {/* Search Bar */}
      <div className="header__center">
        <input type="text" />
        
        {/* We are using Material UI to get the search icon */}
        {/* npm install @material-ui/core */}
        {/* npm install @material-ui/icons */}
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
