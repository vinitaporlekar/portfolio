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
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]"></div>
      </div>

      <div className={`relative z-10 max-w-6xl mx-auto w-full py-20 transition-all duration-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 border border-slate-200 rounded-full shadow-sm mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-slate-700 text-sm font-medium">
              Authorized to work on <span className="text-slate-900 font-bold px-2 py-0.5 bg-amber-100/80 rounded-md">F1 CPT</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-slate-800 leading-tight">
            Hello! <span className="text-2xl">✨</span>
            <br />
            <span className="text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
              Vinita
            </span>{' '}
            <span className="font-semibold">here</span>
          </h1>

          <div className="text-xl md:text-3xl text-slate-600 mb-12 font-semibold tracking-tight h-12">
           <span className="text-slate-900">{text}</span>
            <span className="animate-pulse text-amber-500 ml-1">|</span>
          </div>
          
          <div className="flex flex-wrap gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;