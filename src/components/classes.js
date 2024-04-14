import React from "react";
import "./classes.css";
import adultClasses from "../images/adult-classes.png";
import childClasses from "../images/child-classes.png";
import whitelogo from "../images/logo-white.png";

const Classes = () => {
  return (
    <div id="classes" className="classes">
      <div className="classes-title">
        <img src={whitelogo}></img>
        <h1>What I offer</h1>
        <img src={whitelogo}></img>
      </div>
      <div className="classes-imgs">
        <img src={adultClasses}></img>
        <img src={childClasses}></img>
      </div>
    </div>
  );
};

export default Classes;
