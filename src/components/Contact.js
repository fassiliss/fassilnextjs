import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import styles from "@/styles/Portfolio.module.css";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const sending = useRef(false);
  async function onSubmit(event) {
    event.preventDefault();
    if (sending.current) return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    if (!data.name.trim() || !data.message.trim()) {
      setStatus("invalid");
      return;
    }
    sending.current = true;
    setStatus("sending");
    try {
      await emailjs.send(
        "service_lo6vubh",
        "template_x7fo3e4",
        data,
        "tBMNkDxrY_X92xYZP",
      );
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      sending.current = false;
    }
  }
  return (
    <section
      id="contact"
      className={styles.contact}
      aria-labelledby="contact-title"
    >
      <div className={`${styles.wrap} ${styles.contactGrid}`}>
        <div>
          <p className={styles.eyebrow}>05 / Let’s connect</p>
          <h2 id="contact-title">
            Have a role or
            <br />
            project in mind?
          </h2>
          <p>
            I’m open to full-stack development opportunities and conversations
            about application and cloud security.
          </p>
          <a className={styles.contactEmail} href="mailto:fassiliss@gmail.com">
            fassiliss@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className={styles.contactLinks}>
            <a
              href="https://github.com/fassiliss"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="tel:+16154967208">(615) 496-7208</a>
          </div>
          <p className={styles.muted}>Smyrna, Tennessee, USA</p>
        </div>
        <form
          className={styles.form}
          onSubmit={onSubmit}
          aria-label="Contact Fassil"
          aria-busy={status === "sending"}
        >
          <div className={styles.formRow}>
            <div>
              <label htmlFor="contact-name">Your name</label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                maxLength={150}
              />
            </div>
            <div>
              <label htmlFor="contact-email">Your email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={254}
              />
            </div>
          </div>
          <label htmlFor="contact-message">
            What would you like to discuss?
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            maxLength={5000}
          />
          <button
            className={styles.primary}
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <span aria-hidden="true">↗</span>
          </button>
          <p className={styles.formStatus} role="status" aria-live="polite">
            {status === "sent"
              ? "Thank you — your message has been sent."
              : status === "error"
                ? "Your message could not be sent. Please try again or email me directly."
                : status === "invalid"
                  ? "Please enter your name and message."
                  : "You can also reach me directly by email."}
          </p>
        </form>
      </div>
    </section>
  );
}
