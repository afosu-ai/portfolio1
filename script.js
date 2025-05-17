document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('form-msg');

  // Improved email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    formMsg.textContent = "Please fill in all fields.";
    formMsg.style.color = "red";
    return;
  }
  if (!emailPattern.test(email)) {
    formMsg.textContent = "Please enter a valid email address.";
    formMsg.style.color = "red";
    return;
  }

  formMsg.textContent = "Message sent! ✅";
  formMsg.style.color = "green";

  // Clear form fields
  this.reset();
});

// Section fade-in on scroll
const sections = document.querySelectorAll('section');
const revealSections = () => {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);
