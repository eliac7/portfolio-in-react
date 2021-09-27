import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Button from "react-bootstrap/Button";
import "./Skills.css";
import { useHistory } from "react-router-dom";

function Skills() {
  const history = useHistory();

  const HeaderArray = [
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
  ];

  const [skills, setSkills] = useState([]);
  const [ErrorGetSkills, setErrorGetSkills] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/skills")
      .then((res) => setSkills(res.data))
      .catch((err) => setErrorGetSkills(true));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/api/skills/" + id)
      .then(() => {
        console.log(`${id} was deleted successfully.`);
        const remainingResults = skills.filter((skill) => skill._id !== id);
        setSkills(remainingResults);
      })
      .catch((err) => console.log(err));
  };

  const routeChange = (id) => {
    let path = `/admin/edit/${id}`;
    history.push(path);
  };

  return (
    <>
      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="container" id="allskills">
          <h2 className="text-center">All Skills</h2>
          <div className="row min-vh-100">
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
                    <img
                      className="card-img-top"
                      src="https://i1.wp.com/techbooky.com/wp-content/uploads/2020/02/project-management.png?resize=750%2C504&ssl=1"
                      alt="Placeholder"
                    />
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
                          onClick={() => handleDelete(skill._id)}
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
