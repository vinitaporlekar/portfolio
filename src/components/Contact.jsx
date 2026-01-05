import React from 'react';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = ({ isVisible }) => {
  return (
    <section 
      id="contact"
      className={`py-20 px-6 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-slate-900">Get in Touch</h2>
        
        <div className="max-w-3xl">
          <p className="text-lg text-slate-700 mb-12">
            Thanks for stopping by, have a creative day! 🎨 I'm always open to discussing new opportunities, collaborations, or just having a chat about product management and AI/ML. Feel free to reach out!
          </p>
          
          <div className="space-y-6 mb-16">
            <a
              href="mailto:porlekar.v@northeastern.edu"
              className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Email</p>
                <p className="text-slate-900 font-medium group-hover:text-amber-600 transition-colors">
                  porlekar.v@northeastern.edu
                </p>
              </div>
            </a>
            
            <a
              href="https://www.linkedin.com/in/vinitaporlekar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-xl hover:border-amber-300 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">LinkedIn</p>
                <p className="text-slate-900 font-medium group-hover:text-amber-600 transition-colors">
                  linkedin.com/in/vinitaporlekar
                </p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 p-6 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-1">Location</p>
                <p className="text-slate-900 font-medium">
                  Sterling, VA - 20166
                </p>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-slate-200">
            <p className="text-slate-600 text-center">
              © Vinita Porlekar. All rights reserved.
            </p>
            <p className="text-slate-500 text-sm text-center mt-2">
              Made with ❤️ using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
