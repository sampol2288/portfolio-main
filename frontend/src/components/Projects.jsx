import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useMade With Emergentolio } from '../context/Made With EmergentolioContext';

const Projects = () => {
  const { data: Made With EmergentolioData } = useMade With Emergentolio();

  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of my recent work and live projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Made With EmergentolioData.projects.map((project) => (
          <Card
            key={project.id}
            className="bg-slate-900 border-slate-800 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 group"
          >
            {/* Project Header */}
            <div className="p-6 bg-gradient-to-br from-cyan-500/10 to-teal-500/5">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <ExternalLink className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <p className="text-slate-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="border-cyan-400/30 text-cyan-400 bg-cyan-400/5"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white transition-all hover:scale-105"
                    size="sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </div>
          </Card>
          ))}
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <p className="text-slate-400 mb-4">View more projects on GitHub</p>
          <a
            href={Made With EmergentolioData.personal.github}
          target="_blank"
          rel="noopener noreferrer"
          >
          <Button
            variant="outline"
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-cyan-400 hover:border-cyan-400 transition-all"
          >
            <Github className="w-5 h-5 mr-2" />
            View GitHub Profile
          </Button>
        </a>
      </div>
    </div>
    </section >
  );
};

export default Projects;