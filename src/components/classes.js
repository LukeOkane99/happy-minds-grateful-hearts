import React from "react";
import "./classes.css";
import adultClasses from "../images/adult-classes.png";
import childClasses from "../images/child-classes.png";
import whitelogo from "../images/logo-white.png";
import Classes_Data from "../assets/classes_data.js"

const Classes = () => {
  return (
    <div id="classes" className="classes">
      <div className="classes-title">
        <img src={whitelogo}></img>
        <h1>What I offer</h1>
        <img src={whitelogo}></img>
      </div>
      <div className="classes-container">
        {Classes_Data.map((c,index)=>{
          return <div key={index} className="classes-format">
            <h2>{c.c_name}</h2>
            <p>{c.c_desc}</p>
            <div className="classes-readmore">
              <p>Read More...</p>
            </div>
          </div>
        })}
      </div>
    </div>
  );
};

export default Classes;
