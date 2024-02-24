import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import OchiEye from "./components/OchiEye";
function App() {
  return (
    <div className="w-full min-h-screen bg-[#F1F1F1]">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <OchiEye />
    </div>
  );
}

export default App;
