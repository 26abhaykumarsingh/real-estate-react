import React from "react";
import "./Estate.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PlaceIcon from "@mui/icons-material/Place";
import WeekendIcon from "@mui/icons-material/Weekend";
import FoundationIcon from "@mui/icons-material/Foundation";

function Estate({ estate }) {
  return (
    <div className="Estate">
      <div className="Estate__image">
        <img src={estate.imageUrl} alt="error" className="image" />
      </div>
      <div className="Estate__down">
        <div className="Estate__down__top">
          <div className="Estate__down__top__left">
            <div className="Estate__price">
              ₹{estate.price}
              <span className="perMonth"> /month</span>
            </div>
            <div className="Estate__name">{estate.name}</div>
          </div>
          <div className="Estate__down__top__like">
            <FavoriteBorderIcon className="likeIcon" style={{ fontSize: 19 }} />
          </div>
        </div>
        <div className="Estate__location">
          <span className="placeIcon">
            <PlaceIcon style={{ fontSize: 15 }} />
          </span>{" "}
          {estate.location}
        </div>
        <div className="Estate__down__down">
          <div className="Estate__propertyType">
            <span className="foundationIcon">
              <FoundationIcon style={{ fontSize: 15 }} />
            </span>
            {estate.propertyType}
          </div>
          <div className="Estate__isFurnished">
            <span className="weekendIcon">
              <WeekendIcon style={{ fontSize: 15 }} />
            </span>
            {estate.furnishedStatus}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Estate;
