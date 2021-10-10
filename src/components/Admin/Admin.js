import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Admin.css";

function Admin({ isAuthenticated }) {
  const history = useHistory();
  const [user, setUser] = useState("");

  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];

  const token = isAuthenticated.accessToken;
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/", {
          headers: {
            authorization: "Bearer " + token,
          },
        });
        setUser(await res.data.data[0]);
      } catch (err) {
        setUser("");
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("grecaptcha");
        history.push("/login");
      }
    };
    fetchUser();
  }, [token, history]);

  return (
    <>
      <Header items={HeaderArray} />
      <div className="main">
        <div className="logout position-absolute top-0 end-0 p-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("isAuthenticated");
              history.push("/login");
            }}
          >
            Logout
          </button>
        </div>
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-12 d-flex align-items-center justify-content-center">
              <p className="text-center fs-3">
                Welcome to admin panel {user.fullName}.😊
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
