import React from "react";
import "./Navbar.css";
import VillaIcon from "@mui/icons-material/Villa";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__left">
        <div className="logo">
          <div className="logoIcon">
            <VillaIcon />
          </div>
          <h1>Estatery</h1>
        </div>
        <div className="Navbar__links">
          <div className="Navbar__link purple">Rent</div>
          <div className="Navbar__link">Buy</div>
          <div className="Navbar__link">Sell</div>
          <div className="Navbar__link">
            Manage Property <KeyboardArrowDownIcon />
          </div>
          <div className="Navbar__link">
            Resources <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>
      <div className="Navbar__right">
        <button className="loginBtn">Login</button>
        <button className="signUpBtn">Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
