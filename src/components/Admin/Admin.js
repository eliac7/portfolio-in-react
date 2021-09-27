import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./Admin.css";

function Admin() {
  const HeaderArray = [
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
  ];

  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="container">
          <div className="row min-vh-100">
            <div className="col-lg-12">
              <p className="text-center fs-3">Welcome to admin panel. 😊</p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Admin;
