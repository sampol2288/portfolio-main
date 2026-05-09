import React from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Inquiries from "@/components/Inquiries";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Made With EmergentolioProvider } from "@/context/Made With EmergentolioContext";

function App() {
  return (
    <Made With EmergentolioProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Inquiries />
        <Footer />
        <Toaster />
      </div>
    </Made With EmergentolioProvider >
  );
}



export default App;
