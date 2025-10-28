export const axo = {
  imgToSvg() {
    document.querySelectorAll("img.svg").forEach((el) => {
      const imgID = el.getAttribute("id");
      const imgClass = el.getAttribute("class");
      const imgURL = el.getAttribute("src");
      fetch(imgURL)
        .then((data) => data.text())
        .then((response) => {
          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(response, "text/html");
          let svg = xmlDoc.querySelector("svg");
          if (typeof imgID !== "undefined") {
            svg.setAttribute("id", imgID);
          }

          if (typeof imgClass !== "undefined") {
            svg.setAttribute("class", imgClass + " replaced-svg");
          }

          svg.removeAttribute("xmlns:a");
          if (el.parentNode) {
            el.parentNode.replaceChild(svg, el);
          }
        });
    });
  },
  customMouse() {
    const e = document.querySelector(".cursor");
    let n,
      i = 0,
      o = !1;
    setTimeout(() => {
      window.onmousemove = function (s) {
        o ||
          (e.style.transform =
            "translate(" + s.clientX + "px, " + s.clientY + "px)"),
          (n = s.clientY),
          (i = s.clientX);
      };
    }, 1000);
    const mouseEvent = (arr) => {
      for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        element.addEventListener("mouseenter", () => {
          e.classList.add("cursor-hover");
        });
        element.addEventListener("mouseleave", () => {
          e.classList.remove("cursor-hover");
        });
      }
    };
    let a = document.querySelectorAll("a"),
      pointer = document.querySelectorAll(".c-pointer"),
      button = document.querySelectorAll(".btn"),
      works = document.querySelectorAll(".works-list-ul li");
    mouseEvent(a);
    mouseEvent(pointer);
    mouseEvent(button);
    mouseEvent(works);
    e.style.visibility = "visible";
  },
  smoothScrolling() {
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section");
      const navLi = document.querySelectorAll(".nav li");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((li) => {
        if (current !== null) {
          li.classList.remove("current");
        }
        if (
          li.getElementsByTagName("a")[0].getAttribute("href") == `#${current}`
        ) {
          li.classList.add("current");
        }
      });
    });
  },
  stickyNav() {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY;
      const stickys = document.querySelectorAll("header .header-container");
      stickys.forEach((sticky) => {
        if (sticky) {
          if (offset > 100) {
            sticky.classList.add("fixed");
          } else {
            sticky.classList.remove("fixed");
          }
        }
      });
    });
  },
  preloader() {
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(
      navigator.userAgent
    )
      ? true
      : false;
    let preloader = document.getElementById("preloader");

    if (preloader) {
      if (!isMobile) {
        setTimeout(function () {
          preloader.classList.add("preloaded");
        }, 800);
        setTimeout(function () {
          preloader.remove();
        }, 2000);
      } else {
        preloader.remove();
      }
    }
  },
  animation() {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  },
  aTag() {
    const aTag = document.querySelectorAll("[href='#']");
    for (let i = 0; i < aTag.length; i++) {
      const a = aTag[i];
      a.addEventListener("click", (e) => {
        e.preventDefault();
      });
    }
  },
  movingAnimation() {
    var detail = document.querySelectorAll(".moving-effect");
    var offset = 0;
    detail.forEach((element) => {
      var direction = element.getAttribute("data-direction");
      window.addEventListener("scroll", function () {
        offset = window.scrollY;
        var h = window.innerHeight;
        var i =
          element.getBoundingClientRect().top + window.scrollY - offset - h;
        if (element.getAttribute("data-reverse") == "yes") {
          i *= -1;
        }
        var x = direction === "x" ? (i * 70) / h : 0;
        var y = direction === "x" ? 0 : (i * 70) / h;
        if (element.getAttribute("data-reverse") == "yes") {
          i *= -1;
        }
        if (i * -1 < h + 300 && i < 300) {
          element.style.transform = `translate3d(${x}px,${y}px, 0px)`;
        }
      });
    });
  },
};
