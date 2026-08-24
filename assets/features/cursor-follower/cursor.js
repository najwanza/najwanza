/**
 * ==============================================================================
 * FEATURE MODULE: CUSTOM DUAL-LAYER CURSOR FOLLOWER
 * Lokasi: assets/features/cursor-follower/cursor.js
 * Deskripsi: Kursor futuristik titik cyan & spotlight ring dengan interpolasi lerp fluida (Khusus Desktop)
 * ==============================================================================
 */

function initCursorFollower() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 1024);
    if (isTouchDevice) return;

    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot-dev';
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring-dev';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }, { passive: true });

    function animateCursorRing() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
        requestAnimationFrame(animateCursorRing);
    }
    animateCursorRing();

    const hoverTargets = document.querySelectorAll('a, button, .code-editor-window, .integration-card, .dev-project-card, .org-photo-card, .dev-bento-card, .dev-timeline-card, .dev-stat-card');
    hoverTargets.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-active'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-active'));
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursorFollower);
} else {
    initCursorFollower();
}
