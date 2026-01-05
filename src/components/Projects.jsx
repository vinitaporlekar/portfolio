import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: "AI-Powered E-Learning Assistant",
      company: "Hurix Digital",
      period: "Oct 2023 – Mar 2025",
      description: "Built an AI-powered e-learning assistant that summarized notes and generated quizzes, improving study efficiency by 65% for 40+ students using rule-based NLP techniques.",
      tags: ["AI/ML", "NLP", "Product Development", "E-Learning"],
      role: "Product Owner"
    }
  ];

  return (
    <section 
      id="projects"
      className={`py-20 px-6 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <Code className="w-8 h-8 text-amber-500" />
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              
              <p className="text-amber-600 text-sm mb-2 font-medium">
                {project.role} @ {project.company}
              </p>
              
              <p className="text-slate-700 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full border border-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
