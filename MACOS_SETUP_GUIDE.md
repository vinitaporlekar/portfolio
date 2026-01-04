# Complete macOS Setup Guide for Portfolio Website

This guide will walk you through everything you need to install and run your portfolio website on your MacBook, plus how to push it to GitHub using Git CLI.

---

## 📋 Table of Contents

1. [Prerequisites Installation](#prerequisites-installation)
2. [Project Setup](#project-setup)
3. [Running the Project Locally](#running-the-project-locally)
4. [Pushing to GitHub via Git CLI](#pushing-to-github-via-git-cli)
5. [Troubleshooting](#troubleshooting)

---

## 🔧 Prerequisites Installation

### Step 1: Install Homebrew (Package Manager for macOS)

Homebrew makes it easy to install development tools on macOS.

1. Open **Terminal** (Press `Cmd + Space`, type "Terminal", and press Enter)

2. Install Homebrew by running:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Follow the on-screen instructions. After installation, you may need to run these commands (the installer will tell you):
```bash
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

4. Verify Homebrew installation:
```bash
brew --version
```

### Step 2: Install Node.js and npm

Node.js includes npm (Node Package Manager) which we need to manage project dependencies.

1. Install Node.js using Homebrew:
```bash
brew install node
```

2. Verify installation:
```bash
node --version    # Should show v20.x.x or higher
npm --version     # Should show v10.x.x or higher
```

### Step 3: Install Git

Git is needed for version control and pushing to GitHub.

1. Install Git using Homebrew:
```bash
brew install git
```

2. Verify installation:
```bash
git --version
```

3. Configure Git with your information:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

**Important:** Use the same email address you use for your GitHub account.

### Step 4: Install a Code Editor (VS Code - Recommended)

1. **Option A: Download from website**
   - Go to https://code.visualstudio.com/
   - Download for macOS
   - Drag the app to your Applications folder

2. **Option B: Install via Homebrew**
```bash
brew install --cask visual-studio-code
```

3. Optional: Install the `code` command for opening VS Code from terminal:
   - Open VS Code
   - Press `Cmd + Shift + P`
   - Type "Shell Command: Install 'code' command in PATH"
   - Press Enter

### Step 5: Create a GitHub Account (if you don't have one)

1. Go to https://github.com/
2. Sign up for a free account
3. Verify your email address

---

## 🚀 Project Setup

### Step 1: Extract the Portfolio Files

1. Download the `portfolio-refactored` folder to your Mac
2. Move it to your desired location (e.g., `~/Documents/Projects/`)

### Step 2: Open the Project

**Option A: Using Terminal**
```bash
cd ~/Documents/Projects/portfolio-refactored
```

**Option B: Using VS Code**
```bash
cd ~/Documents/Projects/portfolio-refactored
code .
```

This will open the project in VS Code.

### Step 3: Install Project Dependencies

In your terminal (inside the project folder), run:

```bash
npm install
```

This will install all required packages including:
- React
- React DOM
- Vite
- Tailwind CSS
- Lucide React (icons)
- ESLint
- And all other dependencies

**Note:** This may take 2-5 minutes depending on your internet connection.

You'll see a `node_modules` folder created with all the installed packages.

---

## 💻 Running the Project Locally

### Start the Development Server

1. Make sure you're in the project directory:
```bash
pwd    # Should show something like /Users/yourname/Documents/Projects/portfolio-refactored
```

2. Start the development server:
```bash
npm run dev
```

3. You should see output like:
```
  VITE v5.0.8  ready in 543 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

4. **The site will automatically open in your default browser!**
   - If it doesn't, manually open: http://localhost:3000

5. The development server has **hot reload** - any changes you make to the code will automatically update in the browser!

### Other Useful Commands

```bash
# Build for production
npm run build

# Preview the production build
npm run preview

# Run the linter to check code quality
npm run lint

# Stop the development server
# Press Ctrl + C in the terminal
```

---

## 🐙 Pushing to GitHub via Git CLI

### Step 1: Create a New Repository on GitHub

1. Go to https://github.com/
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository settings:
   - **Repository name:** `portfolio` (or any name you prefer)
   - **Description:** "My professional portfolio website"
   - **Public** or **Private:** Your choice
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

### Step 2: Initialize Git in Your Project

Open Terminal in your project directory and run:

```bash
# Initialize Git repository
git init

# Check the status (see which files are untracked)
git status
```

### Step 3: Add and Commit Your Files

```bash
# Add all files to staging area
git add .

# Verify what's been added
git status

# Commit with a message
git commit -m "Initial commit: Portfolio website with separate components"
```

### Step 4: Connect to GitHub Repository

Copy the repository URL from GitHub (it looks like: `https://github.com/yourusername/portfolio.git`)

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/yourusername/portfolio.git

# Verify the remote was added
git remote -v
```

### Step 5: Push to GitHub

```bash
# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**First time:** GitHub will ask for authentication. You have two options:

#### Option A: Using GitHub CLI (Recommended)

1. Install GitHub CLI:
```bash
brew install gh
```

2. Authenticate:
```bash
gh auth login
```
Follow the prompts to authenticate through your browser.

3. Now you can push:
```bash
git push -u origin main
```

#### Option B: Using Personal Access Token

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name and select "repo" scope
4. Copy the token
5. When pushing, use the token as your password

### Step 6: Verify on GitHub

1. Go to your GitHub repository URL
2. Refresh the page
3. You should see all your files uploaded!

---

## 🔄 Making Changes and Pushing Updates

After you make changes to your code:

```bash
# Check what files changed
git status

# Add all changed files
git add .

# Or add specific files
git add src/components/Hero.jsx

# Commit with a descriptive message
git commit -m "Update hero section with new tagline"

# Push to GitHub
git push

# Or push to a specific branch
git push origin main
```

---

## 📁 Project Structure Overview

```
portfolio-refactored/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD configuration
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Hero.jsx           # Hero section with intro
│   │   ├── Experience.jsx     # Work experience
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Contact.jsx        # Contact section & footer
│   │   └── ResumeModal.jsx    # Resume access modal
│   ├── Portfolio.jsx          # Main component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
├── postcss.config.js        # PostCSS configuration
├── .gitignore              # Git ignore rules
├── .eslintrc.cjs           # ESLint configuration
└── LICENSE                 # MIT License
```

---

## 🎨 Customizing Your Portfolio

### Update Personal Information

Edit these files to customize your portfolio:

1. **src/components/Hero.jsx**
   - Update tagline
   - Modify education details
   - Change the "Open to Opportunities" badge

2. **src/components/Experience.jsx**
   - Add/remove work experiences
   - Update job descriptions

3. **src/components/Skills.jsx**
   - Modify skill categories
   - Update descriptions

4. **src/components/Contact.jsx**
   - Update contact information
   - Modify social links

5. **src/components/ResumeModal.jsx**
   - Add your Google Drive resume link (optional)

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors here
    }
  }
}
```

The current color scheme uses:
- Slate (dark grays): Background
- Amber/Orange: Accents and highlights

---

## 🐛 Troubleshooting

### Issue: "command not found: npm"

**Solution:** Node.js not installed properly. Reinstall:
```bash
brew install node
```

### Issue: "command not found: git"

**Solution:** Git not installed. Install:
```bash
brew install git
```

### Issue: Port 3000 is already in use

**Solution:** Kill the process or use a different port:
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in vite.config.js
server: {
  port: 3001,  // Change to any available port
}
```

### Issue: "Permission denied" errors

**Solution:** You might need to use sudo or fix npm permissions:
```bash
# Fix npm permissions
sudo chown -R $USER ~/.npm
sudo chown -R $USER /usr/local/lib/node_modules
```

### Issue: Changes not showing in browser

**Solution:**
1. Hard refresh: `Cmd + Shift + R`
2. Clear browser cache
3. Restart development server: Stop (`Ctrl + C`) and run `npm run dev` again

### Issue: Git authentication fails

**Solution:** Use GitHub CLI:
```bash
brew install gh
gh auth login
```

### Issue: Module not found errors

**Solution:** Reinstall dependencies:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Useful Git Commands

```bash
# Check current branch
git branch

# Create and switch to new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD

# Pull latest changes from GitHub
git pull origin main

# Clone repository to a new location
git clone https://github.com/yourusername/portfolio.git

# View differences
git diff
```

---

## 🚀 Next Steps

1. ✅ Install all prerequisites
2. ✅ Run the project locally
3. ✅ Push to GitHub
4. 📤 Deploy to Netlify/Vercel (see DEPLOYMENT_GUIDE.md)
5. 🎨 Customize content
6. 🔗 Add custom domain (optional)
7. 📊 Add analytics (optional)

---

## 📞 Need Help?

If you encounter any issues:

1. **Check the error message carefully** - it usually tells you what's wrong
2. **Search Google** with the exact error message
3. **Check VS Code's built-in terminal** for error details
4. **Verify all installations** with `--version` commands
5. **Contact me:** porlekar.v@northeastern.edu

---

## 🎉 Congratulations!

You now have a professional portfolio website running locally and pushed to GitHub! 

**What you've learned:**
- Installing development tools on macOS
- Using npm to manage dependencies
- Running a React development server
- Using Git for version control
- Pushing code to GitHub

**Next:** Deploy your site to make it publicly accessible! Check `DEPLOYMENT_GUIDE.md` for instructions.

---

*Happy coding! 💻✨*
