document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (!menuToggle || !mobileNav) return;

  const closeMenu = () => {
    menuToggle.classList.remove("open");
    mobileNav.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  };

  const openMenu = () => {
    menuToggle.classList.add("open");
    mobileNav.classList.add("open");

    menuToggle.setAttribute("aria-expanded", "true");
    mobileNav.setAttribute("aria-hidden", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.contains("open");

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu after selecting a page
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu with Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Close menu if user taps outside it
  document.addEventListener("click", (event) => {
    if (
      mobileNav.classList.contains("open") &&
      !mobileNav.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });
});
