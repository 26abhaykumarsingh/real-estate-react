import "./Filters.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filters() {
  const [location, setLocation] = React.useState("");
  const [propertyType, setPropertyType] = React.useState("");
  const [priceRange, setPriceRange] = React.useState("");
  const [isFurnished, setIsFurnished] = React.useState("");

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
  return (
    <div className="Filters">
      <div className="Filters__list">
        <div className="filter">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                id="location-select"
                value={location}
                label="Location"
                onChange={handleChangeLocation}
              >
                <MenuItem value={"delhi"}>Delhi</MenuItem>
                <MenuItem value={"mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"kolkata"}>Kolkata</MenuItem>
                <MenuItem value={"chennai"}>Chennai</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="filter">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="propertyType-label">Property Type</InputLabel>
              <Select
                labelId="propertyType-label"
                id="propertyType-select"
                value={propertyType}
                label="Property Type"
                onChange={handleChangePropertyType}
              >
                <MenuItem value={"apartment"}>Apartment</MenuItem>
                <MenuItem value={"house"}>House</MenuItem>
                <MenuItem value={"condo"}>Condo</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="filter">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="priceRange-label">Price Range</InputLabel>
              <Select
                labelId="priceRange-label"
                id="priceRange-select"
                value={priceRange}
                label="Price Range"
                onChange={handleChangePriceRange}
              >
                <MenuItem value={10}>5K-7K</MenuItem>
                <MenuItem value={20}>7K-9K</MenuItem>
                <MenuItem value={30}>9K-11K</MenuItem>
                <MenuItem value={30}>11K&gt;</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="filter">
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="furnished-label">Furnished</InputLabel>
              <Select
                labelId="furnished-label"
                id="furnished-select"
                value={isFurnished}
                label="Age"
                onChange={handleChangeIsFurnished}
              >
                <MenuItem value={"yes"}>Yes</MenuItem>
                <MenuItem value={"no"}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <button className="Filters__searchBtn">Search</button>
    </div>
  );
}

export default Filters;
