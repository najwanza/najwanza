/**
 * ==============================================================================
 * FEATURE MODULE: ZERO-CLS LOCKED HERO TYPEWRITER
 * Lokasi: assets/features/typewriter/typewriter.js
 * Deskripsi: Efek mengetik dinamis pada hero section yang anti-layout shift (posisi section di bawahnya tetap fixed)
 * ==============================================================================
 */

function initHeroTypewriter() {
    const heroHighlightEl = document.getElementById('live-hero-highlight');
    if (!heroHighlightEl) return;

    const texts = [
        'designed for impact.',
        'built with passion.',
        'crafted with precision.',
        'shipped with care.'
    ];
    let textIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typewriterTimer = null;

    const cursorEl = document.createElement('span');
    cursorEl.className = 'typewriter-cursor';
    heroHighlightEl.insertAdjacentElement('afterend', cursorEl);

    function runTypewriter() {
        const currentText = texts[textIdx];
        if (isDeleting) {
            charIdx--;
        } else {
            charIdx++;
        }

        const currentSlice = currentText.slice(0, charIdx);
        // Non-breaking space prevents line height collapse
        heroHighlightEl.textContent = currentSlice.length > 0 ? currentSlice : '\u00A0';

        let delay = isDeleting ? 45 : 90;

        if (!isDeleting && charIdx === currentText.length) {
            delay = 2400;
            isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
            isDeleting = false;
            textIdx = (textIdx + 1) % texts.length;
            delay = 350;
        }

        typewriterTimer = setTimeout(runTypewriter, delay);
    }

    setTimeout(() => {
        runTypewriter();
    }, 4500);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroTypewriter);
} else {
    initHeroTypewriter();
}
