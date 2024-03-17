import React from "react";
import './CSS/Login.css';

export default function Login() {
  return (
    <div>
      <div className="login">
        <h1>Our site is getting some little tune up and some love.</h1>
      </div>
      <div className="para">
        <p>
          We apologize for the inconvenience,but we're performing some
          maintenance. You can still contact us at <a href="mailto:admin@gmail.com">admin@gmail.com</a>. We'll be
          backup soon!
        </p>
      </div>
      <div className="circle">
        <section className="circle1"></section>
        <section className="circle2"></section>
      </div>
    </div>
  );
}
