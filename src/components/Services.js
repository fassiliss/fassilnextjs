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
                                    Building responsive web applications with clean interfaces,
                                    reliable backends, authentication, admin tools, and production
                                    deployment.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> Next.js, React, TypeScript, MongoDB, Supabase, Firebase, Vercel
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
                                    Creating fast, accessible interfaces that look polished on
                                    mobile, tablet, and desktop screens.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> React, Next.js, TypeScript, Tailwind CSS, Material UI, Bootstrap
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
                                    Developing APIs, database models, protected routes, email
                                    flows, and secure data workflows for growing applications.
                                </p>
                                <div className="service-details">
                                    <p className="tech-stack">
                                        <strong>Tech:</strong> Next.js API Routes, MongoDB Atlas, Mongoose, Supabase, Firebase, Resend
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
                                    Building online ordering and checkout experiences with carts,
                                    product management, payment flows, and order tracking.
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
                                    Implementing secure sign-in, protected pages, role-based
                                    access, and admin dashboards for day-to-day management.
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
                                    Connecting applications to payments, email, maps, media APIs,
                                    QR codes, and other services that support business workflows.
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
