import React, { useState } from "react";
import "./Main.css";
import { data } from "../data";
import Filters from "./Filters";
import Estates from "./Estates";

function Main() {
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [isFurnished, setIsFurnished] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  const handleChangePropertyType = (event) => {
    setPropertyType(event.target.value);
  };
  const handleChangePriceRange = (event) => {
    setPriceRange(event.target.value);
  };
  const handleChangeIsFurnished = (event) => {
    setIsFurnished(event.target.value);
  };

  const handleSearch = (event) => {
    let filteredResult = data;
    if (location !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.location === location
      );
    }
    if (propertyType !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.propertyType === propertyType
      );
    }
    if (priceRange !== "") {
      if (priceRange === 1) {
        filteredResult = filteredResult.filter(
          (item) => item.price >= 5000 && item.price < 7000
        );
      } else if (priceRange === 2) {
        filteredResult = filteredResult.filter(
          (item) => item.price >= 7000 && item.price < 9000
        );
      } else if (priceRange === 3) {
        filteredResult = filteredResult.filter(
          (item) => item.price >= 9000 && item.price < 11000
        );
      } else if (priceRange === 4) {
        filteredResult = filteredResult.filter((item) => item.price >= 11000);
      }
    }
    if (isFurnished !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.furnishedStatus === isFurnished
      );
    }
    setFilteredData(filteredResult);
  };

  return (
    <div className="Main">
      <Filters
        location={location}
        propertyType={propertyType}
        priceRange={priceRange}
        isFurnished={isFurnished}
        handleChangeLocation={handleChangeLocation}
        handleChangePropertyType={handleChangePropertyType}
        handleChangePriceRange={handleChangePriceRange}
        handleChangeIsFurnished={handleChangeIsFurnished}
        handleSearch={handleSearch}
      />
      <Estates data={filteredData} />
    </div>
  );
}

export default Main;
