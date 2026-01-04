# Deployment Guide

This guide provides detailed instructions for deploying your portfolio website to various hosting platforms.

## Table of Contents
1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [AWS S3 + CloudFront](#aws-s3--cloudfront)
5. [Custom Server](#custom-server)

---

## GitHub Pages

### Option 1: Using GitHub Actions (Automated)

1. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Navigate to Pages section
   - Source: Select "GitHub Actions"

2. **Configure the workflow**:
   - Edit `.github/workflows/deploy.yml`
   - Uncomment the GitHub Pages deployment section
   - Commit and push

3. **Update `vite.config.js`**:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',  // Add this line
     plugins: [react()],
     // ... rest of config
   })
   ```

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

Your site will be live at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

---

## Netlify

### Option 1: Drag and Drop (Simplest)

1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://app.netlify.com/)
3. Drag and drop the `dist` folder to the Netlify dashboard
4. Your site is live!

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect to your Git provider
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

### Option 3: Using GitHub Actions

1. Get Netlify credentials:
   - Go to User Settings → Applications → Personal Access Tokens
   - Create a new token
   - Get your Site ID from Site Settings → General → Site details

2. Add secrets to GitHub:
   - Go to your repository Settings → Secrets and variables → Actions
   - Add `NETLIFY_AUTH_TOKEN`
   - Add `NETLIFY_SITE_ID`

3. Uncomment Netlify section in `.github/workflows/deploy.yml`

4. Push to trigger deployment

### Custom Domain on Netlify

1. Go to Site Settings → Domain management
2. Add custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic with Let's Encrypt)

---

## Vercel

### Option 1: Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

### Option 2: Git Integration (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com/)
3. Click "Add New" → "Project"
4. Import your repository
5. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click "Deploy"

### Option 3: Using GitHub Actions

1. Get Vercel credentials:
   ```bash
   vercel link
   ```
   This creates a `.vercel` directory with project info

2. Add secrets to GitHub:
   - `VERCEL_TOKEN`: From Vercel → Settings → Tokens
   - `ORG_ID`: From `.vercel/project.json`
   - `PROJECT_ID`: From `.vercel/project.json`

3. Uncomment Vercel section in `.github/workflows/deploy.yml`

### Custom Domain on Vercel

1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. HTTPS is automatic

---

## AWS S3 + CloudFront

### Prerequisites
- AWS Account
- AWS CLI installed and configured

### Steps

1. **Create S3 Bucket**:
   ```bash
   aws s3 mb s3://your-portfolio-bucket
   ```

2. **Configure bucket for static hosting**:
   ```bash
   aws s3 website s3://your-portfolio-bucket \
     --index-document index.html \
     --error-document index.html
   ```

3. **Build your project**:
   ```bash
   npm run build
   ```

4. **Upload to S3**:
   ```bash
   aws s3 sync dist/ s3://your-portfolio-bucket --delete
   ```

5. **Set bucket policy**:
   Create `bucket-policy.json`:
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::your-portfolio-bucket/*"
       }
     ]
   }
   ```
   
   Apply policy:
   ```bash
   aws s3api put-bucket-policy \
     --bucket your-portfolio-bucket \
     --policy file://bucket-policy.json
   ```

6. **Create CloudFront Distribution** (Optional, for CDN):
   - Go to CloudFront console
   - Create distribution
   - Set origin to your S3 bucket
   - Configure SSL certificate
   - Wait for deployment (15-20 minutes)

### Automate with GitHub Actions

Add to your workflow:
```yaml
- name: Deploy to S3
  env:
    AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
    AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
  run: |
    aws s3 sync dist/ s3://your-portfolio-bucket --delete
    aws cloudfront create-invalidation \
      --distribution-id YOUR_DISTRIBUTION_ID \
      --paths "/*"
```

---

## Custom Server

### Using Nginx

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload `dist` folder** to your server (e.g., via SFTP)

3. **Configure Nginx**:
   ```nginx
   server {
     listen 80;
     server_name your-domain.com;
     
     root /var/www/portfolio/dist;
     index index.html;
     
     location / {
       try_files $uri $uri/ /index.html;
     }
     
     # Enable gzip compression
     gzip on;
     gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
   }
   ```

4. **Enable SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

### Using Apache

1. **Upload `dist` folder** to your server

2. **Configure Apache** (`.htaccess`):
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## Environment Variables

For deployment-specific configurations:

1. **Create `.env.production`**:
   ```
   VITE_API_URL=https://api.production.com
   VITE_ANALYTICS_ID=prod-analytics-id
   ```

2. **Access in code**:
   ```javascript
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Platform-specific configuration**:
   - **Netlify**: Add environment variables in Site Settings → Environment Variables
   - **Vercel**: Add in Project Settings → Environment Variables
   - **GitHub Actions**: Add as repository secrets

---

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify responsive design on different devices
- [ ] Check page load performance (use Lighthouse)
- [ ] Verify email links work correctly
- [ ] Test resume access modal
- [ ] Verify LinkedIn link opens correctly
- [ ] Check SEO meta tags
- [ ] Test on multiple browsers
- [ ] Enable HTTPS
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure custom domain (if applicable)
- [ ] Set up monitoring (uptime, performance)

---

## Troubleshooting

### Issue: Routes don't work after deployment

**Solution**: Ensure your server is configured for SPA routing (see Custom Server section)

### Issue: Assets not loading

**Solution**: Check the `base` path in `vite.config.js` matches your deployment path

### Issue: Build fails

**Solution**: 
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Rebuild: `npm run build`

### Issue: Environment variables not working

**Solution**: Make sure they're prefixed with `VITE_` and the server is restarted

---

## Performance Optimization

1. **Enable compression** on your server
2. **Use CDN** for static assets
3. **Implement caching headers**:
   ```nginx
   location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
     expires 1y;
     add_header Cache-Control "public, immutable";
   }
   ```
4. **Optimize images** before deployment
5. **Monitor with analytics** and adjust as needed

---

## Need Help?

If you encounter issues:
1. Check the official documentation for your hosting platform
2. Review the GitHub Actions logs for CI/CD issues
3. Open an issue in the repository
4. Contact: porlekar.v@northeastern.edu

---

**Happy Deploying! 🚀**
