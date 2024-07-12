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

  document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");
    circles.forEach((circle) => {
      const percent = circle.getAttribute("data-percent");
      circle.style.background = `conic-gradient(#000 0% ${percent}%, #f1f1f1 ${percent}% 100%)`;
    });
  });
});
