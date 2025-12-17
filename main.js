// main.js

// Example: smooth scroll to sections when navbar links are wired
document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 72,
        behavior: 'smooth'
      });
    }
  });
});

// Example: small hover animation on cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-6px)';
    card.style.boxShadow = '0 18px 40px rgba(15,23,42,0.8)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'none';
  });
});



  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");
  const navItems = navLinks.querySelectorAll("a");

  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });