import React from "react";
import "./index.scss";
import { Button } from "reactstrap";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo" >
        <img src="cloud-rain.svg" alt=""/></div>
        <h1>Reza first podcast about fullstack development.</h1>
        <Button>Listen now</Button>
      </div>
      <div className="hero-img">
        <img src="/hero.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
