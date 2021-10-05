import React, { useState, useEffect, useMemo } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap/";
import Modal from "react-bootstrap/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import axios from "axios";

function EditModal(props) {
  const [isUpdated, setIsUpdated] = useState(undefined);
  const accessToken = JSON.parse(
    localStorage.getItem("isAuthenticated")
  ).accessToken;

  const schema = yup.object().shape(
    {
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
        .nullable()
        .notRequired()
        .when("password", {
          is: (value) => value?.length,
          then: (rule) =>
            rule.min(6, "Password is too short - should be 6 chars minimum."),
        }),
      isAdmin: yup.string(),
    },
    [
      // Add Cyclic deps here because when require itself
      ["password", "password"],
    ]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: useMemo(() => {
      return props.show.data;
    }, [props]),
    resolver: yupResolver(schema),
  });

  const headers = {
    authorization: "Bearer " + accessToken,
  };

  const submitForm = async (e) => {
    const id = props.show.data._id;

    await axios
      .patch("http://localhost:5000/api/users/update/" + id, e, {
        headers,
      })
      .then(() => setIsUpdated(true))
      .catch((err) => {
        if (err) {
          if (err.response.data.errors) {
            setIsUpdated(err.response.data.errors);
          } else if (err.response.message) {
            setIsUpdated(err.message.toString());
          } else {
            setIsUpdated("Request error. Please try again later.");
          }
        }
      });
    reset();
  };

  useEffect(() => {
    reset(props.show.data);
  }, [props.show.data, reset]);

  return (
    <>
      <Modal
        show={props.show.open}
        onHide={() => {
          props.handleShow((prevState) => ({
            ...prevState,
            open: false,
          }));
        }}
        size="lg"
      >
        <Form onSubmit={handleSubmit(submitForm)}>
          <Modal.Header>
            <Modal.Title>
              Edit user: {props.show?.data ? props.show.data.username : ""}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Container>
              <Row>
                <Col>
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
                          name="fullName"
                          {...register("fullName", { required: true })}
                        />
                        <span>{errors.fullName?.message}</span>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
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
                          name="username"
                          {...register("username", { required: true })}
                        />
                        <span>{errors.username?.message}</span>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="text"
                          name="password"
                          placeholder="Enter new password"
                          autoComplete="off"
                          {...register("password")}
                        />

                        <span>{errors.password?.message}</span>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3 d-flex" controlId="switch">
                    <Form.Check
                      type="switch"
                      id="admin-switch"
                      label="Will be admin?"
                      name="isAdmin"
                      {...register("isAdmin", { required: true })}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                props.handleShow((prevState) => ({
                  ...prevState,
                  open: false,
                }));
                setIsUpdated(undefined);
              }}
            >
              {isUpdated ? "Close" : "Cancel"}
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={Object.entries(errors).length}
            >
              Update
            </Button>
          </Modal.Footer>
          {isUpdated && (
            <p className="text-center text-success">Updated successfully.</p>
          )}
        </Form>
      </Modal>
    </>
  );
}

export default EditModal;
