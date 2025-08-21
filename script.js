// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 60; // offset for navbar
  document.querySelectorAll('nav ul li a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Optional: simple floating animation for profile picture
const profilePic = document.querySelector('.profile-pic img');
if (profilePic) {
  let direction = 1;
  setInterval(() => {
    profilePic.style.transform = `translateY(${direction}px) scale(1.05)`;
    direction = -direction;
  }, 2000); // moves every 2s
}
