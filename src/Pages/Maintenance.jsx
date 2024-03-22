import React from "react";
import './CSS/maintenance.css'


export default function Maintenance() {
  return (
    <div>
      <div className="main">
        <h1>Our Site is getting some little tune up and Some Love.</h1>
      </div>
      <div className="para">
        <p>
          We apologize for the inconvenience,but we're performing some
          maintenance. You can still contact us at <a href="mailto:admin@gmail.com">admin@gmail.com</a>. We'll be
          backup soon!
        </p>
      </div>
      <div className="circlee">
        <div className="half-circle1"></div>
        <div className="half-circle2"></div>
      </div>
    </div>
  );
}
