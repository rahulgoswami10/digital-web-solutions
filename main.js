// main.js

// smooth scroll to sections when navbar links are wired
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


// small hover animation on cards
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



// Navtoggle for tablets and smaller devices
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


// Filter logic
document.addEventListener('DOMContentLoaded', () => {
  const departmentSelect = document.getElementById('departmentFilter');
  const jobs = document.querySelectorAll('.job');

  departmentSelect.addEventListener('change', () => {
    const selectedDepartment = departmentSelect.value;

    jobs.forEach(job => {
      const jobDepartment = job.dataset.department;

      if (selectedDepartment === 'all' || jobDepartment === selectedDepartment) {
        job.classList.remove('hide');
      } else {
        job.classList.add('hide');
      }
    });

    // Refresh AOS after filtering
    if (window.AOS) {
      AOS.refresh();
    }
  });
});


// Read more logic shrink & expand logic
if (window.innerWidth <= 768) {

  document.querySelectorAll('.job').forEach(job => {
    const text = job.querySelector('span');
    const link = job.querySelector('a');

    link.addEventListener('click', (e) => {
      e.preventDefault();

      text.classList.toggle('expanded');

      link.innerText = text.classList.contains('expanded')
        ? 'Read Less ←'
        : 'Read More →';
    });
  });

}


// Thank you modal
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const modal = document.getElementById("thankYouModal");
  const closeBtn = document.getElementById("closeModal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.add("active");
    form.reset();
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });
});




// Arrow scroll to top
// const scrollBtn = document.querySelector(".scroll-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     scrollBtn.classList.add("show");
//   } else {
//     scrollBtn.classList.remove("show");
//   }
// });

