# LOTUS Website

Single-page company profile for **LOTUS — Brokerage & Deal Facilitation**.

Plain HTML / CSS / JS — no build step, no dependencies, no bundler.

---

## Running locally

```bash
# Option 1 — any static server (recommended)
npx serve .
# then open http://localhost:3000

# Option 2 — Python (if installed)
python -m http.server 8080
# then open http://localhost:8080

# Option 3 — just open the file directly
# Double-click index.html  (fonts load from Google Fonts CDN; needs internet)
```

---

## Swapping in real images

All images carry a `<!-- PLACEHOLDER -->` comment directly above them in `index.html`.

| Section | Element | Recommended size |
|---|---|---|
| Hero | `<img class="hero-img">` | 900 × 700 px, landscape |
| Who we are | `<img class="who-img">` | 700 × 540 px, landscape |
| Founder quote | `<img class="quote-img">` | 520 × 620 px, portrait |
| Team — Founder 1 | `<img class="team-photo">` (first card) | 480 × 600 px, portrait |
| Team — Founder 2 | `<img class="team-photo">` (second card) | 480 × 600 px, portrait |

Replace the `src="https://images.unsplash.com/..."` URLs with local file paths (e.g. `src="images/hero.jpg"`). Create an `images/` folder next to `index.html`.

### Signature

The founder signature is currently rendered in Dancing Script (CSS font). To use a real handwritten signature:

1. Scan or photograph the signature on white paper, crop tightly.
2. Save as a transparent PNG (e.g. `images/signature-founder1.png`).
3. In `index.html`, uncomment the `<img class="signature-img">` line and remove the `<span class="signature-text">` element.
4. Add to `style.css`:
   ```css
   .signature-img { height: 40px; width: auto; }
   ```

---

## Finding and replacing placeholders

Every placeholder is marked with `[PLACEHOLDER]` or `[...]` in the source. Run a search in your editor:

```
Search term:  [PLACEHOLDER]
Also search:  [Founder
Also search:  [email
Also search:  [₹
Also search:  [X]
Also search:  [YEAR]
```

### Checklist

- [ ] `[Founder 1 Name]` — full name (appears in quote, team card)
- [ ] `[Founder 1 area of expertise]` — e.g. "Government Procurement"
- [ ] `[Founder 2 Name]` — full name (team card)
- [ ] `[Founder 2 area of expertise]` — e.g. "Private Sector & Business Transfers"
- [ ] `[First Name]` — founder's first name for the script signature
- [ ] `[X]+` deals facilitated — actual figure
- [ ] `[₹X Cr]` total deal value — actual figure
- [ ] `[X]+` sectors covered — actual figure
- [ ] `[email@lotus.in]` — actual email address
- [ ] `[+91 XXXXX XXXXX]` and `91[XXXXXXXXXX]` in the WhatsApp link — actual number
- [ ] `[YEAR]` — current year in footer
- [ ] All 5 image `src` attributes

---

## Wiring up the contact form

Replace the `action="#"` on `<form class="contact-form">` with your endpoint:

**Formspree (easiest):**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="post">
```

**EmailJS:** See `script.js` — the `form.addEventListener('submit', ...)` block is the place to add `emailjs.sendForm(...)`.

---

## Design tokens (style.css)

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#EBF0F2` | Page background |
| `--bg-alt` | `#E2E9EC` | Alternate section panels |
| `--text-primary` | `#111214` | Headlines, names |
| `--text-secondary` | `#6B7280` | Body copy, labels |
| `--text-tertiary` | `#9CA3AF` | Step numbers, fine print |
| `--accent` | `#2C3E50` | Buttons, WhatsApp link (used sparingly) |
| `--hairline` | `#C8D3D8` | Dividers, borders |
| `--radius-img` | `18px` | All image corner radii |

---

## File structure

```
lotus-website/
├── index.html   ← all markup, all placeholders
├── style.css    ← all styles, design tokens, responsive breakpoints
├── script.js    ← mobile nav, scroll-fade, form validation
├── README.md    ← this file
└── images/      ← (create this folder, add your photos here)
```
