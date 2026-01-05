import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education = ({ isVisible }) => {
  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Information Systems",
      period: "Aug 2025 - Expected May 2027",
      location: "Arlington, VA"
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering, Computer Engineering",
      period: "May 2019",
      location: "Mumbai, India"
    }
  ];

  return (
    <section 
      id="education"
      className={`py-20 px-6 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">Education</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-8 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-amber-600 mb-2">
                    {edu.institution}
                  </h3>
                  <p className="text-lg text-slate-800 font-medium mb-2">
                    {edu.degree}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                    <span>{edu.period}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
