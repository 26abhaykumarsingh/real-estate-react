import React from "react";
import "./Main.css";
import { data } from "../data";
import Filters from "./Filters";
import Estates from "./Estates";

function Main() {
  return (
    <div className="Main">
      <Filters />
      <Estates data={data} />
    </div>
  );
}

export default Main;
