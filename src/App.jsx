import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import OchiEye from "./components/OchiEye";
import Feature from "./components/Feature";
import Client from "./components/Client";
import Cards from "./components/Cards";
import OpenEye from "./components/OpenEye";
function App() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <OchiEye />
      <Feature />
      <Client />
      <Cards />
      <OpenEye />
    </div>
  );
}

export default App;
