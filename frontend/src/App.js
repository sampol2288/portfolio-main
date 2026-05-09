import React from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { PortfolioProvider } from "@/context/PortfolioContext";

function App() {
  return (
    <PortfolioProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </PortfolioProvider>
  );
}



export default App;
