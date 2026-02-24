# Elemental Kids Club - Multi-Book Hub Redesign Plan

**Date:** January 21, 2026
**Project:** Elemental Kids Club expansion from 1 book to multi-book series
**Client Need:** Semi-autonomous system to add new books using templates

---

## 🎯 Project Goals

1. **Scalability**: Support 2+ books now, 10+ books in the future
2. **SEO**: Each book gets dedicated page for targeted marketing
3. **Autonomy**: Client can add new books without developer help
4. **Consistency**: All books maintain brand identity and structure
5. **Sales Funnel**: Maintain Amazon redirect + Wild Mail lead generation

---

## 🏗️ New Site Architecture

### **Homepage: Book Series Hub** (`/`)

**Purpose:** Showcase the Elemental Kids Club brand and all available books

**Sections:**
1. **Hero Section**
   - Brand headline: "Aprendizaje Divertido Lejos de las Pantallas"
   - Subheadline: "Libros de actividades que estimulan creatividad y lógica en niños 5-8 años"
   - CTA: "Explora Nuestros Libros" (scroll to books)
   - Background: Vibrant illustration with kids + books

2. **About the Series**
   - What makes Elemental Kids Club special
   - Age range, educational philosophy
   - Why parents love our books

3. **Books Showcase Grid**
   - Card for each book with:
     - Book cover image
     - Title + subtitle
     - Age range badge
     - Main topics (3-4 tags)
     - Short description (2 lines)
     - "Ver Detalles" button → individual book page
   - Responsive grid: 1 col mobile, 2 cols tablet, 3 cols desktop

4. **Site-Wide Lead Magnet** (Optional)
   - "Descarga Actividades GRATIS"
   - Universal bonus that works for all books
   - Wild Mail form integration
   - Alternative: Skip site-wide, use book-specific bonuses

5. **Social Proof Section**
   - General testimonials about the series
   - "Trusted by X parents" metric
   - Instagram feed or social media links

6. **Newsletter Signup** (Alternative to lead magnet)
   - "Entérate de nuevos libros"
   - Simple email capture

---

### **Individual Book Landing Pages** (`/libros/[book-slug]`)

**Purpose:** Dedicated sales page for each book

**URL Structure:**
- `/libros/naturaleza-y-experimentos` (Book 1 - existing)
- `/libros/ciencia-espacial` (Book 2 - new)
- `/libros/animales-marinos` (Book 3 - future)

**Sections (Same structure as current page):**

1. **Book Hero**
   - Large book cover image
   - Book title + subtitle
   - Age range + topics tags
   - Key benefit headline
   - **CTA: "COMPRAR EN AMAZON"** (primary action)
   - Secondary CTA: "Descarga Muestra Gratis" (lead magnet)

2. **Why This Book? (Benefits)**
   - 4-6 benefit cards
   - Each benefit: icon + headline + 1-2 sentences
   - Customizable per book

3. **What's Inside? (Features)**
   - Visual breakdown of book contents
   - "X pages of activities"
   - Topic list (e.g., "Naturaleza, Experimentos, Laberintos")
   - Sample page preview images

4. **Book-Specific Testimonials**
   - 3 testimonials from parents who bought THIS book
   - Customizable via WordPress Customizer

5. **FAQs**
   - 5-7 questions specific to this book
   - Or general questions about the series
   - Customizable via WordPress Customizer

6. **Lead Magnet (Wild Mail)**
   - "Descarga 5 Páginas de Muestra GRATIS"
   - Form: Name + Email
   - Wild Mail integration (double opt-in)
   - Confirmation + Thank You pages

7. **Final CTA**
   - Repeat Amazon CTA
   - "¿Listo para Comprar? Haz Click Aquí"

---

## 🛠️ WordPress Implementation

### **Option A: Custom Post Type "Books"**

**Pros:**
- Clean admin interface
- Scalable for many books
- Can add custom taxonomies (topics, age ranges)
- Easier to query and filter books

**Cons:**
- More complex initial setup
- Requires custom post type registration

**Structure:**
```php
// Custom Post Type: 'book'
// Taxonomies: 'book-topic' (Naturaleza, Ciencia, etc.), 'age-range' (5-6, 7-8)
// Custom fields (ACF or Customizer):
```

### **Option B: Page Template "Book Landing Page"** ⭐ RECOMMENDED

**Pros:**
- Simpler for client to understand (just pages)
- Easier to duplicate and customize
- Less learning curve
- Client already familiar with pages

**Cons:**
- Slightly less organized at scale
- Manual navigation menu management

**How It Works:**
1. Create custom page template: `template-book-landing.php`
2. Client creates new page → selects "Book Landing Page" template
3. WordPress Customizer shows book-specific fields
4. Page slug determines URL: `/libros/book-name`

---

## 📝 WordPress Customizer Fields (Per Book Page)

### **Book Information**
- `book_title` (text) - "Libro 1: Naturaleza y Experimentos"
- `book_subtitle` (text) - "Descubre el mundo natural con actividades divertidas"
- `book_age_range` (text) - "5-8 años"
- `book_topics` (text) - "Naturaleza, Experimentos, Laberintos" (comma-separated)
- `book_cover_image` (image upload)

### **Hero Section**
- `hero_headline` (text) - Main benefit headline
- `hero_description` (textarea) - 2-3 sentences
- `amazon_url` (URL) - Link to Amazon product page

### **Benefits Section (Repeater)**
- `benefit_1_title` (text)
- `benefit_1_description` (textarea)
- `benefit_1_icon` (icon picker OR predefined list)
- ... repeat for benefits 2-6

### **What's Inside Section**
- `inside_description` (textarea)
- `inside_page_count` (number) - "60 páginas"
- `inside_sample_images` (gallery) - Upload 2-3 sample pages

### **Testimonials (Repeater - 3 slots)**
- `testimonial_1_quote` (textarea)
- `testimonial_1_author` (text) - "María G., Madre de 2"
- ... repeat for testimonials 2-3

### **FAQs (Repeater - 7 slots)**
- `faq_1_question` (text)
- `faq_1_answer` (textarea)
- ... repeat for FAQs 2-7

### **Lead Magnet**
- `lead_magnet_title` (text) - "Descarga 5 Páginas Gratis"
- `lead_magnet_description` (textarea)
- `wildmail_form_url` (URL) - Wild Mail form embed URL
- `wildmail_confirmation_url` (URL)
- `wildmail_thankyou_url` (URL)

---

## 🎨 Design System (Keep Existing Brand)

**Colors** (from current site):
- Primary: Yellow `#FAD02E`
- Accent: Pink `#F43F5E`
- Secondary: Blue `#3B82F6`
- Background: White, Light Yellow tints

**Typography**:
- Headings: **Bangers** (playful, energetic)
- Body: **Inter** (legible, professional)

**Components to Maintain**:
- Vibrant color blocks
- Rounded corners on cards
- Playful illustrations/icons
- Large, readable buttons
- Mobile-first responsive design

---

## 📦 Deliverables

### **Phase 1: Core Structure**
1. ✅ New homepage design (Book Series Hub)
2. ✅ Book Landing Page template (WordPress)
3. ✅ WordPress Customizer setup with all fields
4. ✅ Migration of Book 1 (existing) to new structure

### **Phase 2: Content Population**
5. ✅ Book 1 content migration (populate all fields)
6. ✅ Book 2 content input (client provides content)
7. ✅ Homepage book showcase setup

### **Phase 3: Training & Handoff**
8. ✅ Step-by-step guide: "How to Add a New Book"
9. ✅ Video walkthrough (optional but recommended)
10. ✅ Test with client: Add a dummy Book 3 together

---

## 🚀 Wild Mail Integration Strategy

### **Option A: Site-Wide Lead Magnet** (Simpler)
- One bonus works for all books: "10 Actividades Gratis"
- Same Wild Mail form on homepage + all book pages
- Easier to manage (1 email sequence)
- Less personalization

### **Option B: Book-Specific Lead Magnets** ⭐ RECOMMENDED
- Each book has its own bonus: "5 Páginas de Muestra - Libro 1"
- Dedicated Wild Mail form per book
- More personalized email sequences
- Better segmentation (know which book interests them)
- Slightly more setup, but better ROI

**Implementation:**
- Book 1 Wild Mail form: `form-libro-1`
- Book 2 Wild Mail form: `form-libro-2`
- Each form has its own:
  - Confirmation page: `/confirmacion-libro-1`
  - Thank you page: `/gracias-libro-1`
  - Bonus email with book-specific sample

---

## 🧭 Navigation Structure

### **Main Menu:**
```
Logo [Elemental Kids Club]
├── Inicio (Home)
├── Nuestros Libros ↓ (Dropdown)
│   ├── Libro 1: Naturaleza y Experimentos
│   ├── Libro 2: [New Book Title]
│   └── Ver Todos los Libros → (goes to homepage books section)
├── Sobre Nosotros
├── Blog (optional - future)
└── Contacto
```

### **Footer:**
```
Elemental Kids Club
├── Nuestros Libros
├── Política de Privacidad
├── Política de Cookies
├── Condiciones de Contratación
└── Social Media Links (IG, FB)
```

---

## 📋 Client Guide: "How to Add a New Book" (Draft)

### **Step-by-Step Process:**

1. **Prepare Your Content** (before you start)
   - Book cover image (high-res PNG/JPG)
   - Title + subtitle
   - Age range and topics
   - 4-6 benefits (what kids will learn/enjoy)
   - Description of what's inside
   - 2-3 sample page images
   - 3 testimonials from readers
   - 5-7 FAQs
   - Amazon product URL

2. **Create New Page in WordPress**
   - Go to Pages → Add New
   - Page Title: "Libro X: [Book Title]"
   - Permalink: `/libros/book-slug-here`

3. **Select "Book Landing Page" Template**
   - Right sidebar → Template dropdown
   - Choose "Book Landing Page"
   - Click Update

4. **Open Customizer**
   - Click "Customize" button (top bar)
   - Find "Book Settings" panel

5. **Fill In All Fields**
   - Book Information section (title, subtitle, age, topics, cover)
   - Hero section (headline, description, Amazon URL)
   - Benefits (add 4-6 benefits with descriptions)
   - What's Inside (page count, sample images)
   - Testimonials (3 quotes)
   - FAQs (5-7 questions)
   - Lead Magnet (Wild Mail form URLs)

6. **Add Book to Homepage**
   - Go to Homepage → Customize
   - Find "Books Showcase" panel
   - Add new book card (title, cover, description, link)

7. **Update Navigation Menu**
   - Go to Appearance → Menus
   - Add new book page to "Nuestros Libros" dropdown

8. **Test Everything**
   - Visit the new book page
   - Click Amazon button (does it go to correct product?)
   - Test Wild Mail form (does email arrive?)
   - Check mobile view

9. **Publish!** 🎉

---

## ⚙️ Technical Implementation Notes

### **Files to Create:**

**WordPress Theme Files:**
```
/wp-content/themes/elemental-kids-club/
├── template-book-landing.php (Book page template)
├── front-page.php (New homepage - Book Series Hub)
├── inc/
│   ├── customizer-book.php (Book Customizer fields)
│   └── customizer-homepage.php (Homepage Customizer fields)
├── css/
│   ├── homepage-hub.css
│   └── book-landing.css
└── js/
    └── book-interactions.js (FAQs accordion, etc.)
```

**HTML Prototype (For Client Approval):**
```
/html-prototype/
├── index.html (New homepage)
├── libro-1.html (Book landing page example)
└── assets/
    ├── css/
    └── images/
```

### **Development Workflow:**

1. **HTML Prototype First** (Fast iteration with client)
   - Build homepage + book page in HTML/Tailwind
   - Deploy to Vercel for client preview
   - Get approval on design before WordPress work

2. **WordPress Implementation** (After design approved)
   - Convert HTML to WordPress theme
   - Set up Customizer fields
   - Migrate existing Book 1 content
   - Input Book 2 content

3. **Testing**
   - Test all Customizer fields
   - Test Wild Mail forms
   - Test Amazon CTAs
   - Mobile/tablet/desktop testing
   - GDPR compliance check

4. **Client Training**
   - Walk through adding a dummy Book 3
   - Record screen video
   - Provide written guide

---

## 📊 Success Metrics

**For Client:**
- ✅ Can add a new book in under 30 minutes
- ✅ No need to call developer for new books
- ✅ All books maintain consistent brand
- ✅ Each book has dedicated SEO-optimized page

**For Business:**
- ✅ Each book has own Amazon funnel
- ✅ Lead magnets segment audience by book interest
- ✅ Homepage showcases brand as growing series
- ✅ Can run targeted ads to specific book pages

---

## 🤔 Questions for Client (Before Starting)

1. **Book 2 Content:**
   - What's the title and topic of Book 2?
   - Do you have all content ready? (cover, benefits, testimonials, FAQs)
   - Is it already published on Amazon?

2. **Lead Magnet Strategy:**
   - Do you want one bonus for all books, or separate bonuses per book?
   - Do you already have sample pages for Book 2 bonus?

3. **Homepage Vision:**
   - Any specific imagery/illustrations you want on the new homepage?
   - Do you want to include info about yourself (author bio)?

4. **Future Books:**
   - How many more books are you planning? (helps us plan scalability)
   - Will they all be same age range, or expand to other ages?

---

## ⏱️ Estimated Timeline

**Phase 1: Design & Prototype** (3-5 days)
- Day 1: Design new homepage (HTML prototype)
- Day 2: Refine book landing page template (HTML prototype)
- Day 3-4: Client review and iterations
- Day 5: Final approval

**Phase 2: WordPress Development** (5-7 days)
- Day 1-2: Convert homepage to WordPress
- Day 3-4: Build book landing page template + Customizer
- Day 5: Migrate Book 1 content
- Day 6: Add Book 2 content (client provides)
- Day 7: Testing and bug fixes

**Phase 3: Training & Launch** (2-3 days)
- Day 1: Create "How to Add a Book" guide
- Day 2: Client training session (Zoom)
- Day 3: Final QA and launch

**Total: ~10-15 days** (depending on content availability and iterations)

---

## 💰 Pricing Consideration

**New Scope vs Original Project:**
- Original: Single book landing page
- New: Multi-book hub + scalable template system + training

**Additional Work Includes:**
- Homepage redesign (new page, not just edit)
- Book template system with Customizer
- Migration of existing book to new structure
- Setup of Book 2
- Client training and documentation

**Recommendation:**
- Treat this as "Phase 2" or "Expansion Project"
- Price appropriately for the additional complexity and value delivered
- Consider offering ongoing support package for future books

---

## ✅ Next Steps

1. **Get client content for Book 2:**
   - Title, subtitle, cover image
   - Benefits, features, testimonials, FAQs
   - Amazon URL, Wild Mail strategy

2. **Get client approval on architecture:**
   - Show this plan
   - Confirm homepage approach
   - Confirm lead magnet strategy (site-wide vs per-book)

3. **Start HTML prototype:**
   - Build new homepage design
   - Build refined book landing page template
   - Get visual approval before WordPress work

4. **Development kickoff** (after approvals)

---

**End of Plan**
*This document will be updated as we progress through implementation.*
