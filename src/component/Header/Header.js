import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../assets/Asset";
import DropDown from "../DropDown";
import { useDimensions } from "../../utils/useDimentions";

function Header() {
  const [activeModal, setActiveModal] = useState(false);
  const { windowWidth } = useDimensions();
  const handleClick = () => {
    setActiveModal(!activeModal);
  };

  return (
    <div>
      <header>
        <div className="left-logo">
          <img src={assets.Logo} alt="Logo" className="logo" />
        </div>
        <div className="right-container">
          {windowWidth > 560 ? (
            <>
              <div className="right-box">
                <div className="img-box">
                  <img src={assets.sideLogo} alt="logo" className="side-logo" />
                </div>
                <p>XYZ Enterprise Pvt. Ltd</p>
              </div>
              <div className="arrow-box">
                <img src={assets.Arrow} alt="Arrow" />
              </div>
            </>
          ) : (
            <DropDown
              icon={assets.Arrow}
              open={handleClick}
              isOpen={activeModal}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
