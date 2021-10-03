import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

const Auth = () => {
  const history = useHistory();

  const HeaderArray = [{ name: "Login", link: "/login" }];

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState("");
  const [successRecaptcha, setSuccessRecaptcha] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      history.push("/admin");
    }
  }, [history]);

  async function loginUser(credentials) {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        credentials
      );
      const data = res.data.data;
      return data;
    } catch (err) {
      setIsError(err.response.data.msg);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token) {
      localStorage.setItem("isAuthenticated", JSON.stringify(token));
      history.push("/admin");
    }
  };
  return (
    <>
      <Header items={HeaderArray} />
      <div className="main ">
        <div className="container ">
          <div className="row d-flex align-items-center h-100 ">
            <div className="col-md-4 offset-md-4">
              <div className="login-form bg-dark mt-4 p-4 rounded-3">
                <form className="row g-3" onSubmit={handleSubmit}>
                  <h4>Welcome Back</h4>
                  <div className="col-12">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      onChange={(e) => {
                        isError && setIsError("");
                        setUserName(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-12">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      autoComplete="on"
                      className="form-control"
                      placeholder="Password"
                      onChange={(e) => {
                        isError && setIsError("");
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-12">
                    <GoogleReCaptchaProvider
                      reCaptchaKey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                    >
                      <GoogleReCaptcha
                        onVerify={() => setSuccessRecaptcha(true)}
                      />
                    </GoogleReCaptchaProvider>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-light float-end"
                      disabled={!successRecaptcha}
                    >
                      Login
                    </button>
                  </div>
                  {isError ? (
                    <div className="col-12">
                      <p className="text-danger text-center">{isError}</p>
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Auth;