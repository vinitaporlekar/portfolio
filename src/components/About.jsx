import React from 'react';

const About = ({ isVisible }) => {
  return (
    <section 
      id="about"
      className={`py-20 px-6 bg-slate-50 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">About</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
            <p>
              👋 Hey there! I'm a product enthusiast with a passion for building AI-powered solutions that make a real impact. Currently pursuing my Master's in Information Systems at Northeastern University.
            </p>
            
            <p>
              I thrive on transforming complex challenges into intuitive products, working at the intersection of technology and user experience. With 5+ years of experience across product management and technical roles, I've delivered solutions used by 100K+ users.
            </p>
            
            <p>
              When I'm not building products, you'll find me exploring the latest in AI/ML, collaborating with cross-functional teams, or diving into user research to uncover insights that drive innovation.
            </p>
            
            <p>
              Let's connect and transform ideas into impactful products! Join me as I continue to blend curiosity with innovation, striving to make meaningful contributions in tech.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-6xl font-bold text-white">VP</span>
                </div>
                <p className="text-slate-600 text-sm font-medium">Product Manager & AI/ML Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
