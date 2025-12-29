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




// navigation scroll off set active
const sections = document.querySelectorAll("section[id]");
const navlinks = document.querySelectorAll(".nav-links a");

function scrollActiveNav() {
  let scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 180; // navbar offset
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navlinks.forEach(link => link.classList.remove("active"));

      const activeLink = document.querySelector(
        `.nav-links a[href="#${sectionId}"]`
      );

      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", scrollActiveNav);





// modals pop up open and close
// open job modal
function openJobModal(event) {
  // event.preventDefault(); // 🚫 stop anchor reload
  // document.getElementById("jobModal").style.display = "flex";
  // document.body.style.overflow = "hidden";
  // alert("Modal function triggered"); 
    event.preventDefault();

    document.getElementById("jobSection").classList.add("hidden");
    document.querySelector(".job-filters").classList.add("hidden");
    // document.getElementsByClassName("pointer").classList.add("hidden");
    document.getElementById("p").style.display = "none";
    const modal = document.getElementById("jobModal");
    modal.style.display = "block";
    // document.body.style.overflow = "hidden";

    //  window.scrollTo({ top: 0, behavior: "smooth" });
}

// close job modal
function closeJobModal() {
  document.getElementById("jobModal").style.display = "none";
  // document.body.style.overflow = "auto";
  document.querySelector(".job-filters").classList.remove("hidden");
  document.getElementById("jobSection").classList.remove("hidden");
  document.getElementById("p").style.display = "flex";
  // document.getElementsByClassName("pointer").classList.add("hidden");

  // window.scrollTo({ top: 0, behavior: "smooth" });
}

// open apply modal
function openApplyModal() {
  document.getElementById("jobModal").style.display = "none";
  document.getElementById("applyModal").style.display = "flex";
  document.getElementById("jobSection").classList.add("hidden");
  document.body.style.overflow = "hidden";
}

// close apply modal
function closeApplyModal() {
  document.getElementById("applyModal").style.display = "none";
  document.body.style.overflow = "auto";
  document.getElementById("jobSection").classList.remove("hidden");
}

// click outside to close
// window.addEventListener("click", function (e) {
//   if (e.target.classList.contains("modal-overlay")) {
//     e.target.style.display = "none";
//     document.body.style.overflow = "auto";
//   }
// });




// parallax effect on the about page core values 
const section = document.querySelector('.core-values-parallax');
const bg = document.querySelector('.parallax-bg');
const content = document.querySelector('.core-content');

window.addEventListener('scroll', () => {
  const rect = section.getBoundingClientRect();
  const scrollPercent = rect.top / window.innerHeight;

  // background moves slower
  bg.style.transform = `translateY(${scrollPercent * 80}px)`;

  // content moves slightly faster
  content.style.transform = `translateY(${scrollPercent * -80}px)`;
});





  const journey = document.querySelector(".journey");
  const journeyBg = document.querySelector(".journey-bg");
  const journeyContent = document.querySelector(".journey-content");

  function parallaxScroll() {
    const rect = journey.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.bottom > 0 && rect.top < windowHeight) {
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);

      // Background moves slower
      journeyBg.style.transform = `translateY(${scrollProgress * 80}px)`;

      // Content moves slightly faster
      journeyContent.style.transform = `translateY(${scrollProgress * -80}px)`;
    }

    requestAnimationFrame(parallaxScroll);
  }

  requestAnimationFrame(parallaxScroll);











// FAQ toggle animation

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;

    // close other open FAQs (optional but professional)
    document.querySelectorAll(".faq-item").forEach(item => {
      if (item !== faqItem) {
        item.classList.remove("active");
      }
    });

    // toggle current
    faqItem.classList.toggle("active");
  });
});



