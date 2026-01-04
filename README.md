# Vinita Porlekar - Portfolio Website

A professional portfolio website built with React, Tailwind CSS, and Vite, featuring a modular component architecture for easy customization and maintenance.

## 🌟 Project Highlights

- **Modular Component Architecture**: Separate, reusable components for better code organization
- **Modern Tech Stack**: React 18, Tailwind CSS, Vite
- **Professional Design**: Dark theme with amber accents, smooth animations
- **Fully Responsive**: Optimized for all screen sizes
- **CI/CD Ready**: Pre-configured GitHub Actions workflow
- **Production Ready**: Optimized builds with code splitting

## 📋 Prerequisites

- **Node.js** v18 or higher - [Download here](https://nodejs.org/)
- **npm** v9 or higher (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** - VS Code recommended

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000` 🎉

### 3. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
portfolio-refactored/
├── src/
│   ├── components/           # Modular React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with education
│   │   ├── Experience.jsx   # Work experience section
│   │   ├── Skills.jsx       # Skills showcase
│   │   ├── Contact.jsx      # Contact info & footer
│   │   └── ResumeModal.jsx  # Resume access modal
│   ├── Portfolio.jsx        # Main app component
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles & Tailwind
├── .github/workflows/       # CI/CD configuration
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # This file
```

## 🎨 Component Architecture

### Component Overview

Each section is a separate, self-contained component:

| Component | Purpose | Props |
|-----------|---------|-------|
| `Header.jsx` | Navigation and branding | `activeSection`, `setActiveSection`, `isVisible` |
| `Hero.jsx` | Introduction and education | `isVisible`, `setShowResumeModal` |
| `Experience.jsx` | Work history | `isVisible` |
| `Skills.jsx` | Core competencies | `isVisible` |
| `Contact.jsx` | Contact info and footer | `isVisible` |
| `ResumeModal.jsx` | Resume request dialog | `setShowResumeModal` |
| `Portfolio.jsx` | Main container | - |

### Benefits of Component Structure

✅ **Easy to Maintain**: Each component handles one responsibility
✅ **Reusable**: Components can be reused across projects
✅ **Testable**: Individual components can be tested in isolation
✅ **Scalable**: Easy to add new sections or features
✅ **Readable**: Clean, organized code structure

## 🔧 Customization Guide

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   ```jsx
   // Update education details
   <h4 className="text-lg font-semibold text-amber-400 mb-1">
     Your Degree Here
   </h4>
   ```

2. **Experience** (`src/components/Experience.jsx`)
   ```jsx
   // Modify the experiences array
   const experiences = [
     {
       title: "Your Role",
       company: "Your Company",
       // ... add your details
     }
   ];
   ```

3. **Skills** (`src/components/Skills.jsx`)
   ```jsx
   // Update the skills object
   const skills = {
     "Your Category": "Your skills description"
   };
   ```

4. **Contact** (`src/components/Contact.jsx`)
   ```jsx
   // Update email and LinkedIn URLs
   <a href="mailto:your.email@example.com">
   ```

### Modify Design

**Colors**: Edit `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
    }
  }
}
```

**Fonts**: Update in `tailwind.config.js` and component styles
```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
  display: ['Your Display Font', 'sans-serif'],
}
```

**Animations**: Modify or add in `src/Portfolio.jsx` styles

### Add New Sections

1. Create new component in `src/components/YourSection.jsx`
2. Import in `src/Portfolio.jsx`
3. Add to the layout

Example:
```jsx
// src/components/Projects.jsx
const Projects = ({ isVisible }) => {
  return (
    <section className={`py-20 px-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Your content */}
    </section>
  );
};

export default Projects;
```

Then in `Portfolio.jsx`:
```jsx
import Projects from './components/Projects';

// Add to render:
<Projects isVisible={isVisible} />
```

## 📜 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## 🚀 Deployment

### Quick Deploy Options

**Netlify (Easiest)**
```bash
npm run build
# Drag 'dist' folder to netlify.com
```

**Vercel**
```bash
npm i -g vercel
vercel
```

**GitHub Pages**
1. Enable Pages in repo settings
2. Uncomment deployment section in `.github/workflows/deploy.yml`
3. Push to main branch

📖 **Full deployment guide**: See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## 🍎 macOS Setup

New to development on Mac? Check out `MACOS_SETUP_GUIDE.md` for:
- Installing Homebrew, Node.js, Git
- Setting up your development environment
- Running the project locally
- Pushing to GitHub via Git CLI

## 🔄 Git Workflow

```bash
# Initialize repository
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/yourusername/portfolio.git
git branch -M main
git push -u origin main

# Make changes
git add .
git commit -m "Update experience section"
git push
```

## 🛡️ CI/CD Pipeline

The project includes a GitHub Actions workflow that:
- ✅ Runs on every push to main
- ✅ Installs dependencies
- ✅ Builds the project
- ✅ Runs linting checks
- 🚀 Can be configured to auto-deploy

**Configure deployment**: Uncomment your preferred platform in `.github/workflows/deploy.yml`

## 🎯 Features Checklist

- [x] Modular component architecture
- [x] Responsive design
- [x] Smooth animations
- [x] Professional aesthetics
- [x] Resume request modal
- [x] Contact links
- [x] SEO optimized
- [x] Production build
- [x] CI/CD ready
- [x] Git integrated
- [ ] Add your Google Drive resume link
- [ ] Deploy to hosting platform
- [ ] Add custom domain
- [ ] Configure analytics

## 🔍 SEO & Performance

- ✅ Semantic HTML
- ✅ Meta tags configured
- ✅ Fast loading (Vite optimization)
- ✅ Responsive images
- ✅ Accessible design

**Lighthouse Score Target**: 90+ across all metrics

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)

## 🐛 Troubleshooting

**Port 3000 in use?**
```bash
# Change port in vite.config.js
server: { port: 3001 }
```

**Dependencies issues?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
npm cache clean --force
npm install
npm run build
```

## 🤝 Contributing

Suggestions for improvements?

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

MIT License - see LICENSE file for details

## 👤 Contact

**Vinita Porlekar**
- 📧 Email: porlekar.v@northeastern.edu
- 💼 LinkedIn: [linkedin.com/in/vinitaporlekar](https://www.linkedin.com/in/vinitaporlekar/)
- 📍 Location: Sterling, VA

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide React](https://lucide.dev/)
- Bundled with [Vite](https://vitejs.dev/)

---

**Status**: Open to Software Engineering, AI/ML, and Product Management roles | F1 CPT Authorized

Made with ❤️ using React & Tailwind CSS
