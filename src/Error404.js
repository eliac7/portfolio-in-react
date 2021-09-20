import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import "./Erro404.css";
import { ReactComponent as SpaceMan } from "./assets/images/spaceman.svg";
import { Link } from "react-router-dom";
function Error404() {
  setTimeout(() => {
    const cursor = document.querySelector(".cursor");
    function mouseMoveHandler(e) {
      cursor.style.display = "block";
      cursor.style.left = e.clientX - cursor.offsetWidth / 2.15 + "px";
      cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
      cursor.style.opacity = 1;
    }
    function mouseUpHandler() {
      cursor.style.transform = "scale(1)";
    }
    function mouseDownHandler() {
      cursor.style.transform = "scale(1.5)";
    }

    window.addEventListener("mousemove", mouseMoveHandler);
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);
  }, 1000);
  return (
    <>
      <Header></Header>
      <div className="cursor"></div>
      <div className="error_404">
        <div className="d-flex flex-column align-items-center justify-content-center h-50 w-50">
          <SpaceMan className="h-100 w-100"></SpaceMan>
          <Link to="/">
            <button className="btn btn-spaceman ">Back</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default Error404;
