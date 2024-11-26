import React from "react";
import Hero from "../Layouts/MainLayout/Homepage/Hero";
import Download from "../Layouts/MainLayout/Homepage/Download";
import NewFeed from "../Layouts/MainLayout/Homepage/NewFeed";
import InfoGuide from "../Layouts/MainLayout/Homepage/InfoGuide";
import DoGiam from "../Layouts/MainLayout/Homepage/DoGiam";
import TieuDiemDacSac from "../Layouts/MainLayout/Homepage/TieuDiemDacSac";

const Landing = () => {
  return (
    <Hero>
      <div>
         <Download />
        {/* // <NewFeed />
        // <InfoGuide />
        // <DoGiam />
        // <TieuDiemDacSac /> */}
      </div>
    </Hero>
  );
};

export default Landing;
