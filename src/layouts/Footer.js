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
          Developed with love by <a href="#">Codeefly</a> ©{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
