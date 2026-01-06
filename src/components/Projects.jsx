import React from 'react';
import { ExternalLink, Target } from 'lucide-react';

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: "AI-Powered E-Learning Assistant",
      company: "Hurix Digital",
      period: "Oct 2023 – Mar 2025",
      description: "Built an AI-powered e-learning assistant that summarized notes and generated quizzes, improving study efficiency by 65% for 40+ students using rule-based NLP techniques.",
      tags: ["AI/ML", "NLP", "Product Development", "E-Learning"],
      role: "Product Owner",
      metrics: "80% Efficiency Increase",
      statLabel: "Impact Metric"
    }
  ];

  return (
    <section 
    /* FIXED: Changed "Projects" to "projects" (lowercase) to match your Header links */
    id="projects"
    /* FIXED: Background color updated to #dcd5e7 to maintain your design flow */
    className={`py-24 px-6 bg-[#dcd5e7] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-20 text-left">
          <div className="flex items-center gap-4 mb-4">
            <span className="h-px w-12 bg-slate-900/30"></span>
            <span className="text-sm font-bold tracking-[0.3em] uppercase text-slate-600">Selected Works</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-serif text-slate-900 tracking-tight">
            Projects
          </h2>
        </div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
            >
              {/* Left Side: The Metric Showcase */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative aspect-video bg-white/20 backdrop-blur-sm rounded-[2.5rem] border border-white/40 shadow-sm flex items-center justify-center overflow-hidden">
                  
                  <div className="text-center group">
                    <span className="block text-[10px] uppercase tracking-[0.4em] text-slate-500 mb-2 font-bold transition-all group-hover:tracking-[0.6em]">
                      {project.statLabel}
                    </span>
                    <h4 className="text-6xl md:text-8xl font-serif text-slate-900/80">
                      {project.metrics.split(' ')[0]}
                    </h4>
                    <span className="text-xl font-light text-slate-700 uppercase tracking-widest">
                      {project.metrics.split(' ').slice(1).join(' ')}
                    </span>
                  </div>

                  <div className="absolute top-0 right-0 p-8">
                    <div className="w-12 h-12 border-t-2 border-r-2 border-slate-900/10 rounded-tr-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Right Side: The Details */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-tighter">
                    {project.role}
                  </div>
                  <span className="text-slate-500 text-sm font-medium italic">@{project.company}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-xl text-slate-800/70 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-4">
                  {project.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-4 py-2 bg-white/40 rounded-full text-xs font-semibold text-slate-700 border border-slate-900/5 transition-colors hover:bg-slate-900 hover:text-white cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;