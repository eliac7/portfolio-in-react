import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";

import "./Admin.css";

function Admin() {
  const history = useHistory();

  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    history.push("/login");
  };

  const fullName = JSON.parse(localStorage.getItem("isAuthenticated")).fullName;
  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="logout position-absolute top-0 end-0 p-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
              <p className="text-center fs-3">
                Welcome to admin panel {fullName}.😊
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Admin;
