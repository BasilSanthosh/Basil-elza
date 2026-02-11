// ===== Floating Particles =====
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    const colors = ['#c9a96e', '#dcc089', '#e8c4c4', '#d4a0a0', '#c98b8b'];

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 5 + 2;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = Math.random() * 15 + 15;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `radial-gradient(circle, ${color}, transparent)`;
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;

        container.appendChild(particle);
    }
}

// ===== Countdown Timer =====
function updateCountdown() {
    // Wedding date: April 9, 2026 at 4:00 PM IST (UTC+5:30)
    const weddingDate = new Date('2026-04-09T16:00:00+05:30');
    const now = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';

        const title = document.querySelector('.countdown-title');
        if (title) {
            title.textContent = '🎉 Today is the day! 🎉';
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
}

// ===== Intersection Observer for Scroll Animations =====
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// ===== Music Toggle (placeholder) =====
function setupMusicToggle() {
    const btn = document.getElementById('musicToggle');
    let isPlaying = false;

    btn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        btn.classList.toggle('playing', isPlaying);

        if (isPlaying) {
            btn.title = 'Pause Music';
        } else {
            btn.title = 'Play Music';
        }
    });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupScrollAnimations();
    setupMusicToggle();
});
