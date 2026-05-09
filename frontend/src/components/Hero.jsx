import React from 'react';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { useolio } from '../context/olioContext';

const Hero = () => {
  const { data: olioData } = useolio();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 border border-cyan-400/20 rotate-45 animate-float" />
        <div className="absolute bottom-32 right-20 w-16 h-16 border border-teal-400/20 rotate-12 animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-20 w-12 h-12 border border-emerald-400/20 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fadeIn">
          {/* Greeting */}
          <p className="text-cyan-400 text-lg font-medium">Hi, I'm</p>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {olioData.personal.name}
            </span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-300">
            {olioData.personal.title}
          </h2>

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-lg text-slate-400 leading-relaxed">
            Building responsive, intelligent web interfaces with modern technologies.
            Specializing in React.js and AI-integrated frontend solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-lg shadow-cyan-500/30 transition-all hover:scale-105"
            >
              View Projects
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>

            <a
              href={olioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full" />
        </div>
      </div>
    </section >
  );
};

export default Hero;