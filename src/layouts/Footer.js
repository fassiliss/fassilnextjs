const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-icons">
          <a href="#">
            <i className="fa-sharp fa-regular fa-basketball" />
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram" />
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin" />
          </a>
          <a href="#">
            <i className="fa-brands fa-pinterest" />
          </a>
        </div>
        <div className="copy-right-text">
          Developed with ❤️ by{" "}
          <a
            href="https://github.com/fassiliss"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#667eea",
              textDecoration: "underline",
              fontWeight: "500",
            }}
          >
            Fassil Tsegaye{" "}
            <i
              className="fa-brands fa-github"
              style={{ marginLeft: "5px" }}
            ></i>
          </a>{" "}
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
