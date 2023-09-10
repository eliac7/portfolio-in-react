import { useState, useEffect } from "react";
import axios from "axios";
import MyIcons from "../../Icons/Icons";
import localjson from "../../../projects.json";
import { SkeletonItem, SkeletonTab } from "../../Skeleton/Skeleton";
import { Fade } from "react-reveal";

function Projects() {
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [activeList, setActiveList] = useState([]);

  const handleClick = (e) => {
    setActiveTab(e.target.dataset.toggle);

    if (e.target.dataset.toggle === "all") {
      setActiveList(list);
    } else {
      setActiveList(
        list.filter((item) => item.type === e.target.dataset.toggle)
      );
    }
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/skills`)
      .then((res) => {
        setList(res.data);
        setActiveList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setList(localjson);
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
            <h1 className="text-center project-text position-relative m-auto">
              My work
            </h1>
          </div>
        </div>

        {isLoading ? (
          <SkeletonTab />
        ) : list.length > 0 ? (
          <div className="row toggles-row d-flex align-items-center justify-content-center mt-3 ">
            <div className="toggles mw-100 d-flex align-items-center justify-content-center gap-3">
              <button
                className={`btn btn-toggle ${
                  activeTab === "all" ? "active" : ""
                }`}
                data-toggle="all"
                onClick={(e) => handleClick(e)}
              >
                All
              </button>
              <button
                className={`btn btn-toggle ${
                  activeTab === "work" ? "active" : ""
                }`}
                data-toggle="work"
                onClick={(e) => handleClick(e)}
              >
                Work
              </button>
              <button
                className={`btn btn-toggle ${
                  activeTab === "personal" ? "active" : ""
                }`}
                data-toggle="personal"
                onClick={(e) => handleClick(e)}
              >
                Personal
              </button>
            </div>
          </div>
        ) : (
          // show an error message if there are no projects
          <div className="row d-flex flex-column justify-content-center align-items-center mt-5">
            <div className="col-lg-12">
              {/* h5 with error */}
              <h5 className="text-center text-danger position-relative m-auto">
                <i className="fas fa-smile-down"></i> An error occured while
                fetching projects. Please try again later.
              </h5>
            </div>
          </div>
        )}

        {isLoading
          ? loading()
          : activeList.map(function (item, index) {
              let items = item.technologies.split(",");

              return (
                <Fade bottom key={index} duration={index * 100 + 1000}>
                  <div
                    className={
                      "row d-flex mt-5 projects-row " +
                      (index % 2 === 1 ? "flex-row-reverse" : "")
                    }
                    data-item={item.type}
                    key={item.className}
                  >
                    <div className="col-lg-6">
                      {item.image.endsWith(".mp4") ? (
                        <video
                          className="project-video"
                          src={item.image}
                          autoPlay
                          loop
                          muted
                        ></video>
                      ) : (
                        <div
                          className={`screen ${item.className} ${
                            item.fixed ? "fixed" : ""
                          }`}
                          style={{
                            backgroundImage: `url(${item.image})`,
                          }}
                        ></div>
                      )}
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
                          <div className="technology-outer d-flex flex-wrap justify-content-center align-items-center gap-2">
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
                </Fade>
              );
            })}
      </div>
    </section>
  );
}

function loading() {
  return [1, 2, 3].map((item) => {
    return (
      <SkeletonItem key={item} type={item % 2 === 0 ? "row-reverse" : "row"} />
    );
  });
}

export default Projects;
