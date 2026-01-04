import React from 'react';
import { Briefcase, ChevronRight } from 'lucide-react';

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      title: "Product-Focused Technical PM",
      company: "Tercera - Hurix Digital",
      location: "Mumbai, India",
      period: "Oct 2023 – Mar 2025",
      highlights: [
        "Prioritized features and led product launches of AI & e-learning MVPs with $300K+ budget delivering solutions in record time to clients",
        "Collaborated with designers to improve project's user experience, increasing engagement by 80% which was used by around 100K+ students across 75+ e-learning institutions",
        "Co-ordinated agile sprints with various stakeholders for getting the project delivered within a timely fashion",
        "Presented product vision and progress to stakeholders, aligning teams with goals and roadmaps",
        "Conducted competitor and market analysis to refine product strategy"
      ]
    },
    {
      title: "Senior Analyst",
      company: "Jio Platform / Haptik",
      location: "Mumbai, India",
      period: "June 2021 – Sep 2023",
      highlights: [
        "Spearheaded getting the product data and feedback from users to iterate and improve chatbot features",
        "Delivered chatbot solutions, boosting support efficiency by 80%, reducing the mean time to resolution for trivial and generic questions raised by the consumers",
        "Partnered with UX and engineering teams to enhance AI assistants, raising engagement 75-80% by utilizing Figma for multiple prototyping requirements, as well maintaining documentation"
      ]
    },
    {
      title: "Application System Analyst",
      company: "Planet Next Gen",
      location: "Mumbai, India",
      period: "Nov 2019 – June 2021",
      highlights: [
        "Led automation projects reducing development time by 55% and training time by 50% for individual contributors and stakeholders, which improved efficiency in project deliverables",
        "Developed training and reporting tools improving decision-making by 70%, these tools were used by business stakeholders for critical business initiatives",
        "Managed multiple projects simultaneously with strong organizational skills"
      ]
    }
  ];

  return (
    <section className={`py-20 px-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-bold">Professional Experience</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-amber-400 mb-2">{exp.title}</h3>
                  <p className="text-lg text-slate-200 font-semibold">{exp.company}</p>
                  <p className="text-slate-400">{exp.location}</p>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 whitespace-nowrap">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex gap-3 text-slate-300 leading-relaxed">
                    <ChevronRight className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
