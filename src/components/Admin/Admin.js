import React, { useEffect, useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import "./Admin.css";
import UserContext from "../../context/UserContext";

function Admin() {
  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];
  const history = useHistory();
  const { isAuthenticated, setUser, user, token, setToken } =
    useContext(UserContext);

  useEffect(() => {
    if (!isAuthenticated) {
      history.push("/login");
    }
  }, [isAuthenticated, history, setUser, token]);

  return (
    <>
      <Header items={HeaderArray} />
      <div className="main">
        <div className="logout position-absolute top-0 end-0 p-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              setUser(null);
              setToken(null);
              history.push("/login");
            }}
          >
            Logout
          </button>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
              <p className="text-center fs-3 ">
                Welcome {user.fullName} to the admin panel
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;
