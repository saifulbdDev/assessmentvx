/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import About from "../components/About/index";
import Apps from "../components/Apps/index";
import Banner from "../components/Banner/index";
import Counters from "../components/Counters/index";
import Maps from "../components/Maps";
import Sarvice from "../components/Services/Slider";
import WorkProcess from "../components/WorkProcess/index";


function Home() {
  const [style, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    const hight = window.innerHeight;
    const style = {
      width: width,
      height:hight,
    }

    setWindowWidth(style);
  };

  


  return (
    <>
      <Banner bannerstyle={style}  />
      <Sarvice  />
      <About  />
      <WorkProcess  />
      <Apps  />
      <Counters  />
      <Maps  />
      {/* 
     
     
     */}
    </>
  );
}

export default Home;
