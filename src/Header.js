import React from "react";
import "./Header.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";
import { useState } from "react";

function Header() {
  const [NavMobile, setNavMobile] = useState(false);
  const [NavMobileSidebar, setNavMobileSidebar] = useState(false);
  const [Overlay, setOverlay] = useState(false);

  window.addEventListener("resize", function (e) {
    if (e.target.innerWidth > 768) {
      if (NavMobileSidebar) {
        setNavMobile(!NavMobile);
        setNavMobileSidebar(!NavMobileSidebar);
        setOverlay(!Overlay);
      } else {
        setNavMobile(false);
        setNavMobileSidebar(false);
        setOverlay(false);
      }
    }
  });

  return (
    <div className="header">
      <header>
        <div className="logo">
          <Logo />
        </div>
        <div
          className={NavMobile ? "burger" : "burger closed"}
          onClick={() => {
            setNavMobile(!NavMobile);
            setNavMobileSidebar(!NavMobileSidebar);
            setOverlay(!Overlay);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={
            NavMobileSidebar ? "sidemenu mobile" : "sidemenu mobile closed"
          }
        >
          <div
            className="close-btn"
            onClick={() => {
              setNavMobile(!NavMobile);
              setNavMobileSidebar(!NavMobileSidebar);
              setOverlay(!Overlay);
            }}
          >
            <span></span>
            <span></span>
          </div>
          <nav className="mobile">
            <ul>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <a href="#about">About</a>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <a href="#skills">Skills</a>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <a href="#projects">Projects</a>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={Overlay ? "overlay" : "overlay closed"}
          onClick={() => {
            setNavMobile(!NavMobile);
            setNavMobileSidebar(!NavMobileSidebar);
            setOverlay(!Overlay);
          }}
        ></div>
      </header>
    </div>
  );
}

export default Header;
