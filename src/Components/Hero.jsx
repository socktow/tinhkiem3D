import React from "react";
import hero from "../Assets/img-bg.jpg";
import slogan from "../Assets/img-slogan.png";
import './Scss/Hero.scss'; // Import SCSS file

const Hero = ({ children }) => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      <img
        src={slogan}
        alt="Slogan"
        className="hero-slogan"
      />
      <div className="hero-children">
        {children}
      </div>
    </div>
  );
};

export default Hero;
