import React from 'react';
import { Code, Layout, GitBranch, Layers, Sparkles, Boxes } from 'lucide-react';
import { Card } from './ui/card';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { data: portfolioData } = usePortfolio();

  const skillIcons = {
    'HTML5': <Code className="w-6 h-6" />,
    'CSS3': <Layout className="w-6 h-6" />,
    'JavaScript': <Code className="w-6 h-6" />,
    'React.js': <Layers className="w-6 h-6" />,
    'Bootstrap': <Boxes className="w-6 h-6" />
  };

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, responsive web applications
          </p>
        </div>

        {/* Frontend Technologies */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <Code className="w-6 h-6 text-cyan-400" />
            Frontend Technologies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.skills.frontend.map((skill) => (
              <Card
                key={skill.name}
                className="bg-slate-950 border-slate-800 p-6 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    {skillIcons[skill.name] || <Code className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
                </div>
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Proficiency</span>
                    <span className="text-cyan-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Practices */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
            <GitBranch className="w-6 h-6 text-cyan-400" />
            Development Practices
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolioData.skills.practices.map((practice, index) => (
              <Card
                key={index}
                className="bg-slate-950 border-slate-800 p-4 hover:border-cyan-400/50 transition-all duration-300 hover:translate-x-1 group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300 font-medium">{practice}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
