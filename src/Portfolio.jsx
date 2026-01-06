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

    // Logic to calculate scroll progress for your Header bar
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Simple logic to detect which section is in view for the dots/nav
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* HEADER: Placed above everything, fixed at top */}
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isVisible={isVisible} 
        scrollProgress={scrollProgress}
      />
      
      {/* MAIN CONTENT: The slides */}
      <main className="snap-container">
        <Hero isVisible={isVisible} />
        <About isVisible={isVisible} />
        <Education isVisible={isVisible} />
        <Experience isVisible={isVisible} />
        <Skills isVisible={isVisible} />
        <Projects isVisible={isVisible} />
        <Contact isVisible={isVisible} />
      </main>

      {/* NAVIGATION DOTS */}
      <ScrollProgress activeSection={activeSection} />
    </div>
  );
};

// Side Dots Component
const ScrollProgress = ({ activeSection }) => {
  const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education', 'contact'];
  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5">
      {sections.map((id) => (
        <a key={id} href={`#${id}`} className="group flex items-center justify-end">
          <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
            activeSection === id ? 'bg-amber-500 scale-150' : 'bg-slate-400/40'
          }`} />
        </a>
      ))}
    </div>
  );
};

export default Portfolio;