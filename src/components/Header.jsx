import React from 'react';

const Header = ({ activeSection, setActiveSection, isVisible, scrollProgress = 0 }) => {
  
  // Single, corrected scroll function inside the component
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 1. Temporarily disable scroll-snap to prevent the "fight" between JS and CSS
      document.documentElement.style.scrollSnapType = 'none';
      document.body.style.scrollSnapType = 'none';

      // 2. Calculate the exact position minus the header height (80px)
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(id);

      // 3. Re-enable scroll-snap after the smooth scroll finishes
      setTimeout(() => {
        document.documentElement.style.scrollSnapType = 'y mandatory';
        document.body.style.scrollSnapType = 'y mandatory';
      }, 1000);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Branding */}
        <button onClick={() => scrollToSection('home')} className="group transition-all">
            <span className="text-3xl font-signature text-black tracking-tight"> 
              Vinita Porlekar
            </span>
        </button>
        
        {/* Updated Navigation Array to include 'education' */}
        <nav className="hidden md:flex gap-8">
          {['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              /* Fixed active text color from text-white-600 to text-amber-600 */
              className={`text-sm font-semibold capitalize transition-all hover:text-amber-500 ${
                activeSection === id 
                ? 'text-amber-600 scale-110 underline underline-offset-8 decoration-2' 
                : 'text-slate-600'
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