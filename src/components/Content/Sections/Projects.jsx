import { useState, useEffect } from "react";
import axios from "axios";
import MyIcons from "../../Icons/Icons";
import localjson from "../../../projects.json";
import { SkeletonItem, SkeletonTab } from "../../Skeleton/Skeleton";
import AOS from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      delay: 100,
      once: true,
      disable: window.innerWidth < 768,
    });
    AOS.refresh();
  }, []);

  const [isLoading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  const handleClick = (e) => {
    //Add active class to clicked button
    let btns = document.querySelectorAll(".btn-toggle");
    for (let i = 0; i < btns.length; i++) {
      if (e.target.dataset.toggle === btns[i].dataset.toggle) {
        btns[i].classList.add("active");
      } else {
        btns[i].classList.remove("active");
      }
    }

    let name = e.target.dataset.toggle;
    let items = document.querySelectorAll("div[data-item]");
    //If name is "all" then show all projects
    if (name === "all") {
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("d-none");
      }
      return;
    }

    //Filter through items and add class d-none if not the same with the name
    for (let i = 0; i < items.length; i++) {
      if (items[i].dataset.item !== name) {
        items[i].classList.add("d-none");
      } else {
        items[i].classList.add("aos-animate");
        items[i].classList.remove("d-none");
      }
    }
  };

  useEffect(() => {
    axios
<<<<<<< HEAD
      .get(`${process.env.REACT_APP_BASE_URL}/skills`)
=======
      .get("/skills")
>>>>>>> 87f9aef7a5013e2b0329a5c36a8a97935f3a92a3
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => {
        if (err.message) {
          setProjects(localjson);
        }
      })
      .then(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className="project d-flex flex-column align-items-center justify-content-center">
      <MyIcons.WaveEnd
        style={{ position: "relative", bottom: "1px" }}
      ></MyIcons.WaveEnd>
      <div className="container p-relative pt-5 flex-grow-1" id="projects">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col-lg-12">
            <h1
              data-aos="fade-up"
              className="text-center project-text position-relative m-auto"
            >
              My work
            </h1>
          </div>
        </div>

        {isLoading ? (
          <SkeletonTab />
        ) : (
          <div className="row toggles-row d-flex align-items-center justify-content-center mt-3 ">
            <div
              className="toggles mw-100 d-flex align-items-center justify-content-center "
              data-aos="fade-up"
            >
              <button
                className="btn btn-toggle mx-3 active"
                data-toggle="all"
                onClick={(e) => handleClick(e)}
              >
                All
              </button>
              <button
                className="btn btn-toggle mx-3"
                data-toggle="work"
                onClick={(e) => handleClick(e)}
              >
                Work
              </button>
              <button
                className="btn btn-toggle mx-3"
                data-toggle="personal"
                onClick={(e) => handleClick(e)}
              >
                Personal
              </button>
            </div>
          </div>
        )}

        {isLoading
          ? [1, 2, 3].map((i) => {
              return (
                <SkeletonItem
                  key={i}
                  type={i % 2 === 0 ? "row-reverse" : "row"}
                />
              );
            })
          : projects.map(function (item, index) {
              let items = item.technologies.split(",");

              return (
                <div
                  className={
                    "row d-flex mt-5 projects-row " +
                    (index % 2 === 1 ? "flex-row-reverse" : "")
                  }
                  data-item={item.type}
                  data-aos="fade-up"
                  key={item.className}
                >
                  <div className="col-lg-6">
                    <div
                      className={
                        index === 0
                          ? "screen rebrain"
                          : item.fixed
                          ? "screen fixed"
                          : "screen"
                      }
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                  </div>
                  <div
                    className={
                      "col-lg-6 text-lg-start text-center d-flex flex-column justify-content-between" +
                      (index % 2 === 1 ? " text-lg-end" : "")
                    }
                  >
                    <div className="d-flex flex-column">
                      <h4>{item.title}</h4>
                      <div
                        className={
                          "technologies d-flex flex-wrap  flex-sm-column flex-md-row align-items-center justify-content-center my-3 " +
                          (index % 2 === 1
                            ? "justify-content-lg-end"
                            : "justify-content-lg-start")
                        }
                      >
                        <p className="mb-0 me-2">Technologies:</p>
                        <div className="technology-outer d-flex flex-wrap justify-content-center align-items-center">
                          {items.map(function (technology) {
                            return (
                              <span
                                className="technology my-2 my-lg-0"
                                key={technology.toString()}
                              >
                                {technology}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <p>{item.description}</p>
                    <div
                      className={
                        "links d-flex justify-content-center " +
                        (index % 2 === 1
                          ? "justify-content-lg-end"
                          : "justify-content-lg-start")
                      }
                    >
                      {item.URL.github ? (
                        <a
                          href={item.URL.github}
                          style={{ borderRadius: 50 + "%" }}
                          target="_blank"
                          rel="noreferrer"
                          className="mx-2"
                        >
                          <MyIcons.Github />
                        </a>
                      ) : (
                        ""
                      )}
                      {item.URL.live ? (
                        <a
                          href={item.URL.live}
                          target="_blank"
                          rel="noreferrer"
                          className="mx-2"
                        >
                          <MyIcons.Site />
                        </a>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </section>
  );
}

export default Projects;
