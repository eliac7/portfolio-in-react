import MyIcons from "../../Icons/Icons";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

function Hero() {
  const age = new Date().getFullYear() - Number(1997);

  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center">
      <Fade bottom>
        <div
          className="container p-relative pt-5 flex-grow-1"
          style={{ zIndex: 1 }}
          id="about"
        >
          <div className="row flex-column flex-md-row hero-row">
            <div className="col-lg-6">
              <div className="info d-flex flex-column justify-content-start ">
                <h1 className="hero-text">
                  <Fade left delay={350}>
                    Hi, I'm Elias
                  </Fade>
                </h1>
                <Fade delay={500}>
                  <h4> Web Developer and lover of good code & food.</h4>
                </Fade>
                <Fade delay={700}>
                  <p className="mt-3">
                    Hello, and welcome to my site! My full name is Ilias
                    Nikolaos Thalassochoritis (call me Ilias), and I am a Web
                    Developer. I am {age} years old Studied Computer Science at
                    University of Thessaly and graduated in 2021. I live in
                    Athens, GR.
                  </p>
                </Fade>
                <Fade delay={900}>
                  <p className="mt-3">
                    I'm always thrilled to learn about new technologies, having
                    a great interest in Web Development and AI.
                  </p>
                </Fade>
                <Fade delay={1100}>
                  <p className="mt-3">
                    Aside from writing lines of code and trying to fight bugs I
                    enjoy taking photos and riding my car.
                  </p>
                </Fade>

                <Fade delay={1300}>
                  <a
                    href="#contact"
                    className="btn btn-custom rounded-5 mr-auto"
                  >
                    GET IN TOUCH
                  </a>
                </Fade>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center position-relative me-col mt-5">
              <Zoom right delay={500}>
                <div className="image">
                  <img
                    src={MyIcons.Me}
                    className="me"
                    alt="Ilias Thalassochoritis"
                    loading="lazy"
                  />
                </div>
              </Zoom>
            </div>
          </div>
        </div>
        <MyIcons.WaveStart style={{ position: "relative", bottom: "-1px" }} />
      </Fade>
    </section>
  );
}

export default Hero;
