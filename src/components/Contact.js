import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = mailData;
  const [error, setError] = useState(null);

  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0 || email.length === 0 || message.length === 0) {
      setError(true);
      clearError();
    } else {
      emailjs
        .send(
          "service_lo6vubh", // Your Service ID
          "template_x7fo3e4", // Your Template ID
          mailData,
          "tBMNkDxrY_X92xYZP" // Your Public Key
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };

  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row align-center">
          <div className="col-lg-6 wow fadeInLeft">
            <div className="section-title left">
              <p className="sub-title">Get in touch!</p>
              <h2>Let's Work Together</h2>
            </div>
            <ul className="info-details">
              <li>
                <h4>Email</h4>
                <p>
                  <a
                    href="mailto:fassiliss@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    fassiliss@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <h4>Location</h4>
                <p>Smyrna, Tennessee, USA</p>
              </li>
              <li>
                <h4>Phone</h4>
                <p>
                  <a
                    href="tel:+16154967208"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    (615) 496-7208
                  </a>
                </p>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <form
              action="#"
              className="contact-form wow fadeInRight"
              onSubmit={(e) => onSubmit(e)}
            >
              <div
                className={error ? "empty_notice" : "returnmessage"}
                style={{ display: error == null ? "none" : "block" }}
              >
                <span>
                  {error
                    ? "Please fill in all required fields"
                    : "Thank you! Your message has been sent successfully."}
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  onChange={(e) => onChange(e)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  onChange={(e) => onChange(e)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Your Message"
                  name="message"
                  onChange={(e) => onChange(e)}
                  value={message}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="cf-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
