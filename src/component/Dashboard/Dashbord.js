import React from "react";
import "./Dashbord.css";
import Card from "../Cards/Card";
import { useDashboard } from "./useDashboard";
import { plans } from "../../data/plans";
import FeaturePlan from "../FeaturePlan/FeaturePlan";
import { featurePlans } from "../../data/featurePlans";

function Dashboard() {
  const { handleDuration, duration } = useDashboard();
  return (
    <div>
      <section id="dashbord-page">
        <h3>Choose a plan thats just right for you !</h3>
        <div className="duration-tab">
          <div className="duration">
            <div class="tabs">
              <input type="radio" id="radio-1" name="tabs" checked />
              <label class="tab" for="radio-1">
                Monthly
              </label>
              <input type="radio" id="radio-2" name="tabs" />
              <label class="tab" for="radio-2">
                Annualy <span>-10%</span>
              </label>
              <span class="glider"></span>
            </div>
          </div>
        </div>
        <div className="list-card">
          {plans?.map((plan) => (
            <Card data={plan} />
          ))}
        </div>
        <div className="feature-plans">
          {featurePlans.map((plan) => (
            <FeaturePlan data={plan} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
