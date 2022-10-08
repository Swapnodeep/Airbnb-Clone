import React, { useState } from "react";
import { Button } from "@material-ui/core";
import "./Banner.css";
import Search from "./Search";

function Banner() {
  // This state keeps track whether we clicked the search dates button or not
  // if clicked then state becomes true and date picker is shown below the button
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>

        {/* Search is the date picker */}
        {showSearch && <Search />}
      </div>

      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>

        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>

        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
