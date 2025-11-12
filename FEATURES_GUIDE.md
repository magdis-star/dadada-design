# Impulsa Digital - Features Guide

## 🎉 New Features Added

Your website now includes:
1. **Blog** with 3 placeholder posts
2. **Detailed Case Studies** showing your Design Thinking process
3. **Google Analytics 4** ready to track visitors

---

## 📝 Blog

### Accessing the Blog
- URL: `/blog`
- Link added to navigation menu

### Managing Blog Posts

Blog posts are stored in `/lib/data/blogPosts.ts`

**To add a new post:**

1. Open `/lib/data/blogPosts.ts`
2. Add a new object to the `blogPosts` array:

```typescript
{
  slug: "your-post-slug",
  title: "Your Post Title",
  excerpt: "Short description",
  date: "2025-01-15",
  author: "Magdalena",
  category: "Estrategia Digital",
  readTime: "5 min",
  content: `
# Your Post Title

Your content here in Markdown format...

## Subheading

- Bullet point
- Another point

**Bold text** and *italic text*

[Links work too](https://example.com)
  `
}
```

3. Save the file - Next.js will automatically reload

### Current Blog Posts
1. "¿Por Qué Tu Pequeño Negocio Necesita una Web Profesional en 2025?"
2. "Cómo el Design Thinking Puede Transformar la Web de Tu Negocio"
3. "5 Errores Comunes que las PYMES Cometen en Sus Webs"

---

## 📊 Case Studies

### Accessing Case Studies
- Individual case study URLs: `/casos/[slug]`
- Linked from the Projects section on homepage

### Current Case Study
- **Gonzalo Morales** - Full Design Thinking breakdown

### Adding More Case Studies

Edit `/lib/data/caseStudies.ts` and add new case studies following this structure:

```typescript
{
  slug: "your-project-slug",
  title: "Project Title",
  client: "Client Name",
  industry: "Industry",
  year: "2024",
  url: "https://project-url.com",
  thumbnail: "/images/projects/project-name.jpg",
  excerpt: "Brief description",
  challenge: {
    title: "El Desafío",
    description: "What was the problem?",
    goals: ["Goal 1", "Goal 2", "Goal 3"]
  },
  process: {
    title: "Proceso de Design Thinking",
    steps: [
      {
        phase: "1. Empatizar",
        description: "What you did",
        actions: ["Action 1", "Action 2"]
      },
      // ... more steps
    ]
  },
  solution: {
    title: "La Solución",
    description: "What you built",
    features: ["Feature 1", "Feature 2"]
  },
  results: {
    title: "Resultados",
    description: "What happened",
    metrics: [
      {
        label: "90+",
        value: "Obras",
        description: "Description"
      }
    ],
    testimonial: {
      quote: "Client quote",
      author: "Client Name",
      role: "Role"
    }
  }
}
```

---

## 📈 Google Analytics 4

### Setup Instructions

1. **Get your Google Analytics 4 Measurement ID:**
   - Go to https://analytics.google.com
   - Create a new GA4 property (if you don't have one)
   - Get your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add your GA4 ID to the project:**
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Open `.env.local` and add your ID:
     ```
     NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
     ```

3. **Restart your dev server:**
   ```bash
   npm run dev
   ```

4. **Verify it's working:**
   - Open your site
   - Go to Google Analytics → Reports → Realtime
   - You should see your visit

### What Gets Tracked
- Page views
- User sessions
- Navigation between pages
- All standard GA4 metrics

### GDPR Compliance (Spain/EU)
Since you're in Spain, you may need to add a cookie consent banner. Popular options:
- **Cookiebot** - https://www.cookiebot.com
- **Cookie-Script** - https://cookie-script.com
- **Osano** - https://www.osano.com

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 📁 Project Structure

```
impulsa-digital/
├── app/
│   ├── blog/                  # Blog pages
│   │   ├── page.tsx          # Blog listing
│   │   └── [slug]/page.tsx   # Individual post
│   ├── casos/                 # Case studies
│   │   └── [slug]/page.tsx   # Individual case study
│   ├── layout.tsx            # Root layout (with GA4)
│   ├── page.tsx              # Homepage
│   └── globals.css           # Global styles
├── components/
│   ├── About.tsx             # Your personal story
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer
│   ├── GoogleAnalytics.tsx   # GA4 tracking
│   ├── Header.tsx            # Navigation
│   ├── Hero.tsx              # Hero section
│   ├── Pricing.tsx           # Pricing packages
│   ├── Process.tsx           # Design Thinking process
│   ├── Projects.tsx          # Portfolio
│   ├── Services.tsx          # Services offered
│   └── Testimonials.tsx      # Client reviews
├── lib/
│   └── data/
│       ├── blogPosts.ts      # Blog content
│       └── caseStudies.ts    # Case study content
└── public/
    └── images/
        └── projects/         # Project screenshots
```

---

## 💡 Tips

### Adding More Real Projects
1. Take screenshots of your projects
2. Save them in `/public/images/projects/`
3. Update `/lib/data/caseStudies.ts` with full case study
4. Update `/components/Projects.tsx` to link to the new case study

### Writing Good Blog Posts
- Focus on problems your clients face
- Use simple language (avoid jargon)
- Include actionable tips
- End with a call-to-action (contact you)
- Aim for 800-1500 words (5-10 min read)

### SEO Best Practices
- Each blog post and case study has unique meta titles and descriptions
- Use headings (H1, H2, H3) properly
- Include your target keywords naturally
- Add alt text to images
- Keep URLs clean and descriptive

---

## 🎯 Next Steps

1. **Replace placeholder content:**
   - Add your real photo in About section
   - Update testimonials with real client quotes
   - Add more project screenshots

2. **Set up Google Analytics:**
   - Follow the instructions above
   - Start tracking your visitors

3. **Create more content:**
   - Write 1-2 blog posts per month
   - Document each project as a case study
   - Share on social media and LinkedIn

4. **Deploy your site:**
   - Vercel (recommended for Next.js)
   - Netlify
   - Your own hosting

---

**Questions?** All your content is in `/lib/data/` - easy to find and edit!
