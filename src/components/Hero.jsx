import React, { useState, useEffect } from 'react';
import ResumeModal from './ResumeModal';
import backgroundImage from '../assets/image_d31f46.jpg';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showResumeModal, setShowResumeModal] = useState(false);
  const fullText = 'Driving product strategy with engineering insight.';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center overflow-hidden bg-[#e9e4f0]" 
      >
        {/* BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover grayscale-[10%] brightness-105" 
          />
          
          {/* 1. Purple Tint Overlay */}
          <div className="absolute inset-0 bg-purple-900/10 mix-blend-multiply"></div>
          
          {/* 2. Horizontal Gradient (Lightens the text area) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#e9e4f0]/95 via-[#e9e4f0]/40 to-transparent"></div>
          
          {/* 3. Vertical Gradient (Blends the bottom into the next section) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#e9e4f0] via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 md:px-16 py-20 relative z-10 w-full">
          <div className="max-w-2xl space-y-8">
            <h1 className="text-7xl md:text-8xl font-serif text-slate-900 leading-tight tracking-tight animate-fade-in-up">
              Hey, I'm<br />Vinita.
            </h1>
            
            <p className="text-2xl md:text-3xl font-serif text-slate-900 leading-relaxed min-h-[80px]">
              {displayedText}
              <span className="inline-block w-1 h-8 bg-slate-900 ml-1 align-middle animate-blink"></span>
            </p>

            <div className="flex flex-wrap gap-4 animate-slide-in-up">
              <button
                onClick={() => setShowResumeModal(true)}
                className="px-10 py-4 bg-white/60 hover:bg-white/90 backdrop-blur-md text-slate-900 text-lg font-medium rounded-full border border-slate-900/10 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl inline-flex items-center gap-2 group"
              >
                View Resume
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-10 py-4 bg-white/60 hover:bg-white/90 backdrop-blur-md text-slate-900 text-lg font-medium rounded-full border border-slate-900/10 transition-all duration-300 hover:scale-[1.05] hover:shadow-xl inline-flex items-center gap-2"
              >
                Get in Touch
              </button>
            </div>

            {/* Glowing CPT Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-lg rounded-full border-2 border-green-500/30 shadow-lg animate-pulse">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-bold text-slate-900 tracking-wider uppercase">
                Eligible to work on CPT (F-1)
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-40 z-10">
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {showResumeModal && <ResumeModal setShowResumeModal={setShowResumeModal} />}
    </>
  );
};

export default Hero;