import React from "react";
import { assets } from "../../assets/Asset";
import "./Card.css";

function Card({ data }) {
  return (
    <div>
      <section id="card">
        <div className="items">
          <h4>{data?.name}</h4>
          <span> {`$${data?.old_amount}/mo`}</span>
          <h5> {`$${data?.amount}/mo`}</h5>
          <button className="start">
            Get Started <img src={assets.Rightarrow} alt="LongArrow" />
          </button>
          <hr />
          <h6>What youll get :</h6>
          <ul>
            <li>
              <img src={assets.User} alt="User" />{" "}
              <small>Up to {data?.user} User</small>
            </li>
            <li>
              <img src={assets.Cloud} alt="Cloud" />{" "}
              <small>Up to {data?.storage}gb storage</small>
            </li>
            <li>
              <img src={assets.Email} alt="Email" />{" "}
              <small>Up to {data?.mail} User</small>
            </li>
          </ul>
          <button className="explore">Explore feature</button>
        </div>
      </section>
    </div>
  );
}

export default Card;
