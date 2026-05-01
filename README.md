# Mesfin Aragaw — Personal Portfolio

A modern, animated personal portfolio website built with React, Tailwind CSS, and Framer Motion.

---

## 🚀 Tech Stack

- **React 18** — UI framework
- **Vite** — build tool and dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **React Type Animation** — typing effect in hero
- **React Icons** — icon library
- **tsParticles** — animated particle background

---

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── m - Copy.jpg        # Profile photo (used in Hero)
│   ├── cs.jpg              # Second photo (used in About)
│   └── favicon.svg         # Browser tab icon (currently disabled)
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky top navigation + theme toggle
│   │   ├── Hero.jsx            # Home/landing section with profile photo
│   │   ├── About.jsx           # About me section
│   │   ├── Skills.jsx          # Skills with animated progress bars
│   │   ├── Projects.jsx        # Project cards with filter
│   │   ├── Experience.jsx      # Work experience & education timeline
│   │   ├── Services.jsx        # Services offered
│   │   ├── Contact.jsx         # Contact form + social links
│   │   ├── Footer.jsx          # Footer bar
│   │   ├── Loader.jsx          # Animated loading screen
│   │   ├── ScrollProgress.jsx  # Top scroll progress bar
│   │   ├── ParticlesBg.jsx     # Animated background particles
│   │   └── Cursor.jsx          # Custom cursor (disabled)
│   │
│   ├── data/
│   │   └── portfolioData.js    # ⭐ All content: name, email, projects, skills
│   │
│   ├── App.jsx                 # Root component, dark/light theme state
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles, dark/light mode overrides
│
├── index.html                  # HTML shell, page title
├── vite.config.js              # Vite config
├── tailwind.config.js          # Tailwind theme config
├── postcss.config.js           # PostCSS config
└── package.json                # Dependencies and scripts
```

---

## ✏️ How to Customize

### Change personal info (name, email, phone, location, social links)
Edit **`src/data/portfolioData.js`** — all content is centralized here.

### Change profile photo
Replace files in **`public/`** folder:
- `m - Copy.jpg` → used in the Hero (home page circle)
- `cs.jpg` → used in the About section card

### Change section layout or design
Edit the matching component in **`src/components/`**.

### Change colors or global styles
Edit **`src/index.css`** — dark and light mode styles are both defined here.

---

## ▶️ Running the Project

**Option 1 — Command Prompt (recommended on Windows)**
```cmd
cd portfolio
npm run dev
```

**Option 2 — Direct Vite command (if npm scripts are blocked)**
```
node_modules\.bin\vite.cmd
```

Then open **http://localhost:5173** in your browser.

---

## 🏗️ Build for Production

```cmd
npm run build
```

Output goes to the **`dist/`** folder. Deploy that folder to Netlify, Vercel, or any static host.

---

## 🌗 Dark / Light Mode

The theme toggle is in the top-right corner of the navbar. State is managed in `App.jsx` and applied via the `light-mode` class on `<html>`.

---

## 📬 Contact

- **Email:** mesfinaragaw36@gmail.com
- **Phone:** +251918401378
- **Location:** Addis Abeba, Ethiopia


Browser requests the site
        ↓
dist/index.html        ← loads the page shell
        ↓
dist/assets/index.js   ← runs all your React code
        ↓
dist/assets/index.css  ← applies all your styles
        ↓
public/m - Copy.jpg    ← loads your profile photo
public/cs.jpg          ← loads your about photo

