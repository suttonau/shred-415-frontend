import React from "react";
import "./Hero.css";
import HeroImg from "../../assets/background-home.jpg";

const Hero = (props) => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <div className="hero-div">
      <img className="hero-img" src={HeroImg} />
    </div>
  );
};

export default Hero;
