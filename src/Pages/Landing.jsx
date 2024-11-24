import React from "react";
import Hero from "../Components/Hero";
import Download from "../Components/Download";
import NewFeed from "../Components/NewFeed";
import InfoGuide from "../Components/InfoGuide";
import DoGiam from "../Components/DoGiam";
import TieuDiemDacSac from "../Components/TieuDiemDacSac";

const Landing = () => {
  return (
    <Hero>
      <div>
        <Download />
        <NewFeed />
        <InfoGuide />
        <DoGiam />
        <TieuDiemDacSac />
      </div>
    </Hero>
  );
};

export default Landing;
