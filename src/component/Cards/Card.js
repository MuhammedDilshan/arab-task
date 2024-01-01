import React from "react";
import { assets } from "../../assets/Asset";
import "./Card.css";

function Card() {
  return (
    <div>
      <section id="card">
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
              <img src={assets.User} alt="User" /> <small>Up to 25 User</small>
            </li>
            <li>
              <img src={assets.Cloud} alt="Cloud" />{" "}
              <small>Up to 25gb storage</small>
            </li>
            <li>
              <img src={assets.Email} alt="Email" />{" "}
              <small>Up to 25 User</small>
            </li>
          </ul>
          <button className="explore">Explore feature</button>
        </div>
      </section>
    </div>
  );
}

export default Card;
