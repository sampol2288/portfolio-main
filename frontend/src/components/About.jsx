import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { Card } from './ui/card';
import { useolio } from '../context/olioContext';

const About = () => {
  const { data: olioData } = useolio();

  return (
    <section id="about" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Main Summary */}
          <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm p-8 hover:border-cyan-400/50 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <Code2 className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional Summary</h3>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              {olioData.about.summary}
            </p>
          </Card>

          {/* Highlight */}
          <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-400/30 backdrop-blur-sm p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-cyan-500/20 rounded-lg">
                <Sparkles className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">What Drives Me</h3>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              {olioData.about.highlight}
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{olioData.projects.length}+</div>
            <div className="text-slate-400 text-sm">Projects</div>
          </div>
          <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all">
            <div className="text-3xl font-bold text-cyan-400 mb-2">{olioData.skills.frontend.length}+</div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
          <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all">
            <div className="text-3xl font-bold text-cyan-400 mb-2">3+</div>
            <div className="text-slate-400 text-sm">Years Learning</div>
          </div>
          <div className="text-center p-6 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-cyan-400/50 transition-all">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
            <div className="text-slate-400 text-sm">Dedication</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;