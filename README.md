# ⚡ Alex Chen — Frontend Developer Portfolio

A **premium, award-winning-style** personal portfolio built with React.js, React Router, Framer Motion, and Bootstrap. Designed around a "Neon Noir" aesthetic — deep blacks, electric cyan/teal accents, glassmorphism panels, and cinematic scroll animations.

---

## 🗂 Project Structure

```
portfolio/
├── public/
│   └── index.html               # HTML shell with dark theme default
├── src/
│   ├── index.js                 # React entry point
│   ├── App.jsx                  # Root — BrowserRouter, theme, layout
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Composes all sections (single-page route)
│   │   └── NotFound.jsx         # 404 page with animated fallback
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx       # Sticky nav, active-section tracking, mobile menu
│   │   │   └── Navbar.css
│   │   ├── Hero/
│   │   │   ├── Hero.jsx         # Name, typing animation, CTA buttons, avatar
│   │   │   └── Hero.css
│   │   ├── About/
│   │   │   ├── About.jsx        # Bio, tech tags, animated CountUp stats
│   │   │   └── About.css
│   │   ├── Skills/
│   │   │   ├── Skills.jsx       # Tabbed skill categories, animated progress bars
│   │   │   └── Skills.css
│   │   ├── Projects/
│   │   │   ├── Projects.jsx     # Featured + other project cards, code preview
│   │   │   └── Projects.css
│   │   ├── Experience/
│   │   │   ├── Experience.jsx   # Alternating timeline (work + education)
│   │   │   └── Experience.css
│   │   ├── Services/
│   │   │   ├── Services.jsx     # 6 service cards with icon + hover glow
│   │   │   └── Services.css
│   │   ├── Certifications/
│   │   │   ├── Certifications.jsx  # Achievement cards with color accents
│   │   │   └── Certifications.css
│   │   ├── Contact/
│   │   │   ├── Contact.jsx      # Form with validation, contact info, socials
│   │   │   └── Contact.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx       # Minimal footer with logo + socials
│   │   │   └── Footer.css
│   │   └── UI/
│   │       └── UIElements.jsx   # BackToTop button + CustomCursor components
│   │
│   ├── hooks/
│   │   └── usePortfolio.js      # useScrollProgress, useActiveSection, useTheme, useCustomCursor
│   │
│   ├── data/
│   │   └── portfolioData.js     # All content (bio, skills, projects, experience, etc.)
│   │
│   └── styles/
│       └── global.css           # CSS variables, theme tokens, base styles, utilities
│
└── package.json
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 **Neon Noir Design** | Dark-first with electric cyan `#00f5d4` + pink `#f72585` accents |
| 🌗 **Dark/Light Mode** | One-click toggle, persisted via `data-theme` attribute |
| 🖱️ **Custom Cursor** | Dot + trailing follower with smooth lerp animation |
| 📊 **Scroll Progress Bar** | Thin gradient bar at the top tracking page position |
| ✍️ **Typing Animation** | Role titles cycle with `react-type-animation` |
| 🔢 **CountUp Stats** | Animated numbers trigger on scroll into view |
| 📜 **Timeline Layout** | Alternating left/right experience & education cards |
| 🃏 **Glassmorphism Cards** | `backdrop-filter: blur` panels with border glow on hover |
| 🔝 **Back to Top** | Appears after 500px scroll, smooth-scrolls to top |
| 🗺️ **React Router v6** | `BrowserRouter` + `AnimatePresence` for page transitions |
| 📱 **Fully Responsive** | Mobile-first, Bootstrap grid + custom media queries |
| 🎭 **Framer Motion** | Scroll-reveal, staggered children, tab transitions, page transitions |

---


### Change the color palette
Edit `src/styles/global.css` — the `:root[data-theme="dark"]` block:
```css
:root[data-theme="dark"] {
  --accent: #00f5d4;      /* Primary: cyan/teal */
  --accent-2: #f72585;    /* Secondary: pink */
  --accent-3: #7209b7;    /* Tertiary: purple */
  --bg-primary: #030712;  /* Page background */
}
```

### Add a real photo
In `Hero.jsx`, replace the `<div className="avatar-placeholder">` block with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "inherit" }} />
```

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| `react-router-dom` v6 | Client-side routing, page transitions |
| `framer-motion` v10 | Scroll animations, hover effects, page transitions |
| `react-type-animation` | Cycling typewriter role text |
| `react-icons` | 1000+ SVG icons (Fi = Feather set) |
| `react-countup` | Animated number counters |
| `react-intersection-observer` | Trigger animations on scroll into view |
| `react-bootstrap` + `bootstrap` | Responsive grid system |

---


---

## 🔧 Router Structure

```
/           → Home (all portfolio sections)
/*          → 404 Not Found page
```

Navigation uses `react-scroll`-style smooth scrolling to section IDs — keeping the UX of a single-page portfolio while using React Router for proper URL management and potential future expansion (e.g. `/projects/:id` detail pages).

---

## 🎯 Design System

### Typography
- **Headings:** Syne (800 weight) — geometric, strong
- **Body:** DM Sans (300–500) — clean, readable  
- **Code/mono:** JetBrains Mono — developer aesthetic

### Spacing
- Section padding: `120px` vertical (80px mobile)
- Container max-width: `1200px`
- Card padding: `24–36px`

### Animation Principles
- Easing: `[0.22, 1, 0.36, 1]` — custom ease-out-expo feel
- Stagger delay: `0.08–0.12s` per child element
- Duration: `0.5–0.7s` for most transitions

---

*Built with ❤️ — designed to stand out, built to perform.*
