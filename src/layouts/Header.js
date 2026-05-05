import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [themeReady, setThemeReady] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    setDarkMode(savedTheme ? savedTheme === "dark" : true);
    setThemeReady(true);
  }, []);

  useEffect(() => {
    if (!themeReady) return;
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
  }, [darkMode, themeReady]);

  return (
    <header
      className={`position-absolute w-100 text-white ${toggle ? "active" : ""}`}
    >
      <div className="header-container">
        <div className="container">
          <div className="logo">
            <a href="#home">
              Fassil<span className="text-primary">Tsegaye</span>
            </a>
          </div>
          <ul className={`menus ${toggle ? "d-block" : ""}`}>
            <li>
              <a href="#about">About</a>
            </li>
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
          <div className="header-actions">
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
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode((value) => !value)}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              title={darkMode ? "Light mode" : "Dark mode"}
            >
              <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
            </button>
          </div>
          <button
            type="button"
            className="toggle"
            onClick={() => setToggle(!toggle)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
