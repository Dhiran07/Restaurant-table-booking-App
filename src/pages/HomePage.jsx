import React from "react";
// import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import Chicago from "../components/Chicago";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Specials />
      <Testimonials />
      <Chicago />
      {/* <Footer /> */}
    </>
  );
};

export default Homepage;
