import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import "../Content/Content.css";
import FormExample from "../Form/Form.js";
import ContentItem from "../ContentItem/ContentItem";
import MyIcons from "../Icons/Icons";
import localjson from "../../projects.json";

import AOS from "aos";
import "aos/dist/aos.css";
import { SkeletonItem, SkeletonTab } from "../Skeleton/Skeleton";

AOS.init({ delay: 100, once: true, disable: window.innerWidth < 768 });

const age = new Date().getFullYear() - Number(1997);
const URL_TO_FETCH = "https://new-projects-api.herokuapp.com/api/skills";
function Content() {
  const [isLoading, setLoading] = useState(true);
  let [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(URL_TO_FETCH)
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

  function handleToggler(e) {
    AOS.refresh();
    let work = document.querySelectorAll('div[data-item="work"]');
    let personal = document.querySelectorAll('div[data-item="personal"]');
    let all = [...work, ...personal];

    let btns = document.querySelectorAll(".btn-toggle");

    let name = e.target.dataset.toggle;

    for (let i = 0; i < btns.length; i++) {
      if (name === btns[i].dataset.toggle) {
        let items = document.querySelectorAll(
          `div[data-item="${name.toString()}"]`
        );
        if (name !== "all") {
          for (let i = 0; i < all.length; i++) {
            all[i].classList.add("d-none");
          }
          for (let i = 0; i < items.length; i++) {
            items[i].classList.remove("d-none");
          }
        } else {
          for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("d-none");
          }
        }
        btns[i].classList.add("active");
      } else {
        btns[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <section className="hero d-flex flex-column align-items-center justify-content-center">
        <div
          className="container p-relative pt-5 flex-grow-1"
          style={{ zIndex: 1 }}
          data-aos="fade-in"
          id="about"
        >
          <div className="row flex-column flex-md-row hero-row">
            <div className="col">
              <div className="info d-flex flex-column justify-content-start ">
                <h1 className="hero-text">
                  Hi, I'm <br className="br-hero" />
                  Elias
                </h1>
                <h4> Web Developer and lover of good code & food.</h4>
                <p className="mt-3">
                  Hello, and welcome to my site! My full name is Ilias Nikolaos
                  Thalassochoritis (call me Ilias), and I am a Web Developer. I
                  am {age} years old Studied Computer Science at University of
                  Thessaly and graduated in 2021. I live in Athens, GR.
                </p>
                <p className="mt-3">
                  I'm always thrilled to learn about new technologies, having a
                  great interest in Web Development and AI.
                </p>
                <p className="mt-3">
                  Aside from writing lines of code and trying to fight bugs I
                  enjoy taking photos and riding my car.
                </p>
                <a href="#contact" className="btn btn-custom rounded-5 mr-auto">
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center position-relative me-col">
              <div className="image-behind"></div>
              <div className="image">
                <img
                  src={MyIcons.Me}
                  className="me"
                  alt="Ilias Thalassochoritis"
                  loading="lazy"
                />
              </div>
              <div className="image-front"></div>
            </div>
          </div>
        </div>
        <MyIcons.WaveStart style={{ position: "relative", bottom: "-1px" }} />
      </section>
      <section className="skills d-flex align-items-center justify-content-center">
        <div className="container pt-5" id="skills">
          <div className="row">
            <div className="col-lg-12">
              <h1
                data-aos="fade-up"
                className="text-center skills-text position-relative m-auto "
              >
                Skills
              </h1>
              <div className="skillsContainer ">
                <ul className="skillsGrid">
                  <ContentItem name="HTML" src={MyIcons.HTML}></ContentItem>
                  <ContentItem name="CSS" src={MyIcons.CSS}></ContentItem>
                  <ContentItem name="SASS" src={MyIcons.SASS}></ContentItem>
                  <ContentItem
                    name="Bootstrap"
                    src={MyIcons.Bootstrap}
                  ></ContentItem>
                  <ContentItem
                    name="Javascript"
                    src={MyIcons.Javascript}
                  ></ContentItem>
                  <ContentItem name="jQuery" src={MyIcons.jQuery}></ContentItem>
                  <ContentItem
                    name="WordPress"
                    src={MyIcons.WordPress}
                  ></ContentItem>
                  <ContentItem name="PHP" src={MyIcons.PHP}></ContentItem>
                  <ContentItem name="Python" src={MyIcons.Python}></ContentItem>
                  <ContentItem
                    name="Node.js"
                    src={MyIcons.NodeJS}
                  ></ContentItem>
                  <ContentItem name="API" src={MyIcons.API}></ContentItem>
                  <ContentItem
                    name="React"
                    src={MyIcons.ReactLogo}
                  ></ContentItem>
                  <ContentItem name="GIT" src={MyIcons.Git}></ContentItem>
                  <ContentItem name="Windows" src={MyIcons.MS}></ContentItem>
                  <ContentItem name="Linux" src={MyIcons.Linux}></ContentItem>
                  <ContentItem name="VSCode" src={MyIcons.VSCode}></ContentItem>
                  <ContentItem name="Photoshop" src={MyIcons.PS}></ContentItem>
                  <ContentItem
                    name="Lightroom"
                    src={MyIcons.Lightroom}
                  ></ContentItem>
                </ul>
              </div>
              <p className="text-center fst-italic mt-5 text-secondary">
                Missing a skill? Don't worry! I pick things up pretty quick.
              </p>
            </div>
          </div>
        </div>
      </section>
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
                  onClick={(e) => handleToggler(e)}
                >
                  All
                </button>
                <button
                  className="btn btn-toggle mx-3"
                  data-toggle="work"
                  onClick={(e) => handleToggler(e)}
                >
                  Work
                </button>
                <button
                  className="btn btn-toggle mx-3"
                  data-toggle="personal"
                  onClick={(e) => handleToggler(e)}
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
                            : item.fixed === "true"
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
                        (index % 2 === 1 ? " text-lg-end " : "")
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
      <section className="contact position-relative">
        <MyIcons.WaveEndGreen style={{ position: "relative", bottom: "1px" }} />
        <div className="container py-5" data-aos="fade-up" id="contact">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-6">
              <h1 className="text-center touch-text position-relative m-auto">
                Get in Touch
              </h1>
              <FormExample></FormExample>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center my-5 my-lg-0">
              <MyIcons.MailMan></MyIcons.MailMan>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
