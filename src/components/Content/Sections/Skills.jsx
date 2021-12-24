import ContentItem from "../../ContentItem/ContentItem";
import MyIcons from "../../Icons/Icons";

function Skills() {
  return (
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
                <ContentItem name="Node.js" src={MyIcons.NodeJS}></ContentItem>
                <ContentItem name="API" src={MyIcons.API}></ContentItem>
                <ContentItem name="React" src={MyIcons.ReactLogo}></ContentItem>
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
  );
}

export default Skills;
