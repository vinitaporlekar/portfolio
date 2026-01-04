import React from 'react';
import { Code } from 'lucide-react';

const Skills = ({ isVisible }) => {
  const skills = {
    "Development": "Strong Java & OOPs knowledge, All things Generative AI Integrations (Developer productivity to API integrations)",
    "Product Management": "Product Vision & Strategy, User & Market Analysis, Road mapping, KPI Tracking, Stakeholder Communication",
    "Project Management": "Agile (Scrum, Kanban), Jira, Risk Mitigation, Sprint Planning",
    "AI & Automation": "AI Chatbot Ideation, Workflow Automation, REST APIs, Postman",
    "Tools": "Google Workspace (Documentation) & Figma (Prototyping)",
    "Certifications": "AWS Cloud Practitioner & Certified SCRUM Master"
  };

  return (
    <section className={`py-20 px-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-bold">Core Skills</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, description], index) => (
            <div
              key={category}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/30 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-amber-400 mb-3">{category}</h3>
              <p className="text-slate-300 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
