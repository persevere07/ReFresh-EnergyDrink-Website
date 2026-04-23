# Re-Fresh – Front-End E‑Commerce Demo

A fast, modern, **front-end–only** e-commerce style landing page for the Re-Fresh energy drink.  
Built with **HTML, CSS, and vanilla JavaScript** so you can deploy quickly (e.g. to Vercel) with **no backend required**.

> This is presentation-only: cart + checkout are demo UX. You can later wire this into Stripe, Shopify, or a custom API.

---

## Structure

- `index.html` – main single-page app layout (hero, features, flavors/store, cart, science, reviews, FAQ, CTA).
- `styles.css` – modern dark UI with neon accent styling.
- `script.js` – smooth scroll, cart state in memory, and a mailto-based "checkout" demo.

Open `index.html` directly in a browser to preview.

---

## Run locally

You can simply open the file, or (recommended) serve it with a local static server:

```bash
cd prvrwebsite
# If you have Python installed:
python -m http.server 4173
```

Then visit `http://localhost:4173` in your browser.

---

## Deploy to Vercel

1. **Push to GitHub**
   - Create a new repo and push this folder (with `index.html` at the root).
2. **Create a new Vercel project**
   - In the Vercel dashboard: **New Project → Import** your repo.
   - Vercel will auto-detect this as a static site (no build step needed).
   - Root directory: the repo root (where `index.html` lives).
3. **Deploy**
   - Click **Deploy** – you’ll get a live URL in ~30 seconds.

You can later replace the mailto-based checkout in `script.js` with:

- A real Stripe Checkout link,
- A Shopify product/checkout link,
- Or any headless commerce API.

---

## Customizing Quickly

- **Branding/text:** Edit copy directly in `index.html` (look for section IDs like `hero`, `product`, `flavors`, `science`, `reviews`, `faq`).
- **Colors:** Tweak CSS variables at the top of `styles.css` (e.g. `--accent`, `--bg`).
- **Products/prices:** Update product cards and `data-product-price` attributes in `index.html`.
- **Checkout behavior:** Adjust the `initCheckout()` function in `script.js`.


