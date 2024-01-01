import React from "react";
import { assets } from "../../assets/Asset";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="profile">
          <img src={assets.Profile} alt="Personimage" />
          <h6>Ram Mohan</h6>
          <p>mail@gmail.com</p>
        </div>
        <div className="main-options">
          <ul>
            <li>
              <img src={assets.Dashbord} alt="Dashbord" />
              <h5>Dashbord</h5>
            </li>
            <li>
              <img src={assets.Perks} alt="Perks" />
              <h5>Perks</h5>
            </li>
            <li>
              <img src={assets.Addons} alt="Addons" />
              <h5>Addons</h5>
            </li>
            <li>
              <img src={assets.Faq} alt="Faq" />
              <h5>FAQ</h5>
            </li>
            <li>
              <img src={assets.Support} alt="Support" />
              <h5>Support</h5>
            </li>
          </ul>
        </div>
        <p>
          Logout <img src={assets.Logout} alt="Logout" />
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
