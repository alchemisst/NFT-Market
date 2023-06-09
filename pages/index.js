import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection, Service, BigNFTSilder } from "../components/componentindex";


//IMPORTING CONTRCT DATA

const Home = () => {
 return (
  <div className={Style.homePage}>
    <HeroSection/>
   
    <BigNFTSilder/>
    
    <Service/>
  </div>
 )
};

export default Home;
