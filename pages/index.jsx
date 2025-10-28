import About from "@/src/components/About";
import Blog from "@/src/components/Blog";
import Client from "@/src/components/Client";
import Contact from "@/src/components/Contact";
import Home from "@/src/components/Home";
import BlogPopup from "@/src/components/popup/BlogPopup";
import ImageView from "@/src/components/popup/ImageView";
import PortfolioPopup from "@/src/components/popup/PortfolioPopup";
import VideoPopup from "@/src/components/popup/VideoPopup";
import Services from "@/src/components/Services";
import Testimonials from "@/src/components/Testimonials";
import { AxoContext } from "@/src/Context";
import Cursor from "@/src/layouts/Cursor";
import Footer from "@/src/layouts/Footer";
import Header from "@/src/layouts/Header";
import PreLoader from "@/src/layouts/PreLoader";
import ScrollTop from "@/src/layouts/ScrollTop";
import { axo } from "@/src/utils";
import dynamic from "next/dynamic";
import { Fragment, useContext, useEffect } from "react";
const Portfolio = dynamic(() => import("@/src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  useEffect(() => {
    axo.imgToSvg();
    axo.smoothScrolling();
    axo.stickyNav();
    axo.customMouse();
    axo.movingAnimation();
    axo.animation();
  }, []);
  const { blog, portfolio_modal } = useContext(AxoContext);
  return (
    <Fragment>
      {/* <PreLoader /> */}
      <VideoPopup />
      <ImageView />
      {blog && <BlogPopup />}
      {portfolio_modal && <PortfolioPopup />}
      <Header />
      <Home />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Client />
      <Blog />
      <Contact />
      <Footer />
      <ScrollTop />
      <Cursor />
    </Fragment>
  );
};
export default Index;
