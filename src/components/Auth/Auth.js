import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Auth = () => {
  const history = useHistory();

  const HeaderArray = [{ name: "Login", link: "/login" }];

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);
  const [successRecaptcha, setSuccessRecaptcha] = useState(false);

  const handleLoaded = (_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha
        .execute(process.env.REACT_APP_RECAPTCHA_SITE_KEY, {
          action: "homepage",
        })
        .then((token) => {
          setSuccessRecaptcha(true);
        });
    });
  };

  useEffect(() => {
    // Add reCaptchaV3
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated")) {
      history.push("/admin");
    }
  }, [history]);

  async function loginUser(credentials) {
    try {
      setIsRequesting(true);
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        credentials
      );
      const data = res.data.data;
      return data;
    } catch (err) {
      if (err) {
        if (err.request) {
          setIsError("Request error. Please try again later.");
        } else if (err.response.data && err.response.data !== undefined) {
          setIsError(err.response.data.msg);
        } else {
          setIsError(err.message.toString());
        }
      }
    }
    setIsRequesting(false);
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
                      required
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
                      required
                      onChange={(e) => {
                        isError && setIsError("");
                        setPassword(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="col-lg-12">
                    <div
                      className="g-recaptcha"
                      data-sitekey="_reCAPTCHA_site_key_"
                      data-size="invisible"
                    ></div>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-light float-end"
                      disabled={!successRecaptcha || isRequesting}
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
