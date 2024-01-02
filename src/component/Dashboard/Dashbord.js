import React from "react";
import "./Dashbord.css";
import Card from "../Cards/Card";
import { useDashboard } from "./useDashboard";
import { plans } from "../../data/plans";

function Dashboard() {
  const { handleDuration, duration } = useDashboard();
  return (
    <div>
      <section id="dashbord-page">
        <h3>Choose a plan thats just right for you !</h3>
        <div className="duration-tab">
          <div className="duration">
            <span className={!duration && "active"}>Monthly</span>
            <span
              className={duration && "active"}
              onClick={() => handleDuration()}
            >
              Annualy
            </span>
          </div>
        </div>
        <div className="list-card">
          {plans?.map((plan) => (
            <Card data={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
