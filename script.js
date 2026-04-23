// Navigation helpers for multi-page setup
function goToFlavors() {
  window.location.href = "flavors.html";
}

function goToScience() {
  window.location.href = "science.html";
}

// Cart state (front-end demo only, persisted in localStorage)
const CART_KEY = "refresh-cart";
const cartState = {
  items: [],
};

function loadCart() {
  try {
    const raw = window.localStorage.getItem(CART_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.items)) {
      cartState.items = parsed.items.map((item) => ({
        name: String(item.name || ""),
        price: Number(item.price || 0),
        quantity: Math.max(1, parseInt(item.quantity || 1, 10)),
      }));
    }
  } catch {
    // ignore parse errors
  }
}

function saveCart() {
  try {
    window.localStorage.setItem(
      CART_KEY,
      JSON.stringify({ items: cartState.items })
    );
  } catch {
    // ignore storage errors
  }
}

function formatPrice(value) {
  return `$${value.toFixed(2)}`;
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("toast--visible");
  window.clearTimeout(toast._timeout);
  toast._timeout = window.setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 2200);
}

function renderCart() {
  const cartItemsEl = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("cartSubtotal");
  if (!cartItemsEl || !subtotalEl) return;

  cartItemsEl.innerHTML = "";

  if (cartState.items.length === 0) {
    const p = document.createElement("p");
    p.className = "cart__empty";
    p.textContent = "Your cart is empty. Add a pack to get started.";
    cartItemsEl.appendChild(p);
    subtotalEl.textContent = "$0.00";
    return;
  }

  let subtotal = 0;

  cartState.items.forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "cart__item";

    const main = document.createElement("div");
    main.className = "cart__item-main";

    const name = document.createElement("span");
    name.className = "cart__item-name";
    name.textContent = item.name;

    const meta = document.createElement("span");
    meta.className = "cart__item-meta";
    meta.textContent = `${item.quantity} × ${formatPrice(item.price)}`;

    main.appendChild(name);
    main.appendChild(meta);

    const right = document.createElement("div");
    right.style.textAlign = "right";

    const lineTotal = document.createElement("span");
    lineTotal.className = "cart__item-meta";
    const totalForItem = item.quantity * item.price;
    lineTotal.textContent = formatPrice(totalForItem);

    const removeBtn = document.createElement("button");
    removeBtn.className = "cart__item-remove";
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      cartState.items.splice(index, 1);
      saveCart();
      renderCart();
    });

    right.appendChild(lineTotal);
    right.appendChild(removeBtn);

    row.appendChild(main);
    row.appendChild(right);
    cartItemsEl.appendChild(row);

    subtotal += totalForItem;
  });

  subtotalEl.textContent = formatPrice(subtotal);
}

function initQuantities() {
  document.querySelectorAll(".product-card").forEach((card) => {
    const input = card.querySelector(".quantity input");
    const decBtn = card.querySelector('.quantity__btn[data-action="decrement"]');
    const incBtn = card.querySelector('.quantity__btn[data-action="increment"]');

    if (!input || !decBtn || !incBtn) return;

    decBtn.addEventListener("click", () => {
      const current = parseInt(input.value || "1", 10);
      const next = Math.max(1, current - 1);
      input.value = String(next);
    });

    incBtn.addEventListener("click", () => {
      const current = parseInt(input.value || "1", 10);
      input.value = String(current + 1);
    });
  });
}

function initAddToCart() {
  document.querySelectorAll(".product-card__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".product-card");
      if (!card) return;

      const name = btn.dataset.productName || "Re-Fresh Pack";
      const price = Number(btn.dataset.productPrice || "0");
      const quantityInput = card.querySelector(".quantity input");
      const quantity = Math.max(
        1,
        parseInt(quantityInput && quantityInput.value ? quantityInput.value : "1", 10)
      );

      const existing = cartState.items.find((item) => item.name === name);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cartState.items.push({ name, price, quantity });
      }

      saveCart();
      renderCart();
      showToast("Added to cart");
    });
  });
}

function initCheckout() {
  const btn = document.getElementById("checkoutBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    if (cartState.items.length === 0) {
      showToast("Add something to your cart first");
      return;
    }

    // For this front-end demo, we just open a pre-filled email.
    const subject = encodeURIComponent("Re-Fresh Order Inquiry");
    const lines = cartState.items.map(
      (item) => `- ${item.quantity} × ${item.name} @ ${formatPrice(item.price)}`
    );
    const body = encodeURIComponent(
      `Hi Re-Fresh team,\n\nI'd like to place an order for:\n\n${lines.join(
        "\n"
      )}\n\nPlease reply with payment and shipping details.\n\nName:\nShipping Address:\n\nThanks!`
    );

    window.location.href = `mailto:hello@refresh-energy.demo?subject=${subject}&body=${body}`;
  });
}

function initNav() {
  const toggle = document.getElementById("navToggle");
  const links = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("nav__links--open");
  });

  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("nav__links--open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadCart();
  initQuantities();
  initAddToCart();
  initCheckout();
  initNav();
  renderCart();
});


