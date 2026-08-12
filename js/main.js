// ============================================================
// Jobsy Johnson — portfolio JS
// Nav toggle, scrolled-nav background, scroll-reveal animations
// ============================================================

// Flag JS as active immediately — the reveal-on-scroll CSS is scoped
// to this class, so content stays visible by default if this script
// is ever blocked, slow, or errors out.
document.documentElement.classList.add("js-ready");

document.addEventListener("DOMContentLoaded", () => {

  // ---- Scrolled nav background ----
  const navWrap = document.getElementById("navWrap");
  const menuButton = document.getElementById("menuButton");
  const navLinks = document.getElementById("navLinks");

  window.addEventListener("scroll", () => {
    navWrap.classList.toggle("scrolled", window.scrollY > 30);
  });

  // ---- Mobile menu toggle ----
  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });

  // ---- Scroll-reveal ----
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
});
