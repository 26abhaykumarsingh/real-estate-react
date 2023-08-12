import React from "react";
import "./Estates.css";
import Estate from "./Estate";

function Estates({ data }) {
  return (
    <div className="Estates">
      {data.map((estate) => (
        <Estate estate={estate} key={estate.name} />
      ))}
    </div>
  );
}

export default Estates;
