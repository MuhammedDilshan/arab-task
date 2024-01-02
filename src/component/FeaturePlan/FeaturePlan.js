import React from "react";
import { assets } from "../../assets/Asset";
import "./FeaturePlan.css";

function FeaturePlan({ data }) {
  return (
    <div className={`${data?.color === "blue" ? "blue" : ""} plan-container `}>
      <div className="plan-card">
        <div className="left-content">
          <button className="card-btn">free forever</button>
          <h3>{data?.name}</h3>
          <p>{data?.description}</p>
          <button className="card-btn-start">
            {data?.button} <img src={assets.Rightarrow} alt="Rightarrow" />
          </button>
        </div>
        <div className="right-content">
          <h6>What you'll get :</h6>
          <ul>
            {data?.users && (
              <li>
                <img src={assets.User} alt="User" />
                {data?.users}
              </li>
            )}
            {data?.storage && (
              <li>
                <img src={assets.Cloud} alt="Cloud" />
                {data?.storage}
              </li>
            )}
            {data?.email && (
              <li>
                <img src={assets.Email} alt="Email" />
                {data?.email}
              </li>
            )}
            {data?.points && (
              <li>
                <img src={assets.Tick} alt="Email" />
                {data?.points}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturePlan;
