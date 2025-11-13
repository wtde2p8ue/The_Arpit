// 🌙 Toggle Dark Mode
const toggle = document.getElementById('darkToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 👁️ Visitor Counter
fetch('https://api.countapi.xyz/hit/my-portfolio-white-devil/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitor-count').innerText = data.value;
  });

// 🖱️ Scroll Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 🔒 Resume Download Security
function trackResumeDownload() {
  alert("Thank you for downloading my resume! If you misuse this document, legal actions may be taken.");
  console.log("Resume downloaded by a user.");
}
