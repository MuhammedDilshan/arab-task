import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashbord";
import "./Container.css";

const Container = () => {
  return (
    <>
      <div className="container-box">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
};

export default Container;
