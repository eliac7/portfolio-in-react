import React from "react";
import { useState } from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import "./Header.css";
import MyIcons from "../Icons/Icons";

function Header(props) {
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
        <Link to={window.location.pathname === "/" ? "/" : "/admin"}>
          <div className="logo">
            <MyIcons.Logo />
          </div>
        </Link>
        <div
          className={NavMobile ? "burger" : "burger closed "}
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
            {props.items.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
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
            ×
          </div>
          <nav className="mobile">
            <ul>
              {props.items.map((item, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      setNavMobile(!NavMobile);
                      setNavMobileSidebar(!NavMobileSidebar);
                      setOverlay(!Overlay);
                    }}
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </li>
                );
              })}
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
