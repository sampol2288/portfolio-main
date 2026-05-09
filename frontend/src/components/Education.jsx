import React from 'react';
import { GraduationCap, Calendar, CheckCircle, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { usePortfolio } from '../context/PortfolioContext';

const Education = () => {
  const { data: portfolioData } = usePortfolio();

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-cyan-400">Education</span> & Training
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto mb-4" />
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic background and professional training
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {portfolioData.education.map((edu, index) => (
            <Card
              key={edu.id}
              className="bg-slate-950 border-slate-800 p-6 hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`${edu.status === 'Pursuing' ? 'border-teal-400/30 text-teal-400 bg-teal-400/5' : 'border-emerald-400/30 text-emerald-400 bg-emerald-400/5'} w-fit`}
                    >
                      {edu.status === 'Pursuing' ? (
                        <Clock className="w-3 h-3 mr-1" />
                      ) : (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      )}
                      {edu.status}
                    </Badge>
                  </div>

                  <p className="text-slate-400 font-medium mb-2">
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {/* Timeline Connector (except last item) */}
              {index < portfolioData.education.length - 1 && (
                <div className="ml-8 mt-4 border-l-2 border-slate-800 h-6" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
