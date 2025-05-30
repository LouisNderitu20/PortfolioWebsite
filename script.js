document.addEventListener("DOMContentLoaded", () => {
  // Sidebar toggle
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Typed.js typing effect
  new Typed("#typing", {
    strings: ["Frontend Developer", "UI Designer", "Creative Thinker"],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
  });

  // AOS init
  AOS.init({
    duration: 800,
    once: true
  });
});
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
});
const trailCanvas = document.createElement('canvas');
trailCanvas.id = 'trail-canvas';
document.body.appendChild(trailCanvas);

const ctx = trailCanvas.getContext('2d');
trailCanvas.style.position = 'fixed';
trailCanvas.style.top = 0;
trailCanvas.style.left = 0;
trailCanvas.style.pointerEvents = 'none';
trailCanvas.style.zIndex = '999';

function resizeCanvas() {
  trailCanvas.width = window.innerWidth;
  trailCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

let particles = [];

document.addEventListener('mousemove', (e) => {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    radius: Math.random() * 4 + 2,
    alpha: 1.0,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
  });
});

function draw() {
  ctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
  particles.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(0, 191, 255, ${p.alpha})`;
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
    p.alpha -= 0.02;
    if (p.alpha <= 0) {
      particles.splice(i, 1);
    }
  });
  requestAnimationFrame(draw);
}
draw();
// Animate skill bars when they enter view
const skillFills = document.querySelectorAll(".skill-fill");

const animateSkills = () => {
  skillFills.forEach(fill => {
    const barTop = fill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (barTop < windowHeight - 50) {
      fill.style.width = fill.dataset.skill;
    }
  });
};

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);
