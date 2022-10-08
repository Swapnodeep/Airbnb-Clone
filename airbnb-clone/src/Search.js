import React, { useState } from "react";
import "./Search.css";
import "react-date-range/dist/styles.css"; // Main Style file
import "react-date-range/dist/theme/default.css"; // Theme css file
import { DateRangePicker } from "react-date-range";
import { Button } from "@material-ui/core";
import PeopleIcon from '@material-ui/icons/People';

// Date Picker Component
// npm i react-date-range
// npm i date-fns
function Search() {
  // Start Date state
  const [startDate, setStartDate] = useState(new Date());

  // End Date state
  const [endDate, setEndDate] = useState(new Date());

  // Date Range Object - Needed if we are using date range
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // Selecting the date
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      ></DateRangePicker>
      
      <h2>Number of guests <PeopleIcon /></h2>
    
      <input min={0} defaultValue={2} type="number" />

      <Button>Search Airbnb</Button>
    </div>
  );
}

export default Search;
