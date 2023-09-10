import React, { useState, useRef, useEffect } from "react";
import "./NewSkill.css";
import Header from "../../Header/Header";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";
import Footer from "../../Footer/Footer";

function NewSkill() {
  const formRef = useRef();
  const history = useHistory();
  const [FormSubmitted, setFormSubmitted] = useState(null);
  const [FormSubmitting, setFormSubmitting] = useState(false);
  const [image, setImage] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    let intervalId;

    if (isActive && counter >= 0) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    if (counter === 0) {
      history.push("/admin/skills");
    }

    return () => clearInterval(intervalId);
  }, [isActive, history, counter]);

  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];

  const schema = yup.object().shape({
    title: yup.string().required("Title is required."),
    description: yup.string().required("Description is required"),
    technologies: yup.string().required("Technologies are required."),
    className: yup.string().required("Classname is required."),
    type: yup.string().required("Type is required."),
    fixed: yup.boolean(),
    URL: yup.object().shape({
      live: yup.string().url("Live must be a valid URL."),
      github: yup.string().url("Github must be a valid URL."),
    }),
  });

  const SubmitToAPI = (data) => {
    axios
      .post(process.env.REACT_APP_BASE_URL + "/skills", data)
      .then(() => {
        setFormSubmitted(true);
        setFormSubmitting(true);
        setIsActive(!isActive);
      })
      .catch((err) => {
        setFormSubmitted(false);
        setFormSubmitting(false);
        console.log(err);
      });
  };

  const SubmittedForm = (e) => {
    if (image) {
      const formData = new FormData();
      formData.append("image", image);
      //upload to https://api.imgbb.com/1/upload
      axios
        .post("https://api.imgbb.com/1/upload", formData, {
          params: {
            key: process.env.REACT_APP_IMGBB_KEY,
          },
        })
        .then((res) => {
          SubmitToAPI({
            ...e,
            image: res.data.data.display_url,
            imageDeleteUrl: res.data.data.delete_url,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      SubmitToAPI(e);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="container">
          <h2 className="text-center">Add new skill</h2>
          <div className="row ">
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={handleSubmit(SubmittedForm)} ref={formRef}>
                  <div className="row mt-5">
                    <div className="col-lg-6 d-flex flex-column">
                      <div className="form-group d-flex flex-column">
                        <label htmlFor="title" className="form-label my-2">
                          Title
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="title"
                          required
                          {...register("title", { required: true })}
                        />
                        <span>{errors.title?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label
                          htmlFor="description"
                          className="form-label my-2"
                        >
                          Description
                          <span>*</span>
                        </label>
                        <textarea
                          rows={6}
                          className="form-control"
                          id="description"
                          required
                          {...register("description", { required: true })}
                        />
                        <span>{errors.description?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label
                          className="form-label my-2"
                          htmlFor="technologies"
                        >
                          Technologies
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="technologies"
                          className="form-control"
                          required
                          {...register("technologies", { required: true })}
                        />
                        <span className="form-text text-muted">
                          With commas only.
                        </span>
                        <span>{errors.technologies?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <div className="form-check form-switch my-3">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="fixedImage"
                            {...register("fixed", { required: true })}
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="fixedImage"
                          >
                            Fixed image?
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column justify-content-around">
                      <div className="form-group d-flex flex-column">
                        <label className="form-label my-2" htmlFor="type">
                          Type
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          id="type"
                          className="form-control"
                          required
                          {...register("type", { required: true })}
                        />
                        <span>{errors.type?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label className="form-label my-2" htmlFor="className">
                          Classname
                          <span>*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="className"
                          required
                          {...register("className", { required: true })}
                        />
                        <span>{errors.className?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label className="form-label my-2" htmlFor="url_live">
                          URL Live
                        </label>
                        <input
                          type="text"
                          id="url_live"
                          placeholder="https://www."
                          className="form-control"
                          {...register("URL.live")}
                        />
                        <span>{errors?.URL?.live?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label className="form-label my-2" htmlFor="url_github">
                          URL Github
                        </label>
                        <input
                          type="text"
                          id="url_github"
                          placeholder="https://www."
                          className="form-control"
                          {...register("URL.github")}
                        />
                        <span>{errors?.URL?.github?.message}</span>
                      </div>
                      <div className="form-group d-flex flex-column">
                        <label htmlFor="formFile" className="form-label my-2">
                          Image or Video
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                          }}
                          id="formFile"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="row text-center mt-5 w-100">
                    <div className="col-lg-6 offset-lg-3 d-flex align-items-center justify-content-evenly ">
                      <Button
                        type="submit"
                        variant="success"
                        disabled={
                          FormSubmitting || Object.keys(errors).length > 0
                        }
                      >
                        Add
                      </Button>
                    </div>
                    {(() => {
                      if (FormSubmitted) {
                        return (
                          <>
                            <p className="text-success mt-2">
                              Your new skill has been created successfully!
                            </p>
                            <p>You will be redirected to skills in {counter}</p>
                          </>
                        );
                      } else {
                        if (
                          FormSubmitted !== undefined &&
                          FormSubmitted !== null
                        ) {
                          return (
                            <span className="text-danger mt-2">
                              An error occured. Please try again later.
                            </span>
                          );
                        }
                      }
                    })()}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewSkill;
