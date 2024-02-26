import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OchiEye from "./components/OchiEye";
import Feature from "./components/Feature";
import Client from "./components/Client";
import Cards from "./components/Cards";
import OpenEye from "./components/OpenEye";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <Hero />
      <About />
      <OchiEye />
      <Feature />
      <Client />
      <Cards />
      <OpenEye />
      <Footer />
    </div>
  );
}

export default App;
