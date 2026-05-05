import Isotope from "isotope-layout";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { AxoContext } from "../Context";
import { axo } from "../utils";

const Portfolio = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  // Portfolio data - Only real projects
  const portfolioItems = [
    {
      id: 1,
      title: "Netflix Clone 2025",
      categories: ["details", "streaming"],
      image: "/assets/images/portfolio/netflix-clone1.png",
      liveUrl: "https://fassiliss.github.io/Netflix-2025",
      githubUrl: "https://github.com/fassiliss/Netflix-2025",
      description:
        "Full-stack Netflix clone with React, Firebase authentication, and movie database integration. Features movie browsing, trailer playback, and responsive design.",
      technologies: ["React", "Firebase", "TMDB API", "React Router", "Vite"],
    },
    {
      id: 2,
      title: "Amazon Clone 2025",
      categories: ["details", "ecommerce"],
      image: "/assets/images/portfolio/amazon-clone.png",
      liveUrl: "https://fassiliss.github.io/Amazon-2025",
      githubUrl: "https://github.com/fassiliss/Amazon-2025",
      description:
        "E-commerce platform with shopping cart, Stripe payment integration, and Firebase backend. Complete checkout flow with real-time order tracking.",
      technologies: [
        "React",
        "Firebase",
        "Stripe",
        "Material-UI",
        "Context API",
        "Axios",
      ],
    },
    {
      id: 3,
      title: "Evangadi Forum",
      categories: ["details", "social", "fullstack"],
      image: "/assets/images/portfolio/evangadi.png",
      liveUrl: "https://fassiliss.github.io/Evangadi-Forum",
      githubUrl: "https://github.com/fassiliss/Evangadi-Forum",
      description:
        "Full-stack Q&A forum platform with JWT authentication, rich text editor, and real-time question/answer functionality. Built with modern React and Bootstrap.",
      technologies: [
        "React",
        "Axios",
        "Bootstrap",
        "React Router",
        "JWT",
        "Quill Editor",
        "React Hook Form",
      ],
    },
    {
      id: 4,
      title: "iVoteForIt - Voting System",
      categories: ["details", "fullstack", "voting"],
      image: "/assets/images/portfolio/ivoteforit.png",
      liveUrl: "https://ivoteforit.com",
      githubUrl: "https://github.com/fassiliss/voting-app",
      description:
        "Secure digital voting platform with QR code generation, device fingerprinting, and real-time results. Features admin panel for candidate management, email validation, and one-vote-per-device security.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "Supabase",
        "QR Code Generation",
        "Device Fingerprinting",
        "Tailwind CSS",
      ],
    },
    {
      id: 5,
      title: "Ajora Kitchen",
      categories: ["details", "restaurant", "fullstack"],
      image: "/assets/images/portfolio/ajorakitchen.png",
      liveUrl: "https://www.ajorakitchen.org",
      githubUrl: "https://github.com/fassiliss/ajorakitchen-nextjs",
      description:
        "Full-stack restaurant website with admin authentication, menu management system, and responsive design. Features protected admin routes, dynamic content, and modern UI/UX.",
      technologies: [
        "Next.js",
        "React",
        "Authentication",
        "Admin Panel",
        "Responsive Design",
        "Tailwind CSS",
      ],
    },
    {
      id: 6,
      title: "Unsatisfied Youth Group",
      categories: ["details", "ministry", "fullstack"],
      image: "/assets/images/portfolio/unsatisfied.png",
      liveUrl: "https://unsatisfiedlife.com",
      githubUrl: "https://github.com/fassiliss/church-youth-group",
      description:
        "Mobile-responsive youth ministry website with event management, sermon filtering, contact forms, leadership profiles, and custom branding.",
      technologies: [
        "Next.js 16",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Vercel",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
    {
      id: 7,
      title: "Tsega Church Website",
      categories: ["details", "church", "fullstack"],
      image: "/assets/images/portfolio/tsega-church.png",
      liveUrl: "https://tsegachurch-site-y6w6.vercel.app",
      githubUrl: "https://github.com/fassiliss/tsegachurch-site",
      description:
        "Church website with event management, sermon library, ministry pages, dropdown navigation, Google Maps integration, dark mode, and responsive design.",
      technologies: [
        "React",
        "Next.js",
        "Vercel",
        "Tailwind CSS",
        "Google Maps API",
        "Dark Mode",
        "Responsive Design",
        "CI/CD",
      ],
    },
    {
      id: 8,
      title: "AutoShop - Car Dealership",
      categories: ["details", "fullstack", "ecommerce"],
      image: "/assets/images/portfolio/car-shop.png",
      liveUrl: "https://car-shop-nextjs-chi.vercel.app",
      githubUrl: "https://github.com/fassiliss/car-shop-nextjs",
      description:
        "Car dealership website with dynamic inventory, vehicle detail pages, advanced filters, image optimization, and responsive design.",
      technologies: [
        "Next.js 15",
        "TypeScript",
        "React",
        "Tailwind CSS",
        "Vercel",
        "Image Optimization",
        "Responsive Design",
      ],
    },
    {
      id: 9,
      title: "Wabi Automotive - Auto Service",
      categories: ["details", "fullstack", "automotive"],
      image: "/assets/images/portfolio/wabi-auto.png",
      liveUrl: "https://wabi-auto.vercel.app",
      githubUrl: "https://github.com/fassiliss/wabi-auto",
      description:
        "Auto service website with appointment scheduling, service request forms, status tracking, admin tools, customer notifications, blog management, and MongoDB data storage.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "MongoDB Atlas",
        "Mongoose",
        "Resend Email API",
        "Tailwind CSS v4",
        "Vercel",
        "Admin Authentication",
        "Dark Mode",
      ],
    },
    {
      id: 10,
      title: "Smyrna Soccer - Team Chat",
      categories: ["details", "fullstack", "social"],
      image: "/assets/images/portfolio/smyrnasoccer.png",
      liveUrl: "https://smyrnasoccer.com",
      githubUrl: "https://github.com/fassiliss/sunday-soccer",
      description:
        "Real-time team chat app with channels, reactions, image sharing, user profiles, online presence, push notifications, and PWA support.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Supabase",
        "Real-time Subscriptions",
        "Tailwind CSS",
        "Vercel",
        "Authentication",
        "Admin Dashboard",
        "File Storage",
        "PWA",
        "Push Notifications",
      ],
    },
    {
      id: 11,
      title: "Personal Finance App",
      categories: ["details", "fullstack", "finance"],
      image: "/assets/images/portfolio/finance.png",
      liveUrl: "https://personal-finance-app-q6vw.vercel.app",
      githubUrl: "https://github.com/fassiliss/personalfinance-app",
      description:
        "Personal finance tracker with multi-user authentication, account and transaction management, budgeting, recurring bills, OCR receipt scanning, exports, and real-time sync.",
      technologies: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "Supabase",
        "PostgreSQL",
        "Google OAuth",
        "Row-Level Security",
        "Tesseract.js OCR",
        "PWA",
        "Brevo SMTP",
        "jsPDF",
        "Real-time Subscriptions",
        "Vercel",
      ],
    },
    {
      id: 12,
      title: "Titi Creation Catering",
      categories: ["details", "fullstack", "food"],
      image: "/assets/images/portfolio/titi.png",
      liveUrl: "https://titicreation.com",
      githubUrl: "https://github.com/fassiliss/titi-creation",
      description:
        "Food ordering website for an Ethio-Italian catering business with menu browsing, cart functionality, event order forms, Supabase order storage, and responsive design.",
      technologies: [
        "Next.js 13",
        "React",
        "Supabase",
        "PostgreSQL",
        "Zustand",
        "Swiper.js",
        "Bootstrap 5",
        "CSS3",
        "Vercel",
      ],
    },
    {
      id: 13,
      title: "Cross Shine Car Detailing",
      categories: ["details", "automotive", "fullstack"],
      image: "/assets/images/portfolio/mesay-cardetail.png",
      liveUrl: "https://mesay-cardetail.vercel.app",
      githubUrl: "https://github.com/fassiliss/mesay-cardetail",
      description:
        "Mobile car detailing website with service pages, gallery, contact/quote form, and admin login demo. Built with Next.js and deployed on Vercel.",
      technologies: ["Next.js", "React", "TypeScript", "Vercel"],
    },
    {
      id: 14,
      title: "Good Deeds Alliance Charity Site",
      categories: ["details", "charity", "fullstack"],
      image: "/assets/images/portfolio/gooddeeds.png",
      liveUrl: "https://gooddeedsalliance.org",
      githubUrl: "https://github.com/fassiliss/getu-charity-site",
      description:
        "Modern charity website with donation page, responsive layout, ministry-style branding, reusable Next.js components, and a mock Stripe-ready donation flow.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Bootstrap",
        "Responsive Design",
        "Stripe Ready",
        "Vercel",
      ],
    },
  ];

  useEffect(() => {
    axo.customMouse();
    setTimeout(() => {
      isotope.current = new Isotope(".portfolio-items", {
        itemSelector: ".item",
        percentPosition: true,
        masonry: {
          columnWidth: ".item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    [],
  );

  const activeBtn = (value) => (value === filterKey ? "active" : "");
  const { portfolio_modal_show, setPortfolioData } = useContext(AxoContext);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    setPortfolioData(project);
    portfolio_modal_show(true);
  };

  return (
    <section id="portfolio">
      <div className="container">
        <div className="section-title wow fadeInUp">
          <p className="sub-title">My Portfolio</p>
          <h2>
            Showcasing <br />
            My Best Work
          </h2>
        </div>
        <div className="portfolio-container">
          <div className="filter-btn wow fadeInUp">
            <a
              className={`c-pointer ${activeBtn("*")}`}
              onClick={handleFilterKeyChange("*")}
            >
              All Projects
            </a>
            <a
              className={`c-pointer ${activeBtn("ecommerce")}`}
              onClick={handleFilterKeyChange("ecommerce")}
            >
              E-Commerce
            </a>
            <a
              className={`c-pointer ${activeBtn("streaming")}`}
              onClick={handleFilterKeyChange("streaming")}
            >
              Streaming
            </a>
            <a
              className={`c-pointer ${activeBtn("finance")}`}
              onClick={handleFilterKeyChange("finance")}
            >
              Finance
            </a>
            <a
              className={`c-pointer ${activeBtn("fullstack")}`}
              onClick={handleFilterKeyChange("fullstack")}
            >
              Full Stack
            </a>
            <a
              className={`c-pointer ${activeBtn("social")}`}
              onClick={handleFilterKeyChange("social")}
            >
              Social/Chat
            </a>
            <a
              className={`c-pointer ${activeBtn("voting")}`}
              onClick={handleFilterKeyChange("voting")}
            >
              Voting System
            </a>
            <a
              className={`c-pointer ${activeBtn("restaurant")}`}
              onClick={handleFilterKeyChange("restaurant")}
            >
              Restaurant
            </a>
            <a
              className={`c-pointer ${activeBtn("automotive")}`}
              onClick={handleFilterKeyChange("automotive")}
            >
              Automotive
            </a>
            <a
              className={`c-pointer ${activeBtn("charity")}`}
              onClick={handleFilterKeyChange("charity")}
            >
              Charity
            </a>
          </div>

          <div className="portfolio-items wow fadeInUp">
            {portfolioItems.map((project) => (
              <div
                key={project.id}
                className={`item ${project.categories.join(" ")}`}
              >
                <a
                  className="c-pointer"
                  href="#details-popup"
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <img
                    className="c-pointer"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="portfolio-overlay">
                    <h3>{project.title}</h3>
                    <p>Click to view details</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
