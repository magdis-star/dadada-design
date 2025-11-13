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

---

**Last Updated:** November 12, 2025
**Updated By:** Claude Code Assistant
**Current Status:** Cookie consent and GDPR compliance features deployed to GitHub ✅
