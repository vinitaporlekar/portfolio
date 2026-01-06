import React from 'react';
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react';

const Education = ({ isVisible }) => {
  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Information Systems",
      period: "Aug 2025 - Expected May 2027",
      location: "Arlington, VA",
      status: "Expected",
      color: "from-purple-500/20", // Innovative gradient color
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering, Computer Engineering",
      period: "May 2019",
      location: "Mumbai, India",
      status: "Completed",
      color: "from-blue-500/20", // Innovative gradient color
    }
  ];

  return (
    <section 
      id="education"
      // Matching background for the "Sunset" color blend
      className={`py-24 px-6 bg-[#cfc6de] transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* max-w-7xl ensures perfect left-alignment with About/Experience */}
      <div className="max-w-7xl mx-auto">
        
        {/* Title: Left Aligned as requested */}
        <div className="mb-16 text-left">
          <h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight flex items-left gap-4">
            Education <BookOpen className="w-10 h-10 text-slate-900/20" />
          </h2>
        </div>

        {/* Timeline Layout for Innovative feel */}
        <div className="relative space-y-10">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-slate-900/10 hidden md:block"></div>

          {education.map((edu, index) => (
            <div 
              key={index}
              className={`relative pl-0 md:pl-12 transition-all duration-1000 delay-[${index * 200}ms] ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              {/* INNOVATION: The Animated Timeline Dot */}
              <div className="absolute left-0 top-10 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-900 z-20 hidden md:block border-4 border-[#b7adc8]"></div>

              {/* INNOVATION: Glassmorphism Card with Gradient Glow */}
              <div className="group relative w-full lg:w-4/5 bg-white/40 backdrop-blur-md border border-white/40 p-8 md:p-10 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                
                {/* Background Glow Effect on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${edu.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-5">
                      {/* INNOVATION: Floating Icon Card */}
                      <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-purple-900 transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-xl font-medium text-slate-800 italic">
                          {edu.degree}
                        </p>
                      </div>
                    </div>
                    
                    {/* Status Badge */}
                    <span className={`self-start md:self-center text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-slate-900/20 ${edu.status === 'Expected' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>
                      {edu.status}
                    </span>
                  </div>

                  {/* Metadata Icons */}
                  <div className="flex flex-wrap gap-8 pt-6 border-t border-slate-900/10">
                    <div className="flex items-center gap-3 text-slate-700 font-semibold uppercase tracking-tighter text-sm">
                      <Calendar className="w-5 h-5 text-slate-900/40" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-700 font-semibold uppercase tracking-tighter text-sm">
                      <MapPin className="w-5 h-5 text-slate-900/40" />
                      <span>{edu.location}</span>
                    </div>
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