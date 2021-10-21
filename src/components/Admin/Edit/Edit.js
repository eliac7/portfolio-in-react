import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../../Header/Header";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  getStorage,
  ref,
  deleteObject,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

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
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];
  const [toUpdate, setToUpdate] = useState([]);
  const [tempTitle, settempTitle] = useState("");
  const [IsLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState({
    error: false,
    msg: "",
  });
  const [image, setImage] = useState("");

  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(3);

  const updateToAPI = async (id, data) => {
    await axios
      .patch(
        `https://new-projects-api.herokuapp.com/api/skills/${
          id && id !== undefined ? id : ""
        }`,
        data
      )
      .then((res) => {
        console.log(res);
        setIsActive(!isActive);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const PostUpdate = () => {
    const storage = getStorage();
    if (toUpdate.image && toUpdate.image !== undefined) {
      //If we have already image and not undefined
      if (image) {
        //And if we have a new image, then delete the existed one

        const storageRef = ref(storage, `/skills/${uuidv4()}-${image.name}`);

        const fileRef = ref(storage, toUpdate.image);
        deleteObject(fileRef)
          .then(() => {
            console.log("Image deleted successfully.");
          })
          .catch((error) => {
            console.log(error);
          })
          .then(() => {
            uploadBytes(storageRef, image).then((snapshot) => {
              getDownloadURL(snapshot.ref)
                .then((downloadURL) => {
                  return downloadURL;
                })
                .then((url) => {
                  toUpdate["image"] = url;
                })
                .then(() => {
                  updateToAPI(id, toUpdate);
                });
            });
          });
      } else if (!image) {
        //else if we don't have a new image, then just update our fieldss
        updateToAPI(id, toUpdate);
      }
    } else if (!toUpdate.image) {
      //if we don't have an already uploaded image
      if (image) {
        //and we have a new image

        const storageRef = ref(storage, `/skills/${uuidv4()}-${image.name}`);
        uploadBytes(storageRef, image).then((snapshot) => {
          getDownloadURL(snapshot.ref)
            .then((downloadURL) => {
              return downloadURL;
            })
            .then((downloadURL) => {
              console.log(downloadURL);
              toUpdate["image"] = downloadURL;
            })
            .then(() => {
              console.log(toUpdate);
              updateToAPI(id, toUpdate);
            });
        });
      } else {
        //else just update the fields
        axios
          .patch(
            "https://new-projects-api.herokuapp.com/api/skills/" + id,
            toUpdate
          )
          .then((res) => {
            console.log(res);
            setIsActive(!isActive);
          })
          .catch((err) => console.log(err));
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://new-projects-api.herokuapp.com/api/skills/" + id)
      .then((res) => {
        setIsLoading(true);
        setToUpdate(res.data);
        settempTitle(res.data.title);
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
              <h2 className="text-center">Editing skill: {tempTitle}</h2>
              <div className="row">
                <div className="col-lg-12">
                  <form onSubmit={handleSubmit(PostUpdate)}>
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
                            value={toUpdate.title}
                            required
                            {...register("title", { required: true })}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                              }));
                            }}
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
                            value={toUpdate.description}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                description: e.target.value,
                              }));
                            }}
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
                            value={toUpdate.technologies.replace(" ", "")}
                            required
                            {...register("technologies", { required: true })}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                technologies: e.target.value,
                              }));
                            }}
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
                              {...register("fixed")}
                              onChange={function (e) {
                                setToUpdate((prevState) => ({
                                  ...prevState,
                                  fixed: e.target.checked,
                                }));
                              }}
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
                            value={toUpdate.type}
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                type: e.target.value,
                              }));
                            }}
                          />
                          <span>{errors.type?.message}</span>
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label
                            className="form-label my-2"
                            htmlFor="className"
                          >
                            Classname
                            <span>*</span>
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="className"
                            {...register("className", { required: true })}
                            value={toUpdate.className}
                            required
                            onChange={function (e) {
                              setToUpdate((prevState) => ({
                                ...prevState,
                                className: e.target.value,
                              }));
                            }}
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
                            className="form-control"
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
                        </div>
                        <div className="form-group d-flex flex-column">
                          <label
                            className="form-label my-2"
                            htmlFor="url_github"
                          >
                            URL Github
                          </label>
                          <input
                            type="text"
                            id="url_github"
                            className="form-control"
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

                          {toUpdate.image ? (
                            <div className="w-100 mt-3 text-center d-flex flex-column justify-content-center align-items-center">
                              <label className="form-label">
                                Current image:
                              </label>
                              <div
                                className="position-relative "
                                style={{ width: "250px" }}
                              >
                                <img src={toUpdate.image} className="" alt="" />
                              </div>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="form-group d-flex flex-column my-2">
                          <label htmlFor="formFile" className="form-label">
                            {toUpdate.image ? "Replace image with" : "Image"}
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
                          variant="secondary"
                          onClick={() => history.push("/admin/skills")}
                        >
                          Back
                        </Button>
                        <Button type="submit" variant="info">
                          Update
                        </Button>
                      </div>
                      {isActive ? (
                        <>
                          <p className="text-success mt-2">
                            Your new skill has been created successfully!
                          </p>
                          <p>
                            You will be redirected back to skills in {counter}
                            {counter <= 0 ? history.push("/admin/skills") : ""}
                          </p>
                        </>
                      ) : (
                        ""
                      )}
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
