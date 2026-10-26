
# Re-Fresh Energy Drink — Modern E-Commerce Landing Page

A fast, responsive, and modern **front-end-only e-commerce landing page** for Re-Fresh Energy Drink, built using **HTML, CSS, and vanilla JavaScript**.

The website features a sleek dark theme, neon accents, interactive product cards, a shopping cart, product information, customer reviews, and an FAQ section. It is designed for quick deployment on platforms such as Vercel without requiring a backend.

**Note:** This is a front-end demonstration project. Cart management and checkout are simulated for demonstration purposes. Payment processing and order management can be integrated later using Stripe, Shopify, or a custom API.

## Features

* **Modern UI:** Dark-themed interface with neon accents and responsive layouts.
* **Hero Section:** Eye-catching branding and prominent call-to-action buttons.
* **Product Showcase:** Display energy drink flavors, product details, and pricing.
* **Interactive Shopping Cart:** Add products, update quantities, and calculate totals.
* **Demo Checkout:** Email-based checkout flow using `mailto:`.
* **Product Science:** Dedicated section highlighting product ingredients and benefits.
* **Customer Reviews:** Showcase customer feedback and testimonials.
* **FAQ Section:** Answer common questions about the products.
* **Smooth Navigation:** Scroll smoothly between sections.
* **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
* **Lightweight Architecture:** No frameworks, backend, or build tools required.

## Tech Stack

* **HTML5** — Semantic page structure.
* **CSS3** — Responsive layouts, animations, and visual styling.
* **Vanilla JavaScript** — Cart functionality, interactive elements, and checkout demo.
* **Vercel** — Static website hosting.
* **Git & GitHub** — Version control and source code management.

## Project Structure

```text
prvrwebsite/
├── index.html    # Main landing page
├── styles.css    # Styling and responsive design
└── script.js     # Cart logic and UI interactions
```

## Run Locally

No installation or build process is required.

1. Clone your repository or download the project files.
2. Open the project directory in your terminal.
3. Start a local server:

```bash
cd prvrwebsite
python -m http.server 4173
```

4. Open the following URL in your browser:

```text
http://localhost:4173
```

Alternatively, open `index.html` directly in your browser.

## Deploy on Vercel

1. Push the project files to a GitHub repository.
2. Log in to [Vercel](https://vercel.com/).
3. Select **Add New → Project** and import your GitHub repository.
4. Set the root directory to the folder containing `index.html`.
5. Leave the build command empty if prompted, and configure the project as a static site.
6. Click **Deploy**.

Vercel will host the website and provide a public URL.

## Customization

* **Branding and content:** Edit the text, headings, and sections in `index.html`.
* **Colors and layout:** Modify the CSS variables and responsive styles in `styles.css`.
* **Products and prices:** Update product information and pricing in `index.html`.
* **Cart functionality:** Modify the cart state and event handlers in `script.js`.
* **Checkout integration:** Replace the demo checkout with Stripe Checkout, Shopify, or a custom commerce API.

## Future Enhancements

* Integrate a real payment gateway.
* Add backend APIs for products and orders.
* Persist cart data using local storage.
* Add product search and filtering.
* Introduce user authentication and order history.
* Configure automated deployments through GitHub and Vercel.

## Project Goal

Build a visually engaging, lightweight e-commerce experience that demonstrates front-end development skills, interactive JavaScript functionality, responsive design, and deployment using modern web hosting platforms.

---

**License:** Add a license file if you intend to distribute or reuse the project publicly.
