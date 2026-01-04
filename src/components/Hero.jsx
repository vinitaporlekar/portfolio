import React from 'react';
import { Mail, ChevronRight, GraduationCap } from 'lucide-react';

const Hero = ({ isVisible, setShowResumeModal }) => {
  return (
    <section className={`py-20 px-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
              <span className="text-amber-400 text-sm font-semibold">Open to Opportunities</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Products at the{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Intersection of AI & UX
              </span>
            </h2>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Product Manager with 5+ years of experience delivering AI-powered solutions that drive user engagement and business impact. Currently pursuing MS in Information Systems at Northeastern University.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowResumeModal(true)}
                className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 flex items-center gap-2"
              >
                View Resume
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="mailto:porlekar.v@northeastern.edu"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-amber-400" />
                <h3 className="text-xl font-bold">Current Education</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-amber-400 mb-1">
                    Master of Science in Information Systems
                  </h4>
                  <p className="text-slate-300 font-medium">Northeastern University</p>
                  <p className="text-slate-400 text-sm">Arlington, VA | Aug 2025 – Expected May 2027</p>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400 mb-2">Previous Education</p>
                  <h4 className="text-base font-semibold text-slate-200 mb-1">
                    Bachelor of Engineering, Computer Engineering
                  </h4>
                  <p className="text-slate-300 text-sm">University of Mumbai | May 2019</p>
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-green-400 text-sm font-medium">Authorized to work on F1 CPT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
