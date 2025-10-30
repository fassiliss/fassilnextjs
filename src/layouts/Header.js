import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header
      className={`position-absolute w-100 text-white ${toggle ? "active" : ""}`}
    >
      <div className="header-container">
        <div className="container">
          <div className="logo">
            <a href="#home">
              Fassiltsegaye<span className="text-primary">.com</span>
            </a>
          </div>
          <ul className={`menus ${toggle ? "d-block" : ""}`}>
            <li className="current">
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Work</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
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
          <div className="toggle" onClick={() => setToggle(!toggle)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
