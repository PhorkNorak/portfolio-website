document.addEventListener("DOMContentLoaded", () => {
  const fadeInSections = document.querySelectorAll(".fade-in-section");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeInSections.forEach((section) => {
    observer.observe(section);
  });

  const progressBars = document.querySelectorAll(".progress-bar .skill-fill");

  function animateProgressBars() {
    progressBars.forEach((bar) => {
      const width = bar.parentElement.getAttribute("data-width");
      bar.style.width = width;
    });
  }

  // Animate progress bars on initial load
  animateProgressBars();
});
