import MyIcons from "../../Icons/Icons";

function Hero() {
  const age = new Date().getFullYear() - Number(1997);

  return (
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
                Thalassochoritis (call me Ilias), and I am a Web Developer. I am{" "}
                {age} years old Studied Computer Science at University of
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
  );
}

export default Hero;
