import React from "react";
import "./Content.css";
import FormExample from "./Form.js";
import { ReactComponent as WaveStart } from "./assets/images/wave_start.svg";
import { ReactComponent as WaveEnd } from "./assets/images/wave_end.svg";
import { ReactComponent as WaveEndGreen } from "./assets/images/wave_end_green.svg";
import { ReactComponent as MailMan } from "./assets/images/MailMan.svg";
import Me from "./assets/images/me.jpg";
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
const age = new Date().getFullYear() - Number(1997);

AOS.init({ delay: 100, once: true });

window.addEventListener("load", function () {
  const cursor = document.querySelector(".cursor");
  const links = this.document.querySelectorAll("a");

  window.addEventListener("mousemove", mouseMoveHandler);
  window.addEventListener("mousedown", mouseDownHandler);
  window.addEventListener("mouseup", mouseUpHandler);
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", function (e) {
      linkEnterHandler();
    });
  }
  function mouseMoveHandler(e) {
    cursor.style.display = "block";
    cursor.style.left = e.clientX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.clientY - cursor.offsetHeight / 2 + "px";
    cursor.style.opacity = 1;
  }

  function mouseUpHandler(e) {
    cursor.style.transform = "scale(1)";
  }

  function mouseDownHandler() {
    cursor.style.transform = "scale(1.5)";
  }
  function linkEnterHandler() {}
});

function Content() {
  return (
    <>
      <div className="cursor"></div>
      <section className="hero d-flex flex-column align-items-center justify-content-center">
        <div
          className="container p-relative mt-5 flex-grow-1"
          style={{ zIndex: 1 }}
          id="about"
          data-aos="fade-in"
        >
          <div className="row flex-column flex-md-row hero-row">
            <div className="col">
              <div className="info d-flex flex-column justify-content-start ">
                <h1 className="hero-text">
                  Hi, I'm <br className="br-hero" />
                  Elias
                </h1>
                <h4>Front End Developer and lover of good code & food.</h4>
                <p className="mt-3">
                  Hello, and welcome to my site! My full name is Ilias Nikolaos
                  Thalassochoritis (call me Ilias) and I am a newbie Front End
                  Developer. I am {age}-year-old Studied Computer Science at
                  University of Thessaly and graduated in 2021. I live in
                  Athens, GR.
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
      <section
        className="Skills d-flex align-items-center justify-content-center"
        id="Skills"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1
                data-aos="fade-up"
                className="text-center Skills-text position-relative"
              >
                Skills
              </h1>
              <div className="SkillsContainer ">
                <ul className="SkillsGrid">
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={HTML} alt="Logo of HTML" loading="lazy" />
                      <p>HTML</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={CSS} alt="Logo of CSS" loading="lazy" />
                      <p>CSS</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={SASS} alt="Logo of SASS" loading="lazy" />
                      <p>SASS</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img
                        src={Bootstrap}
                        alt="Logo of Bootstrap"
                        loading="lazy"
                      />
                      <p>Bootstrap</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img
                        src={Javascript}
                        alt="Logo of Javascript"
                        loading="lazy"
                      />
                      <p>JavaScript</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={jQuery} alt="Logo of jQuery" loading="lazy" />
                      <p>jQuery</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img
                        src={WordPress}
                        alt="Logo of WordPress"
                        loading="lazy"
                      />
                      <p>WordPress</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={PHP} alt="Logo of PHP" loading="lazy" />
                      <p>PHP</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={Python} alt="Logo of Python" loading="lazy" />
                      <p>Python</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={API} alt="Logo of Rest API" loading="lazy" />
                      <p>Rest API</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={ReactLogo} alt="Logo of React" loading="lazy" />
                      <p>React</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={Git} alt="Logo of GIT" loading="lazy" />
                      <p>Git</p>
                    </div>
                  </li>

                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={MS} alt="Logo of HTML" loading="lazy" />
                      <p>Microsoft</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={Linux} alt="Logo of Linux" loading="lazy" />
                      <p>Linux</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={VSCode} alt="Logo of VSCode" loading="lazy" />
                      <p>VS Code</p>
                    </div>
                  </li>

                  <li data-aos="fade-up">
                    <div className="SkillsItem">
                      <img src={PS} alt="Logo of Photoshop" loading="lazy" />
                      <p>Photoshop</p>
                    </div>
                  </li>
                  <li data-aos="fade-up">
                    <div className="SkillsItem">
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
            </div>
          </div>
        </div>
      </section>
      <section
        className="project d-flex flex-column align-items-center justify-content-center"
        id="projects"
      >
        <WaveEnd></WaveEnd>
        <div className="container p-relative mt-5 flex-grow-1">
          <div className="row d-flex flex-column justify-content-center align-items-center">
            <h1
              data-aos="fade-up"
              className="text-center project-text position-relative"
            >
              Projects
            </h1>
          </div>
        </div>
      </section>
      <section className="contact position-relative">
        <WaveEndGreen />
        <div className="container mt-5 p-5" id="contact" data-aos="fade-up">
          <div className="row d-flex flex-row-reverse gap-5 gap-lg-0">
            <div className="col-lg-6">
              <h1 className="text-center touch-text position-relative">
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
