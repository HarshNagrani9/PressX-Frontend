import React from "react";
import "./CSS/contact.css";

export default function Contact() {
  return (
    <div className="main-clouds">
      <div className="content">
        <div className="clouds-main">
          <section className="clouds cloud1" />
          <section className="clouds cloud2" />
          <section className="clouds cloud3" />
          <section className="clouds cloud4" />
          <section className="clouds cloud5" />
          <section className="clouds cloud6" />
          <section className="clouds cloud7" />
          <section className="clouds cloud8" />
          <section className="clouds cloud9" />
          <section className="clouds cloud10" />
        </div>
        <div className="text-content">
          <div className="text">
            <h1>
              <span>Stay</span> in Touch
            </h1>
            <h4>
              Sign up to newsletter to keep updated on events and new things
              coming to PressX
            </h4>
          </div>
          <div className="full_name">
            <p>Full Name</p>
            <input type="text" className="input-text" placeholder="Full Name" />
          </div>
          <div className="email">
            <p>Email Address</p>
            <input
              type="text"
              className="input-text"
              placeholder="Email Address"
            />
          </div>
          <div className="button">
            <button>Join us</button>
          </div>
        </div>
      </div>
    </div>
  );
}
