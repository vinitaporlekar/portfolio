import React from 'react';
import { Award, CheckCircle } from 'lucide-react';

const Skills = ({ isVisible }) => {
  const skills = {
    "Programming Languages": "Java, JavaScript (ES6+)",
    "Web Development": "React.js, Node.js, HTML5, CSS3, Tailwind CSS",
    "Product Management": "Product Strategy, User & Market Analysis, Roadmapping, KPI Tracking",
    "Project Management": "Agile (Scrum, Kanban), Jira, Risk Mitigation, Sprint Planning",
    "AI & Machine Learning": "LLM APIs, Claude AI",
    "Tools & Platforms": "Git, AWS, Figma, Postman, Google Workspace",
  };

  const certifications = [
    "AWS Cloud Practitioner",
    "Certified SCRUM Master"
  ];

  return (
    <section 
      id="skills"
      className={`py-24 px-6 bg-[#cfc6de] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight">Skills</h2>
            <p className="text-lg text-slate-800/80 mt-4 max-w-2xl">
              A blend of technical engineering and strategic product management.
            </p>
          </div>
        </div>

        {/* INNOVATION: Certification Highlight Bar */}
        <div className="mb-16">
          <h3 className="text-sm font-bold text-slate-600 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" /> Professional Certifications
          </h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="group relative flex items-center gap-3 px-6 py-4 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-md rounded-2xl border-2 border-amber-500/30 shadow-xl hover:shadow-amber-500/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-amber-600 animate-pulse" />
                </div>
                <span className="text-lg font-bold text-slate-900">{cert}</span>
                {/* Decorative Shine Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Animated Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              style={{ transitionDelay: `${index * 100}ms` }}
              className={`group bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-8 hover:bg-white/40 hover:shadow-2xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-800 transition-colors">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.split(', ').map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-sm text-slate-800 bg-white/30 px-3 py-1 rounded-lg border border-white/20"
                  >
                    {skill}
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

export default Skills;