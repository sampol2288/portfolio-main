import React from 'react';
import { Github, Heart, Download } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Branding */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              <span className="text-cyan-400">Smit</span> Polra
            </h3>
            <p className="text-slate-400 text-sm">
              AI + Front End Developer
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* Right - Resume Download */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            © {currentYear} Smit Polra. Built with
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;