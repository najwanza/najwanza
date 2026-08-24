/**
 * ==============================================================================
 * FEATURE MODULE: CORE UI INTERACTIONS & OBSERVERS
 * Lokasi: assets/features/ui-interactions/ui-interactions.js
 * Deskripsi: Komponen interaksi UI (Mobile Nav, Code Preview Tabs, CLI Copy, Skill Bars, Org Tabs, Contact Form, Scroll Progress, Scroll Spy, Back-to-Top, Stats Counter)
 * ==============================================================================
 */

function initUIInteractions() {
    // 1. MOBILE MENU TOGGLE
    const menuToggleBtn = document.getElementById('menu-toggle');
    const devNavLinks = document.getElementById('dev-nav-links');
    const navItems = document.querySelectorAll('.dev-nav-item a');

    if (menuToggleBtn && devNavLinks) {
        menuToggleBtn.addEventListener('click', () => {
            devNavLinks.classList.toggle('active');
        });

        navItems.forEach(item => {
            item.addEventListener('click', () => {
                devNavLinks.classList.remove('active');
            });
        });
    }

    // 2. CODE EDITOR PREVIEW TABS SWITCHER
    const editorTabs = document.querySelectorAll('.editor-tab');
    const snippetPanels = document.querySelectorAll('.code-snippet-panel');

    editorTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSnippetId = tab.getAttribute('data-tab');

            editorTabs.forEach(t => t.classList.remove('active'));
            snippetPanels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(targetSnippetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 3. CLI COPY COMMAND WITH FEEDBACK
    const cliCopyBtn = document.getElementById('cli-copy-btn');
    const cliText = document.getElementById('cli-text');

    if (cliCopyBtn && cliText) {
        cliCopyBtn.addEventListener('click', () => {
            const commandToCopy = cliText.innerText.trim().replace(/^\$\s*/, '');
            navigator.clipboard.writeText(commandToCopy).then(() => {
                const originalIcon = cliCopyBtn.innerHTML;
                cliCopyBtn.innerHTML = '<i class="fas fa-check" style="color: #7ee787;"></i>';
                setTimeout(() => {
                    cliCopyBtn.innerHTML = originalIcon;
                }, 2000);
            }).catch(err => {
                console.error('Clipboard copy failed: ', err);
            });
        });
    }

    // 4. SKILL PROGRESS BARS OBSERVER
    const skillTracks = document.querySelectorAll('.dev-skill-track span');

    if ('IntersectionObserver' in window) {
        const skillObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const span = entry.target;
                    span.style.width = span.getAttribute('data-width') || '0%';
                    observer.unobserve(span);
                }
            });
        }, { threshold: 0.2 });

        skillTracks.forEach(track => skillObserver.observe(track));
    } else {
        skillTracks.forEach(track => {
            track.style.width = track.getAttribute('data-width') || '0%';
        });
    }

    // 5. ORGANIZATION TABS SWITCHER
    const orgTabs = document.querySelectorAll('.dev-org-tab-btn');
    const orgPanels = document.querySelectorAll('.dev-org-panel');

    orgTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-target');

            orgTabs.forEach(t => t.classList.remove('active'));
            orgPanels.forEach(p => p.classList.remove('active'));

            tab.classList.add('active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });

    // 6. CONTACT FORM HANDLER
    const devContactForm = document.getElementById('dev-contact-form');
    const devFormStatus = document.getElementById('dev-form-status');

    if (devContactForm) {
        devContactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('dev-name')?.value || '';
            const email = document.getElementById('dev-email')?.value || '';
            const subject = document.getElementById('dev-subject')?.value || 'Dev Project Collaboration';
            const message = document.getElementById('dev-message')?.value || '';

            const mailtoUrl = `mailto:najwanzaki1230@gmail.com?subject=${encodeURIComponent(subject + ' - ' + name)}&body=${encodeURIComponent("Developer / Client: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;

            window.location.href = mailtoUrl;

            if (devFormStatus) {
                devFormStatus.style.display = 'block';
                devFormStatus.style.color = '#7ee787';
                devFormStatus.textContent = 'Membuka aplikasi email... Terima kasih!';
                setTimeout(() => {
                    devFormStatus.style.display = 'none';
                    devContactForm.reset();
                }, 5000);
            }
        });
    }

    // 7. SCROLL PROGRESS BAR
    const scrollProgressBar = document.getElementById('scroll-progress-bar');

    function updateScrollProgress() {
        if (!scrollProgressBar) return;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollProgressBar.style.width = `${progress}%`;
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    updateScrollProgress();

    // 8. BACK-TO-TOP BUTTON
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 9. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
    const revealElements = document.querySelectorAll('.reveal-on-scroll, .reveal-left, .reveal-right, .reveal-scale');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // 10. ACTIVE SECTION NAV TRACKING (SCROLL SPY)
    const allSectionIds = ['home', 'comparison', 'integrations', 'about', 'education', 'experience', 'skills', 'projects', 'docs', 'contact'];
    const allNavLinks = document.querySelectorAll('.dev-nav-links a');

    function updateActiveNavLink() {
        const scrollPos = window.pageYOffset + 100;

        let currentSection = 'home';
        allSectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section && section.style.display !== 'none') {
                const sectionTop = section.offsetTop;
                if (scrollPos >= sectionTop) {
                    currentSection = id;
                }
            }
        });

        allNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavLink, { passive: true });
    updateActiveNavLink();

    // 11. ANIMATED STATS COUNTER
    function animateCounter(el, target, suffix, duration = 1400) {
        let start = 0;
        const step = Math.ceil(target / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            el.textContent = start + suffix;
        }, 16);
    }

    const statNumbers = document.querySelectorAll('.dev-stat-number[data-count-to]');

    if ('IntersectionObserver' in window && statNumbers.length > 0) {
        const statObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute('data-count-to'), 10);
                    const suffix = el.getAttribute('data-suffix') || '';
                    animateCounter(el, target, suffix);
                    statObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => statObserver.observe(el));
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initUIInteractions);
} else {
    initUIInteractions();
}
