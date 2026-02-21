document.addEventListener("DOMContentLoaded", () => {
  // Ano no footer (se existir #year)
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Header muda ao rolar
  const header = document.querySelector(".header");
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 10);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal premium
  const items = document.querySelectorAll(".reveal");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.18 });

  items.forEach(el => obs.observe(el));
});