import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Button from "react-bootstrap/Button";
import "./Skills.css";
import { useHistory } from "react-router-dom";
import { getStorage, ref, deleteObject } from "firebase/storage";
import ModalDialog from "../Modal/ModalDialog";

function Skills() {
  const history = useHistory();

  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];

  const [skills, setSkills] = useState([]);
  const [ErrorGetSkills, setErrorGetSkills] = useState(false);
  const [skillToDelete, setskillToDelete] = useState([]);

  const [show, setShow] = useState(false);
  const [toDelete, settoDelete] = useState(null);

  const Showing = (val) => {
    setShow(val);
  };
  const Deleting = (val) => {
    settoDelete(val);
    if (val) {
      axios
        .delete("/skills/" + skillToDelete.id)
        .then(() => {
          console.log(`${skillToDelete.id} was deleted successfully.`);
          const remainingResults = skills.filter(
            (skill) => skill._id !== skillToDelete.id
          );
          setSkills(remainingResults);
        })
        .catch((err) => console.log(err))
        .then(() => setShow(false));

      if (skillToDelete.image) {
        const storage = getStorage();
        const fileRef = ref(storage, skillToDelete.image);
        console.log(fileRef);
        deleteObject(fileRef)
          .then(() => {
            console.log("Image deleted successfully.");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  const routeChange = (id) => {
    let path = `/admin/edit/${id}`;
    history.push(path);
  };

  useEffect(() => {
    axios
      .get(" /skills")
      .then((res) => setSkills(res.data))
      .catch(() => setErrorGetSkills(true));
  }, []);

  return (
    <>
      <ModalDialog
        showModal={show}
        handleModal={Showing}
        deleteItem={toDelete}
        skill={skillToDelete}
        handleDeleteItem={Deleting}
      ></ModalDialog>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="container" id="allskills">
          <h2 className="text-center">All Skills</h2>
          <div className="row ">
            <div className="col-lg-12 d-flex flex-wrap justify-content-center ">
              {ErrorGetSkills && (
                <p className="fs-5 text-info text-center text-break ">
                  An error occured fetching the skills. Please try again later.
                </p>
              )}
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="card m-2"
                    style={{ width: "20rem" }}
                  >
                    <div
                      style={{
                        position: "relative",
                        height: "150px",
                      }}
                    >
                      <img
                        className="card-img-top position-absolute h-100 w-100"
                        style={{ inset: 0, objectFit: "cover" }}
                        src={
                          skill.image
                            ? skill.image
                            : "https://via.placeholder.com/300/D3D3D3/FFFFFFF/?text=Project"
                        }
                        alt="Placeholder"
                      />
                    </div>

                    <div className="card-body d-flex flex-column justify-content-between">
                      <div>
                        <h5 className="card-title text-center">
                          {skill.title}
                        </h5>
                        <h6 className="card-subtitle text-center text-muted">
                          Type:{" "}
                          <span
                            className="ms-1"
                            style={{
                              color:
                                skill.type === "work" ? "#cf7873" : "#7e00ff",
                            }}
                          >
                            {skill.type}
                          </span>
                        </h6>
                      </div>
                      <p className="card-text mt-3">{skill.description}</p>
                      <div className="buttons d-flex align-items-center justify-content-evenly">
                        <Button
                          variant="secondary"
                          onClick={() => routeChange(skill._id)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => {
                            setShow(!show);
                            setskillToDelete({
                              title: skill.title,
                              id: skill._id,
                              image: skill?.image,
                            });
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Skills;
