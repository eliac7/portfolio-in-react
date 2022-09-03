import React from "react";
import { useState, useEffect } from "react";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-scroll";
import "./Header.css";
import MyIcons from "../Icons/Icons";

function Header(props) {
  const [NavMobile, setNavMobile] = useState(false);
  const [NavMobileSidebar, setNavMobileSidebar] = useState(false);
  const [Overlay, setOverlay] = useState(false);

  useEffect(() => {
    if (NavMobile) {
      document.body.classList.add("nav-mobile");
    } else {
      document.body.classList.remove("nav-mobile");
    }
  }, [NavMobile]);

  useEffect(() => {
    // on window scroll, change the header style to fixed
    window.addEventListener("scroll", function (e) {
      if (e.target.scrollingElement.scrollTop > 150) {
        document.querySelector(".header").classList.add("header-fixed");
        props.fixed(true);
      } else {
        document.querySelector(".header").classList.remove("header-fixed");
        props.fixed(false);
      }
    });
  }, [props]);

  useEffect(() => {
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
  }, [NavMobileSidebar, NavMobile, Overlay]);

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col g-0">
          <div className="header">
            <header>
              <Link smooth to="/">
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
                        <Link
                          activeClass="active"
                          smooth
                          spy
                          hashSpy={true}
                          to={item.link}
                          offset={-160}
                          delay={0}
                          isDynamic={true}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div
                className={
                  NavMobileSidebar
                    ? "sidemenu mobile"
                    : "sidemenu mobile closed"
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
                          <Link activeClass="active" smooth to={item.link} spy>
                            {item.name}
                          </Link>
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
        </div>
      </div>
    </div>
  );
}

export default Header;
