import React from 'react';

const About = ({ isVisible }) => {
  return (
    <section 
    id="about"
    className={`py-24 px-6 bg-[#dcd5e7] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
            <h2 className="text-5xl md:text-6xl font-serif text-slate-900 tracking-tight">
              About Me
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-slate-900/80 leading-relaxed font-light">
              <p>
                👋 Hey there! I'm a product enthusiast with a passion for building AI-powered solutions that make a real impact. Currently pursuing my Master's in Information Systems at Northeastern University.
              </p>
              
              <p>
                I thrive on transforming complex challenges into intuitive products, working at the intersection of technology and user experience. With 5+ years of experience across product management and technical roles, I've delivered solutions used by 100K+ users.
              </p>
              
              <p className="font-medium text-slate-900">
                Let's connect and transform ideas into impactful products!
              </p>
            </div>
          </div>
          
          {/* Right Side: Image Card with Thin Border */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute top-6 -left-6 w-full h-full border-2 border-purple-400/30 rounded-2xl z-0"></div>
              
              {/* Main Image Card */}
              <div className="relative z-10 w-64 md:w-80 bg-white/60 backdrop-blur-lg p-3 rounded-2xl shadow-xl border border-white/40 transform hover:rotate-2 transition-transform duration-500">
                
                {/* Image Container: Reduced p-4 to p-1 for a thinner border */}
                <div className="aspect-square overflow-hidden rounded-xl bg-slate-50/50 shadow-inner p-0"> 
                  <img 
                    src="/vinitaporlekarimage.png" 
                    alt="Vinita Porlekar" 
                    className="w-full h-full object-contain object-center transition-transform duration-400 hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x400?text=Vinita";
                    }}
                  />
                </div>
                
                {/* Minimalist Label */}
                <div className="pt-4 pb-2 text-center">
                  <h3 className="text-xl font-serif text-slate-900">Vinita Porlekar</h3>
                  <div className="w-8 h-0.5 bg-purple-400 mx-auto my-2"></div>
                  <p className="text-[10px] text-slate-600 font-bold tracking-[0.2em] uppercase">
                    Product Manager
                  </p>
                </div>
              </div>

              {/* Decorative small circle */}
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white/40 backdrop-blur-md rounded-full border border-white/20 shadow-lg animate-bounce-slow"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;