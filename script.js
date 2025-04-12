const toggle = document.getElementById("darkToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const words = ["Frontend Developer", "Web Enthusiast", "Open Source Contributor"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.getElementById("typedText").textContent = currentWord.slice(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(typeEffect, 300);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}
typeEffect();
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
  
    const options = {
      threshold: 0.5 // Trigger when 50% of element is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add respective animation class
          entry.target.classList.add(entry.target.dataset.animation);
          observer.unobserve(entry.target);
        }
      });
    }, options);
  
    // Observe each section
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  