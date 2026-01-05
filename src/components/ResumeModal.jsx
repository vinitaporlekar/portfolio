import React from 'react';
import { FileText, Download } from 'lucide-react';

const ResumeModal = ({ setShowResumeModal }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vinita_Porlekar_Resume.pdf';
    link.download = 'Vinita_Porlekar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-slate-900 border border-amber-500/30 rounded-lg max-w-md w-full p-8 shadow-2xl animate-slideUp">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Download My Resume</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Click the button below to download my resume. Feel free to reach out if you have any questions!
            </p>
          </div>
        </div>
        
        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-amber-500/25 mb-4 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download Resume (PDF)
        </button>

        <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
          <p className="text-slate-400 text-sm mb-2">Questions? Contact me:</p>
          <a 
            href="mailto:porlekar.v@northeastern.edu" 
            className="text-amber-400 hover:text-amber-300 transition-colors font-medium break-all"
          >
            porlekar.v@northeastern.edu
          </a>
        </div>
        
        <button
          onClick={() => setShowResumeModal(false)}
          className="w-full bg-slate-700 text-white py-3 rounded-lg font-semibold hover:bg-slate-600 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;