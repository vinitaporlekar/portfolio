# Component Architecture Documentation

## 📊 Component Hierarchy

```
Portfolio.jsx (Main Container)
│
├── Header.jsx
│   ├── Logo/Branding (VP)
│   └── Navigation Menu
│
├── Hero.jsx
│   ├── Tagline & Introduction
│   ├── CTA Buttons (Resume, Contact)
│   └── Education Card
│
├── Experience.jsx
│   └── Experience Cards (3x)
│       ├── Job Title
│       ├── Company & Location
│       ├── Time Period
│       └── Highlights List
│
├── Skills.jsx
│   └── Skill Cards (6x)
│       ├── Category Name
│       └── Description
│
├── Contact.jsx
│   ├── Contact Cards (Email, LinkedIn)
│   └── Footer
│
└── ResumeModal.jsx (Conditional)
    ├── Modal Overlay
    ├── Resume Request Info
    └── Close Button
```

## 🔄 Data Flow

```
User Interaction
       ↓
Portfolio.jsx (State Management)
       ↓
    setState
       ↓
Props passed to Child Components
       ↓
Child Components Re-render
```

### State Management

**Portfolio.jsx** manages three pieces of state:

1. **`activeSection`** - Tracks which nav item is active
   - Type: `string`
   - Values: `'about'`, `'experience'`, `'skills'`, `'contact'`
   - Used by: `Header.jsx`

2. **`isVisible`** - Controls fade-in animations
   - Type: `boolean`
   - Initial: `false`, set to `true` on mount
   - Used by: All components for animation timing

3. **`showResumeModal`** - Controls modal visibility
   - Type: `boolean`
   - Initial: `false`
   - Used by: `Hero.jsx`, `ResumeModal.jsx`

## 📦 Component Details

### Header.jsx
**Purpose**: Site navigation and branding

**Props**:
- `activeSection` (string): Currently active section
- `setActiveSection` (function): Updates active section
- `isVisible` (boolean): Controls fade-in animation

**Features**:
- Responsive navigation
- Active state highlighting
- Smooth scroll behavior

### Hero.jsx
**Purpose**: Introduction and education showcase

**Props**:
- `isVisible` (boolean): Controls fade-in animation
- `setShowResumeModal` (function): Opens resume modal

**Features**:
- Gradient text effects
- Call-to-action buttons
- Education card with F1 CPT status
- Responsive grid layout

### Experience.jsx
**Purpose**: Display work history

**Props**:
- `isVisible` (boolean): Controls fade-in animation

**Data Structure**:
```javascript
{
  title: string,
  company: string,
  location: string,
  period: string,
  highlights: string[]
}
```

**Features**:
- Expandable cards
- Hover effects
- Staggered animation delays

### Skills.jsx
**Purpose**: Showcase core competencies

**Props**:
- `isVisible` (boolean): Controls fade-in animation

**Data Structure**:
```javascript
{
  [category: string]: description: string
}
```

**Features**:
- Grid layout
- Hover animations
- Category-based organization

### Contact.jsx
**Purpose**: Contact information and footer

**Props**:
- `isVisible` (boolean): Controls fade-in animation

**Features**:
- Contact card grid
- Social links
- Copyright footer
- External link icons

### ResumeModal.jsx
**Purpose**: Resume access request dialog

**Props**:
- `setShowResumeModal` (function): Closes modal

**Features**:
- Backdrop blur
- Fade-in animation
- Email contact link
- Click-outside to close

## 🎨 Styling Approach

### Tailwind CSS Classes Used

**Layout**:
- `flex`, `grid` - Flexbox and Grid layouts
- `max-w-6xl`, `mx-auto` - Centered container
- `gap-{size}` - Spacing between elements

**Colors**:
- `slate-{shade}` - Background and text
- `amber-{shade}` - Primary accent
- `orange-{shade}` - Secondary accent

**Effects**:
- `backdrop-blur` - Glassmorphism
- `shadow-{size}` - Drop shadows
- `rounded-{size}` - Border radius
- `gradient-to-{direction}` - Gradients

**Animations**:
- `transition-{property}` - Smooth transitions
- `duration-{time}` - Animation duration
- `animate-pulse` - Pulsing effect
- Custom: `fadeIn`, `slideUp`

## 🔧 Customization Guide

### Adding a New Component

1. **Create Component File**
```jsx
// src/components/NewSection.jsx
import React from 'react';

const NewSection = ({ isVisible }) => {
  return (
    <section className={`py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewSection;
```

2. **Import in Portfolio.jsx**
```jsx
import NewSection from './components/NewSection';
```

3. **Add to Render**
```jsx
<NewSection isVisible={isVisible} />
```

### Modifying Existing Components

**To update content**: Edit the data arrays/objects in each component
**To change styling**: Modify Tailwind classes
**To add interactivity**: Add event handlers and state

### Example: Adding Projects Section

```jsx
// src/components/Projects.jsx
import React from 'react';
import { Code } from 'lucide-react';

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: "AI Learning Platform",
      description: "Built an e-learning assistant with React and OpenAI",
      tags: ["React", "AI", "Node.js"]
    }
  ];

  return (
    <section className={`py-20 px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Code className="w-8 h-8 text-amber-400" />
          <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800/50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-amber-400 mb-3">
                {project.title}
              </h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
```

## 🧪 Testing Individual Components

You can test components in isolation by temporarily modifying `main.jsx`:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/Hero'  // Import specific component
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero isVisible={true} setShowResumeModal={() => {}} />
  </React.StrictMode>,
)
```

## 📱 Responsive Breakpoints

Tailwind's default breakpoints used:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Mobile-first approach: Base styles are mobile, add `md:` prefix for larger screens.

## ⚡ Performance Considerations

1. **Code Splitting**: Components are lazy-loadable
2. **Optimized Images**: Use WebP format when possible
3. **Minimal Re-renders**: State managed at top level
4. **CSS Purging**: Tailwind removes unused styles in production

## 🔍 Component Checklist

When creating a new component, ensure:
- [ ] Receives `isVisible` prop for animations
- [ ] Wrapped in semantic HTML (`<section>`, `<article>`, etc.)
- [ ] Has max-width container (`max-w-6xl mx-auto`)
- [ ] Includes proper padding (`py-20 px-6`)
- [ ] Uses consistent color scheme (slate, amber, orange)
- [ ] Responsive on mobile (`flex-col md:flex-row`)
- [ ] Exported as default
- [ ] Imported in Portfolio.jsx

## 🎯 Best Practices

1. **Keep Components Small**: One responsibility per component
2. **Use Descriptive Names**: Component and variable names should be clear
3. **Consistent Styling**: Follow established patterns
4. **Prop Types**: Document expected props
5. **Accessibility**: Use semantic HTML and ARIA labels
6. **Comments**: Add comments for complex logic

---

This architecture makes the portfolio easy to maintain, extend, and customize! 🚀
