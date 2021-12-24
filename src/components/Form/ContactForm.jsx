import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function ContactForm() {
  const schema = yup.object().shape({
    fullname: yup.string().required("Full Name is required."),
    email: yup.string().email().required("Email is required"),
    message: yup.string().required("Your message is required."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const submitForm = (data, e) => {
    if (data) {
      emailjs
        .sendForm(
          `default_service`,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          () => {
            var element = document.querySelector("button[type='submit']");
            var newEl = document.createElement("p");
            newEl.classList =
              "text-success text-center position-relative text-email text-email-success p-3";
            newEl.style.zIndex = 1;
            newEl.innerText =
              "Message Sent, I will be back to you as soon as possible!";

            element.parentNode.insertBefore(newEl, element);
            setTimeout(function () {
              let txmail = document.querySelector(".text-email");
              txmail.style.opacity = "0";
              txmail.addEventListener("transitionend", () => txmail.remove());
            }, 4000);
            reset();
          },
          () => {
            var element = document.querySelector("button[type='submit']");
            var newEl = document.createElement("p");
            newEl.style.zIndex = 1;
            newEl.classList =
              "text-danger text-center position-relative text-email text-email-error p-3";
            newEl.innerText = "Message not sent. Please try again later.";

            element.parentNode.insertBefore(newEl, element);

            setTimeout(function () {
              let txmail = document.querySelector(".text-email");
              txmail.style.opacity = "0";
              txmail.addEventListener("transitionend", () => txmail.remove());
            }, 4000);
            reset();
          }
        );
    }
  };

  return (
    <>
      <Form className="contact-form mt-4" onSubmit={handleSubmit(submitForm)}>
        <Row className="flex-sm-row flex-column">
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                type="text"
                placeholder="Enter Name"
                name="fullname"
                {...register("fullname", { required: true })}
              />
              <span>{errors.fullname?.message}</span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <span style={{ color: "red" }}>*</span>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                {...register("email", { required: true })}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <span style={{ display: "block" }}>{errors.email?.message}</span>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <span style={{ color: "red" }}>*</span>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            style={{ resize: "none" }}
            {...register("message", { required: true })}
          />
          <span>{errors.message?.message}</span>
        </Form.Group>

        <div className="d-flex flex-column justify-content-center align-items-center">
          <Button
            className="w-md-50"
            variant="contact"
            type="submit"
            disabled={!isValid}
          >
            SUBMIT MESSAGE
          </Button>
        </div>
      </Form>
    </>
  );
}

export default ContactForm;
