import React from "react";
import "./Content.css";
import FormExample from "./Form.js";
import { ReactComponent as WaveStart } from "./assets/images/wave_start.svg";
import { ReactComponent as WaveEnd } from "./assets/images/wave_end.svg";
import { ReactComponent as MailMan } from "./assets/images/MailMan.svg";
import Me from "./assets/images/me.jpg";
import Splashes from "./assets/images/splashes.png";

const age = new Date().getFullYear() - Number(1997);

function Content() {
  return (
    <>
      <section className="hero d-flex flex-column align-items-center justify-content-center">
        <div
          className="container p-relative mt-5 flex-grow-1"
          style={{ zIndex: 1 }}
          id="about"
        >
          <div className="row flex-column flex-md-row hero-row">
            <div className="col">
              <div className="info d-flex flex-column justify-content-start ">
                <h1 className="hero-text">
                  Hi, I'm <br className="br-hero" />
                  Elias
                </h1>
                <h4>Front End Developer and lover of good code & food.</h4>
                <p>
                  Hello, and welcome to my site! My full name is Ilias Nikolaos
                  Thalassochoritis (call me Ilias) and I am a newbie Front End
                  Developer. I am {age}-year-old Studied Computer Science at
                  University of Thessaly and graduated in 2021. I live in
                  Athens, GR.
                </p>
                <p>
                  I'm always thrilled to learn about new technologies, having a
                  great interest in Web Development and AI.
                </p>
                <p>
                  Aside from writing lines of code and trying to fight bugs I
                  really enjoy taking photos and riding my car.
                </p>
                <a href="#contact" className="btn btn-custom rounded-5 mr-auto">
                  GET IN TOUCH
                </a>
              </div>
            </div>
            <div className="col d-flex align-items-center justify-content-center position-relative overflow-hidden">
              <div className="splashes">
                <img src={Splashes} alt="splashes" />
              </div>
              <div className="image-behind"></div>
              <div className="image">
                <img src={Me} className="me" alt="Me myself and I " />
              </div>
              <div className="image-front"></div>
            </div>
          </div>
        </div>
        <WaveStart />
      </section>
      <section
        className="experience d-flex align-items-center justify-content-center"
        id="experience"
      >
        <div className="container">
          <h1 className="text-center experience-text position-relative">
            My Experience
          </h1>
          <p></p>
        </div>
      </section>
      <section className="contact d-flex align-items-center justify-content-center flex-column position-relative">
        <WaveEnd />
        <div className="container my-5 p-5" id="contact">
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
