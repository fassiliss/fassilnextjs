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
          "service_seruhwu", // service id
          "template_21aw58z", // template id
          mailData,
          "Q3pccdLZhU-mZT7tQ" // public api
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
              <p className="sub-title">Get in touch !</p>
              <h2>Contact me for a quote, help to join the team</h2>
            </div>
            <ul className="info-details">
              <li>
                <h4>Mail</h4>
                <p>fassiliss@gmail.com</p>
              </li>
              <li>
                <h4>Address</h4>
                <p>
                  1540 Brookside Drive <br />
                  Smyrna, Tennessee, USA
                </p>
              </li>
              <li>
                <h4>Phone</h4>
                <p>6154967208</p>
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
                    ? "Please Fill Required Fields"
                    : "Your message has been received, We will contact you soon."}
                </span>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={(e) => onChange(e)}
                  value={name}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={(e) => onChange(e)}
                  value={email}
                />
              </div>
              <div className="form-group">
                <textarea
                  placeholder="Message"
                  name="message"
                  onChange={(e) => onChange(e)}
                  value={message}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="cf-btn">
                  Send me message
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
