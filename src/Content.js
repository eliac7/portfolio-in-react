import React from "react";
import "./Content.css";
import FormExample from "./Form.js";
import { ReactComponent as WaveStart } from "./assets/images/wave_start.svg";
import { ReactComponent as WaveEnd } from "./assets/images/wave_end.svg";
import { ReactComponent as WaveEndGreen } from "./assets/images/wave_end_green.svg";
import { ReactComponent as MailMan } from "./assets/images/MailMan.svg";

import Me from "./assets/images/me.webp";
import HTML from "./assets/images/logos/html.svg";
import CSS from "./assets/images/logos/css.svg";
import Javascript from "./assets/images/logos/javascript.svg";
import Git from "./assets/images/logos/git.svg";
import API from "./assets/images/logos/api.svg";
import jQuery from "./assets/images/logos/jquery.svg";
import MS from "./assets/images/logos/microsoftWindows.svg";
import ReactLogo from "./assets/images/logos/react.svg";
import SASS from "./assets/images/logos/sass.svg";
import VSCode from "./assets/images/logos/vscode.svg";
import Bootstrap from "./assets/images/logos/bootstrap.svg";
import PS from "./assets/images/logos/ps.svg";
import Lightroom from "./assets/images/logos/lightroom.svg";
import Python from "./assets/images/logos/python.svg";
import WordPress from "./assets/images/logos/wp.svg";
import PHP from "./assets/images/logos/php.svg";
import Linux from "./assets/images/logos/linux.svg";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({ delay: 100, once: true });

const age = new Date().getFullYear() - Number(1997);

const projects = [
  {
    name: "Rebrain Jobs",
    className: "rebrain",
    type: "work",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro enim ratione. Expedita explicabo dicta obcaecati quis voluptas laudantium sit placeat illo provident nobis deleniti sapiente, recusandae laborum sed odit.",
    technologies: "WordPress, PHP,REST API,JavaScript",
  },
  {
    name: "Support Greek Music",
    type: "work",
    className: "sgm",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro enim ratione. Expedita explicabo dicta obcaecati quis voluptas laudantium sit placeat illo provident nobis deleniti sapiente, recusandae laborum sed odit.",
    technologies: "WordPress, PHP,JavaScript",
  },
  {
    name: "Ampelokipi - Menemeni",
    type: "work",
    className: "ampelokipi",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro enim ratione. Expedita explicabo dicta obcaecati quis voluptas laudantium sit placeat illo provident nobis deleniti sapiente, recusandae laborum sed odit.",
    technologies: "WordPress, PHP, JavaScript",
  },
  {
    name: "DEDDIE Chatbot",
    type: "work",
    className: "chatbot",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro enim ratione. Expedita explicabo dicta obcaecati quis voluptas laudantium sit placeat illo provident nobis deleniti sapiente, recusandae laborum sed odit.",
    technologies: "WordPress, PHP, JavaScript",
  },
  {
    name: "Thesis",
    type: "personal",
    className: "thesis",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis porro enim ratione. Expedita explicabo dicta obcaecati quis voluptas laudantium sit placeat illo provident nobis deleniti sapiente, recusandae laborum sed odit.",
    technologies: "Python, JavaScript, REST API",
  },
];

window.addEventListener("load", function () {
  const cursor = document.querySelector(".cursor");

  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("mousedown", mouseDownHandler);
  window.addEventListener("mouseup", mouseUpHandler);

  function mouseMoveHandler(e) {
    cursor.style.display = "block";
    cursor.style.left = e.clientX - cursor.offsetWidth / 2.15 + "px";
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    cursor.style.opacity = 1;
  }

  function mouseUpHandler() {
    cursor.style.transform = "scale(1)";
  }

  function mouseDownHandler() {
    cursor.style.transform = "scale(1.5)";
  }
});

function Content() {
  function handleToggler(e) {
    AOS.refresh();
    let work = document.querySelectorAll('div[data-item="work"]');
    let personal = document.querySelectorAll('div[data-item="personal"]');
    let all = [...work, ...personal];

    let btns = document.querySelectorAll(".btn-toggle");

    let name = e.target.dataset.toggle;
    if (name === "work") {
      for (let i = 0; i < personal.length; i++) {
        personal[i].classList.add("d-none");
      }
      for (let i = 0; i < work.length; i++) {
        work[i].classList.remove("d-none");
      }
    } else if (name === "personal") {
      for (let i = 0; i < work.length; i++) {
        work[i].classList.add("d-none");
      }
      for (let i = 0; i < personal.length; i++) {
        personal[i].classList.remove("d-none");
      }
    } else {
      for (let i = 0; i < all.length; i++) {
        all[i].classList.remove("d-none");
      }
    }

    for (let i = 0; i < btns.length; i++) {
      if (name === btns[i].dataset.toggle) {
        btns[i].classList.add("active");
      } else {
        btns[i].classList.remove("active");
      }
    }
  }

  return (
    <>
      <div className="cursor"></div>
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
                  Thalassochoritis (call me Ilias) and I am a Web Developer. I
                  am {age}-year-old Studied Computer Science at University of
                  Thessaly and graduated in 2021. I live in Athens, GR.
                </p>
                <p className="mt-3">
                  I'm always thrilled to learn about new technologies, having a
                  great interest in Web Development and AI.
                </p>
                <p className="mt-3">
                  Aside from writing lines of code and trying to fight bugs I
                  really enjoy taking photos and riding my car.
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
                  src={Me}
                  className="me"
                  alt="Ilias Thalassochoritis"
                  loading="lazy"
                />
              </div>
              <div className="image-front"></div>
            </div>
          </div>
        </div>
        <WaveStart />
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
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={HTML} alt="Logo of HTML" loading="lazy" />
                      <p>HTML</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={CSS} alt="Logo of CSS" loading="lazy" />
                      <p>CSS</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={SASS} alt="Logo of SASS" loading="lazy" />
                      <p>SASS</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img
                        src={Bootstrap}
                        alt="Logo of Bootstrap"
                        loading="lazy"
                      />
                      <p>Bootstrap</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img
                        src={Javascript}
                        alt="Logo of Javascript"
                        loading="lazy"
                      />
                      <p>JavaScript</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={jQuery} alt="Logo of jQuery" loading="lazy" />
                      <p>jQuery</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img
                        src={WordPress}
                        alt="Logo of WordPress"
                        loading="lazy"
                      />
                      <p>WordPress</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={PHP} alt="Logo of PHP" loading="lazy" />
                      <p>PHP</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={Python} alt="Logo of Python" loading="lazy" />
                      <p>Python</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={API} alt="Logo of Rest API" loading="lazy" />
                      <p>Rest API</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={ReactLogo} alt="Logo of React" loading="lazy" />
                      <p>React</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={Git} alt="Logo of GIT" loading="lazy" />
                      <p>Git</p>
                    </div>
                  </li>

                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={MS} alt="Logo of HTML" loading="lazy" />
                      <p>Microsoft</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={Linux} alt="Logo of Linux" loading="lazy" />
                      <p>Linux</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={VSCode} alt="Logo of VSCode" loading="lazy" />
                      <p>VS Code</p>
                    </div>
                  </li>

                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img src={PS} alt="Logo of Photoshop" loading="lazy" />
                      <p>Photoshop</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="skillsItem">
                      <img
                        src={Lightroom}
                        alt="Logo of Lightroom"
                        loading="lazy"
                      />
                      <p>Lightroom</p>
                    </div>
                  </li>
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
        <WaveEnd></WaveEnd>
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
          <div className="row toggles-row d-flex align-items-center justify-content-center mt-3 ">
            <div
              className="toggles mw-100  gap-3 d-flex align-items-center justify-content-center"
              data-aos="fade-up"
            >
              <button
                className="btn btn-toggle active"
                data-toggle="all"
                onClick={(e) => handleToggler(e)}
              >
                All
              </button>
              <button
                className="btn btn-toggle"
                data-toggle="work"
                onClick={(e) => handleToggler(e)}
              >
                Work
              </button>
              <button
                className="btn btn-toggle"
                data-toggle="personal"
                onClick={(e) => handleToggler(e)}
              >
                Personal
              </button>
            </div>
          </div>

          {projects.map(function (item, index) {
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
                  <div className={"screen " + item.className}></div>
                </div>
                <div
                  className={
                    "col-lg-6 text-lg-start text-center" +
                    (index % 2 === 1 ? " text-lg-end text-center" : "")
                  }
                >
                  <h4>{item.name}</h4>
                  <p>
                    Technologies:{" "}
                    <span>
                      {items.map(function (technology) {
                        return (
                          <span
                            className="technology"
                            key={technology.toString()}
                          >
                            {technology}
                          </span>
                        );
                      })}
                    </span>
                  </p>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="contact position-relative">
        <WaveEndGreen />
        <div className="container py-5" data-aos="fade-up" id="contact">
          <div className="row d-flex flex-row-reverse gap-5 gap-lg-0">
            <div className="col-lg-6">
              <h1 className="text-center touch-text position-relative m-auto">
                Get in Touch
              </h1>
              <FormExample></FormExample>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <MailMan></MailMan>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
