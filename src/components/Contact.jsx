import React from 'react';
import { Mail, Linkedin, ExternalLink, Github } from 'lucide-react';

const Contact = ({ isVisible }) => {
  return (
    <>
      <section className={`py-20 px-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-300 mb-12">
            Interested in collaborating or learning more about my work? Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:porlekar.v@northeastern.edu"
              className="group flex items-center justify-center gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <p className="text-slate-200 font-semibold group-hover:text-amber-400 transition-colors">
                  porlekar.v@northeastern.edu
                </p>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/vinitaporlekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 hover:border-amber-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400 mb-1">LinkedIn</p>
                <p className="text-slate-200 font-semibold group-hover:text-amber-400 transition-colors flex items-center gap-2">
                  Connect with me
                  <ExternalLink className="w-4 h-4" />
                </p>
              </div>
            </a>
          </div>
          
          <div className="pt-12 border-t border-slate-800">
            <p className="text-slate-400 text-sm">
              Sterling, VA - 20166 | Open to Software Engineering, AI/ML and Product Management Roles
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © 2026 Vinita Porlekar. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
