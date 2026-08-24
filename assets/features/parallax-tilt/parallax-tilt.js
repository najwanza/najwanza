/**
 * ==============================================================================
 * FEATURE MODULE: 3D PERSPECTIVE TILT & BIDIRECTIONAL PARALLAX SCROLL
 * Lokasi: assets/features/parallax-tilt/parallax-tilt.js
 * Deskripsi: Efek kartu miring 3D mengikuti kursor mouse & akselerasi kedalaman parallax dua arah saat scroll
 * ==============================================================================
 */

function initParallaxAndTilt() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 1024);

    // 1. 3D Perspective Tilt on Mouse Hover
    if (!isTouchDevice) {
        const tiltCards = document.querySelectorAll('.tilt-card-3d, .code-editor-window, .dev-bento-card, .dev-project-card, .integration-card, .dev-timeline-card, .dev-stat-card');

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
            });
        });
    }

    // 2. Bidirectional Parallax Scroll Engine (60 FPS)
    const parallaxOrbs = document.querySelectorAll('.dev-ambient-glow');
    const gridBackground = document.querySelector('.dev-grid-background');
    const heroCodeEditor = document.querySelector('.code-editor-window');
    
    let currentScroll = window.pageYOffset;
    let targetScroll = window.pageYOffset;
    let isParallaxRunning = false;

    function updateParallax() {
        currentScroll += (targetScroll - currentScroll) * 0.12;

        if (parallaxOrbs.length >= 2) {
            // Top-left orb floats with positive velocity
            parallaxOrbs[0].style.transform = `translate3d(0, ${currentScroll * 0.28}px, 0)`;
            // Bottom-right orb floats in opposition for depth illusion
            parallaxOrbs[1].style.transform = `translate3d(0, ${-currentScroll * 0.22}px, 0)`;
        }

        if (gridBackground) {
            gridBackground.style.transform = `translate3d(0, ${currentScroll * 0.08}px, 0)`;
        }

        if (heroCodeEditor && window.innerWidth >= 1024) {
            heroCodeEditor.style.transform = `translate3d(0, ${currentScroll * 0.04}px, 0)`;
        }

        if (Math.abs(targetScroll - currentScroll) > 0.1) {
            requestAnimationFrame(updateParallax);
        } else {
            isParallaxRunning = false;
        }
    }

    window.addEventListener('scroll', () => {
        targetScroll = window.pageYOffset;
        if (!isParallaxRunning) {
            isParallaxRunning = true;
            requestAnimationFrame(updateParallax);
        }
    }, { passive: true });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallaxAndTilt);
} else {
    initParallaxAndTilt();
}
