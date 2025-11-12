# How to Add Your Own Project Screenshots

## Quick Steps:

### 1. Take a Screenshot
Go to https://gonzalomorales.net and take a screenshot:

**Option A - Mac:**
- Press `Cmd + Shift + 4`
- Drag to select the area
- Screenshot saved to Desktop

**Option B - Any Browser:**
- Open gonzalomorales.net
- Press F12 (open DevTools)
- Press `Cmd + Shift + M` (Mac) or `Ctrl + Shift + M` (Windows) - Toggle device toolbar
- Click the screenshot button in the toolbar
- Or: Right-click on page → "Capture screenshot"

### 2. Save the Screenshot
- Name it: `gonzalo-morales.jpg`
- Place it in: `impulsa-digital/public/images/projects/gonzalo-morales.jpg`

### 3. Update the Code
Open `components/Projects.tsx` and change line 9 from:
```javascript
image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&h=400&fit=crop",
```

To:
```javascript
image: "/images/projects/gonzalo-morales.jpg",
```

### 4. Done!
Refresh your browser and you'll see your real screenshot!

---

## Tips for Best Results:
- Take screenshot at full screen width (1920px or wider)
- Make sure the site is fully loaded before capturing
- Recommended size: 1200x800px minimum
- JPG or PNG format both work
