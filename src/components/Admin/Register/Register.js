import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const HeaderArray = [
  { name: "Home", link: "/admin/" },
  { name: "All Skills", link: "/admin/skills" },
  { name: "Add New Skill", link: "/admin/new" },
  { name: "Register user", link: "/admin/register" },
  { name: "All users", link: "/admin/users" },
];
const token = JSON.parse(localStorage.getItem("isAuthenticated"))?.accessToken;

const headers = {
  authorization: "Bearer " + token,
};

const Register = () => {
  const [counter, setCounter] = useState(3);

  const history = useHistory();

  const [isError, setIsError] = useState("");
  const [isValid, setIsValid] = useState(false);

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required."),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
      .required("Email is required"),
    username: yup.string().required("Username are required."),
    password: yup
      .string()
      .min(6, "Password is too short - should be 6 chars minimum.")
      .required("Password is required."),
    isAdmin: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitForm = async (e) => {
    await axios
      .post("http://localhost:5000/api/users/register", e, {
        headers,
      })
      .then(() => {
        setIsValid(true);
      })
      .catch((err) => {
        if (err) {
          if (err.response.data.errors) {
            setIsError(err.response.data.errors);
          } else if (err.response.message) {
            setIsError(err.message.toString());
          } else {
            setIsError("Request error. Please try again later.");
          }
        }
      });
  };

  //useEffect of counter
  useEffect(() => {
    let intervalId;

    if (isValid && counter >= 0) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    if (counter === 0) {
      history.push("/admin/users");
    }

    return () => clearInterval(intervalId);
  }, [isValid, history, counter]);

  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <Container>
          <h2 className="text-center mb-5">Register new user</h2>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit(submitForm)}>
                <Row>
                  <Col
                    lg={6}
                    className="d-flex justify-content-center flex-column"
                  >
                    <Form.Group className="mb-3" controlId="fullname">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter full name"
                        {...register("fullName", { required: true })}
                      />
                      <span>{errors.fullName?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        {...register("email", { required: true })}
                      />
                      <span>{errors.email?.message}</span>
                    </Form.Group>
                  </Col>
                  <Col
                    lg={6}
                    className="d-flex justify-content-center flex-column"
                  >
                    <Form.Group className="mb-3" controlId="username">
                      <Form.Label>Username</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter username"
                        {...register("username", { required: true })}
                      />
                      <span>{errors.username?.message}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                      />
                      <span>{errors.password?.message}</span>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="switch">
                  <Form.Check
                    type="switch"
                    id="admin-switch"
                    label="Will be admin?"
                    {...register("isAdmin", { required: true })}
                  />
                </Form.Group>
                <Row className="text-center mt-3">
                  <Col>
                    <Button variant="primary" type="submit" disabled={isValid}>
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          {isError && <p className="text-danger text-center"> {isError} </p>}
          {isValid && (
            <>
              <p className="text-success text-center mt-3">
                User has been created successfully.
              </p>
              <p className="text-center mt-1">
                You will be redirected in {counter}
              </p>
            </>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Register;
