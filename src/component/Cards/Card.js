import React from "react";
import { assets } from "../../assets/Asset";
import "./Card.css";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="items">
          <h4>Basic</h4>
          <span>$ 89.99/mo</span>
          <h5>$ 9.99/mo</h5>
          <button className="start">
            Get Started <img src={assets.Rightarrow} alt="LongArrow" />
          </button>
          <hr />
          <h6>What youll get :</h6>
          <ul>
            <li>
              <img src={assets.User} alt="User" /> <p>Up to 25 User</p>
            </li>
            <li>
              <img src={assets.Cloud} alt="Cloud" /> <p>Up to 25gb storage</p>
            </li>
            <li>
              <img src={assets.Email} alt="Email" /> <p>Up to 25 User</p>
            </li>
          </ul>
          <button>Explore feature</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
