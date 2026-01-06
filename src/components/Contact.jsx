import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = ({ isVisible }) => {
  return (
    <section 
      id="contact"
      className={`py-20 px-6 bg-gradient-to-b from-white to-amber-50/30 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Let's Connect
        </h2>
        <p className="text-slate-600 mb-12 max-w-xl mx-auto">
          Thanks for stopping by! Open to new opportunities and collaborations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          <a href="mailto:porlekar.v@northeastern.edu" className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-amber-400 hover:shadow-lg transition-all">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <Mail className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-slate-700 group-hover:text-amber-600 transition-colors font-medium">
              Email Me
            </span>
          </a>
          
          <a href="https://www.linkedin.com/in/vinitaporlekar/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full hover:border-amber-400 hover:shadow-lg transition-all">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <Linkedin className="w-4 h-4 text-amber-600 group-hover:text-white transition-colors" />
            </div>
            <span className="text-slate-700 group-hover:text-amber-600 transition-colors font-medium">
              LinkedIn
            </span>
          </a>
          
          <div className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200 rounded-full">
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
              <MapPin className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-slate-700 font-medium">
              Sterling, VA
            </span>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200">
          <p className="text-slate-500 text-sm">
            2024 Vinita Porlekar - Made with React and Tailwind
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;