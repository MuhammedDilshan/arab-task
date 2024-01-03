import React from "react";
import "./DropDown.css";

const DropDown = ({ icon, open, isOpen }) => {
  return (
    <div className="drop-down">
      <div className="btn">
        <button onClick={() => open()}>
          <img src={icon} alt="Icon" />
        </button>
      </div>
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>My Profile</li>
          <li>Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
