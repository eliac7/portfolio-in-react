import ContentItem from "../../ContentItem/ContentItem";
import MyIcons from "../../Icons/Icons";
import Fade from "react-reveal/Fade";

function Skills() {
  return (
    <section className="skills d-flex align-items-center justify-content-center">
      <div className="container pt-5" id="skills">
        <div className="row">
          <div className="col-lg-12">
            <Fade bottom>
              <h1 className="text-center skills-text position-relative m-auto ">
                Skills
              </h1>
            </Fade>
            <div className="skillsContainer ">
              <ul className="skillsGrid">
                <Fade bottom delay={200}>
                  <ContentItem name="HTML" src={MyIcons.HTML}></ContentItem>
                </Fade>
                <Fade bottom delay={400}>
                  <ContentItem name="CSS" src={MyIcons.CSS}></ContentItem>
                </Fade>
                <Fade bottom delay={600}>
                  <ContentItem name="SASS" src={MyIcons.SASS}></ContentItem>
                </Fade>
                <Fade bottom delay={800}>
                  <ContentItem
                    name="Bootstrap"
                    src={MyIcons.Bootstrap}
                  ></ContentItem>
                </Fade>
                <Fade bottom delay={1000}>
                  <ContentItem
                    name="Javascript"
                    src={MyIcons.Javascript}
                  ></ContentItem>
                </Fade>
                <Fade bottom delay={1200}>
                  <ContentItem name="jQuery" src={MyIcons.jQuery}></ContentItem>
                </Fade>
                <Fade bottom delay={1400}>
                  <ContentItem
                    name="WordPress"
                    src={MyIcons.WordPress}
                  ></ContentItem>
                </Fade>
                <Fade bottom delay={1600}>
                  <ContentItem name="PHP" src={MyIcons.PHP}></ContentItem>
                </Fade>
                <Fade bottom delay={1800}>
                  <ContentItem name="Python" src={MyIcons.Python}></ContentItem>
                </Fade>
                <Fade bottom delay={2000}>
                  <ContentItem
                    name="Node.js"
                    src={MyIcons.NodeJS}
                  ></ContentItem>
                </Fade>
                <Fade bottom delay={2200}>
                  <ContentItem name="API" src={MyIcons.API}></ContentItem>
                </Fade>
                <Fade bottom delay={2400}>
                  <ContentItem
                    name="React"
                    src={MyIcons.ReactLogo}
                  ></ContentItem>
                </Fade>
                <Fade bottom delay={2600}>
                  <ContentItem name="GIT" src={MyIcons.Git}></ContentItem>
                </Fade>
                <Fade bottom delay={2800}>
                  <ContentItem name="Windows" src={MyIcons.MS}></ContentItem>
                </Fade>
                <Fade bottom delay={3000}>
                  <ContentItem name="Linux" src={MyIcons.Linux}></ContentItem>
                </Fade>
                <Fade bottom delay={3200}>
                  <ContentItem name="VSCode" src={MyIcons.VSCode}></ContentItem>
                </Fade>
                <Fade bottom delay={3400}>
                  <ContentItem name="Photoshop" src={MyIcons.PS}></ContentItem>
                </Fade>
                <Fade bottom delay={3600}>
                  <ContentItem
                    name="Lightroom"
                    src={MyIcons.Lightroom}
                  ></ContentItem>
                </Fade>
              </ul>
            </div>
            <Fade bottom delay={3800}>
              <p className="text-center fst-italic mt-5 text-secondary">
                Missing a skill? Don't worry! I pick things up pretty quick.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
