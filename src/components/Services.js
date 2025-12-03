import { useEffect } from "react";

const Services = () => {
    useEffect(() => {
        let VanillaTilt = require("vanilla-tilt");
        VanillaTilt.init(document.querySelectorAll(".service-card"), {
            maxTilt: 6,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            speed: 500,
            transition: true,
        });
    }, []);

    return (
        <section id="services">
            <div className="container">
                <div className="section-title">
                    <p className="sub-title wow fadeInDown">My Services</p>
                    <h2 className="wow fadeInDown">
                        What I Offer <br />
                        To My Clients
                    </h2>
                </div>
                <div className="card-container">
                    <div className="row">
                        {/* Service 1: Full Stack Development */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".2s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/web_dev.svg"
                                        className="svg"
                                        alt="Full Stack Development"
                                    />
                                </div>
                                <h3>Full Stack Web Development</h3>
                                <p>
                                    Building modern, responsive web applications using React,
                                    Next.js, and cloud technologies. Complete solutions from
                                    database to deployment with authentication and admin panels.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> Next.js 16, React 19, TypeScript, MongoDB, Supabase, Firebase, Vercel
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service 2: Frontend Development */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".3s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/uiux.svg"
                                        className="svg"
                                        alt="Frontend Development"
                                    />
                                </div>
                                <h3>Frontend Development</h3>
                                <p>
                                    Creating stunning, user-friendly interfaces with modern
                                    frameworks. Responsive design with dark mode, mobile menus,
                                    and exceptional user experience across all devices.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> React, Next.js, TypeScript, Tailwind CSS v4, Material-UI, Bootstrap
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Backend & API Development */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".4s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/product_desginer.svg"
                                        className="svg"
                                        alt="Backend Development"
                                    />
                                </div>
                                <h3>Backend & API Development</h3>
                                <p>
                                    Developing robust backend systems, RESTful APIs, and database
                                    solutions. Authentication, email notifications, payment
                                    integration, and secure data management.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> Next.js API Routes, MongoDB Atlas, Mongoose, Supabase, Firebase, Resend Email
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service 4: E-Commerce Solutions */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".5s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/web_dev.svg"
                                        className="svg"
                                        alt="E-Commerce"
                                    />
                                </div>
                                <h3>E-Commerce Solutions</h3>
                                <p>
                                    Building complete e-commerce platforms with shopping carts,
                                    payment processing, inventory management, and order tracking
                                    systems.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> React, Stripe Payments, Firebase, Context API, Real-time Updates
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service 5: Authentication & Admin Systems */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".6s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/uiux.svg"
                                        className="svg"
                                        alt="Authentication"
                                    />
                                </div>
                                <h3>Authentication & Admin Panels</h3>
                                <p>
                                    Implementing secure user authentication, role-based access
                                    control, and comprehensive admin dashboards for content
                                    management.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> JWT, Firebase Auth, Supabase Auth, Protected Routes, CRUD Operations
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Service 6: Integration Services */}
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card wow fadeInDown" data-wow-delay=".7s">
                                <div className="icon-container">
                                    <img
                                        src="./assets/icons/product_desginer.svg"
                                        className="svg"
                                        alt="API Integration"
                                    />
                                </div>
                                <h3>API & Third-Party Integrations</h3>
                                <p>
                                    Integrating external APIs, payment gateways, email services,
                                    maps, and other third-party services to enhance application
                                    functionality.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> Stripe, Resend Email, Google Maps API, TMDB API, QR Code, Device Fingerprinting
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;