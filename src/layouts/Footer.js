const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a
            href="https://github.com/fassiliss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fa-brands fa-github" />
          </a>
          <a href="mailto:fassiliss@gmail.com" aria-label="Email">
            <i className="fa-regular fa-envelope" />
          </a>
          <a href="tel:+16154967208" aria-label="Phone">
            <i className="fa-regular fa-phone" />
          </a>
        </div>
        <div className="copy-right-text">
          Designed and developed by{" "}
          <a
            href="https://github.com/fassiliss"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            Fassil Tsegaye{" "}
            <i className="fa-brands fa-github" style={{ marginLeft: "5px" }} />
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
