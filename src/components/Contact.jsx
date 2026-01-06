import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = ({ isVisible }) => {
  return (
    <section 
    id="contact"
    className={`py-20 px-6 bg-[#c5bdd1] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-slate-900">
          Let's Connect
        </h2>
        <p className="text-slate-800 mb-12 max-w-xl mx-auto text-lg">
          Thanks for stopping by! Open to new opportunities and collaborations.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {/* Email Card with Glassmorphism */}
          <a 
            href="mailto:porlekar.v@northeastern.edu" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-900 font-medium text-lg">
              Email Me
            </span>
          </a>
          
          {/* LinkedIn Card with Glassmorphism */}
          <a 
            href="https://www.linkedin.com/in/vinitaporlekar/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/50 hover:shadow-xl transition-all duration-300"
          >
            <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <span className="text-slate-900 font-medium text-lg">
              LinkedIn
            </span>
          </a>
          
          {/* Location Card */}
          <div className="flex items-center gap-3 px-8 py-4 bg-white/30 backdrop-blur-md border border-white/20 rounded-full">
            <div className="w-10 h-10 bg-slate-900/10 rounded-full flex items-center justify-center">
              <MapPin className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-slate-900 font-medium text-lg">
              Sterling, VA
            </span>
          </div>
        </div>
        
        {/* Footer */}
        <div className="pt-8 border-t border-slate-900/10">
          <p className="text-slate-800 text-sm">
            © 2026 Vinita Porlekar — Designed with React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;