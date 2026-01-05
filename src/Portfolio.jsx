import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isVisible={isVisible}
      />
      
      <main>
        <Hero 
          isVisible={isVisible}
          setShowResumeModal={setShowResumeModal}
        />
        
        <About isVisible={isVisible} />
        
        <Education isVisible={isVisible} />
        
        <Experience isVisible={isVisible} />
        
        <Skills isVisible={isVisible} />
        
        <Projects isVisible={isVisible} />
        
        <Contact isVisible={isVisible} />
      </main>

      {showResumeModal && (
        <ResumeModal setShowResumeModal={setShowResumeModal} />
      )}
    </div>
  );
}

export default Portfolio;
