import React from "react";
import { assets } from "../../assets/Asset";
import "./Cardmain.css";

function Plan() {
  return (
    <div>
      <div className="plan-container">
        <div className="plan-card">
          <div className="left-content">
            <button className="card-btn">free forever</button>
            <h3>Free Starter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dignissimos.
            </p>
            <button className="card-btn-start">
              Get Started <img src={assets.Rightarrow} alt="Rightarrow" />
            </button>
          </div>
          <div className="right-content">
            <h6>What you'll get :</h6>
            <ul>
              <li>
                <img src={assets.User} alt="User" />
                Upto 8 user
              </li>
              <li>
                <img src={assets.Cloud} alt="Cloud" />
                Upto 3gb storage
              </li>
              <li>
                <img src={assets.Email} alt="Email" />
                Email support
              </li>
            </ul>
          </div>
        </div>
        <div className="plan-card">
          <div className="left-content">
            <button className="card-btn">free forever</button>
            <h3>Free Starter</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              dignissimos.
            </p>
            <button className="card-btn-start">
              Get Started <img src={assets.Rightarrow} alt="Rightarrow" />
            </button>
          </div>
          <div className="right-content">
            <h6>What you'll get :</h6>
            <ul>
              <li>
                <img src={assets.User} alt="User" />
                Upto 8 user
              </li>
              <li>
                <img src={assets.Cloud} alt="Cloud" />
                Upto 3gb storage
              </li>
              <li>
                <img src={assets.Email} alt="Email" />
                Email support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
<h3>Free Starter</h3>;
