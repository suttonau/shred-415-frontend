import React from "react";
import "./Header.css";
import LittleShredIcon from "../../assets/Little-Shred-Icon.png";
import shredLogo from "../../assets/shred-logo.png";

const Header = () => (
  <div className="header">
    <img className="logo-img" src={LittleShredIcon} alt="Icon" />
    <br />
    <br />
    <img className="shred-logo" src={shredLogo} alt="Icon" />
  </div>
);

export default Header;
