import React from "react";
import "../components/contact.css";
import whitelogo from "../images/logo-white.png";
import email from "../images/email.svg";
import phone from "../images/phone.svg";
import location from "../images/location.svg";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <img src={whitelogo}></img>
        <h1>Get In Touch</h1>
        <img src={whitelogo}></img>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Don't hesitate to reach out to me if you would like more information
            on how I can help you...
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={email} alt="" />{" "}
              <p>happymindsgratefulhearts@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="" /> <p>+447493206047</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" /> <p>87A Gulladuff Road, BT45 8QB</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <input type="text" placeholder="Enter Your Name" name="name" />
          <input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
