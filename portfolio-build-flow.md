# Portfolio Build Flow
*lai.codes — Full Plan*

---

## Overview

Two-mode portfolio site with a dynamic CV generator, built on React + Vite, deployed to GitHub Pages via name.com domain.

**Modes:**
- **Ultimate** — Full 3D immersive experience (React Three Fiber, GSAP scroll camera, video planes)
- **Light** — Framer Motion only, cream/parchment soft luxury aesthetic, fast on any device

**CV Generator** — 7 tailored variants, preview + download in 5 formats

---

## Tech Stack

### Core
- **Vite + React** — scaffold and dev server
- **Tailwind CSS** — utility styling
- **Framer Motion** — page transitions, scroll reveals (both modes)

### Light Mode Only
- **21st.dev components** — premium pre-built UI
- **ReactBits** — animated components
- **Lenis** — smooth scroll

### Ultimate Mode Only
- **React Three Fiber (R3F)** — Three.js in React
- **@react-three/drei** — Float, useGLTF, VideoTexture, Text3D, MeshTransmissionMaterial
- **@react-three/postprocessing** — Bloom, ChromaticAberration, DepthOfField
- **GSAP + ScrollTrigger** — camera path animation on scroll
- **Theater.js** — visual keyframe editor for section transitions

### CV Generator
- **@react-pdf/renderer** — PDF generation client-side
- **docx** — Word doc generation client-side
- **file-saver** — triggers downloads
- **EmailJS** — email sending, no backend needed

### Deployment
- **gh-pages** npm package
- **name.com** DNS → GitHub Pages via CNAME

---

## Design System (Light Mode)

### Palette
```
--cream:      #F7F3ED   (primary background)
--cream-2:    #EDE8DF   (alternate sections)
--white:      #FDFCFA   (cards, modal)
--ink:        #1A1714   (headlines)
--ink-2:      #3D3830   (body text)
--ink-3:      #7A7268   (muted / labels)
--terra:      #B8613E   (primary accent)
--terra-light:#D4825F   (hover states)
--terra-pale: #F0E0D8   (backgrounds)
```

### Typography
```
Display: Cormorant (serif, editorial warmth)
Body:    Figtree (thin sans, Apple-adjacent)
```

### Layout Principles
- No borders — whitespace separates everything
- Floating elements that overlap section boundaries
- Full-bleed linen texture sections
- Side section numbers in margin (01 — About)
- Masonry project grid
- Balanced whitespace — spacious but not empty

### Interactions
- Magnetic buttons (cursor pull ~80px radius)
- Page-turn wipe on nav clicks (Framer Motion)
- Hover on project cards → full terracotta overlay slides up
- Image zoom-in on scroll reveal
- Nav hides on scroll down, reappears on scroll up
- Right-edge terracotta progress line
- Paper grain texture overlay (CSS canvas)
- Living particle canvas in hero (barely moves, just breathes)
- Hero name character-by-character reveal on load
- No scrollbar

---

## Site Structure

```
Hero          — Name split layout, tagline cuts through middle, 2 magnetic CTAs
Marquee       — Terracotta strip, tech stack scrolling
About         — Full-bleed linen texture, personal tone, floating stat card
Projects      — Masonry grid, hover reveal with project details
Skills        — Two-column, intro text sticky left, skill groups right
CV Generator  — 7 variant selector list, preview modal, export bar
Contact       — Underline form fields, link list right column
Footer        — Minimal, dark background
```

---

## Project File Structure

```
lai-portfolio/
├── public/
│   └── CNAME                        ← your domain for GitHub Pages
├── src/
│   ├── components/
│   │   ├── mode/
│   │   │   └── ModeSelector.jsx     ← Ultimate vs Light landing screen
│   │   ├── shared/
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Marquee.jsx
│   │   ├── light/
│   │   │   ├── HeroLight.jsx        ← char reveal + particle canvas + magnetic btns
│   │   │   ├── AboutLight.jsx       ← full-bleed linen + floating overlap card
│   │   │   ├── ProjectsLight.jsx    ← masonry + hover reveal
│   │   │   ├── SkillsLight.jsx      ← two-column skill groups
│   │   │   ├── CVLight.jsx          ← variant picker list
│   │   │   └── ContactLight.jsx     ← underline form + links
│   │   ├── ultimate/
│   │   │   ├── HeroWorld.jsx        ← R3F scene, mixed geometry
│   │   │   ├── CameraRig.jsx        ← GSAP scroll-driven camera path
│   │   │   ├── ProjectPlanes.jsx    ← video texture planes cluster
│   │   │   ├── SkillCrystal.jsx     ← revolving MeshTransmissionMaterial geometry
│   │   │   └── WormholeTransition.jsx
│   │   └── cv/
│   │       ├── CVTemplate.jsx       ← single source of truth component
│   │       ├── CVPreviewModal.jsx   ← preview + export bar
│   │       ├── renderers/
│   │       │   ├── PDFRenderer.jsx
│   │       │   ├── DocxRenderer.js
│   │       │   └── TxtRenderer.js
│   │       └── variants/
│   │           ├── aiml.js
│   │           ├── swe.js
│   │           ├── pm.js
│   │           ├── robotics.js
│   │           ├── bd.js
│   │           ├── climbing.js
│   │           └── frontend.js
│   ├── hooks/
│   │   ├── useMode.js               ← reads/writes sessionStorage
│   │   ├── useMagneticButton.js     ← cursor pull logic
│   │   ├── useCursorPosition.js     ← global cursor tracking
│   │   └── usePageTurn.js           ← Framer Motion page wipe
│   ├── styles/
│   │   └── tokens.css               ← all CSS variables
│   ├── App.jsx                      ← renders Ultimate or Light based on mode
│   └── main.jsx
├── vite.config.js
├── tailwind.config.js
└── package.json
```

---

## CV Generator

### 7 Variants
| Key | Title |
|---|---|
| `aiml` | AI / ML Engineer |
| `swe` | Software Engineer |
| `pm` | Product Manager |
| `robotics` | Robotics / Embedded |
| `bd` | Business Development |
| `climbing` | Sport Climbing Coach |
| `frontend` | Frontend Designer |

### What changes per variant
- Headline / title line
- 2–3 line summary paragraph
- Projects shown + order
- Skills highlighted
- Certifications shown

### Export Formats
| Format | Library |
|---|---|
| PDF | `@react-pdf/renderer` (client-side) |
| Word (.docx) | `docx` + `file-saver` |
| Plain text (.txt) | template literal + `file-saver` |
| Markdown (.md) | template literal + `file-saver` |
| Email | EmailJS (free tier, no backend) |
| Shareable link | `?cv=aiml` URL param, no database |

---

## Ultimate Mode — 3D Plan

### Experience Map
| Section | 3D Treatment |
|---|---|
| Hero | Mixed geometry world — procedural crystals, sci-fi panels, organic rocks. Cursor moves camera. Scroll flies you through and out via wormhole. |
| About | Single complex object slowly revolves. 2.5D planes with parallax depth float around it. |
| Projects | Video planes angled in 3D space, each playing project footage. Camera orbits cluster. Click plane to zoom in. |
| Skills | Crystal cluster — each facet = skill category. Camera revolves. Labels emerge from faces. |
| Contact | One ambient geometric form. Minimal. |

### 3D Asset Sources (all free)
- **poly.pizza** — astronaut, low-poly objects, web-optimised GLB
- **Sketchfab** — filter by free + downloadable, search "crystal", "sci-fi", "carabiner"
- **Quaternius** — free stylized nature packs
- **Kenney.nl** — sci-fi asset packs
- **Procedural in R3F** — `MeshTransmissionMaterial` from drei makes any geometry look like glass/crystal with zero assets

### Camera Path
```js
// CatmullRomCurve3 defines the path through the hero world
// GSAP ScrollTrigger moves progress 0→1 along the curve
// Camera position + lookAt update every frame
const curve = new THREE.CatmullRomCurve3([...points])
gsap.to(progress, { value: 1, scrollTrigger: { scrub: true } })
```

### Video Planes
```jsx
const videoTexture = useVideoTexture('/videos/project1.mp4')
<mesh rotation={[0, 0.3, 0]}>
  <planeGeometry args={[16, 9]} />
  <meshStandardMaterial map={videoTexture} />
</mesh>
```

### Performance Strategy
- `PerformanceMonitor` from drei — auto-reduces pixel ratio on FPS drop
- Lazy mount R3F canvas only when section enters viewport
- Videos: `playsInline muted autoPlay loop`, only play when visible
- GLB compression with `gltf-pipeline` before deploy (70–80% size reduction)
- Mobile fallback — device detection serves Light mode automatically

---

## Build Sprints

| Sprint | Deliverable |
|---|---|
| 1 | Vite + React + Tailwind scaffold. Deploy blank page to GitHub Pages. Confirm domain works. |
| 2 | Mode selector screen (Ultimate / Light, session persisted). |
| 3 | Light mode complete — all sections, fully polished, mobile ready. |
| 4 | CV generator — all 7 variants, preview modal, all 5 export formats. |
| 5 | Ultimate: Hero World geometry, lighting, postprocessing bloom. |
| 6 | Camera path on scroll + wormhole transition out of hero. |
| 7 | Video planes for projects section. |
| 8 | Revolving crystal for skills section. |
| 9 | Performance optimisation pass — compression, lazy loading, mobile fallback. |
| 10 | Final polish — both modes, accessibility, deploy. |

> Site is shippable and impressive after Sprint 4. Ultimate mode is additive on top of something already live.

---

## Deployment

### GitHub Pages
```bash
# vite.config.js
export default { base: '/' }

# package.json scripts
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### name.com DNS
```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
CNAME www yourusername.github.io
```

### CNAME file
```
# /public/CNAME
lai.codes
```

---

## Key Libraries — Install Reference

```bash
# Core
npm install framer-motion lenis

# Light mode UI
npm install @21st-dev/ui react-bits

# Ultimate 3D
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing gsap @theatre/core @theatre/r3f

# CV Generator
npm install @react-pdf/renderer docx file-saver @emailjs/browser

# Deploy
npm install --save-dev gh-pages
```

---

*Start with Sprint 1 — get the domain live first before touching any features.*
