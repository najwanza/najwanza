/**
 * ==============================================================================
 * FEATURE MODULE: 3D PERSPECTIVE TILT & BIDIRECTIONAL PARALLAX SCROLL ENGINE
 * Lokasi: assets/features/parallax-tilt/parallax-tilt.js
 * Deskripsi: Efek muncul parallax saat scroll ke bawah & efek menghilang saat scroll ke atas untuk semua konten
 * ==============================================================================
 */

function initParallaxAndTilt() {
    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth < 1024);

    // --------------------------------------------------------------------------
    // 1. 3D PERSPECTIVE TILT ON MOUSE HOVER (Desktop Only)
    // --------------------------------------------------------------------------
    if (!isTouchDevice) {
        const tiltCards = document.querySelectorAll(
            '.tilt-card-3d, .code-editor-window, .dev-bento-card, .dev-project-card, .integration-card, .dev-timeline-card, .dev-stat-card, .docs-card, .dev-skill-card, .comparison-table-wrapper'
        );

        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                if (card.classList.contains('exit-down')) return;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                // Clear inline transform so CSS classes (.in-view / .revealed) take over cleanly
                card.style.transform = '';
            });
        });
    }

    // --------------------------------------------------------------------------
    // 2. BIDIRECTIONAL PARALLAX SCROLL REVEAL & EXIT ENGINE
    // --------------------------------------------------------------------------
    const contentSelectors = [
        '.dev-hero-content',
        '.code-editor-window',
        '.dev-stat-card',
        '.dev-section-header',
        '.comparison-table-wrapper',
        '.integration-card',
        '.dev-bento-card',
        '.dev-timeline-card',
        '.dev-org-tabs',
        '.dev-org-display-card',
        '.dev-skill-card',
        '.dev-project-card',
        '.docs-card',
        '.dev-contact-wrapper .dev-bento-card',
        '.dev-contact-form-card',
        '.dev-footer-inner',
        '.reveal-on-scroll',
        '.reveal-left',
        '.reveal-right',
        '.reveal-scale',
        '.parallax-item'
    ];

    // Gather and deduplicate all target elements
    const elementSet = new Set();
    contentSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => elementSet.add(el));
    });

    const allParallaxElements = Array.from(elementSet);

    // Add .parallax-item class and automatic stagger delay to grids/siblings
    allParallaxElements.forEach(el => {
        if (!el.classList.contains('parallax-item') &&
            !el.classList.contains('reveal-left') &&
            !el.classList.contains('reveal-right') &&
            !el.classList.contains('reveal-scale') &&
            !el.classList.contains('reveal-on-scroll')) {
            el.classList.add('parallax-item');
        }

        // Apply automatic stagger delay if inside a multi-item grid and no explicit delay class
        const parentGrid = el.closest('.integrations-grid, .dev-timeline-container, .dev-projects-grid, .docs-grid, .dev-stats-row, .dev-skills-grid, .dev-bento-grid');
        if (parentGrid && !el.className.includes('delay-')) {
            const siblings = Array.from(parentGrid.children);
            const index = siblings.indexOf(el);
            if (index >= 0) {
                const delayIndex = (index % 6) + 1;
                el.classList.add(`delay-${delayIndex}`);
            }
        }
    });

    // Helper functions for reactive components (Skills & Stats)
    function triggerStatCounter(card) {
        const numberEl = card.querySelector('.dev-stat-number[data-count-to]') || (card.classList.contains('dev-stat-number') ? card : null);
        if (numberEl && !numberEl.dataset.isAnimating) {
            numberEl.dataset.isAnimating = 'true';
            const target = parseInt(numberEl.getAttribute('data-count-to'), 10) || 0;
            const suffix = numberEl.getAttribute('data-suffix') || '';
            let current = 0;
            const duration = 1200;
            const step = Math.max(1, Math.ceil(target / (duration / 16)));

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                    numberEl.dataset.isAnimating = '';
                }
                numberEl.textContent = current + suffix;
            }, 16);
        }
    }

    function resetStatCounter(card) {
        const numberEl = card.querySelector('.dev-stat-number[data-count-to]') || (card.classList.contains('dev-stat-number') ? card : null);
        if (numberEl) {
            numberEl.dataset.isAnimating = '';
            const suffix = numberEl.getAttribute('data-suffix') || '';
            numberEl.textContent = '0' + suffix;
        }
    }

    function triggerSkillBars(card) {
        const tracks = card.querySelectorAll ? card.querySelectorAll('.dev-skill-track span') : [];
        tracks.forEach(span => {
            const targetWidth = span.getAttribute('data-width') || '0%';
            span.style.width = targetWidth;
        });
    }

    function resetSkillBars(card) {
        const tracks = card.querySelectorAll ? card.querySelectorAll('.dev-skill-track span') : [];
        tracks.forEach(span => {
            span.style.width = '0%';
        });
    }

    // Scroll state tracking
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
    let scrollDirection = 'down'; // 'down' or 'up'

    function checkParallaxElements() {
        const windowHeight = window.innerHeight;
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const isAtTop = currentScrollY <= 80;

        allParallaxElements.forEach(el => {
            const rect = el.getBoundingClientRect();

            // When user is at the very top of the page, force Hero section & top items visible
            if (isAtTop && (el.closest('#home') || el.closest('.dev-stats-row') || el.classList.contains('dev-hero-content') || el.classList.contains('code-editor-window'))) {
                el.classList.add('in-view', 'revealed');
                el.classList.remove('exit-down', 'exit-up');
                if (el.classList.contains('dev-stat-card')) triggerStatCounter(el);
                return;
            }

            // Element enters viewport from bottom or is actively visible
            const isVisible = rect.top < windowHeight - 35 && rect.bottom > 20;
            // Element has scrolled below the bottom of the viewport
            const isBelowViewport = rect.top >= windowHeight - 15;
            // Element has scrolled far above the viewport
            const isFarAboveViewport = rect.bottom < -160;

            if (isVisible) {
                el.classList.add('in-view', 'revealed');
                el.classList.remove('exit-down', 'exit-up');

                // Trigger nested micro-interactions if needed
                if (el.classList.contains('dev-stat-card')) {
                    triggerStatCounter(el);
                }
                if (el.classList.contains('dev-skill-card') || el.querySelector('.dev-skill-track')) {
                    triggerSkillBars(el);
                }
            } else if (isBelowViewport) {
                // When scrolling up or when element is below screen, activate exit-down
                el.classList.remove('in-view', 'revealed');
                el.classList.add('exit-down');

                if (el.classList.contains('dev-stat-card')) {
                    resetStatCounter(el);
                }
                if (el.classList.contains('dev-skill-card') || el.querySelector('.dev-skill-track')) {
                    resetSkillBars(el);
                }
            } else if (isFarAboveViewport && scrollDirection === 'down') {
                // Optional subtle exit-up when scrolling deeply past elements
                el.classList.add('exit-up');
            }
        });
    }

    // --------------------------------------------------------------------------
    // 3. CONTINUOUS LIQUID LERP PARALLAX FOR AMBIENT & DEPTH LAYERS
    // --------------------------------------------------------------------------
    const parallaxOrbs = document.querySelectorAll('.dev-ambient-glow');
    const gridBackground = document.querySelector('.dev-grid-background');
    const heroCodeEditor = document.querySelector('.code-editor-window');
    const parallaxTables = document.querySelectorAll('.parallax-table');

    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    let targetScroll = window.pageYOffset || document.documentElement.scrollTop;
    let isParallaxRunning = false;
    const lerpFactor = 0.075;

    function updateParallax() {
        currentScroll += (targetScroll - currentScroll) * lerpFactor;

        // Background Ambient Glow Orbs
        if (parallaxOrbs.length >= 2) {
            parallaxOrbs[0].style.willChange = 'transform';
            parallaxOrbs[0].style.transform = `translate3d(0, ${(currentScroll * 0.22).toFixed(2)}px, 0)`;
            parallaxOrbs[1].style.willChange = 'transform';
            parallaxOrbs[1].style.transform = `translate3d(0, ${(-currentScroll * 0.18).toFixed(2)}px, 0)`;
        }

        // Grid Background Layer
        if (gridBackground) {
            gridBackground.style.willChange = 'transform';
            gridBackground.style.transform = `translate3d(0, ${(currentScroll * 0.05).toFixed(2)}px, 0)`;
        }

        // Parallax Comparison Matrix Table
        if (parallaxTables.length > 0 && window.innerWidth >= 1024) {
            parallaxTables.forEach(table => {
                if (table.classList.contains('exit-down')) return;
                const rect = table.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (rect.top < windowHeight && rect.bottom > 0) {
                    const offset = (rect.top + rect.height / 2 - windowHeight / 2) * -0.04;
                    table.style.willChange = 'transform';
                    if (!table.style.transform || table.style.transform.includes('perspective')) {
                        table.style.transform = `perspective(1000px) translate3d(0, ${offset.toFixed(2)}px, 0)`;
                    }
                }
            });
        }

        if (Math.abs(targetScroll - currentScroll) > 0.05) {
            requestAnimationFrame(updateParallax);
        } else {
            isParallaxRunning = false;
        }
    }

    // Scroll event handler with direction calculation
    function onWindowScroll() {
        const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const delta = currentScrollY - lastScrollY;

        if (delta > 2) {
            scrollDirection = 'down';
        } else if (delta < -2) {
            scrollDirection = 'up';
        }

        lastScrollY = currentScrollY;
        targetScroll = currentScrollY;

        checkParallaxElements();

        if (!isParallaxRunning) {
            isParallaxRunning = true;
            requestAnimationFrame(updateParallax);
        }
    }

    window.addEventListener('scroll', onWindowScroll, { passive: true });
    window.addEventListener('resize', checkParallaxElements, { passive: true });

    // Initial check on DOM ready & full page load
    setTimeout(checkParallaxElements, 50);
    setTimeout(checkParallaxElements, 400);

    // Watch for welcome intro dismissal
    const welcomeOverlay = document.getElementById('welcome-intro');
    if (welcomeOverlay) {
        const observer = new MutationObserver(() => {
            if (welcomeOverlay.classList.contains('dismissed') || welcomeOverlay.style.display === 'none') {
                checkParallaxElements();
            }
        });
        observer.observe(welcomeOverlay, { attributes: true, attributeFilter: ['class', 'style'] });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initParallaxAndTilt);
} else {
    initParallaxAndTilt();
}

