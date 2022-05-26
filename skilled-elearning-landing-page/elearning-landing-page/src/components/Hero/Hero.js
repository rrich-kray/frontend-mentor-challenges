import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero">
      <div className="left-panel panel">
        <div className="content-container">
          <span>Maximize skill, minimize budget</span>
          <p>
            Our modern courses across a range of in-demand skills will give you
            the knowledge you need to live the life that you want.
          </p>
          <div className="btn-container">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="right-panel panel">
        <img
          id="hero-image"
          src={require("../../assets/image-hero-desktop.png")}
        />
      </div>
    </div>
  );
};

export default Hero;
