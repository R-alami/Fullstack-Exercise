import React from "react";
import "./newindex.scss";

const Aboutme = () => {
  return (
    <article className="container">
      <div className="about-wrapper">
        <div className="aboutme">
          <h5>Who am I?</h5>
          <p>
            I'm Michał, UI / UX designer with 10 years of experience. In my
            everyday work, I help startups to improve the quality of their
            products. You can check my profiles: <a href="/">Dribbble</a>,{" "}
            <a href="/">Linkedin</a>, <a href="/">Medium</a> and{" "}
            <a href="/">About.me</a>.
          </p>
        </div>
        <img src="/frame_anim.svg" alt="" />
      </div>
      {/* <img src="/aboutbg.png" alt="" /> */}
    </article>
  );
};

export default Aboutme;
