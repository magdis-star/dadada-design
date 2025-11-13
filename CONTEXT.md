# dadada design - Project Context

## Project Overview
**Website:** dadada design
**Owner:** Magda Zawadzka
**Business:** Freelance web design for small businesses in Spain
**Location:** Madrid, España
**GitHub:** https://github.com/magdis-star/dadada-design

## Technology Stack
- **Framework:** Next.js 15.1.3 (App Router)
- **React:** 19.0.0
- **Styling:** Tailwind CSS 3.4.17
- **TypeScript:** 5.7.2
- **Fonts:** Abril Fatface (display), Poppins (headings), Nunito (body)
- **Analytics:** Google Analytics
- **Deployment:** GitHub Pages / Vercel

## Project Structure
```
dadada-design-from github/
├── app/
│   ├── layout.tsx                          # Root layout with CookieConsent
│   ├── page.tsx                            # Homepage
│   ├── globals.css                         # Global styles
│   ├── aviso-legal/page.tsx               # Legal Notice page
│   ├── politica-privacidad/page.tsx       # Privacy Policy page
│   ├── politica-cookies/page.tsx          # Cookie Policy page
│   ├── condiciones-contratacion/page.tsx  # Terms of Service page
│   ├── blog/                              # Blog pages
│   └── casos/                             # Case studies
├── components/
│   ├── Header.tsx                         # Navigation header
│   ├── Footer.tsx                         # Footer with legal links
│   ├── Hero.tsx                           # Hero section
│   ├── About.tsx                          # About section
│   ├── Services.tsx                       # Services section
│   ├── Pricing.tsx                        # Pricing section
│   ├── Process.tsx                        # Process section
│   ├── Projects.tsx                       # Projects/portfolio section
│   ├── Testimonials.tsx                   # Testimonials section
│   ├── Contact.tsx                        # Contact form (Formspree)
│   ├── CookieConsent.tsx                  # Cookie consent banner
│   └── GoogleAnalytics.tsx                # Google Analytics component
├── lib/
│   └── data/                              # Blog posts and case studies data
├── public/
│   └── images/                            # Project images
├── tailwind.config.ts                     # Tailwind configuration
├── package.json                           # Dependencies
└── CONTEXT.md                             # This file
```

## What We've Done So Far

### Session 1: Cookie Consent & GDPR Compliance Implementation (November 12, 2025)

#### 1. Cookie Consent Banner
- **File:** `components/CookieConsent.tsx`
- **Features:**
  - Client-side component with localStorage for consent storage
  - Three options: "Aceptar todas", "Solo necesarias", "Rechazar todas"
  - Expandable details about cookie types (necessary, analytics, marketing)
  - Styled to match website branding (primary-brand color #059669)
  - 500ms delay before showing to avoid flash on page load
  - Integrated with Google Analytics consent mode
  - Full overlay backdrop when displayed
  - Spanish language throughout

#### 2. Layout Update
- **File:** `app/layout.tsx`
- **Changes:**
  - Added `import CookieConsent from "@/components/CookieConsent"`
  - Added `<CookieConsent />` component at the end of body (after Footer)

#### 3. Footer Enhancement
- **File:** `components/Footer.tsx`
- **Changes:**
  - Added legal links section with:
    - Aviso Legal (Legal Notice)
    - Política de Privacidad (Privacy Policy)
    - Política de Cookies (Cookie Policy)
    - Condiciones de Contratación (Terms of Service)
  - Styled with border-top separator
  - Hover effects on links
  - Removed compliance statement line per user request

#### 4. Legal Pages Created
All pages located in `app/[page-name]/page.tsx`:

- **`/aviso-legal`** - Legal Notice (LSSI-CE compliant)
  - Company identification
  - Terms of use
  - Intellectual property
  - Applicable legislation (Spanish law, Madrid jurisdiction)

- **`/politica-privacidad`** - Privacy Policy (RGPD/LOPD-GDD compliant)
  - Data controller information
  - Data collection types (name, email, phone, message)
  - Purpose of processing
  - User rights (access, rectification, deletion, portability, etc.)
  - AEPD complaint procedure
  - Security measures

- **`/politica-cookies`** - Cookie Policy
  - What cookies are
  - Types of cookies used (necessary: cookieConsent, analytics: Google Analytics)
  - How to manage cookies
  - Browser configuration links (Chrome, Firefox, Safari)
  - Legal compliance references

- **`/condiciones-contratacion`** - Terms of Service
  - Services offered (web design, redesign, consulting, maintenance)
  - Contracting process (5 steps)
  - Payment terms (50% upfront, 50% on delivery)
  - Intellectual property rights
  - 30-day guarantee
  - Cancellation policy
  - Spanish jurisdiction (Madrid)

### Session 2: Deployment to GitHub

#### Git Configuration
- Initialized git repository
- Added remote: `https://github.com/magdis-star/dadada-design.git`
- Resolved merge conflicts in `app/layout.tsx` and `components/Footer.tsx`
- Successfully rebased with remote changes
- Pushed all changes to main branch

#### Commits Made
1. **Initial commit:** "Add cookie consent banner and GDPR compliance features"
   - Added CookieConsent component
   - Updated Footer with legal links
   - Added 4 legal pages
   - Updated layout to integrate CookieConsent

2. **Second commit:** "Remove compliance text from footer"
   - Removed "Magda Zawadzka | Madrid, España | Cumplimiento LOPD-GDD y RGPD (UE) 2016/679" line
   - Kept legal links section only

## Design System

### Colors
```css
primary-brand: #059669      /* Main green */
secondary-brand: #F0B53D    /* Yellow/gold */
accent-green: #6EE7B7       /* Light green */
background-light: #F7E5D4   /* Beige background */
text-dark: #2D3748          /* Dark gray text */
```

### Fonts
- **Display:** Abril Fatface (cursive) - Used for large headings
- **Headings:** Poppins (weights: 600, 700, 800) - Section titles
- **Body:** Nunito (weights: 400, 600, 700) - Paragraphs and general text

### Font Usage in CSS
```css
font-display  → Abril Fatface (h1, large titles)
font-poppins  → Poppins (h2, h3, h4, buttons)
font-body     → Nunito (p, text content)
```

## Legal Compliance
- **RGPD (GDPR):** Reglamento (UE) 2016/679
- **LOPD-GDD:** Ley Orgánica 3/2018 (Spanish data protection law)
- **LSSI-CE:** Ley 34/2002 (Information society services law)
- **Jurisdiction:** Madrid, Spain

## How to Deploy to GitHub

### Prerequisites
- Git installed on your machine
- GitHub account with access to the repository
- Repository URL: `https://github.com/magdis-star/dadada-design.git`

### Deployment Steps

#### 1. Check Current Status
```bash
cd "/Users/magdalenazawadzka/Desktop/dadadaPROJECT/dadada-design-from github"
git status
```

#### 2. Stage Your Changes
```bash
# Stage all changes
git add .

# Or stage specific files
git add components/Footer.tsx
git add app/layout.tsx
```

#### 3. Commit Changes
```bash
git commit -m "Your commit message here

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

#### 4. Push to GitHub
```bash
# First time setup (if needed)
git remote add origin https://github.com/magdis-star/dadada-design.git

# Push changes
git push origin main
```

#### 5. Handle Merge Conflicts (if any)
```bash
# Pull latest changes and rebase
git pull --rebase

# If conflicts occur:
# 1. Open conflicted files and resolve conflicts
# 2. Stage resolved files
git add <resolved-files>

# 3. Continue rebase
git rebase --continue

# 4. Push changes
git push
```

### Quick Deploy Command
```bash
cd "/Users/magdalenazawadzka/Desktop/dadadaPROJECT/dadada-design-from github" && \
git add . && \
git commit -m "Update: [describe your changes]" && \
git push
```

## Development Commands

### Start Development Server
```bash
npm run dev
```
Server runs at: http://localhost:3000

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Install Dependencies
```bash
npm install
```

### Clear Cache and Restart
```bash
rm -rf .next && npm run dev
```

## Cookie Consent Implementation Details

### localStorage Key
- **Key:** `cookieConsent`
- **Values:**
  - `'all'` - User accepted all cookies
  - `'necessary'` - User accepted only necessary cookies
  - `null` or not set - User hasn't made a choice yet

### Google Analytics Integration
When user accepts all cookies, the CookieConsent component updates Google Analytics consent:
```javascript
if (typeof window !== 'undefined' && (window as any).gtag) {
  (window as any).gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted'
  });
}
```

### Testing Cookie Banner
To see the cookie banner again after accepting/rejecting:
1. Open browser DevTools (F12)
2. Go to Application/Storage tab
3. Find localStorage
4. Delete the `cookieConsent` key
5. Refresh the page

Or use Console:
```javascript
localStorage.removeItem('cookieConsent');
location.reload();
```

## Next Steps

### Immediate Tasks
- [ ] Test cookie consent banner in browser (clear localStorage to see it again)
- [ ] Verify all legal pages render correctly and links work
- [ ] Test responsive design on mobile devices
- [ ] Verify Google Analytics is tracking with consent properly

### Content Updates Needed
- [ ] Update actual business registration details in legal pages (NIF, company name if registered)
- [ ] Add real client testimonials
- [ ] Add actual project images to `/public/images/projects/`
- [ ] Update contact email if different from hello@dadadadesign.com
- [ ] Add real case studies to blog/casos sections

### Feature Enhancements
- [ ] Add cookie preferences management button (to re-open banner after initial choice)
- [ ] Implement blog post functionality (currently placeholder data)
- [ ] Add more case studies with real project details
- [ ] Set up custom domain when ready
- [ ] Configure Google Analytics ID in environment variables
- [ ] Add social media links (LinkedIn, Instagram) if needed
- [ ] Implement contact form backend (currently using Formspree)
- [ ] Add image optimization for portfolio images
- [ ] Set up automated deployment (GitHub Actions or Vercel)

### SEO Optimization
- [ ] Add meta descriptions for all legal pages
- [ ] Create sitemap.xml
- [ ] Add robots.txt
- [ ] Implement structured data (JSON-LD) for services
- [ ] Add Open Graph tags for social sharing
- [ ] Optimize images with proper alt tags

### Performance
- [ ] Add image optimization (next/image)
- [ ] Implement lazy loading for images
- [ ] Add loading states for forms
- [ ] Optimize font loading
- [ ] Run Lighthouse audit and address issues

### Accessibility
- [ ] Run accessibility audit (axe DevTools)
- [ ] Ensure proper ARIA labels
- [ ] Test keyboard navigation
- [ ] Verify color contrast ratios
- [ ] Add focus indicators for interactive elements

## Environment Variables

Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
```

## Important Notes

### Do NOT Commit
- `.env.local` (contains secrets)
- `.next/` (build directory)
- `node_modules/` (dependencies)

These are already in `.gitignore`

### Font Classes Usage
Always use the custom font classes defined in the project:
- `font-display` - For large, decorative headings (Abril Fatface)
- `font-poppins` - For section headings and buttons (Poppins)
- `font-body` - For all body text, paragraphs, and descriptions (Nunito)

### Color Classes Usage
Use the custom Tailwind color classes:
- `bg-primary-brand` / `text-primary-brand` - Main green (#059669)
- `bg-secondary-brand` / `text-secondary-brand` - Gold (#F0B53D)
- `bg-background-light` - Beige background (#F7E5D4)
- `text-text-dark` - Dark gray text (#2D3748)

### Spanish Language
All content is in Spanish. When adding new content:
- Use formal "usted" form for professional tone
- Maintain consistent terminology with existing pages
- Follow Spanish grammar and punctuation rules
- Use proper Spanish date format: `toLocaleDateString('es-ES')`

## Troubleshooting

### Issue: CSS/Tailwind not working
**Solution:** Make sure you're using Next.js 15.1.3, not 16.x
```bash
npm install next@15.1.3
rm -rf .next
npm run dev
```

### Issue: Cookie banner not showing
**Solution:** Check localStorage and clear if needed
```javascript
// In browser console
localStorage.removeItem('cookieConsent');
location.reload();
```

### Issue: Git push rejected
**Solution:** Pull and rebase first
```bash
git pull --rebase
# Resolve any conflicts
git push
```

### Issue: npm permission errors
**Solution:** Fix npm cache permissions
```bash
sudo chown -R 501:20 "/Users/magdalenazawadzka/.npm"
```

## Contact Information
- **Email:** hello@dadadadesign.com
- **GitHub:** https://github.com/magdis-star/dadada-design
- **Location:** Madrid, España

## Project History
- **Created:** November 2025
- **Latest Update:** November 12, 2025
- **Status:** Active development, deployed to GitHub
- **Version:** Next.js 15.1.3, React 19.0.0

### Session 3: Portfolio Update & Vercel Deployment Issues (November 13, 2025)

#### 1. Added Bernardo Website to Portfolio
- **File:** `components/Projects.tsx`
- **Changes:**
  - Added Bernardo as the first project in the portfolio
  - Project details:
    - **Title:** Bernardo - Consultoría Digital & Estrategia
    - **Description:** Personal branding website for a Linguistics PhD offering digital strategy consulting
    - **Design:** Navy & Gold color scheme with innovative, bold brand voice
    - **Link:** https://bernardo-website-7swaal4qm-magdas-projects-91e7b011.vercel.app
    - **Image:** `/images/projects/bernardo-website.jpg`
  - Added professional photo to `public/images/projects/` directory

#### 2. Vercel Build Errors Encountered
**Problem:**
Website deployed but build was failing with CSS errors:
```
Syntax error: The `bg-background-light` class does not exist.
If `bg-background-light` is a custom class, make sure it is defined within a `@layer` directive.
```

**Root Cause:**
- Old `tailwind.config.js` file with wrong colors (blue/orange) was conflicting with correct `tailwind.config.ts` (green/gold)
- Old `postcss.config.js` file also present
- Custom Tailwind classes in `globals.css` weren't recognized during production builds
- This caused:
  - Wrong colors showing on the website
  - Wrong fonts being applied
  - Logo colors incorrect
  - Build failures on Vercel

#### 3. Solution Implemented
**Files Modified:**

**a) Removed conflicting config files:**
```bash
rm tailwind.config.js      # Old file with wrong colors
rm postcss.config.js       # Old duplicate file
```

**b) Updated `app/globals.css`:**
Changed from using `@apply` with custom classes to using CSS variables:
```css
/* Before (didn't work in production build) */
body {
  @apply bg-background-light font-body text-text-dark;
}

/* After (works in production) */
:root {
  --color-primary: #059669;
  --color-secondary: #F0B53D;
  --color-accent: #6EE7B7;
  --color-bg-light: #F7E5D4;
  --color-text-dark: #2D3748;
}

body {
  background-color: var(--color-bg-light);
  font-family: var(--font-nunito), sans-serif;
  color: var(--color-text-dark);
}
```

**c) Kept correct config file:**
- `tailwind.config.ts` - Contains correct green/gold colors and Poppins/Nunito fonts
- `postcss.config.mjs` - Modern ESM format

#### 4. Current Deployment Status

**Production URL:** https://dadada-design-703rr8f0u-magdas-projects-91e7b011.vercel.app

**Deployment Method:** Vercel
- Auto-deploy enabled from GitHub main branch
- Manual deploy command: `npx vercel --prod --yes`

**Build Status:** ✅ Successfully building and deploying

**Git Repository:** https://github.com/magdis-star/dadada-design

#### 5. Important Commits Made Today

1. **52ac809** - "Add Bernardo website to portfolio"
   - Added Bernardo project to Projects.tsx
   - Added project image

2. **0fc2145** - "Fix: Replace custom Tailwind classes with direct CSS values"
   - First attempt to fix build errors

3. **c61787b** - "Fix: Replace font custom classes with CSS variables"
   - Fixed font variable issues

4. **ab646d1** - "Fix: Replace all custom brand color classes with hex values"
   - Fixed color class issues

5. **f5428a7** - "Use CSS variables for colors to fix build"
   - Implemented CSS variables solution

6. **4c719a5** - "Fix: Remove old conflicting config files causing wrong colors and fonts"
   - **Final solution** - removed duplicate config files

#### 6. Lessons Learned

**Problem: Duplicate Config Files**
- Always check for multiple config files with different extensions (.js vs .ts)
- Older .js files take precedence over newer .ts files
- This can cause:
  - Wrong colors/fonts to be applied
  - Build failures
  - Inconsistent behavior between dev and production

**Solution: Keep Only One Config**
- Use TypeScript config files (.ts)
- Remove any .js versions
- Use `git ls-files` to check for duplicate configs

**Best Practices:**
1. **CSS Variables for Custom Values:**
   - Use CSS variables in `globals.css` for colors that need to work with `@apply`
   - This ensures they work in both dev and production builds

2. **Clean Build Before Deploy:**
   ```bash
   rm -rf .next
   npm run build
   ```

3. **Test Production Build Locally:**
   ```bash
   npm run build
   npm start
   ```

#### 7. Current Working Setup

**Tailwind Configuration (`tailwind.config.ts`):**
```typescript
colors: {
  'primary-brand': '#059669',
  'secondary-brand': '#F0B53D',
  'accent-green': '#6EE7B7',
  'background-light': '#F7E5D4',
  'text-dark': '#2D3748',
},
fontFamily: {
  heading: ['var(--font-poppins)', 'sans-serif'],
  body: ['var(--font-nunito)', 'sans-serif'],
  abril: ['var(--font-abril)', 'cursive'],
}
```

**CSS Variables (`app/globals.css`):**
```css
:root {
  --color-primary: #059669;
  --color-secondary: #F0B53D;
  --color-accent: #6EE7B7;
  --color-bg-light: #F7E5D4;
  --color-text-dark: #2D3748;
}
```

**Logo Configuration (`components/Header.tsx`):**
```tsx
<span className="text-primary-brand">da</span>
<span className="text-secondary-brand">da</span>
<span className="text-primary-brand">da</span>
<span className="text-text-dark ml-2">design</span>
```
This creates the green-gold-green logo pattern.

#### 8. Portfolio Projects

Current projects shown on homepage:

1. **Bernardo - Consultoría Digital & Estrategia** ⭐ NEW
   - Live: https://bernardo-website-7swaal4qm-magdas-projects-91e7b011.vercel.app
   - Navy & Gold design
   - Personal branding for PhD Linguist

2. **Gonzalo Morales - Galería de Arte**
   - Live: https://gonzalomorales.net
   - Art gallery with +90 works
   - E-commerce enabled

3. **"Growth Mind" - Servicios B2B**
   - Mock project
   - +30% form submission increase

4. **"El Fogón" - Restaurante**
   - Mock project
   - +60% online reservations increase

#### 9. Troubleshooting Guide

**Issue: Vercel build fails with "class does not exist" error**

**Solution:**
1. Check for duplicate config files:
   ```bash
   ls -la | grep -E "(tailwind|postcss)"
   ```
2. Remove old .js config files if .ts/.mjs versions exist
3. Clear build cache:
   ```bash
   rm -rf .next
   npm run build
   ```

**Issue: Colors/fonts wrong on local dev server**

**Solution:**
1. Kill dev server
2. Clear cache and restart:
   ```bash
   rm -rf .next
   npm cache clean --force
   npm run dev
   ```

**Issue: Different behavior between dev and production**

**Solution:**
1. Test production build locally:
   ```bash
   npm run build
   npm start
   ```
2. Check browser console for errors
3. Verify all config files are consistent

#### 10. Deployment Checklist

Before deploying to Vercel:

- [ ] Test production build locally: `npm run build`
- [ ] Check for TypeScript errors
- [ ] Verify no duplicate config files
- [ ] Clear .next directory
- [ ] Test on localhost:3000
- [ ] Commit and push to GitHub
- [ ] Deploy with `npx vercel --prod --yes`
- [ ] Test live URL
- [ ] Verify colors, fonts, and logo are correct
- [ ] Check all portfolio images load
- [ ] Test navigation links

---

**Last Updated:** November 13, 2025
**Updated By:** Claude Code Assistant
**Current Status:** Portfolio updated with Bernardo project, Vercel deployment fixed and working ✅
