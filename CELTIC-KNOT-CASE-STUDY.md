# Tie the Celtic Knot - Case Study Complete

## Overview
**Client:** Kerstin Sandstrom - Humanist Wedding Celebrant
**Industry:** Wedding Services / Celebrant Services
**Year:** 2025
**URL:** https://tiethecelticknot.ca
**Project Type:** WordPress Theme Development (conversion from Next.js)

---

## The Challenge

Kerstin Sandstrom, a licensed Humanist Officiant specializing in bespoke Celtic-inspired wedding ceremonies in Ontario, initially had a Next.js website that looked beautiful but created a significant problem: **she couldn't update her own content**.

Every time she wanted to:
- Add a new testimonial from a happy couple
- Update her gallery with recent ceremony photos
- Write a blog post about wedding traditions
- Change pricing or FAQ information

...she had to contact the developer. This dependency was frustrating, time-consuming, and prevented her from keeping her site fresh and engaging.

### Key Challenges:
1. **Zero content autonomy** - Static Next.js site required developer for any update
2. **Missing blog functionality** - No way to share her expertise or improve SEO
3. **Rigid testimonials** - Couldn't showcase new client feedback easily
4. **Gallery limitations** - New ceremony photos couldn't be added independently
5. **Business growth blocker** - Content updates took days/weeks instead of minutes

### Goals:
- Give Kerstin 100% control over her website content
- Enable her to manage testimonials, gallery, and blog posts independently
- Maintain the EXACT visual design of the original Next.js site
- Preserve SEO optimization and performance
- Keep strategic content (pricing, FAQ, process) protected from accidental changes

---

## Design Thinking Process

### 1. Empatizar - Understand the User

**Client Research:**
- Interviewed Kerstin about her frustrations with the current Next.js setup
- Discovered she wanted to publish blog posts about Celtic traditions, handfasting rituals, and wedding planning tips
- Identified her need to showcase recent testimonials to build trust with potential clients
- Understood her technical comfort level: comfortable with basic admin panels, not comfortable with code

**User Needs (Kerstin):**
- Update content herself without waiting for developer
- Add testimonials immediately after ceremonies
- Upload new gallery photos from recent weddings
- Write blog posts to establish authority and improve SEO
- Keep the beautiful design intact

**End User Needs (Couples):**
- See recent, authentic testimonials from other couples
- View real photos of ceremonies Kerstin has officiated
- Read helpful content about Celtic wedding traditions
- Easy navigation and contact options

### 2. Definir - Define the Problem

**Core Problem Statement:**
"Kerstin needs a WordPress-based solution that gives her full content autonomy while maintaining the exact visual appearance and SEO optimization of her Next.js site, with strategic content protected from accidental changes."

**Technical Requirements:**
- **CMS:** WordPress (client can manage)
- **Editable Content:** Testimonials, Gallery, Blog
- **Protected Content:** Pricing, FAQ, Process steps (hard-coded in theme)
- **Custom Fields:** ACF for Hero and "My Story" sections (rarely change)
- **Design Fidelity:** 100% visual match to Next.js original
- **SEO:** Maintain all meta tags, Open Graph, Schema.org
- **Performance:** Fast loading, optimized images

**Success Criteria:**
- Kerstin can add testimonials in 2 minutes
- Kerstin can upload gallery photos in 5 minutes
- Kerstin can publish blog posts independently
- Site looks IDENTICAL to Next.js version
- SEO metrics maintained or improved

### 3. Idear - Ideate Solutions

**Solution Options Considered:**

**Option A: Headless WordPress + Next.js**
- ❌ Complex for client
- ❌ Requires two systems
- ❌ Overkill for use case

**Option B: WordPress + Page Builder (Elementor)**
- ❌ Risk of client breaking design
- ❌ Bloated code
- ❌ Performance issues

**Option C: Custom WordPress Theme (SELECTED)**
- ✅ Full control over design
- ✅ Strategic content hard-coded
- ✅ Custom Post Types for testimonials/gallery
- ✅ Simple WordPress admin
- ✅ ACF for rarely-changing content (Hero, About)
- ✅ Clean, maintainable code

**Architecture Decision:**
```
WordPress Theme Structure:
├── front-page.php (Homepage)
├── header.php / footer.php
├── single.php (Blog posts)
├── index.php (Blog archive)
├── functions.php (Custom Post Types, SEO, ACF)
├── style.css (All styling)
└── Custom Post Types:
    ├── Testimonials
    └── Gallery Images
```

### 4. Prototipar - Design & Prototype

**Design System Transfer:**

**Colors (from Next.js to WordPress):**
```css
--sage-green: #1e3a2d  (primary)
--cream: #f4ead7       (header background)
--light-sage: #f0f3ed  (body background)
--gold: #d4c4b8        (accents)
```

**Typography:**
- Headers: Georgia, serif (elegant, traditional)
- Body: System fonts (performance)

**Layout Components:**
1. **Fixed Header:** Logo (Celtic knot) + Navigation + CTA button
2. **Hero Section:** Full-width background image + overlay + headline
3. **Services Grid:** 2-column responsive layout
4. **Testimonials:** 3-column grid (WordPress pulls from CPT)
5. **Gallery:** 6-photo grid with hover captions (WordPress CPT)
6. **Pricing:** 4-column cards (hard-coded)
7. **FAQ:** Accordion style (hard-coded)
8. **Blog:** Standard WordPress loop
9. **Footer:** Contact info + links

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 5. Implement - Development

**Phase 1: Theme Foundation**
- Created complete WordPress theme structure
- Converted all Next.js Tailwind CSS to vanilla CSS
- Set up Custom Post Types (Testimonials, Gallery Images)
- Configured ACF for Hero & My Story sections

**Phase 2: Template Development**
```php
front-page.php:
- Hero (ACF fields with fallbacks)
- Services (hard-coded for content protection)
- Testimonials (WP_Query from CPT)
- Gallery (WP_Query from CPT)
- Pricing (hard-coded, strategic content)
- FAQ (hard-coded, strategic content)
- Process Steps (hard-coded)
- Contact form (Formspree integration)

single.php / index.php:
- Blog post template
- Archive template with pagination
- Sidebar (optional)
```

**Phase 3: SEO Implementation**
```php
// Meta tags function
function celtic_knot_seo_meta_tags() {
  // Basic SEO
  echo '<meta name="description" content="...">';
  echo '<meta name="robots" content="index, follow">';

  // Open Graph (Facebook)
  echo '<meta property="og:title" content="...">';
  echo '<meta property="og:image" content="...">';

  // Twitter Cards
  echo '<meta name="twitter:card" content="summary_large_image">';

  // Geographic (Ontario)
  echo '<meta name="geo.region" content="CA-ON">';
}

// Schema.org JSON-LD
function celtic_knot_schema_markup() {
  $schema = [
    '@context' => 'https://schema.org',
    '@type' => 'LocalBusiness',
    'name' => 'Tie the Celtic Knot',
    'description' => '...',
    'url' => 'https://tiethecelticknot.ca',
    'priceRange' => '$300-$895',
    // ... full schema
  ];
}
```

**Phase 4: Problem Solving**

**Issue 1: Responsive Layouts Broken**
- Problem: Inline Tailwind syntax (lg:grid-cols-2) doesn't work in regular CSS
- Solution: Created proper CSS classes with @media queries
```css
.grid-2-cols {
  display: grid;
  grid-template-columns: 1fr;
}
@media (min-width: 1024px) {
  .grid-2-cols {
    grid-template-columns: 1fr 1fr;
  }
}
```

**Issue 2: Image Cropping in About Section**
- Problem: object-fit: cover was cropping Kerstin's photo awkwardly
- Solution: Changed to object-fit: contain for proper display

**Issue 3: CSS Caching**
- Problem: Client couldn't see updates after CSS changes
- Solution: Implemented cache-busting with filemtime()
```php
wp_enqueue_style('celtic-knot-style',
  get_stylesheet_uri(),
  array(),
  filemtime(get_template_directory() . '/style.css')
);
```

**Issue 4: ACF Homepage Settings Not Appearing**
- Problem: ACF options page not showing in WordPress admin
- Solution: Created standalone plugin for ACF fields registration

**Phase 5: Testing & Iteration**
- Desktop browser testing (Chrome, Firefox, Safari)
- Mobile device testing (real iPhone and Android)
- Content editing testing with client
- Performance optimization (image compression, CSS minification)
- SEO validation (meta tags, schema markup)

### 6. Testear - Test & Iterate

**Testing Process:**

**Visual Comparison:**
- Side-by-side comparison with Next.js version
- Verified pixel-perfect match across all sections
- Tested all responsive breakpoints

**Content Management Testing:**
- Client successfully added testimonial
- Client successfully uploaded gallery images
- Client confirmed ease of use

**SEO Validation:**
- Google Search Console setup
- All meta tags present and correct
- Schema markup validated with Google's Rich Results Test
- Mobile-friendly test passed

**Performance:**
- Page load time < 3 seconds
- Images optimized
- CSS minified

**Iteration Based on Feedback:**
1. Client: "I like the wording 'glimpse' in gallery"
   → Changed to "These are some of the beautiful moments..."

2. Client: "Mobile padding looks off in About section"
   → Tested on real mobile → actually looked fine
   → Decided no change needed

---

## The Solution

**Final Deliverables:**

### 1. Custom WordPress Theme
- Complete theme with all templates
- Pixel-perfect recreation of Next.js design
- Responsive CSS (mobile-first approach)
- Clean, maintainable code

### 2. Content Management System
**Editable by Client:**
- ✅ Blog Posts (WordPress default)
- ✅ Testimonials (Custom Post Type)
- ✅ Gallery Images (Custom Post Type with captions)
- ✅ Hero Section (ACF - rarely changes)
- ✅ My Story / About (ACF - rarely changes)

**Protected (Hard-coded):**
- ✅ Services descriptions
- ✅ Pricing tiers ($300, $535, $735, $895)
- ✅ FAQ questions and answers
- ✅ Process steps (1-5)
- ✅ Navigation menu

### 3. SEO Package
- Meta tags (title, description, keywords)
- Open Graph tags (Facebook sharing)
- Twitter Card tags
- Schema.org LocalBusiness markup
- Schema.org Article markup for blog posts
- Geographic tags for Ontario
- Canonical URLs

### 4. Documentation
- WordPress admin guide
- How to add testimonials
- How to upload gallery photos
- How to write blog posts
- Troubleshooting common issues

### 5. Technical Features
```
✓ WordPress 6.6+ compatible
✓ ACF Pro integration
✓ Custom Post Types (Testimonials, Gallery)
✓ Formspree contact form
✓ Google Analytics ready
✓ GDPR-friendly
✓ Cache-busting system
✓ Mobile-optimized
✓ Fast loading (<3s)
✓ SEO-optimized
✓ Schema.org markup
✓ Version controlled (GitHub)
```

---

## Results

### Quantitative Results

**Content Autonomy:**
- **Before:** 0% - Client depended on developer for ALL changes
- **After:** 80% - Client manages testimonials, gallery, blog independently
- **Time saved:** Previously 2-7 days wait for updates → now 2-5 minutes

**Content Updates Enabled:**
- ✅ Testimonials: Added immediately after ceremonies (< 2 minutes)
- ✅ Gallery: New photos uploaded after each wedding (< 5 minutes)
- ✅ Blog: Can publish Celtic tradition articles for SEO (< 30 minutes)

**SEO Improvements:**
- ✅ Schema.org markup added (LocalBusiness + Articles)
- ✅ Open Graph tags for social sharing
- ✅ Geographic targeting (Ontario, Canada)
- ✅ Blog functionality enables content marketing strategy

**Technical Achievements:**
- ✅ 100% visual fidelity to Next.js original
- ✅ Zero layout breaks or design inconsistencies
- ✅ Mobile responsive maintained
- ✅ Page load time: <3 seconds
- ✅ SEO score: Maintained/improved

### Qualitative Results

**Client Satisfaction:**
- Kerstin can now update her site independently
- Confidence in managing her own content
- Ability to keep site fresh with recent testimonials
- Blog enables her to share Celtic wedding expertise
- Strategic content protected from accidental changes

**Business Impact:**
- Fresh testimonials build trust with potential clients
- Gallery showcases recent ceremony work
- Blog positions Kerstin as Celtic wedding expert
- SEO improved with blogging capability
- Faster response to client needs (add testimonial same day)

### Future Scalability

**Phase 2 Plans (Optional):**
- Email newsletter integration (Kerstin@tiethecelticknot.ca)
- Japanese translation (client mentioned interest)
- Online booking system for consultations
- Client portal for ceremony planning

---

## Key Learnings

### Technical Lessons

1. **CSS Conversion from Tailwind:**
   - Inline Tailwind utilities don't work in regular CSS
   - Must create proper CSS classes with media queries
   - Testing across breakpoints is critical

2. **Cache-Busting is Essential:**
   - WordPress caches aggressively
   - filemtime() for CSS versioning solved client confusion

3. **ACF Setup Challenges:**
   - Theme-based ACF registration sometimes fails
   - Standalone plugin is more reliable
   - Always test in client environment

4. **Balance of Control:**
   - Give client control over frequently-changing content (testimonials, gallery, blog)
   - Hard-code strategic content that changes rarely (pricing, FAQ)
   - Use ACF for middle ground (hero, about - changes occasionally)

### Design Thinking Application

**Empathy was Critical:**
- Understanding Kerstin's frustration with developer dependency shaped entire solution
- Recognizing her technical comfort level informed CMS choice
- Identifying her desire to blog about Celtic traditions added value beyond original scope

**Problem Definition Mattered:**
- Clear articulation: "autonomy while maintaining design" prevented scope creep
- Defining "strategic content" as hard-coded protected client from herself

**Iterative Testing Revealed Issues:**
- CSS caching discovered through client feedback
- Mobile padding concern resolved through real device testing
- ACF setup needed plugin approach after initial theme method failed

---

## Testimonial

> "The WordPress transition was exactly what I needed. I can now add testimonials right after ceremonies, upload beautiful photos from recent weddings, and I'm planning to start a blog about Celtic traditions. The site looks identical to before, but now it's MINE to manage. Magda understood that I wanted control without the headache of code."

— **Kerstin Sandstrom**, Licensed Humanist Officiant, Tie the Celtic Knot

---

## Technical Stack

**Frontend:**
- HTML5
- CSS3 (converted from Tailwind)
- Vanilla JavaScript (minimal)
- Responsive design (mobile-first)

**Backend:**
- WordPress 6.6+
- PHP 8.0+
- MySQL database

**Plugins:**
- Advanced Custom Fields (ACF) Pro
- (Optional: Yoast SEO for client)

**Integrations:**
- Formspree (contact form)
- Google Analytics
- Schema.org JSON-LD

**Development Tools:**
- Git/GitHub (version control)
- VS Code
- Chrome DevTools
- Responsively (responsive testing)

**Hosting:**
- jemywdomu.pl (testing)
- tiethecelticknot.ca (production)

---

## Project Timeline

**Week 1:**
- Discovery & requirements gathering
- Next.js codebase analysis
- WordPress theme setup

**Week 2:**
- Template development (front-page.php, single.php, etc.)
- CSS conversion from Tailwind
- Custom Post Types setup

**Week 3:**
- ACF implementation
- SEO optimization
- Problem-solving (responsive layouts, caching, ACF)

**Week 4:**
- Testing & iteration
- Client training
- Documentation
- Deployment

**Total:** 4 weeks from kickoff to production

---

## Repository

**Theme Location:**
`/Users/magdalenazawadzka/Desktop/dadadaPROJECT/celtic-knot-wordpress-theme/`

**GitHub:**
https://github.com/magdis-star/celtic-knot-wordpress-theme

**Original Next.js (Archived):**
https://github.com/magdis-star/celtic-knot-website

---

## Conclusion

The Tie the Celtic Knot project demonstrates how thoughtful CMS architecture can empower clients while maintaining design integrity. By applying design thinking methodology, I identified that Kerstin's core need wasn't a prettier website—she needed **autonomy**.

The solution balanced three critical factors:
1. **Client Control:** WordPress admin for frequent updates (testimonials, gallery, blog)
2. **Design Protection:** Hard-coded strategic content prevents accidental changes
3. **Visual Fidelity:** 100% match to Next.js original maintains brand consistency

This project showcases my ability to:
- Understand client needs beyond the surface request
- Make strategic architectural decisions (WordPress vs. headless vs. static)
- Convert modern frameworks (Next.js/Tailwind) to traditional CMS
- Implement comprehensive SEO and Schema.org markup
- Solve technical challenges iteratively
- Empower clients through thoughtful UX in admin panels

**Result:** A website that looks beautiful, ranks well, and gives Kerstin the independence she needed to grow her business.
