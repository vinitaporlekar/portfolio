import React from 'react';

const Skills = ({ isVisible }) => {
  const skills = {
    "Programming Languages": "Python, R, C, C++, Java, JavaScript (ES6+)",
    "Web Development": "React.js, Node.js, HTML5, CSS3, Tailwind CSS",
    "Databases": "SQL, NoSQL, MySQL, PostgreSQL, MongoDB",
    "Product Management": "Product Vision & Strategy, User & Market Analysis, Roadmapping, KPI Tracking",
    "Project Management": "Agile (Scrum, Kanban), Jira, Risk Mitigation, Sprint Planning",
    "AI & Machine Learning": "Pandas, NumPy, Scikit-learn, PyTorch, Chatbot Development",
    "Data Visualization": "Tableau, PowerBI, Matplotlib",
    "Tools & Platforms": "Git, Docker, AWS, Figma, Postman, Google Workspace",
    "Certifications": "AWS Cloud Practitioner, Certified SCRUM Master"
  };

  return (
    <section 
      id="skills"
      className={`py-20 px-6 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Skills</h2>
        
        <p className="text-lg text-slate-700 mb-12 max-w-3xl">
          Over the years, I've picked up professional skills through classrooms, team projects, and hands-on experience. Here's what I bring to the table:
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all"
            >
              <h3 className="text-lg font-bold text-amber-600 mb-3">
                {category}
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                {items}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
