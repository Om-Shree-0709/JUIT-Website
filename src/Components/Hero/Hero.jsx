import React from "react";
import "./Hero.css";
import arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          JUIT: Excellence in Education <br />
          Upgraded to Grade A+ by NAAC in April 2024
        </h1>
        <p>
          Join us at Jaypee University of Information Technology, where
          innovation meets excellence. Discover a world of opportunities and
          state-of-the-art facilities.
        </p>
        <button className="btn">
          Explore More <img src={arrow} alt="" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
