import React from "react";
import { useState } from "react";

import { HashLink as Link } from "react-router-hash-link";

import "./Header.css";
import { ReactComponent as Logo } from "./assets/images/logo.svg";

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
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#skills">Skills</Link>
            </li>
            <li>
              <Link to="/#projects">Projects</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
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
                <Link to="/#about">About</Link>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <Link to="/#skills">Skills</Link>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <Link to="/#projects">Projects</Link>
              </li>
              <li
                onClick={() => {
                  setNavMobile(!NavMobile);
                  setNavMobileSidebar(!NavMobileSidebar);
                  setOverlay(!Overlay);
                }}
              >
                <Link to="/#contact">Contact</Link>
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
