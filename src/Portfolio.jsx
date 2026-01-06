import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      // 1. Calculate Progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // 2. Detect Active Section for both Header and Dots
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect if section is mostly in view
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // "relative" is required for the fixed elements to position correctly
    <div className="relative bg-[#e9e4f0]"> 
      
      {/* HEADER: Ensure z-index is highest (z-50) so it's clickable */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isVisible={isVisible} 
        scrollProgress={scrollProgress}
      />
      
      {/* MAIN CONTENT: Remove any overflow-hidden that might block scrolling */}
      <main className="relative z-10">
        <Hero isVisible={isVisible} />
        <About isVisible={isVisible} />
        <Education isVisible={isVisible} />
        <Experience isVisible={isVisible} />
        <Skills isVisible={isVisible} />
        <Projects isVisible={isVisible} />
        <Contact isVisible={isVisible} />
      </main>

      {/* NAVIGATION DOTS: Higher z-index than main, but lower than Header */}
      <ScrollProgress activeSection={activeSection} />
    </div>
  );
};

const ScrollProgress = ({ activeSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
     { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      {sections.map((section) => (
        <a 
          key={section.id} 
          href={`#${section.id}`} 
          className="group flex items-center justify-end"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="mr-4 px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity font-bold uppercase tracking-widest">
            {section.label}
          </span>
          <div className={`w-2.5 h-2.5 rounded-full border border-slate-900/10 transition-all duration-300 ${
            activeSection === section.id ? 'bg-amber-500 scale-150 shadow-lg' : 'bg-slate-400/40 hover:bg-slate-400'
          }`} />
        </a>
      ))}
    </div>
  );
};

export default Portfolio;