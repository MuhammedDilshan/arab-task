import React from "react";
import "./Dashbord.css";
import Card from "../Cards/Card";

function Dashbord() {
  return (
    <div>
      <section id="dashbord-page">
        <h3>Choose a plan thats just right for you !</h3>
        <p>
          <span>Monthly</span>
          <span>Annualy</span>
        </p>
        <Card />
      </section>
    </div>
  );
}

export default Dashbord;
