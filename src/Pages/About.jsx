import React from "react";
import "./CSS/about.css";

// class About extends Component {
function About() {
  return (
    <div>
      <div className="colored">
        <h1 className="heading">About Us</h1>
      </div>
      <div className="about">
        <p className="aboutPara">
          PressX is a start-up aimed at digitizing and organising the huge
          un-organised laundry sector in India. We collaborate with your local
          laundries/dhobis and uplift their physical infrastructure by providing
          superior packaging and delivery material and also provide a complete
          end-to-end app-based eco-system to massively elevate user experience.
        </p>
        <p className="aboutPara">
          In short, you will witness a whole new level of user experience
          through our services from the comfort of your home!
        </p>
        <p className="aboutPara">
          Our goal is to make PRESSX, a brand that revamps the Indian laundry
          sector and elevates the industry to the next level. Through this
          venture of ours, we plan to reform the already existing, huge laundry
          sector by leveraging appropriate technology and correct market
          analysis. Along with increasing the business for the local laundrymen,
          our aim is to make the consumers more aware of the laundry eco-system
          and grant them the power of choice.
        </p>
        <p className="aboutPara">
          Through our innovative means, we plan to develop an eco-system that
          would enable the local laundrymen to incorporate efficiency and
          professionalism in their practice and deliver
          services&nbsp;at&nbsp;fair&nbsp;prices
        </p>
      </div>
    </div>
  );
}

export default About;
