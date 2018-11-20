import React from "react";
import { Button } from "reactstrap";
import "./index.scss";

const Podcasts = prpos => {
  return (
    <section className="episode">
      <div className="episode-number">
        <div className="number">
          <span>01.</span>
        </div>
        <div className="number-img">
          <img src="./podcasts-img.svg" alt="" />
        </div>
      </div>

      <div className="episode-info">
        <span>episode #01</span>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quasi facere possimus?
        </h1>
        <div className="profile">
          <div className="profile-img">
            <img src="./profile.svg" alt="" />
          </div>
          <h5>
            <span>Guest:</span> Grzegorz Rog from <a href="">Eduweb</a>
          </h5>
        </div>
        <Button>
          Listen on Soundcloud <span>→</span>
        </Button>
        <div className="link-itunes" >
          <a href="">
            or jump to iTunes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
