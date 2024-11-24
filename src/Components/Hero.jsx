import React from "react";
import hero from "../Assets/img-bg.jpg";
import slogan from "../Assets/img-slogan.png";

const Hero = ({ children }) => {
  return (
    <div
      className="relative w-[98%] min-h-[5000px] bg-cover bg-center mx-auto"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={slogan}
        alt="Slogan"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[75%] mx-auto"
        style={{
          marginTop: "9rem",
          marginLeft: "16rem",
        }}
      />
      <div className="relative z-10 ">{children}</div>
    </div>
  );
};

export default Hero;
