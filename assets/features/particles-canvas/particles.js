/**
 * ==============================================================================
 * FEATURE MODULE: INTERACTIVE PARTICLES BACKGROUND CANVAS
 * Lokasi: assets/features/particles-canvas/particles.js
 * Deskripsi: Latar belakang partikel neon interaktif dengan efek fisika tolak gravitasi kursor
 * ==============================================================================
 */

function initParticlesCanvas() {
    const canvas = document.getElementById('interactive-bg-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }, { passive: true });

    const particles = [];
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 32 : Math.min(Math.floor((width * height) / 18000), 75);
    let mouse = { x: null, y: null, radius: isMobile ? 80 : 140 };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }, { passive: true });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 2 + 1;
            this.speedX = (Math.random() - 0.5) * 0.5;
            this.speedY = (Math.random() - 0.5) * 0.5;
            this.color = Math.random() > 0.5 ? 'rgba(56, 189, 248, ' : 'rgba(192, 132, 252, ';
            this.alpha = Math.random() * 0.35 + 0.15;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x < 0 || this.x > width) this.speedX *= -1;
            if (this.y < 0 || this.y > height) this.speedY *= -1;

            if (mouse.x != null && mouse.y != null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    this.x -= (dx / distance) * force * 3;
                    this.y -= (dy / distance) * force * 3;
                }
            }
        }

        draw() {
            ctx.fillStyle = `${this.color}${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        const maxDistance = isMobile ? 80 : 110;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDistance) {
                    const opacity = 1 - (dist / maxDistance);
                    ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.12})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    initParticles();

    function animateParticles() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        connectParticles();
        requestAnimationFrame(animateParticles);
    }

    animateParticles();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParticlesCanvas);
} else {
    initParticlesCanvas();
}
