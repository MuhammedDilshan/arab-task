import React from "react";
import "./Header.css";
import { assets } from "../../assets/Asset";

function Header() {
  return (
    <div>
      <header>
        <div className="left-logo">
          <img src={assets.Logo} alt="Logo" className="logo" />
        </div>
        <div className="right-container">
          <div className="right-box">
            <div className="img-box">
              <img src={assets.sideLogo} alt="logo" className="side-logo" />
            </div>
            <p>XYZ Enterprise Pvt. Ltd</p>
          </div>
          <div className="arrow-box">
            <img src={assets.Arrow} alt="Arrow" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
