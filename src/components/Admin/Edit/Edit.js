import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Header/Header";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Edit(props) {
  const id = props.match.params.id;
  const history = useHistory();

  const schema = yup.object().shape({
    title: yup.string().required("Title is required."),
    description: yup.string().required("Description is required"),
    technologies: yup.string().required("Technologies are required."),
    className: yup.string().required("Classname is required."),
    type: yup.string().required("Type is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const HeaderArray = [
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
  ];
  const [toUpdate, setToUpdate] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState({
    error: false,
    msg: "",
  });

  const PostUpdate = (e) => {
    axios
      .patch("http://localhost:5000/api/skills/" + id, toUpdate)
      .then(() => history.push("/admin/skills"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/skills/" + id)
      .then((res) => {
        setIsLoading(true);
        setToUpdate(res.data);
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        setisError({
          err: true,
          msg: JSON.stringify(err.message),
        });
      });
  }, [id]);

  if (IsLoading) {
    return (
      <div
        className="Loading min-vh-100 d-flex align-items-center justify-content-center fw-bold text-white"
        style={{ backgroundColor: "var(--light-blue)" }}
      >
        <p className="fs-3">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main min-vh-100">
        <div className="container">
          {!isError.err ? (
            <>
              <h2 className="text-center">Editting skill: {toUpdate.title}</h2>
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit(PostUpdate)}>
                    <div className="row mt-5">
                      <div className="col-lg-6">
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="title">Title</label>
                          <input
                            type="text"
                            id="title"
                            value={toUpdate.title}
                            {...register("title", { required: true })}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                              }));
                            }}
                          />
                          <span>{errors.title?.message}</span>
                          <label htmlFor="description">Description</label>
                          <textarea
                            rows={10}
                            id="description"
                            {...register("description", { required: true })}
                            value={toUpdate.description}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                description: e.target.value,
                              }));
                            }}
                          />
                          <span>{errors.description?.message}</span>
                          <label htmlFor="technologies">Technologies</label>
                          <input
                            type="text"
                            id="technologies"
                            value={toUpdate.technologies.replace(" ", "")}
                            {...register("technologies", { required: true })}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                technologies: e.target.value,
                              }));
                            }}
                          />
                          <span className="text-muted">With commas only.</span>
                          <span>{errors.technologies?.message}</span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group d-flex flex-column">
                          <label htmlFor="type">Type</label>
                          <input
                            type="text"
                            id="type"
                            {...register("type", { required: true })}
                            value={toUpdate.type}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                type: e.target.value,
                              }));
                            }}
                          />
                          <span>{errors.type?.message}</span>
                          <label htmlFor="className">ClassName</label>
                          <input
                            type="text"
                            id="className"
                            {...register("className", { required: true })}
                            value={toUpdate.className}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                className: e.target.value,
                              }));
                            }}
                          />
                          <span>{errors.className?.message}</span>
                          <label htmlFor="url_live">URL Live</label>
                          <input
                            type="text"
                            id="url_live"
                            value={
                              toUpdate.URL.live === undefined
                                ? ""
                                : toUpdate.URL.live
                            }
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                URL: {
                                  ...prevState.URL,
                                  live: e.target.value,
                                },
                              }));
                            }}
                          />
                          <label htmlFor="url_github">URL Github</label>
                          <input
                            type="text"
                            id="url_github"
                            value={
                              toUpdate.URL.github === undefined
                                ? ""
                                : toUpdate.URL.github
                            }
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                URL: {
                                  ...prevState.URL,
                                  github: e.target.value,
                                },
                              }));
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row text-center mt-5 w-100">
                      <div className="col-lg-6 offset-lg-3 d-flex align-items-center justify-content-evenly ">
                        <Button
                          variant="secondary"
                          onClick={() => history.push("/admin/skills")}
                        >
                          Back
                        </Button>
                        <Button type="submit" variant="info">
                          Update
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </>
          ) : (
            <div className="row text-center">
              <div className="col-lg-12">
                <p className=" fs-4">
                  Error fetching the ID: {id} with message:{" "}
                  {isError.msg.replaceAll('"', "")}
                </p>
                <Link to="/admin/skills">
                  <Button variant="info">Go back</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Edit;
