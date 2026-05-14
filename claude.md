# Benjamin Hallberg — Portfolio Website

Personal portfolio for Benjamin Hallberg, Technical Designer. Plain HTML/CSS/JS — no frameworks, no build tools, no package manager.

---

## File Structure

```
index.html              — Home page (hero, projects, commendations, contact, footer)
pages/about.html        — About page (bio, profile photo, contact links)
css/style.css           — All styles for both pages
js/main.js              — Navbar scroll behaviour, scroll-reveal, project card modal
assets/
  images/               — All images (card covers, avatars, backgrounds, logos)
  gifs/                 — Any animated assets
  BenjaminHallbergTechnicalDesigner_CV.pdf
```

---

## Tech

- **Fonts**: Barlow + Barlow Condensed via Google Fonts
- **No frameworks** — pure HTML5 / CSS3 / vanilla JS (ES5-compatible)
- **No build step** — open `index.html` directly in a browser to preview

---

## CSS Custom Properties

Defined at `:root` in `style.css`:

| Variable | Value | Use |
|---|---|---|
| `--bg` | `#110018` | Page background |
| `--bg-card` | `#2a0042` | Card/surface background |
| `--text` | `#fff` | Primary text |
| `--text-dim` | `rgba(255,255,255,0.60)` | Secondary text |
| `--text-muted` | `rgba(255,255,255,0.35)` | Tertiary / placeholder |
| `--border` | `rgba(255,255,255,0.10)` | Default border |
| `--border-hover` | `rgba(255,255,255,0.28)` | Hover border |
| `--accent` | `#e040fb` | Purple accent (links, CTAs) |
| `--nav-h` | `66px` | Navbar height |
| `--pad-x` | `clamp(1.5rem, 7vw, 8rem)` | Horizontal section padding |
| `--ease` | `cubic-bezier(0.16, 1, 0.3, 1)` | Standard easing |
| `--font-d` | `'Barlow Condensed'` | Display / heading font |
| `--font-b` | `'Barlow'` | Body font |

---

## Background System

Three background images; each is used in a specific section:

| Image | Section | CSS sizing |
|---|---|---|
| `Azimuth_verticalbg_top.png` | `.top-half-wrapper` | `center bottom / cover` |
| `Azimuth_verticalbg_bottom.png` | `.commendations-section` | `center top / cover` |
| `Azimuth_blockbg_feathered.png` | `.projects-section` | `center center / min(68%, 1175px) auto no-repeat` |

`.top-half-wrapper` wraps the navbar, hero, and projects section. `.commendations-section` sits below it with the second vertical background continuing the gradient.

---

## Project Cards

Row 1 (3 cards): Battlefield 6 · Crystal Dynamics · Project Wizard  
Row 2 (2 cards): Minecraft Legends DLC · Invincible: Doc Seismic Attacks

Each card is an `<a class="project-card reveal">` with:

- `data-description="..."` — paragraph shown in the modal
- `data-trailer="https://youtu.be/..."` — optional; shows "▶ Watch Trailer" link in modal when present (BF6, MC Legends, Invincible have trailers)

**Hover overlay** (`.card-overlay`): blue-indigo gradient (`#0e1045` → `#5018a8`), opacity 0 → 1 on hover. Contains `.card-company`, `.card-title`, `.card-roles`, and either `.card-tag` (text badge) or `.card-engine` (UE logo image, 58px).

---

## Modal / Lightbox

Clicking a card opens a full-screen modal. Structure in `index.html` (before `</body>`):

```html
<div class="modal-overlay" id="modalOverlay" ...>
  <div class="modal-panel" id="modalPanel">
    <button class="modal-close" id="modalClose">✕</button>
    <p   id="modalCompany">     <!-- card-company content -->
    <h2  id="modalTitle">       <!-- card-title content -->
    <p   id="modalRoles">       <!-- card-roles content -->
    <div id="modalBadge">       <!-- card-engine or card-tag cloned from overlay -->
    <div id="modalDivider">     <!-- hidden if no description -->
    <p   id="modalDescription"> <!-- data-description text -->
    <a   id="modalTrailer">     <!-- hidden if no data-trailer -->
  </div>
</div>
```

JS handles: open on card click, close on ✕ button / overlay click / Escape key. `body.modal-open` disables scroll.

Modal panel background: `rgba(36, 0, 58, 0.96)` (dark purple). Overlay background: `rgba(17, 0, 28, 0.82)` with `backdrop-filter: blur(6px)`.

---

## JS Behaviours (`js/main.js`)

1. **Navbar scroll** — adds `.scrolled` class to `#navbar` after 30px scroll
2. **Scroll reveal** — `IntersectionObserver` adds `.visible` to `.reveal` elements; stagger delays via `.reveal-d1` / `.reveal-d2` / `.reveal-d3` classes
3. **Project card modal** — reads card data, populates modal, handles open/close

---

## Commendations

Order: Oskar Pettersson → Matt Hoesterey → Tobias Lundin → Leo Alkberg.  
Avatars: `oskar.jpg`, `matt.jpg`, `tobias.jpg`, `leo.jpg`.

---

## About Page (`pages/about.html`)

- Profile photo: `assets/images/benji.jpg`
- CSS path: `../css/style.css`
- Image paths: `../assets/images/...`
- 4 bio paragraphs with `.reveal` stagger
- Contact: phone, email, LinkedIn

---

## Assets Reference

| File | Used for |
|---|---|
| `Battlefield_6_png.png` | BF6 card cover |
| `CDxHoHAlt_png.png` | Crystal Dynamics card cover |
| `wizard_png.png` | Project Wizard card cover |
| `MinecraftLegends.png` | Minecraft Legends card cover |
| `invincible.png` | Invincible card cover |
| `unreal.png` | Unreal Engine logo (baked text, 58px in card / 68px in modal) |
| `benji.jpg` | About page profile photo |
| `oskar.jpg` `matt.jpg` `tobias.jpg` `leo.jpg` | Commendation avatars |
| `Azimuth_*.png` | Section backgrounds (see Background System above) |

---

## Contact Info

- Phone: +46-73 399 55 23
- Email: benji.hallberg@gmail.com
- LinkedIn: https://www.linkedin.com/in/benjaminhallberg/
