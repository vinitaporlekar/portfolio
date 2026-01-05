import React, { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
// Correct path after you move the image to src/assets/
import heroBg from '../assets/image_d31f46.jpg'; 

const Hero = ({ isVisible, setShowResumeModal }) => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = ["Product-Minded Technologist",
   "Building software, products, and AI-driven solutions"
  ];
  const typingSpeed = isDeleting ? 50 : 150;

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentRole.substring(0, text.length - 1));
        if (text === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto w-full py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-slate-900 leading-[1.1]">
            Hello! ✨ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              Vinita
            </span> here
          </h1>
          
          <div className="text-2xl md:text-4xl text-slate-600 mb-12 font-semibold tracking-tight h-12">
           <span className="text-slate-900">{text}</span>
            <span className="animate-pulse text-amber-500 ml-1">|</span>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-16">
            <button
              onClick={() => setShowResumeModal(true)}
              className="px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-full font-bold transition-all hover:scale-105 flex items-center gap-3 shadow-xl"
            >
              <Download className="w-5 h-5" />
              Download CV
            </button>
            
            <a
              href="mailto:porlekar.v@northeastern.edu"
              className="px-8 py-4 bg-white border-2 border-slate-100 hover:border-amber-400 text-slate-900 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-3 shadow-sm"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
          
          {/* Highlighted F1 CPT Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 border border-slate-200 rounded-2xl shadow-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-slate-700 text-sm md:text-base font-medium">
              Authorized to work on <span className="text-slate-900 font-bold px-2 py-1 bg-amber-100 rounded-md">F1 CPT</span> 👩‍💻
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;