import React from "react";
import "./Searchbar.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Searchbar() {
  return (
    <div className="Searchbar">
      <div className="Searchbar__heading">Search properties to rent</div>
      <div className="search">
        <p>Search with Search Bar</p>
        <KeyboardArrowDownIcon className="downIcon" />
      </div>
    </div>
  );
}

export default Searchbar;
