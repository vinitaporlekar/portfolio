import React from 'react';

const Header = ({ activeSection, setActiveSection, isVisible }) => {
  return (
    <header className={`py-8 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-amber-500/25">
            VP
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">Vinita Porlekar</h1>
            <p className="text-sm text-slate-400">Product Management & AI/ML</p>
          </div>
        </div>
        
        <nav className="hidden md:flex gap-8">
          {['About', 'Experience', 'Skills', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-sm font-medium transition-all duration-300 hover:text-amber-400 ${
                activeSection === item.toLowerCase() 
                  ? 'text-amber-400' 
                  : 'text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
