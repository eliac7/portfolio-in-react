import ContactForm from "../../Form/ContactForm";
import MyIcons from "../../Icons/Icons";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <section className="contact position-relative">
      <MyIcons.WaveEndGreen style={{ position: "relative", bottom: "1px" }} />
      <Fade bottom>
        <div className="container py-5" id="contact">
          <div className="row d-flex flex-row-reverse">
            <div className="col-lg-6">
              <h1 className="text-center touch-text position-relative m-auto">
                Get in Touch
              </h1>
              <ContactForm />
            </div>
            <div className="col-lg-6 d-flex align-items-center justify-content-center my-5 my-lg-0">
              <MyIcons.MailMan></MyIcons.MailMan>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Contact;
