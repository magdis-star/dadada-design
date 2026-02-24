# Elemental Kids Club - HTML Prototype

**Created:** January 21, 2026
**Purpose:** Visual prototype for client approval before WordPress development

---

## 📁 What's Inside

This prototype demonstrates the new **multi-book hub architecture** for Elemental Kids Club:

### Files:
- **`index.html`** - New homepage (Book Series Hub)
- **`libro-1.html`** - Individual book landing page template (Book 1: Naturaleza y Experimentos)
- **`libro-2.html`** - Placeholder for Book 2 (to be customized with client content)

---

## 🎯 Purpose

This prototype shows the client:

1. **New Homepage Structure:**
   - Brand hero section
   - "About the Series" section
   - Books showcase grid (scalable for multiple books)
   - Site-wide lead magnet
   - Social proof testimonials

2. **Individual Book Page Template:**
   - Dedicated landing page per book
   - Hero with book cover and Amazon CTA
   - Benefits section ("Why This Book?")
   - "What's Inside" features
   - Testimonials specific to the book
   - FAQ accordion
   - Book-specific lead magnet (sample download)
   - Final CTA to Amazon

---

## 🚀 How to View

### Option 1: Open Locally
1. Open any `.html` file in your browser
2. Navigate between pages using the menu

### Option 2: Deploy to Vercel (Recommended for Client Preview)

```bash
# From the elemental-prototype directory
npx vercel --prod

# Or add to main project and deploy
```

Client can then view the prototype online and click through all pages on desktop, tablet, and mobile.

---

## 🎨 Design System

### Brand Colors (from existing site):
- **Yellow:** `#FAD02E` (brand-yellow)
- **Pink:** `#F43F5E` (brand-pink)
- **Blue:** `#3B82F6` (brand-blue)

### Typography:
- **Headings:** Bangers (playful, energetic)
- **Body:** Inter (clean, legible)

### Key Components:
- Rounded corners (2xl, 3xl)
- Vibrant gradients
- Shadow effects (lg, xl, 2xl)
- Responsive grid layouts
- Interactive FAQ accordions
- Hover effects on cards

---

## 📱 Responsive Design

All pages are fully responsive:
- **Mobile:** Single column, stacked sections
- **Tablet:** 2-column grids
- **Desktop:** 3-column grids, full navigation

---

## 🔄 What Happens Next

### After Client Approval:

1. **Get Book 2 Content:**
   - Title, subtitle, cover image
   - Benefits (4-6 key learning points)
   - Features ("What's Inside")
   - Testimonials (3 quotes from parents)
   - FAQs (5-7 questions)
   - Amazon URL
   - Wild Mail form URLs

2. **Convert to WordPress:**
   - Create custom page template `template-book-landing.php`
   - Set up WordPress Customizer fields
   - Build homepage as `front-page.php`
   - Migrate Book 1 content
   - Add Book 2 content

3. **Client Training:**
   - Create guide: "How to Add a New Book"
   - Walk through adding a book using the template

---

## 📝 Content Placeholders

### Homepage:
- ✅ Hero section (complete)
- ✅ About section (complete)
- ✅ Books grid (Book 1 complete, Book 2 needs content)
- ✅ Lead magnet form (ready for Wild Mail integration)
- ✅ Testimonials (generic, can be customized)

### Book 1 Page:
- ✅ All sections complete with example content
- 🔄 Needs real book cover image
- 🔄 Needs real sample page images
- ✅ Structure is final

### Book 2 Page:
- ⏳ Waiting for client content
- ✅ Template structure ready to duplicate from Book 1

---

## 🎯 Client Questions to Answer

Before finalizing, client needs to provide:

1. **Book 2 Details:**
   - What's the title and theme?
   - What age range? (keeping 5-8 or different?)
   - What topics does it cover?
   - What activities does it include?

2. **Lead Magnet Strategy:**
   - Site-wide bonus (one for all books)?
   - OR book-specific bonuses (separate sample per book)?

3. **Homepage:**
   - Any specific hero image or illustration preference?
   - Include author bio section?

4. **Images:**
   - Book cover images (high-res)
   - Sample page images for "What's Inside"

---

## ✨ Features Demonstrated

### Navigation:
- ✅ Sticky header
- ✅ Dropdown menu for books
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling

### Homepage:
- ✅ Gradient hero with CTAs
- ✅ Feature icons
- ✅ Scalable books grid (3 cards: Book 1, Book 2, Coming Soon)
- ✅ Lead magnet form
- ✅ Social proof testimonials

### Book Pages:
- ✅ Breadcrumb navigation
- ✅ Book hero with cover + Amazon CTA
- ✅ Benefits grid (6 cards)
- ✅ Features list with icons
- ✅ Testimonials (3 cards)
- ✅ FAQ accordion (5 questions)
- ✅ Lead magnet form (book-specific)
- ✅ Final conversion CTA

### Interactions:
- ✅ FAQ accordion (click to expand)
- ✅ Hover effects on cards
- ✅ Mobile menu toggle
- ✅ Dropdown menu on desktop

---

## 🔧 Technical Details

- **Framework:** Pure HTML + Tailwind CSS CDN
- **Fonts:** Google Fonts (Bangers, Inter)
- **Icons:** Unicode emojis (can be replaced with SVG icons later)
- **Forms:** Static HTML (will integrate with Wild Mail in WordPress)
- **No dependencies:** Just open in browser

---

## 📞 Next Steps

1. **Share with client** for visual approval
2. **Gather Book 2 content** from client
3. **Get feedback** on design, colors, layout
4. **Iterate** if needed (easy to adjust HTML/Tailwind)
5. **Once approved:** Start WordPress conversion

---

## 💡 Notes

### Why This Structure Works:

- **Scalable:** Easy to add Book 3, 4, 5... just duplicate book card and page
- **SEO-Friendly:** Each book gets its own page = better ranking
- **Marketing:** Can run ads to specific book pages
- **Conversion-Focused:** Clear CTAs, social proof, lead magnets
- **Brand Building:** Homepage positions Elemental as a growing series, not just one book

### WordPress Advantage:

Once converted to WordPress with page templates:
- Client can duplicate book page template
- Fill in Customizer fields (no code)
- Publish new book in 20-30 minutes
- You don't need to help every time

---

**Ready to show the client!** 🎉
