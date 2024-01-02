import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Dashboard from "../Dashboard/Dashbord";
import "./Container.css";
import Cardmain from "../Cardmain/Cardmain";

const Container = () => {
  return (
    <>
      <div className="container-box">
        <Sidebar />
        <Dashboard />
      </div>
      <Cardmain />
    </>
  );
};

export default Container;
