import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";

function Header() {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
