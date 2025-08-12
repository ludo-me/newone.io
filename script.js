// Scroll Animation
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
});

// Mobile Menu Toggle
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.navbar').appendChild(menuToggle);

const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
// Parallax Effect for Hero
window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + "px";
});
