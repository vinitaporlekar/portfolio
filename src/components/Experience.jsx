import React from 'react';

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
        "Co-ordinated agile sprints with various stakeholders for getting the project delivered within a timely fashion"
      ]
    },
    {
      title: "Senior Analyst",
      company: "Jio Platform / Haptik",
      location: "Mumbai, India",
      period: "June 2021 – Sep 2023",
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
      highlights: [
        "Led automation projects reducing development time by 55% and training time by 50%",
        "Developed training and reporting tools improving decision-making by 70%",
        "Managed multiple projects simultaneously with strong organizational skills"
      ]
    }
  ];

  return (
    <section 
      id="experience"
      className={`py-20 px-6 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">Experience</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-amber-500 pl-8 relative"
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 bg-amber-500 rounded-full border-4 border-slate-50" />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-amber-600 font-medium">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-3 text-sm text-slate-600 mt-2">
                    <span>{exp.period}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-slate-700">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-3">
                      <span className="text-amber-500 mt-1 font-bold">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
