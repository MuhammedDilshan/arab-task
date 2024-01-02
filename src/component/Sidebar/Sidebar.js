import React from "react";
import { assets } from "../../assets/Asset";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="profile">
          <img src={assets.Profile} alt="Personimage" />
          <h6>
            Ram Mohan{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="10"
              viewBox="0 0 320 512"
            >
              <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </h6>
          <p>mail@gmail.com</p>
        </div>
        <div className="sidebar-content">
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
          <button>
            Logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
