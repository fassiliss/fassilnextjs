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
                "Modern, mobile-responsive website for church youth ministry serving ages 12-18. Features custom logo design with 'X over un' concept, event management system, sermon library with filtering, contact forms, and leadership profiles. Built with Next.js and deployed on Vercel.",
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
                "Full-featured church website with event management, sermon library, and ministry information. Features dropdown navigation, Google Maps integration, dark mode toggle, and responsive design. Built with React/Next.js and deployed on Vercel with automatic CI/CD.",
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
                "Modern, full-stack car dealership website with dynamic inventory system, advanced filtering, and individual car detail pages. Features 18+ vehicles, price/year/transmission filters, and fully responsive design. Built with Next.js 15 and deployed on Vercel.",
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
                "Full-stack auto service and repair website with comprehensive booking system, blog management, customer testimonials, and admin dashboard. Features email notifications via Resend API, dark mode toggle, mobile-responsive hamburger menu, and MongoDB Atlas integration for data persistence. Includes service request forms, appointment scheduling with status tracking (scheduled → checked-in → in-progress → completed), and automated customer notifications.",
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
                "Real-time team chat application for soccer team communication. Features multi-channel messaging, emoji reactions, image sharing, user profiles with avatar uploads, and online presence indicators. Built with Next.js 16 and Supabase for real-time subscriptions, authentication, and storage.",
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
                "Full-stack personal finance tracker with Supabase backend and user authentication. Features multiple accounts, transaction management, budget tracking with progress bars, recurring bills/income, CSV import/export, and dark/light mode. Includes date range filtering, account detail pages with charts, delete confirmations, and responsive design. Data syncs across devices with cloud storage.",
            technologies: [
                "Next.js 16",
                "React 19",
                "TypeScript",
                "Tailwind CSS v4",
                "Supabase",
                "PostgreSQL",
                "Authentication",
                "Vercel",
                "Dark Mode",
                "Responsive Design",
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
    []
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
    Social
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
    {/* ADD THIS NEW BUTTON HERE 👇 */}
     <a
    className={`c-pointer ${activeBtn("automotive")}`}
    onClick={handleFilterKeyChange("automotive")}
>
    Automotive
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