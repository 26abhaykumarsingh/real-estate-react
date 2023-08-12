import "./Filters.css";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Filters({
  location,
  propertyType,
  priceRange,
  isFurnished,
  handleChangeLocation,
  handleChangePropertyType,
  handleChangePriceRange,
  handleChangeIsFurnished,
  handleSearch,
}) {
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
                <MenuItem value={"Delhi"}>Delhi</MenuItem>
                <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                <MenuItem value={"Kolkata"}>Kolkata</MenuItem>
                <MenuItem value={"Chennai"}>Chennai</MenuItem>
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
                <MenuItem value={"Apartment"}>Apartment</MenuItem>
                <MenuItem value={"House"}>House</MenuItem>
                <MenuItem value={"Condo"}>Condo</MenuItem>
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
                <MenuItem value={1}>₹5K - ₹7K</MenuItem>
                <MenuItem value={2}>₹7K - ₹9K</MenuItem>
                <MenuItem value={3}>₹9K - ₹11K</MenuItem>
                <MenuItem value={4}>₹11K &gt;</MenuItem>
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
                <MenuItem value={"Furnished"}>Yes</MenuItem>
                <MenuItem value={"Not Furnished"}>No</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
      <button className="Filters__searchBtn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Filters;
