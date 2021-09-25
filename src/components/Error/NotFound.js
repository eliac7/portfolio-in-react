import React from "react";
import "../Error/NotFound.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Mouse } from "../Mouse/Mouse";
import MyIcons from "../Icons/Icons";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <Header></Header>
      <Mouse></Mouse>
      <div className="error_404">
        <div className="d-flex flex-column align-items-center justify-content-center h-50 w-50">
          <MyIcons.SpaceMan className="h-100 w-100"></MyIcons.SpaceMan>
          <Link to="/">
            <button className="btn btn-spaceman ">Back</button>
          </Link>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}

export default NotFound;
