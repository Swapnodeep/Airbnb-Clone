import React from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "../../CSS Files/Home Page CSS/Header.css";

function Header() {
  return (
    <div className="header">
      {/* a tag leads to refreshing the page. So, not using that. */}
      <Link to="/">
        {/* Airbnb Logo */}
        <img className="header__icon" src="./Images/Airbnb.jpg" alt="Airbnb" />
      </Link>

      {/* Search Bar */}
      <div className="header__center">
        <input type="text" />

        {/* We are using Material UI to get the search icon */}
        {/* npm install @material-ui/core */}
        {/* npm install @material-ui/icons */}
        <SearchIcon />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
