import React from "react";
import "./Footer.css";
import { ReactComponent as Twitter } from "./assets/images/twitter.svg";
import { ReactComponent as Instagram } from "./assets/images/instagram.svg";
import { ReactComponent as LinkedIn } from "./assets/images/linkedin.svg";
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="container-inner pt-3">
          <div className="copyright">
            ©{year} -
            <p>
              Made with <span>♥</span> by me.
            </p>
          </div>
          <div className="sm">
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/ilias_thal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram></Instagram>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/eliac7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn></LinkedIn>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/ilias_thal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter></Twitter>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
