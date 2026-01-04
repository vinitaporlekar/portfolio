# ✅ Complete Setup Checklist

Use this checklist to set up and deploy your portfolio website step by step.

---

## 🍎 Part 1: macOS Installation (One-Time Setup)

### Install Required Software

- [ ] **Install Homebrew**
  ```bash
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  ```

- [ ] **Install Node.js & npm**
  ```bash
  brew install node
  node --version    # Verify v18+
  npm --version     # Verify v9+
  ```

- [ ] **Install Git**
  ```bash
  brew install git
  git --version
  ```

- [ ] **Configure Git**
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

- [ ] **Install VS Code** (Optional but recommended)
  ```bash
  brew install --cask visual-studio-code
  ```

- [ ] **Create GitHub Account** (if you don't have one)
  - Go to https://github.com/signup

---

## 🚀 Part 2: Project Setup

### Initial Setup

- [ ] **Download portfolio-refactored folder** to your Mac

- [ ] **Open Terminal** and navigate to project
  ```bash
  cd ~/Downloads/portfolio-refactored
  # Or wherever you saved it
  ```

- [ ] **Open in VS Code** (optional)
  ```bash
  code .
  ```

- [ ] **Install Dependencies**
  ```bash
  npm install
  ```
  ⏱️ This takes 2-5 minutes

- [ ] **Verify Installation**
  - Check that `node_modules` folder was created
  - No error messages in terminal

---

## 💻 Part 3: Run Locally

### Test Your Portfolio

- [ ] **Start Development Server**
  ```bash
  npm run dev
  ```

- [ ] **Verify Site Opens**
  - Should open automatically at http://localhost:3000
  - If not, open the URL manually

- [ ] **Test All Sections**
  - [ ] Header navigation works
  - [ ] Hero section displays correctly
  - [ ] Experience cards show properly
  - [ ] Skills section loads
  - [ ] Contact links work
  - [ ] Resume modal opens and closes

- [ ] **Test Responsiveness**
  - [ ] Resize browser window
  - [ ] Check on mobile view (Dev Tools → Toggle Device Toolbar)

---

## 🎨 Part 4: Customize Content

### Update Your Information

- [ ] **Hero Section** (`src/components/Hero.jsx`)
  - [ ] Update tagline if desired
  - [ ] Verify education details
  - [ ] Check F1 CPT status

- [ ] **Experience** (`src/components/Experience.jsx`)
  - [ ] Review all 3 work experiences
  - [ ] Update any details as needed
  - [ ] Add new roles if applicable

- [ ] **Skills** (`src/components/Skills.jsx`)
  - [ ] Review skill categories
  - [ ] Update descriptions
  - [ ] Add new skills if needed

- [ ] **Contact** (`src/components/Contact.jsx`)
  - [ ] Verify email address
  - [ ] Check LinkedIn URL
  - [ ] Update location if needed

- [ ] **Resume Modal** (`src/components/ResumeModal.jsx`)
  - [ ] Add Google Drive link (optional)
  - [ ] Or keep current email request flow

### Test Your Changes

- [ ] **Save all files**
- [ ] **Check browser** - changes should appear automatically
- [ ] **Test all updated sections**

---

## 🐙 Part 5: Push to GitHub

### Create GitHub Repository

- [ ] **Go to GitHub.com**
- [ ] **Click "+" → New repository**
- [ ] **Repository Settings**
  - Name: `portfolio` (or your choice)
  - Description: "My professional portfolio website"
  - Public or Private: Your choice
  - **Don't** initialize with README/gitignore/license
- [ ] **Click "Create repository"**
- [ ] **Copy the repository URL**

### Initialize Git and Push

- [ ] **Initialize Git** (in project directory)
  ```bash
  git init
  ```

- [ ] **Add Files**
  ```bash
  git add .
  ```

- [ ] **Verify Files Added**
  ```bash
  git status
  # Should show many files in green
  ```

- [ ] **Make First Commit**
  ```bash
  git commit -m "Initial commit: Portfolio website with component structure"
  ```

- [ ] **Connect to GitHub**
  ```bash
  git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
  # Replace with your actual URL
  ```

- [ ] **Rename Branch to Main**
  ```bash
  git branch -M main
  ```

- [ ] **Push to GitHub**
  ```bash
  git push -u origin main
  ```

- [ ] **Handle Authentication**
  - Install GitHub CLI (recommended):
    ```bash
    brew install gh
    gh auth login
    ```
  - Or use Personal Access Token

- [ ] **Verify on GitHub**
  - Go to your repository URL
  - Refresh page
  - All files should be visible

---

## 🚀 Part 6: Deploy Your Site

Choose one deployment method:

### Option A: Netlify (Easiest)

- [ ] **Build the Project**
  ```bash
  npm run build
  ```

- [ ] **Go to Netlify.com**
- [ ] **Sign up/Login**
- [ ] **Drag & drop** the `dist` folder
- [ ] **Your site is live!** 🎉
- [ ] **Note your site URL** (something.netlify.app)

### Option B: Vercel (Fast)

- [ ] **Install Vercel CLI**
  ```bash
  npm i -g vercel
  ```

- [ ] **Deploy**
  ```bash
  vercel
  ```

- [ ] **Follow prompts**
- [ ] **Your site is live!** 🎉

### Option C: GitHub Pages (Free)

- [ ] **Enable GitHub Pages**
  - Go to repo Settings → Pages
  - Source: GitHub Actions

- [ ] **Uncomment deployment** in `.github/workflows/deploy.yml`
  - Remove comment marks from GitHub Pages section

- [ ] **Update vite.config.js**
  ```javascript
  base: '/your-repo-name/',  // Add this line
  ```

- [ ] **Push changes**
  ```bash
  git add .
  git commit -m "Configure GitHub Pages"
  git push
  ```

- [ ] **Wait 2-3 minutes** for deployment
- [ ] **Visit**: `https://YOUR-USERNAME.github.io/your-repo-name/`

---

## 🎯 Part 7: Post-Deployment

### Final Checks

- [ ] **Test Deployed Site**
  - [ ] All sections load
  - [ ] Links work
  - [ ] Responsive on mobile
  - [ ] No console errors

- [ ] **Share Your Portfolio**
  - [ ] Update LinkedIn with portfolio URL
  - [ ] Add to resume
  - [ ] Share with friends/recruiters

### Optional Enhancements

- [ ] **Custom Domain**
  - Purchase domain (Namecheap, Google Domains)
  - Configure DNS
  - Add to hosting platform

- [ ] **Analytics**
  - Google Analytics
  - Plausible
  - Simple Analytics

- [ ] **SEO**
  - Submit to Google Search Console
  - Create sitemap
  - Update meta descriptions

---

## 📝 Making Future Updates

### Workflow for Changes

- [ ] **Make changes** in VS Code
- [ ] **Test locally** (`npm run dev`)
- [ ] **Commit changes**
  ```bash
  git add .
  git commit -m "Description of changes"
  ```
- [ ] **Push to GitHub**
  ```bash
  git push
  ```
- [ ] **Redeploy** (automatic if CI/CD configured)

---

## 🆘 Troubleshooting Reference

### Common Issues & Solutions

**Port 3000 in use?**
```bash
lsof -ti:3000 | xargs kill -9
```

**Dependencies fail to install?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Git authentication issues?**
```bash
brew install gh
gh auth login
```

**Changes not showing?**
```bash
# Hard refresh browser
Cmd + Shift + R
```

**Build fails?**
```bash
npm cache clean --force
npm install
npm run build
```

---

## 📚 Important Files Reference

| File | Purpose | When to Edit |
|------|---------|--------------|
| `src/components/Hero.jsx` | Hero section | Update intro text |
| `src/components/Experience.jsx` | Work history | Add/update jobs |
| `src/components/Skills.jsx` | Skills list | Update skills |
| `src/components/Contact.jsx` | Contact info | Change email/LinkedIn |
| `package.json` | Dependencies | Add new packages |
| `tailwind.config.js` | Styling | Change colors/fonts |
| `README.md` | Documentation | Project info |

---

## ⏱️ Estimated Time

- **Part 1** (First time setup): 15-30 minutes
- **Part 2** (Project setup): 5-10 minutes
- **Part 3** (Run locally): 2 minutes
- **Part 4** (Customize): 20-60 minutes
- **Part 5** (Push to GitHub): 10 minutes
- **Part 6** (Deploy): 5-15 minutes

**Total**: ~1-2 hours for complete setup

---

## 🎉 Success Criteria

You're done when:

- ✅ Project runs locally without errors
- ✅ All sections display your information
- ✅ Code is pushed to GitHub
- ✅ Site is deployed and accessible via URL
- ✅ All links work on live site
- ✅ Responsive on mobile devices

---

## 📞 Need Help?

**Stuck on something?**

1. Read the detailed guide: `MACOS_SETUP_GUIDE.md`
2. Check component docs: `COMPONENT_ARCHITECTURE.md`
3. Review deployment guide: `DEPLOYMENT_GUIDE.md`
4. Google the exact error message
5. Email: porlekar.v@northeastern.edu

---

**Good luck with your portfolio! You've got this! 💪🚀**
