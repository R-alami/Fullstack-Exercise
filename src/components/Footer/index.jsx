import React from "react";
import "./index.scss";

import { Github } from "../Header/github";
import { Soundcloud } from "../Header/soundcloud";
import { Twilio } from "../Header/twilio";
import { Xing } from "../Header/xing";

const Footer = () => {
  return (
    <div className="container">
      <div className="row footer">
        <div className="col-6 left">
          <h5>Apploads.pl</h5>
          <p className="gray-content">All rights reserved.</p>
          <p className="small-content">Made in pain and frustrations in 2018.</p>
        </div>
        <div className="col-6 right">
          <div>
            <ul>
              <li>
                <a className="github" href="/">
                  <Github />
                </a>
              </li>
              <li>
                <a className="xing" href="/">
                  <Xing />
                </a>
              </li>
              <li>
                <a className="soundcloud" href="/">
                  <Soundcloud />
                </a>
              </li>
              <li>
                <a className="twilio" href="/">
                  <Twilio />
                </a>
              </li>
            </ul>
          </div>

          <p className="gray-content">Have a questions?</p>
          <p className="small-content">
            Send me an e-mail: <a href="/">hello@apploads.pl</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
