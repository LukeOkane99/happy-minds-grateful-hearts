import React from "react";
import "./classes.css";
import adultClasses from "../images/adult-classes.png"
import childClasses from "../images/child-classes.png"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Classes = () => {
  return (
    <div className="classes">
      <h1>What I offer...</h1>
      <div className="classes-imgs">
        <img src={adultClasses}></img>
        <img src={childClasses}></img>
      </div>
    </div>
  );
};

export default Classes;
