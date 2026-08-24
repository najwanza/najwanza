/**
 * ==============================================================================
 * FEATURE MODULE: WELCOME INTRO SEQUENCE
 * Lokasi: assets/features/welcome-intro/welcome-intro.js
 * Deskripsi: Animasi kata pembuka halus ("Selamat" -> "datang" -> "di" -> "portofolio" -> "saya")
 * ==============================================================================
 */

function initWelcomeIntro() {
    const welcomeOverlay = document.getElementById('welcome-intro');
    const welcomeWordElement = document.getElementById('welcome-word');
    const introWords = ['Selamat', 'datang', 'di', 'portofolio', 'saya'];
    let currentWordIndex = 0;
    let isIntroDismissed = false;

    function dismissWelcomeIntro() {
        if (isIntroDismissed) return;
        isIntroDismissed = true;
        if (welcomeOverlay) {
            welcomeOverlay.classList.add('dismissed');
            setTimeout(() => {
                welcomeOverlay.style.display = 'none';
            }, 850);
        }
        document.body.classList.add('page-loaded');
    }

    if (welcomeOverlay) {
        welcomeOverlay.addEventListener('click', dismissWelcomeIntro);
    }

    function playIntroSequence() {
        if (isIntroDismissed || !welcomeWordElement) return;

        if (currentWordIndex < introWords.length) {
            welcomeWordElement.textContent = introWords[currentWordIndex];
            welcomeWordElement.classList.add('active-word');

            setTimeout(() => {
                welcomeWordElement.classList.remove('active-word');
                setTimeout(() => {
                    currentWordIndex++;
                    playIntroSequence();
                }, 380);
            }, 700);
        } else {
            setTimeout(dismissWelcomeIntro, 300);
        }
    }

    setTimeout(playIntroSequence, 250);
}

// Auto-run if DOM already loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initWelcomeIntro);
} else {
    initWelcomeIntro();
}
