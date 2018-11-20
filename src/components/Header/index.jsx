import React from "react";
import "./index.scss";

import { Github } from "./github";
import { Soundcloud } from "./soundcloud";
import { Twilio } from "./twilio";
import { Xing } from "./xing";

const Header = () => {
  return (
    <header>
      <nav>
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
      </nav>

      <span>App loads 2018</span>
    </header>
  );
};

export default Header;
