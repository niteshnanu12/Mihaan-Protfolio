# Mihaan — Kids Editorial Model Portfolio

Explore the live portfolio: **[https://mihaan.vercel.app](https://mihaan.vercel.app)**

A premium, luxury, responsive portfolio website designed for casting agencies, fashion brands, and photographers. Built with a sophisticated editorial magazine aesthetic reminiscent of Vogue or Harper's Bazaar.

---

## 🌟 Key Features

- **Cinematic Preloader:** A timed typographic intro animation that reveals the model's name with refined letter spacing and a line draw effect. Optimized with `sessionStorage` to prevent repeating on refresh.
- **Asymmetric Grid Layouts:** Clean, responsive 3-column headshot grids in the "Portraits" section designed to completely eliminate empty visual cells.
- **Masonry Candid Section:** A beautifully balanced masonry layout in "Personality Frames" combining portrait photos with sand-toned editorial typography cards.
- **Responsive & Optimised:**
  - Standardized `3/4` portrait aspect ratios with CSS image cropping to ensure faces are always correctly centered.
  - Custom media queries for tablets (2 columns) and mobile devices (1 column).
  - Uses native vanilla technologies (HTML5, CSS3, and modern JS) with zero external script dependencies.
  - High-performance IntersectionObserver scroll reveals.

---

## 🛠️ Tech Stack & Structure

- **Core:** Single-file static HTML structure ([`index.html`](index.html)) referencing high-quality assets inside [`public/images/`](public/images/).
- **Styling:** Premium Vanilla CSS containing tailored custom colors, responsive layouts, and animations.
- **Hosting:** Configured and deployed to **Vercel** with custom overrides in [`vercel.json`](vercel.json) to bypass Next.js compilation and host the static files directly.

---

## 🚀 Running Locally

You can preview the website locally using any static files server:

```bash
# Start a static files server in the root directory
npx serve
```

Once running, open [http://localhost:3000](http://localhost:3000) in your browser.
