// Dynamic Text (Typewriter) Animation
const phrases = ["Software Engineer", "ML Enthusiast", "Problem Solver", "Innovator"];
let phraseIndex = 0;
let charIndex = 0;
const typewriterElement = document.getElementById('typewriter-text');
const typingSpeed = 150; // ms per character
const delayBetweenPhrases = 2000; // ms to pause

function type() {
  const currentPhrase = phrases[phraseIndex % phrases.length];
  
  if (charIndex < currentPhrase.length) {
    typewriterElement.textContent += currentPhrase.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    // Pause, then start erasing
    setTimeout(erase, delayBetweenPhrases);
  }
}

function erase() {
  const currentPhrase = phrases[phraseIndex % phrases.length];
  
  if (charIndex > 0) {
    typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, typingSpeed / 2); // Faster erasing
  } else {
    // Move to the next phrase and start typing
    phraseIndex++;
    setTimeout(type, typingSpeed);
  }
}

// Start the animation when the script loads
document.addEventListener('DOMContentLoaded', () => {
  type();
});

// Smooth scrolling
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = 
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
