import React from 'react';

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      title: "Product-Focused Technical PM",
      company: "Tercera - Hurix Digital",
      location: "Mumbai, India",
      period: "Oct 2023 – Mar 2025",
      color: "bg-purple-500",
      highlights: [
        "Prioritized features and led product launches of AI & e-learning MVPs with $300K+ budget delivering solutions in record time to clients",
        "Collaborated with designers to improve project's user experience, increasing engagement by 80% which was used by around 100K+ students across 75+ e-learning institutions",
        "Co-ordinated agile sprints with various stakeholders for getting the project delivered within a timely fashion"
      ]
    },
    {
      title: "Senior Analyst",
      company: "Jio Platform / Haptik",
      location: "Mumbai, India",
      period: "June 2021 – Sep 2023",
      color: "bg-blue-400",
      highlights: [
        "Spearheaded getting the product data and feedback from users to iterate and improve chatbot features",
        "Delivered chatbot solutions, boosting support efficiency by 80%, reducing the mean time to resolution",
        "Partnered with UX and engineering teams to enhance AI assistants, raising engagement 75-80%"
      ]
    },
    {
      title: "Application System Analyst",
      company: "Planet Next Gen",
      location: "Mumbai, India",
      period: "Nov 2019 – June 2021",
      color: "bg-rose-400",
      highlights: [
        "Led automation projects reducing development time by 55% and training time by 50%",
        "Developed training and reporting tools improving decision-making by 70%",
        "Managed multiple projects simultaneously with strong organizational skills"
      ]
    }
  ];

  return (
    <section 
    /* FIXED: Changed "Experience" to "experience" (lowercase) to match Header.jsx */
    id="experience"
    /* FIXED: Changed color to match your blend and ensured width matches About (max-w-7xl) */
    className={`py-24 px-6 bg-[#c5bdd1] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-serif mb-16 text-slate-900 tracking-tight">
          Experience
        </h2>
        
        <div className="relative space-y-12">
          {/* Vertical Timeline Line - Now aligned to the far left to match Education */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-900/10 hidden md:block">
             <div className={`absolute top-0 left-0 w-full bg-slate-900 transition-all duration-[2000ms] ${isVisible ? 'h-full' : 'h-0'}`}></div>
          </div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative pl-0 md:pl-12 transition-all duration-700 delay-[${index * 200}ms] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 z-20 hidden md:block border-4 border-[#c5bdd1]">
                <div className="absolute inset-0 rounded-full bg-slate-900 animate-ping opacity-20"></div>
              </div>

              {/* Experience Card: Made larger (w-full lg:w-4/5) and left-aligned */}
              <div className="w-full lg:w-4/5">
                <div className="group relative bg-white/40 backdrop-blur-md border border-white/30 rounded-3xl p-8 hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                  
                  <div className={`absolute top-0 left-0 w-2 h-0 group-hover:h-full transition-all duration-500 rounded-l-3xl ${exp.color}`}></div>

                  <div className="mb-6">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{exp.period}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1 group-hover:text-purple-700 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg font-medium text-slate-700">{exp.company} • {exp.location}</p>
                  </div>
                  
                  <ul className="space-y-4 text-slate-800">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex gap-3 text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                        <span className="text-slate-900 font-bold">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;