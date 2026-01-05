import React from 'react';

const Header = ({ activeSection, setActiveSection, isVisible, scrollProgress = 0 }) => {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => scrollToSection('home')} className="group transition-all">
            <span className="text-3xl font-signature text-black tracking-tight"> 
              Vinita Porlekar
            </span>
         
        </button>
        
        <nav className="hidden md:flex gap-8">
          {['home', 'about', 'experience', 'skills', 'projects', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-sm font-semibold capitalize transition-all hover:text-amber-500 ${
                activeSection === id ? 'text-white-600 scale-110' : 'text-slate-600'
              }`}
            >
              {id}
            </button>
          ))}
        </nav>
      </div>
      {/* Scroll Progress Bar */}
      <div 
        className="h-[2px] bg-amber-500 transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }} 
      />
    </header>
  );
};

export default Header;