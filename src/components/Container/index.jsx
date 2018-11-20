import React from "react";
import "./index.scss";

const Container = props => {
  return (
    <section className="container">
      <div className="content">
        <span className="overline">For who and why?</span>

        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam vel
          magnam aliquam laboriosam consectetur perspiciatis beatae iste ullam
          minus nulla. This is created by: <a href="">Reza Alami</a>
        </h2>
        <hr/>
        {props.children}
      </div>
    </section>
  );
};

export default Container;
