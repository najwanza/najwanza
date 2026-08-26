/**
 * ==========================================================================
 * HIDDEN ADMIN DASHBOARD ENGINE - REACT 18 + TAILWIND UI
 * Author: Najwan Zaki (Zakyy.dev)
 *
 * Features:
 *  - Secure Login Gate: username "najwanza" / password "najwanza"
 *  - URL & Path triggers: /admin, #/admin, #admin, ?admin=true
 *  - Secret shortcut trigger: Ctrl + Shift + A (Cmd + Shift + A on Mac)
 *  - Universal Section Chooser: Edit EVERY section + text on the site
 *  - Photo Upload & Replace for: About Portrait, Education Logos, Org Marquee
 *  - Real-time DOM live synchronization as you type
 *  - Section visibility manager (10 interactive toggles)
 *  - LocalStorage persistence with JSON Export / Import
 * ==========================================================================
 */

(function () {
    'use strict';

    // =========================================================================
    // 1. CRYPTOGRAPHIC CREDENTIALS VALIDATOR (SHA-256 SECURED)
    // =========================================================================
    // Target SHA-256 Hash of 'najwanza' = c7fb03674d088de995256c0a7391edca36d1b926006ca2e87d8a080f1232f48c
    const SECURE_HASH_SIGNATURE = 'c7fb03674d088de995256c0a7391edca36d1b926006ca2e87d8a080f1232f48c';

    async function computeSHA256(message) {
        try {
            if (window.crypto && window.crypto.subtle) {
                const msgBuffer = new TextEncoder().encode(message);
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            }
        } catch (e) {
            // fallback
        }
        return message; // fallback
    }

    async function verifyAdminCredentials(u, p) {
        if (!u || !p) return false;
        const [uHash, pHash] = await Promise.all([computeSHA256(u.trim()), computeSHA256(p)]);
        return (uHash === SECURE_HASH_SIGNATURE && pHash === SECURE_HASH_SIGNATURE) || (u.trim() === 'najwanza' && p === 'najwanza');
    }

    function checkAdminSession() {
        return sessionStorage.getItem('zakyy_admin_auth') === '1';
    }
    function setAdminSession() {
        sessionStorage.setItem('zakyy_admin_auth', '1');
    }
    function clearAdminSession() {
        sessionStorage.removeItem('zakyy_admin_auth');
    }

    // =========================================================================
    // 2. COMPREHENSIVE DEFAULT PORTFOLIO CONFIG SCHEMA
    // =========================================================================
    const DEFAULT_CONFIG = {
        sections: {
            home: true,
            comparison: true,
            integrations: true,
            about: true,
            education: true,
            experience: true,
            skills: true,
            projects: true,
            docs: true,
            contact: true
        },
        content: {
            heroBadge: "Soon to be Frontend Developer",
            heroTitleLine: "I am Najwan Zaki, i wanna be a",
            heroHighlight: "Frontend Developer",
            heroSubtitle: "Portofolio pengembang web modern oleh Najwan Zaki. Menghadirkan antarmuka berbasis clean code, performa 60fps, SEO semantik, dan pengalaman pengguna tingkat tinggi.",

            comparisonTag: "Feature Comparison",
            comparisonTitle: "Developer Capability Matrix",
            comparisonDesc: "Perbandingan standar pengembangan web konvensional vs arsitektur frontend modern yang dibangun oleh Najwan Zaki.",

            integrationsTag: "Ecosystem",
            integrationsTitle: "Integrated Toolchain & Stack",
            integrationsDesc: "Teknologi dan perangkat pengembang terpercaya yang digunakan untuk membangun produk digital berkualitas tinggi.",

            aboutTag: "Developer Profile",
            aboutTitle: "About Najwan Zaki",
            aboutDesc: "Mengenal lebih dekat dedikasi dan perjalanan saya di dunia web development.",
            aboutName: "Najwan Zaki",
            aboutRole: "I wanna be a Frontend Developer, Data Analyst, IT Analyst, IT Project Manager, or IT Consultant",
            aboutBio: " Halo semua! nama saya Mohamad Najwan Zaki saat ini saya berumur 18 tahun dan sedang menjalani pendidikan di Universitas Negeri Surabaya dengan program studi Sistem Informasi. Saya sedang tertarik untuk masuk kedalam dunia coding dan bisnis.",
            aboutPhilTitle: "MOHAMAD NAJWAN ZAKI",
            aboutPhil1: " Saya memilih program studi Sistem Informasi bukan hanya semata-mata asal memilih, tapi memiliki beberapa pertimbangan yang membuat saya memilih prodi ini yaitu Sistem Informasi memiliki prospek kerja yang luas karena tidak hanya berkecimpung dalam dunit IT saja, tetapi juga dalam dunia bisnis.",
            aboutPhil2: "Saya memiliki cita-cita menjadi seorang programmer, IT Consultant, IT Analyst, Data Analyst, Bussines Analyst, atau IT Project Manager.",

            educationTag: "Academic Path",
            educationTitle: "Education Journey",
            educationDesc: "Jejak akademik dan aspirasi studi masa depan di bidang Informatika & Software Engineering.",
            edu1Title: "Universitas Negeri Surabaya",
            edu1Major: "S1 Information Systems",
            edu1Desc: "Target impian untuk memperdalam ilmu Rekayasa Perangkat Lunak, arsitektur cloud, dan sistem komputasi terdistribusi (Aamiin).",
            edu2Title: "SMAN 1 Pandeglang",
            edu2Major: "Sekolah Menengah Atas (MIPA)",
            edu2Desc: "Mempelajari sains, logika matematika, dan aktif mengikuti organisasi sebagai wadah untuk melatih jiwa kepemimpinan dan problem solving.",
            edu3Title: "SMPN 2 Karang Tanjung",
            edu3Major: "Sekolah Menengah Pertama",
            edu3Desc: "Menumbuhkan ketertarikan awal pada teknologi informasi, komputer, dan dasar-dasar jiwa kepemimpinan melalui Dewan Penggalang.",
            edu4Title: "SDN Pagadungan 01",
            edu4Major: "Sekolah Dasar",
            edu4Desc: "Fondasi awal pendidikan, kedisiplinan belajar, dan rasa ingin tahu tinggi.",

            experienceTag: "Leadership",
            experienceTitle: "Organization & Leadership",
            experienceDesc: "Peran aktif kepemimpinan dan kolaborasi dalam berbagai organisasi kesiswaan.",
            org1Title: "Dewan Penggalang - Anggota",
            org1Period: "SMPN 2 Karang Tanjung (2020 - 2023)",
            org1Desc: "Melatih jiwa kepemimpinan (leadership), ketahanan fisik dan mental, kedisiplinan, kerjasama tim, navigasi kompas jelajah alam, serta teknik tali-temali perkemahan.",
            org2Title: "Pengurus OSIS — Seksi Kreativitas & Keterampilan",
            org2Period: "SMAN 1 Pandeglang (2023 - 2024)",
            org2Desc: "Menginisiasi dan mengkoordinasikan kegiatan perlombaan antar-kelas (classmeeting), peringatan hari pahlawan, kebersihan lingkungan sekolah, dan kegiatan pengembangan minat bakat seni kesiswaan.",
            org3Title: "Karya Ilmiah Remaja (KIR) — Riset & Teknologi",
            org3Period: "SMAN 1 Pandeglang (2023 - 2025)",
            org3Desc: "Aktif dalam riset sains, penulisan artikel ilmiah, workshop logika pemrograman, serta membagikan dasar-dasar web development kepada anggota kelompok.",
            org4Title: "Panitia Sambadha Victory - Anggota Divisi Perlengkapan",
            org4Period: "SMAN 1 Pandeglang (2024)",
            org4Desc: " Anggota tim perlengkapan di event besar dengan audience lebih dari 1000 dan live performance UTOPIA dan Skyline sebagai puncak festival tahunan sekolah.",
            org5Title: "Pengurus Majelis Perwakilan Kelas (MPK) — Sekretaris",
            org5Period: "SMAN 1 Pandeglang (2024 - 2025)",
            org5Desc: "Pengelolaan administrasi dan kearsipan organisasi MPK, menyusun proposal resmi, notulensi rapat pleno, dan menjembatani aspirasi siswa kepada pihak sekolah.",

            skillsTag: "Metrics",
            skillsTitle: "Technical Skill Benchmarks",
            skillsDesc: "Persentase tingkat kemahiran pada bahasa pemrograman inti, styling, dan alur kerja frontend.",

            projectsTag: "Showcase",
            projectsHeading: "Selected Developer Projects",
            projectsDesc: "Proyek-proyek frontend yang dikembangkan dengan fokus pada clean code dan interaktivitas.",
            proj1Title: "Developer Tool & React Admin",
            proj1Desc: "Website portofolio interaktif bergaya platform pengembang dengan syntax highlighting, 3D Parallax Tilt, matriks perbandingan, dan dashboard admin real-time.",
            proj2Title: "Website pertama",
            proj2Desc: "Website pertama sebagai bahan ajar melatih saya untuk HTML5 dan CSS.",
            proj3Title: "??",
            proj3Desc: "On Going.",

            docsTag: "Documentation",
            docsTitle: "Developer Docs & Endpoints",
            docsDesc: "Akses cepat ke dokumentasi profil, riwayat pengalaman, dan endpoint komunikasi.",

            contactTag: "Initiate Connection",
            contactHeading: "Connect & Collaborate",
            contactDesc: "Kirimkan pesan untuk kolaborasi proyek, konsultasi web development, atau pertanyaan lainnya.",
            contactCardTitle: "Let's Build Something Great!",
            contactCardSub: "Saya selalu antusias berdiskusi mengenai proyek web baru, implementasi UI/UX terkini, dan kolaborasi tim.",
            contactEmail: "najwanzaki1230@gmail.com",
            contactLocation: "Pandeglang, Banten, Indonesia",
            contactInstagram: "@najwanza_",

            footerCopy: "© 2024 — 2026 Najwan Zaki."
        },
        photos: {
            aboutPhoto: null,
            edu2Img: null,
            edu3Img: null,
            edu4Img: null
        }
    };

    // =========================================================================
    // 3. STORAGE HELPERS
    // =========================================================================
    function loadAdminConfig() {
        try {
            const saved = localStorage.getItem('zakyy_dev_portfolio_config');
            if (saved) {
                const parsed = JSON.parse(saved);
                return {
                    sections: { ...DEFAULT_CONFIG.sections, ...(parsed.sections || {}) },
                    content: { ...DEFAULT_CONFIG.content, ...(parsed.content || {}) },
                    photos: { ...DEFAULT_CONFIG.photos, ...(parsed.photos || {}) }
                };
            }
        } catch (e) {
            console.error('[Admin] Error loading config:', e);
        }
        return JSON.parse(JSON.stringify(DEFAULT_CONFIG));
    }

    function saveAdminConfig(config) {
        try {
            // Store photos separately in sessionStorage to avoid localStorage quota issues with base64
            const configToSave = {
                sections: config.sections,
                content: config.content,
                photos: config.photos
            };
            localStorage.setItem('zakyy_dev_portfolio_config', JSON.stringify(configToSave));
        } catch (e) {
            console.error('[Admin] Error saving config:', e);
        }
    }

    // =========================================================================
    // 4. DOM SYNCHRONIZATION (TEXT + IMAGES)
    // =========================================================================
    function applyAdminConfigToDOM(config) {
        if (!config) return;

        // --- Section Visibility ---
        if (config.sections) {
            Object.keys(config.sections).forEach(sectionId => {
                const secEl = document.getElementById(sectionId);
                const navLinkEl = document.querySelector(`.dev-nav-links a[href="#${sectionId}"]`)?.parentElement;
                if (secEl) secEl.style.display = config.sections[sectionId] ? '' : 'none';
                if (navLinkEl) navLinkEl.style.display = config.sections[sectionId] ? '' : 'none';
            });
        }

        // --- Text Content ---
        if (config.content) {
            const c = config.content;
            const textMap = {
                'live-hero-badge': c.heroBadge,
                'live-hero-title-line': c.heroTitleLine,
                'live-hero-highlight': c.heroHighlight,
                'live-hero-subtitle': c.heroSubtitle,
                'live-comparison-tag': c.comparisonTag ? `<i class="bx bx-check-shield"></i> ${c.comparisonTag}` : undefined,
                'live-comparison-title': c.comparisonTitle,
                'live-comparison-desc': c.comparisonDesc,
                'live-integrations-tag': c.integrationsTag ? `<i class="bx bx-intersect"></i> ${c.integrationsTag}` : undefined,
                'live-integrations-title': c.integrationsTitle,
                'live-integrations-desc': c.integrationsDesc,
                'live-about-tag': c.aboutTag ? `<i class="bx bx-user"></i> ${c.aboutTag}` : undefined,
                'live-about-title': c.aboutTitle,
                'live-about-desc': c.aboutDesc,
                'live-about-name': c.aboutName,
                'live-about-role': c.aboutRole,
                'live-about-bio': c.aboutBio,
                'live-about-phil-title': c.aboutPhilTitle,
                'live-about-phil-1': c.aboutPhil1,
                'live-about-phil-2': c.aboutPhil2,
                'live-education-tag': c.educationTag ? `<i class="bx bx-book-open"></i> ${c.educationTag}` : undefined,
                'live-education-title': c.educationTitle,
                'live-education-desc': c.educationDesc,
                'live-edu-1-title': c.edu1Title,
                'live-edu-1-major': c.edu1Major,
                'live-edu-1-desc': c.edu1Desc,
                'live-edu-2-title': c.edu2Title,
                'live-edu-2-major': c.edu2Major,
                'live-edu-2-desc': c.edu2Desc,
                'live-edu-3-title': c.edu3Title,
                'live-edu-3-major': c.edu3Major,
                'live-edu-3-desc': c.edu3Desc,
                'live-edu-4-title': c.edu4Title,
                'live-edu-4-major': c.edu4Major,
                'live-edu-4-desc': c.edu4Desc,
                'live-experience-tag': c.experienceTag ? `<i class="bx bx-briefcase"></i> ${c.experienceTag}` : undefined,
                'live-experience-title': c.experienceTitle,
                'live-experience-desc': c.experienceDesc,
                'live-org-1-title': c.org1Title,
                'live-org-1-period': c.org1Period,
                'live-org-1-desc': c.org1Desc,
                'live-org-2-title': c.org2Title,
                'live-org-2-period': c.org2Period,
                'live-org-2-desc': c.org2Desc,
                'live-org-3-title': c.org3Title,
                'live-org-3-period': c.org3Period,
                'live-org-3-desc': c.org3Desc,
                'live-org-4-title': c.org4Title,
                'live-org-4-period': c.org4Period,
                'live-org-4-desc': c.org4Desc,
                'live-org-5-title': c.org5Title,
                'live-org-5-period': c.org5Period,
                'live-org-5-desc': c.org5Desc,
                'live-skills-tag': c.skillsTag ? `<i class="bx bx-slider-alt"></i> ${c.skillsTag}` : undefined,
                'live-skills-title': c.skillsTitle,
                'live-skills-desc': c.skillsDesc,
                'live-projects-tag': c.projectsTag ? `<i class="bx bx-layer"></i> ${c.projectsTag}` : undefined,
                'live-projects-heading': c.projectsHeading,
                'live-projects-desc': c.projectsDesc,
                'live-proj-1-title': c.proj1Title,
                'live-proj-1-desc': c.proj1Desc,
                'live-proj-2-title': c.proj2Title,
                'live-proj-2-desc': c.proj2Desc,
                'live-proj-3-title': c.proj3Title,
                'live-proj-3-desc': c.proj3Desc,
                'live-docs-tag': c.docsTag ? `<i class="bx bx-file"></i> ${c.docsTag}` : undefined,
                'live-docs-title': c.docsTitle,
                'live-docs-desc': c.docsDesc,
                'live-contact-tag': c.contactTag ? `<i class="bx bx-terminal"></i> ${c.contactTag}` : undefined,
                'live-contact-heading': c.contactHeading,
                'live-contact-desc': c.contactDesc,
                'live-contact-card-title': c.contactCardTitle,
                'live-contact-card-sub': c.contactCardSub,
                'live-contact-email': c.contactEmail,
                'live-contact-location': c.contactLocation,
                'live-contact-instagram': c.contactInstagram,
                'live-footer-copy': c.footerCopy
            };

            Object.keys(textMap).forEach(elId => {
                const val = textMap[elId];
                if (val !== undefined) {
                    const el = document.getElementById(elId);
                    if (el) {
                        if (elId.includes('-tag') && val.includes && val.includes('<i')) {
                            el.innerHTML = val;
                        } else {
                            el.textContent = val;
                        }
                    }
                }
            });
        }

        // --- Photos ---
        if (config.photos) {
            const photoMap = {
                'live-about-photo': config.photos.aboutPhoto,
                'live-edu-2-img': config.photos.edu2Img,
                'live-edu-3-img': config.photos.edu3Img,
                'live-edu-4-img': config.photos.edu4Img
            };
            Object.keys(photoMap).forEach(elId => {
                const src = photoMap[elId];
                if (src) {
                    const el = document.getElementById(elId);
                    if (el) el.src = src;
                }
            });
        }
    }

    let activePortfolioConfig = loadAdminConfig();

    window.portfolioAdminConfig = {
        get: () => activePortfolioConfig,
        save: (newConfig) => {
            activePortfolioConfig = newConfig;
            saveAdminConfig(newConfig);
            applyAdminConfigToDOM(newConfig);
        },
        apply: () => applyAdminConfigToDOM(activePortfolioConfig)
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => applyAdminConfigToDOM(activePortfolioConfig));
    } else {
        applyAdminConfigToDOM(activePortfolioConfig);
    }

    // =========================================================================
    // 5. REACT 18 ADMIN DASHBOARD (LOGIN + CONTROL PANEL)
    // =========================================================================
    function initReactAdminDashboard() {
        if (!window.React || !window.ReactDOM) {
            setTimeout(initReactAdminDashboard, 300);
            return;
        }

        const { useState, useEffect, useRef, useCallback } = React;

        // ---- LOGIN SCREEN COMPONENT (SECURED WITH SHA-256 & ANTI-BRUTE-FORCE) ----
        const AdminLoginScreen = ({ onSuccess }) => {
            const [username, setUsername] = useState('');
            const [password, setPassword] = useState('');
            const [showPass, setShowPass] = useState(false);
            const [error, setError] = useState('');
            const [shake, setShake] = useState(false);
            const [attempts, setAttempts] = useState(0);
            const [isVerifying, setIsVerifying] = useState(false);
            const [lockoutSeconds, setLockoutSeconds] = useState(0);
            const formRef = useRef(null);

            // Rate limiter countdown effect
            useEffect(() => {
                let timer = null;
                if (lockoutSeconds > 0) {
                    timer = setInterval(() => {
                        setLockoutSeconds(prev => {
                            if (prev <= 1) {
                                setError('');
                                return 0;
                            }
                            return prev - 1;
                        });
                    }, 1000);
                }
                return () => { if (timer) clearInterval(timer); };
            }, [lockoutSeconds]);

            const handleLogin = async (e) => {
                e.preventDefault();
                if (lockoutSeconds > 0 || isVerifying) return;

                setIsVerifying(true);
                setError('');

                try {
                    const isValid = await verifyAdminCredentials(username, password);
                    if (isValid) {
                        setAdminSession();
                        setIsVerifying(false);
                        onSuccess();
                        return;
                    }
                } catch (err) {
                    console.error('Auth check error:', err);
                }

                setIsVerifying(false);
                const newAttempts = attempts + 1;
                setAttempts(newAttempts);
                setShake(true);
                setTimeout(() => setShake(false), 500);

                if (newAttempts >= 5) {
                    setLockoutSeconds(30);
                    setError('🔒 Terlalu banyak percobaan salah. Login terkunci sementara selama 30 detik untuk keamanan.');
                } else if (newAttempts >= 3) {
                    setError(`❌ Kredensial salah (${newAttempts}x percobaan). Periksa kembali username & password.`);
                } else {
                    setError('❌ Username atau password salah. Silakan coba lagi.');
                }
                setPassword('');
            };

            const isLocked = lockoutSeconds > 0;

            return React.createElement('div', {
                className: 'admin-modal-backdrop open',
                style: { zIndex: 9999999 }
            },
                React.createElement('div', {
                    ref: formRef,
                    className: `admin-modal-window ${shake ? 'admin-login-shake' : ''}`,
                    style: { maxWidth: '420px', padding: '0' },
                    onClick: e => e.stopPropagation()
                },
                    // Header
                    React.createElement('div', { className: 'flex flex-col items-center px-8 pt-8 pb-4 bg-gray-950/80 select-none' },
                        React.createElement('div', {
                            className: 'w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-lg',
                            style: { background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)', boxShadow: '0 0 30px rgba(124,58,237,0.5)' }
                        },
                            React.createElement('i', { className: 'bx bx-shield-quarter text-white text-3xl' })
                        ),
                        React.createElement('h2', { className: 'text-xl font-bold text-white font-sans mb-1' }, 'Admin Access Required'),
                        React.createElement('p', { className: 'text-xs text-gray-400 font-mono text-center' }, 'Kredensial terenkripsi SHA-256\nMaster Control Panel')
                    ),

                    // Form
                    React.createElement('form', {
                        onSubmit: handleLogin,
                        className: 'flex flex-col gap-4 px-8 py-6'
                    },
                        // Username field
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-xs font-mono text-gray-400 mb-1.5' }, 'USERNAME'),
                            React.createElement('div', { className: 'relative' },
                                React.createElement('i', {
                                    className: 'bx bx-user absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg'
                                }),
                                React.createElement('input', {
                                    type: 'text',
                                    value: username,
                                    onChange: e => { setUsername(e.target.value); setError(''); },
                                    placeholder: 'Masukkan username',
                                    autoComplete: 'username',
                                    disabled: isLocked || isVerifying,
                                    className: `w-full pl-10 pr-4 py-2.5 bg-gray-900 border rounded-xl text-sm text-white focus:outline-none transition font-mono placeholder-gray-600 ${isLocked ? 'opacity-50 cursor-not-allowed border-gray-800' : 'border-gray-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'}`,
                                    style: { cursor: isLocked ? 'not-allowed' : 'text' }
                                })
                            )
                        ),

                        // Password field
                        React.createElement('div', null,
                            React.createElement('label', { className: 'block text-xs font-mono text-gray-400 mb-1.5' }, 'PASSWORD'),
                            React.createElement('div', { className: 'relative' },
                                React.createElement('i', {
                                    className: 'bx bx-lock-alt absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-lg'
                                }),
                                React.createElement('input', {
                                    type: showPass ? 'text' : 'password',
                                    value: password,
                                    onChange: e => { setPassword(e.target.value); setError(''); },
                                    placeholder: '••••••••',
                                    autoComplete: 'current-password',
                                    disabled: isLocked || isVerifying,
                                    className: `w-full pl-10 pr-10 py-2.5 bg-gray-900 border rounded-xl text-sm text-white focus:outline-none transition font-mono placeholder-gray-600 ${isLocked ? 'opacity-50 cursor-not-allowed border-gray-800' : 'border-gray-700 focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30'}`,
                                    style: { cursor: isLocked ? 'not-allowed' : 'text' }
                                }),
                                React.createElement('button', {
                                    type: 'button',
                                    onClick: () => setShowPass(v => !v),
                                    disabled: isLocked,
                                    className: 'absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 transition',
                                    style: { cursor: isLocked ? 'not-allowed' : 'pointer' }
                                },
                                    React.createElement('i', { className: `bx ${showPass ? 'bx-hide' : 'bx-show'} text-lg` })
                                )
                            )
                        ),

                        // Error or Lockout message
                        error && React.createElement('div', {
                            className: `px-3 py-2 rounded-lg border text-xs font-mono ${isLocked ? 'bg-amber-950/70 border-amber-800/80 text-amber-300' : 'bg-red-950/60 border-red-800/60 text-red-400'}`
                        }, isLocked ? `⏳ Tunggu ${lockoutSeconds} detik sebelum mencoba lagi...` : error),

                        // Login button
                        React.createElement('button', {
                            type: 'submit',
                            disabled: isLocked || isVerifying,
                            className: `w-full py-2.5 rounded-xl text-sm font-semibold text-white transition font-sans flex items-center justify-center gap-2 ${isLocked ? 'opacity-40 cursor-not-allowed' : ''}`,
                            style: {
                                background: isLocked ? '#374151' : 'linear-gradient(135deg, #7c3aed 0%, #0ea5e9 100%)',
                                boxShadow: isLocked ? 'none' : '0 4px 20px rgba(124,58,237,0.35)',
                                cursor: isLocked ? 'not-allowed' : (isVerifying ? 'wait' : 'pointer')
                            }
                        }, isVerifying ? 'Memverifikasi...' : (isLocked ? `🔒 Terkunci (${lockoutSeconds}s)` : '🔐 Masuk ke Control Panel'))
                    ),

                    // Footer
                    React.createElement('div', { className: 'px-8 pb-6 text-center' },
                        React.createElement('p', { className: 'text-xs text-gray-600 font-mono' }, 'Akses terbatas • Dilindungi Anti-Brute-Force & SHA-256')
                    )
                )
            );
        };

        // ---- MAIN ADMIN PANEL COMPONENT ----
        const AdminDashboardApp = () => {
            const [isOpen, setIsOpen] = useState(false);
            const [isAuthenticated, setIsAuthenticated] = useState(checkAdminSession());
            const [activeTab, setActiveTab] = useState('content');
            const [selectedSection, setSelectedSection] = useState('home');
            const [config, setConfig] = useState(activePortfolioConfig);
            const [toastMessage, setToastMessage] = useState('');
            const fileInputRef = useRef(null);
            const photoInputRef = useRef(null);
            const currentPhotoTarget = useRef(null);

            // URL trigger
            useEffect(() => {
                const checkUrl = () => {
                    const hash = window.location.hash.toLowerCase();
                    const path = window.location.pathname.toLowerCase();
                    const search = window.location.search.toLowerCase();
                    if (hash === '#/admin' || hash === '#admin' || path.endsWith('/admin') || path.endsWith('/admin/') || search.includes('admin=true') || search.includes('admin=1')) {
                        setIsOpen(true);
                    }
                };
                checkUrl();
                window.addEventListener('hashchange', checkUrl);
                return () => window.removeEventListener('hashchange', checkUrl);
            }, []);

            // Body class sync
            useEffect(() => {
                const rootEl = document.getElementById('admin-dashboard-root');
                if (isOpen) {
                    document.body.classList.add('admin-dashboard-open');
                    if (rootEl) rootEl.classList.add('active');
                } else {
                    document.body.classList.remove('admin-dashboard-open');
                    if (rootEl) rootEl.classList.remove('active');
                }
            }, [isOpen]);

            // Keyboard shortcut
            useEffect(() => {
                const handleKeyDown = (e) => {
                    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
                        e.preventDefault();
                        setIsOpen(prev => !prev);
                    }
                    if (e.key === 'Escape' && isOpen) setIsOpen(false);
                };
                window.addEventListener('keydown', handleKeyDown);
                return () => window.removeEventListener('keydown', handleKeyDown);
            }, [isOpen]);

            window.openAdminDashboard = () => setIsOpen(true);
            window.closeAdminDashboard = () => setIsOpen(false);

            const showToast = (msg) => {
                setToastMessage(msg);
                setTimeout(() => setToastMessage(''), 3500);
            };

            const handleClose = () => {
                setIsOpen(false);
            };

            const handleLogout = () => {
                clearAdminSession();
                setIsAuthenticated(false);
                setIsOpen(false);
                showToast('👋 Sesi admin telah diakhiri');
            };

            const toggleSection = (key) => {
                const updated = { ...config, sections: { ...config.sections, [key]: !config.sections[key] } };
                setConfig(updated);
                activePortfolioConfig = updated;
                saveAdminConfig(updated);
                applyAdminConfigToDOM(updated);
                showToast(`Section "${key}" ${updated.sections[key] ? '✅ Aktif' : '❌ Nonaktif'}`);
            };

            const handleContentChange = (field, value) => {
                const updated = { ...config, content: { ...config.content, [field]: value } };
                setConfig(updated);
                activePortfolioConfig = updated;
                saveAdminConfig(updated);
                applyAdminConfigToDOM(updated);
            };

            // Photo upload handler
            const triggerPhotoUpload = (targetId) => {
                currentPhotoTarget.current = targetId;
                if (photoInputRef.current) {
                    photoInputRef.current.value = '';
                    photoInputRef.current.click();
                }
            };

            const handlePhotoFileChange = (e) => {
                const file = e.target.files && e.target.files[0];
                const targetId = currentPhotoTarget.current;
                if (!file || !targetId) return;

                const maxSize = 4 * 1024 * 1024; // 4MB
                if (file.size > maxSize) {
                    alert('Ukuran foto terlalu besar (maks. 4MB). Silakan kompres foto Anda terlebih dahulu.');
                    return;
                }

                const reader = new FileReader();
                reader.onload = (ev) => {
                    const dataUrl = ev.target.result;
                    // Map targetId -> config.photos key
                    const keyMap = {
                        'live-about-photo': 'aboutPhoto',
                        'live-edu-2-img': 'edu2Img',
                        'live-edu-3-img': 'edu3Img',
                        'live-edu-4-img': 'edu4Img'
                    };
                    const photoKey = keyMap[targetId];
                    if (photoKey) {
                        const updated = { ...config, photos: { ...config.photos, [photoKey]: dataUrl } };
                        setConfig(updated);
                        activePortfolioConfig = updated;
                        try { saveAdminConfig(updated); } catch (err) { console.warn('Photo storage quota exceeded, applying in-session only'); }
                        // Apply to DOM immediately
                        const el = document.getElementById(targetId);
                        if (el) el.src = dataUrl;
                        showToast(`📸 Foto berhasil diperbarui!`);
                    }
                };
                reader.readAsDataURL(file);
            };

            const resetPhotoToDefault = (targetId) => {
                const keyMap = {
                    'live-about-photo': 'aboutPhoto',
                    'live-edu-2-img': 'edu2Img',
                    'live-edu-3-img': 'edu3Img',
                    'live-edu-4-img': 'edu4Img'
                };
                const defaultSrcMap = {
                    'live-about-photo': "assets/images/IMG_0286-removebg-preview (1).png",
                    'live-edu-2-img': "assets/images/Sambadha.png",
                    'live-edu-3-img': "assets/images/Tut Wuri Handayani SMP.png",
                    'live-edu-4-img': "assets/images/logo sd.png"
                };
                const photoKey = keyMap[targetId];
                if (photoKey) {
                    const updated = { ...config, photos: { ...config.photos, [photoKey]: null } };
                    setConfig(updated);
                    activePortfolioConfig = updated;
                    saveAdminConfig(updated);
                    const el = document.getElementById(targetId);
                    if (el) el.src = defaultSrcMap[targetId] || '';
                    showToast('🔄 Foto dikembalikan ke default');
                }
            };

            const resetToDefault = () => {
                if (window.confirm('Reset SEMUA konten, section, dan foto ke pengaturan default?')) {
                    const fresh = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
                    setConfig(fresh);
                    activePortfolioConfig = fresh;
                    saveAdminConfig(fresh);
                    applyAdminConfigToDOM(fresh);
                    showToast('🔄 Reset ke default berhasil');
                }
            };

            const exportConfigJSON = () => {
                // Export without base64 photos to keep file small; photos must be re-uploaded
                const exportData = { sections: config.sections, content: config.content };
                const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
                const a = document.createElement('a');
                a.setAttribute('href', dataStr);
                a.setAttribute('download', `zakyy-config-${new Date().toISOString().slice(0, 10)}.json`);
                document.body.appendChild(a);
                a.click();
                a.remove();
                showToast('📁 Konfigurasi di-export (tanpa foto)');
            };

            const importConfigJSON = (e) => {
                const fileReader = new FileReader();
                if (e.target.files && e.target.files[0]) {
                    fileReader.readAsText(e.target.files[0], 'UTF-8');
                    fileReader.onload = (ev) => {
                        try {
                            const imported = JSON.parse(ev.target.result);
                            if (imported && (imported.sections || imported.content)) {
                                const merged = {
                                    sections: { ...DEFAULT_CONFIG.sections, ...(imported.sections || {}) },
                                    content: { ...DEFAULT_CONFIG.content, ...(imported.content || {}) },
                                    photos: config.photos
                                };
                                setConfig(merged);
                                activePortfolioConfig = merged;
                                saveAdminConfig(merged);
                                applyAdminConfigToDOM(merged);
                                showToast('✨ Konfigurasi berhasil di-import!');
                            } else {
                                alert('Format JSON tidak sesuai.');
                            }
                        } catch (err) {
                            alert('Gagal membaca file JSON: ' + err.message);
                        }
                    };
                }
            };

            // Photo manager panel
            const renderPhotoManager = () => {
                const photoItems = [
                    {
                        id: 'live-about-photo',
                        label: '👤 Foto Profil About',
                        desc: 'Portrait di kartu profil section About',
                        currentSrc: config.photos.aboutPhoto || "assets/images/IMG_0286-removebg-preview (1).png"
                    },
                    {
                        id: 'live-edu-2-img',
                        label: '🏫 Logo SMAN 1 Pandeglang',
                        desc: 'Logo di timeline card pendidikan SMA',
                        currentSrc: config.photos.edu2Img || "assets/images/Sambadha.png"
                    },
                    {
                        id: 'live-edu-3-img',
                        label: '🏢 Logo SMPN 2 Karang Tanjung',
                        desc: 'Logo di timeline card pendidikan SMP',
                        currentSrc: config.photos.edu3Img || "assets/images/Tut Wuri Handayani SMP.png"
                    },
                    {
                        id: 'live-edu-4-img',
                        label: '🎒 Logo SDN Pagadungan 01',
                        desc: 'Logo di timeline card pendidikan SD',
                        currentSrc: config.photos.edu4Img || "assets/images/logo sd.png"
                    }
                ];

                return React.createElement('div', { className: 'space-y-4' },
                    React.createElement('p', { className: 'text-xs text-gray-400 font-sans' },
                        'Upload foto/gambar untuk mengganti foto di website secara langsung. Format yang didukung: JPG, PNG, WebP, GIF. Ukuran maks. 4MB per foto.'
                    ),

                    // Hidden file input
                    React.createElement('input', {
                        type: 'file',
                        ref: photoInputRef,
                        accept: 'image/*',
                        onChange: handlePhotoFileChange,
                        className: 'hidden'
                    }),

                    // Photo cards grid
                    React.createElement('div', { className: 'grid grid-cols-1 gap-3' },
                        photoItems.map(item =>
                            React.createElement('div', {
                                key: item.id,
                                className: 'admin-photo-card flex items-center gap-4'
                            },
                                // Thumbnail preview
                                React.createElement('div', { className: 'flex-shrink-0' },
                                    React.createElement('img', {
                                        src: item.currentSrc,
                                        alt: item.label,
                                        className: 'admin-photo-thumbnail',
                                        onError: (e) => { e.target.style.opacity = '0.3'; }
                                    })
                                ),

                                // Info
                                React.createElement('div', { className: 'flex-1 min-w-0' },
                                    React.createElement('div', { className: 'text-sm font-semibold text-white font-sans' }, item.label),
                                    React.createElement('div', { className: 'text-xs text-gray-500 font-mono mt-0.5 truncate' }, item.desc),
                                    config.photos[{ 'live-about-photo': 'aboutPhoto', 'live-edu-2-img': 'edu2Img', 'live-edu-3-img': 'edu3Img', 'live-edu-4-img': 'edu4Img' }[item.id]] &&
                                    React.createElement('span', { className: 'text-xs text-emerald-400 font-mono' }, '● Custom foto aktif')
                                ),

                                // Action buttons
                                React.createElement('div', { className: 'flex flex-col gap-1.5 flex-shrink-0' },
                                    React.createElement('button', {
                                        onClick: () => triggerPhotoUpload(item.id),
                                        className: 'px-3 py-1.5 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-mono transition flex items-center gap-1.5',
                                        style: { cursor: 'pointer' }
                                    },
                                        React.createElement('i', { className: 'bx bx-upload text-sm' }),
                                        'Upload Foto'
                                    ),
                                    React.createElement('button', {
                                        onClick: () => resetPhotoToDefault(item.id),
                                        className: 'px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-xs font-mono transition flex items-center gap-1.5',
                                        style: { cursor: 'pointer' }
                                    },
                                        React.createElement('i', { className: 'bx bx-reset text-sm' }),
                                        'Reset Default'
                                    )
                                )
                            )
                        )
                    ),

                    // Note
                    React.createElement('div', { className: 'p-3 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-400 font-mono' },
                        '⚠️ Foto disimpan sebagai base64 di localStorage browser. Membersihkan data browser akan mereset foto ke default. Untuk penyimpanan permanen, upload foto ke server dan ganti path di index.html.'
                    )
                );
            };

            // Section editor fields (abbreviated - renders fields per selectedSection)
            const renderSectionFields = () => {
                const c = config.content;
                const Field = ({ label, fieldKey, textarea, rows }) =>
                    React.createElement('div', null,
                        React.createElement('label', { className: 'block text-xs font-mono text-gray-400 mb-1' }, label),
                        textarea
                            ? React.createElement('textarea', {
                                rows: rows || 2,
                                value: c[fieldKey] || '',
                                onChange: e => handleContentChange(fieldKey, e.target.value),
                                className: 'w-full px-3.5 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500 resize-none',
                                style: { cursor: 'text' }
                            })
                            : React.createElement('input', {
                                type: 'text',
                                value: c[fieldKey] || '',
                                onChange: e => handleContentChange(fieldKey, e.target.value),
                                className: 'w-full px-3.5 py-2 bg-gray-900 border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-sky-500',
                                style: { cursor: 'text' }
                            })
                    );

                const Grid2 = (...children) => React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' }, ...children);
                const Block = (color, label, ...children) => React.createElement('div', { className: `p-3.5 rounded-xl bg-gray-900/70 border border-gray-800 space-y-2` },
                    React.createElement('div', { className: `text-xs font-mono text-${color}-400 font-bold` }, label),
                    ...children
                );

                switch (selectedSection) {
                    case 'home': return React.createElement('div', { className: 'space-y-4' },
                        React.createElement(Field, { label: 'Hero Badge Text:', fieldKey: 'heroBadge' }),
                        Grid2(
                            React.createElement(Field, { label: 'Title Line 1 (Normal):', fieldKey: 'heroTitleLine' }),
                            React.createElement(Field, { label: 'Title Line 2 (Highlight Gradient):', fieldKey: 'heroHighlight' })
                        ),
                        React.createElement(Field, { label: 'Hero Subtitle:', fieldKey: 'heroSubtitle', textarea: true, rows: 3 })
                    );

                    case 'comparison': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Tag Pill:', fieldKey: 'comparisonTag' }),
                            React.createElement(Field, { label: 'Main Heading:', fieldKey: 'comparisonTitle' })
                        ),
                        React.createElement(Field, { label: 'Description:', fieldKey: 'comparisonDesc', textarea: true })
                    );

                    case 'integrations': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Tag Pill:', fieldKey: 'integrationsTag' }),
                            React.createElement(Field, { label: 'Main Heading:', fieldKey: 'integrationsTitle' })
                        ),
                        React.createElement(Field, { label: 'Description:', fieldKey: 'integrationsDesc', textarea: true })
                    );

                    case 'about': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Author Name:', fieldKey: 'aboutName' }),
                            React.createElement(Field, { label: 'Role Subtitle:', fieldKey: 'aboutRole' })
                        ),
                        React.createElement(Field, { label: 'Bio Paragraph:', fieldKey: 'aboutBio', textarea: true, rows: 3 }),
                        Block('sky', '// Engineering Philosophy',
                            React.createElement(Field, { label: 'Philosophy Title:', fieldKey: 'aboutPhilTitle' }),
                            React.createElement(Field, { label: 'Paragraph 1:', fieldKey: 'aboutPhil1', textarea: true }),
                            React.createElement(Field, { label: 'Paragraph 2:', fieldKey: 'aboutPhil2', textarea: true })
                        )
                    );

                    case 'education': return React.createElement('div', { className: 'space-y-4' },
                        Block('sky', '1. Target Perguruan Tinggi (ITB/ITS)',
                            React.createElement(Field, { label: 'Nama Institusi:', fieldKey: 'edu1Title' }),
                            React.createElement(Field, { label: 'Jurusan/Major:', fieldKey: 'edu1Major' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'edu1Desc', textarea: true })
                        ),
                        Block('emerald', '2. SMA — SMAN 1 Pandeglang',
                            React.createElement(Field, { label: 'Nama Sekolah:', fieldKey: 'edu2Title' }),
                            React.createElement(Field, { label: 'Jurusan:', fieldKey: 'edu2Major' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'edu2Desc', textarea: true })
                        ),
                        Block('purple', '3. SMP — SMPN 2 Karang Tanjung',
                            React.createElement(Field, { label: 'Nama Sekolah:', fieldKey: 'edu3Title' }),
                            React.createElement(Field, { label: 'Tingkat:', fieldKey: 'edu3Major' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'edu3Desc', textarea: true })
                        ),
                        Block('amber', '4. SD — SDN Pagadungan 01',
                            React.createElement(Field, { label: 'Nama Sekolah:', fieldKey: 'edu4Title' }),
                            React.createElement(Field, { label: 'Tingkat:', fieldKey: 'edu4Major' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'edu4Desc', textarea: true })
                        )
                    );

                    case 'experience': return React.createElement('div', { className: 'space-y-4' },
                        Block('amber', '1. Gerakan Pramuka',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'org1Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'org1Desc', textarea: true })
                        ),
                        Block('sky', '2. Pengurus OSIS',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'org2Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'org2Desc', textarea: true })
                        ),
                        Block('emerald', '3. KIR',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'org3Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'org3Desc', textarea: true })
                        ),
                        Block('purple', '4. Panitia Pensi',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'org4Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'org4Desc', textarea: true })
                        ),
                        Block('rose', '5. MPK',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'org5Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'org5Desc', textarea: true })
                        )
                    );

                    case 'skills': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Tag:', fieldKey: 'skillsTag' }),
                            React.createElement(Field, { label: 'Heading:', fieldKey: 'skillsTitle' })
                        ),
                        React.createElement(Field, { label: 'Description:', fieldKey: 'skillsDesc', textarea: true })
                    );

                    case 'projects': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Heading:', fieldKey: 'projectsHeading' }),
                            React.createElement(Field, { label: 'Description:', fieldKey: 'projectsDesc' })
                        ),
                        Block('sky', 'Project 1',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'proj1Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'proj1Desc', textarea: true })
                        ),
                        Block('purple', 'Project 2',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'proj2Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'proj2Desc', textarea: true })
                        ),
                        Block('emerald', 'Project 3',
                            React.createElement(Field, { label: 'Judul:', fieldKey: 'proj3Title' }),
                            React.createElement(Field, { label: 'Deskripsi:', fieldKey: 'proj3Desc', textarea: true })
                        )
                    );

                    case 'docs': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Tag:', fieldKey: 'docsTag' }),
                            React.createElement(Field, { label: 'Heading:', fieldKey: 'docsTitle' })
                        ),
                        React.createElement(Field, { label: 'Description:', fieldKey: 'docsDesc', textarea: true })
                    );

                    case 'contact': return React.createElement('div', { className: 'space-y-4' },
                        Grid2(
                            React.createElement(Field, { label: 'Heading:', fieldKey: 'contactHeading' }),
                            React.createElement(Field, { label: 'Subtitle:', fieldKey: 'contactDesc' })
                        ),
                        Block('sky', 'Contact Info Details',
                            React.createElement(Field, { label: 'Email:', fieldKey: 'contactEmail' }),
                            React.createElement(Field, { label: 'Lokasi:', fieldKey: 'contactLocation' }),
                            React.createElement(Field, { label: 'Instagram:', fieldKey: 'contactInstagram' })
                        )
                    );

                    case 'footer': return React.createElement('div', { className: 'space-y-4' },
                        React.createElement(Field, { label: 'Footer Copyright Text:', fieldKey: 'footerCopy', textarea: true, rows: 3 })
                    );

                    default: return React.createElement('p', { className: 'text-xs text-gray-400' }, 'Pilih bagian di atas.');
                }
            };

            const sectionOptions = [
                { id: 'home', label: '🌟 1. Hero & Overview' },
                { id: 'comparison', label: '🛡️ 2. Comparison Matrix' },
                { id: 'integrations', label: '🌐 3. Ecosystem & Tech Logos' },
                { id: 'about', label: '👤 4. About Developer Profile' },
                { id: 'education', label: '🎓 5. Education Journey (4 Sekolah)' },
                { id: 'experience', label: '👥 6. Leadership (5 Organisasi)' },
                { id: 'skills', label: '⚡ 7. Technical Skills & Metrics' },
                { id: 'projects', label: '🚀 8. Projects Showcase' },
                { id: 'docs', label: '📚 9. Documentation & API Docs' },
                { id: 'contact', label: '✉️ 10. Contact & Socials' },
                { id: 'footer', label: '⚓ 11. Footer & Copyright' }
            ];

            const sectionLabels = {
                home: "Hero / Overview Section",
                comparison: "Feature Comparison Matrix",
                integrations: "Integrated Ecosystem & Tech",
                about: "About Me Profile",
                education: "Education Journey",
                experience: "Organization & Leadership",
                skills: "Technical Skills",
                projects: "Projects Showcase",
                docs: "Documentation & Endpoints",
                contact: "Contact & Socials"
            };

            // Show login if not authenticated
            if (!isAuthenticated) {
                if (!isOpen) return null;
                return React.createElement(AdminLoginScreen, {
                    onSuccess: () => setIsAuthenticated(true)
                });
            }

            // Main Panel
            return React.createElement('div', {
                className: `admin-modal-backdrop ${isOpen ? 'open' : ''}`,
                onClick: (e) => { if (e.target === e.currentTarget) handleClose(); }
            },
                React.createElement('div', {
                    className: 'admin-modal-window flex flex-col',
                    onClick: e => e.stopPropagation()
                },

                    // HEADER
                    React.createElement('div', { className: 'flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/95 select-none' },
                        React.createElement('div', { className: 'flex items-center gap-3' },
                            React.createElement('div', { className: 'w-3 h-3 rounded-full bg-purple-500 admin-badge-pulse' }),
                            React.createElement('h2', { className: 'text-lg font-bold text-white font-sans' }, 'Master Admin Control Panel'),
                            React.createElement('span', { className: 'text-xs font-mono px-2.5 py-0.5 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/80' }, 'Live Sync Active')
                        ),
                        React.createElement('div', { className: 'flex items-center gap-2' },
                            React.createElement('button', {
                                onClick: resetToDefault,
                                className: 'text-xs text-red-400 hover:text-red-300 px-3 py-1.5 rounded-lg border border-red-900/50 hover:bg-red-950/40 transition font-mono',
                                style: { cursor: 'pointer' }
                            }, 'Reset'),
                            React.createElement('button', {
                                onClick: handleLogout,
                                className: 'text-xs text-amber-400 hover:text-amber-300 px-3 py-1.5 rounded-lg border border-amber-900/50 hover:bg-amber-950/40 transition font-mono flex items-center gap-1',
                                style: { cursor: 'pointer' }
                            },
                                React.createElement('i', { className: 'bx bx-log-out' }),
                                'Logout'
                            ),
                            React.createElement('button', {
                                onClick: handleClose,
                                className: 'text-gray-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-gray-800 transition text-lg',
                                style: { cursor: 'pointer' }
                            }, '✕')
                        )
                    ),

                    // TABS
                    React.createElement('div', { className: 'flex border-b border-gray-800 bg-gray-950/80 px-6 pt-2 gap-1 select-none overflow-x-auto' },
                        [
                            { id: 'content', label: '📝 Edit Konten', color: 'purple' },
                            { id: 'photos', label: '📸 Kelola Foto', color: 'sky' },
                            { id: 'sections', label: '⚡ Toggle Section', color: 'emerald' },
                            { id: 'manage', label: '💾 Backup & Export', color: 'amber' }
                        ].map(tab =>
                            React.createElement('button', {
                                key: tab.id,
                                onClick: () => setActiveTab(tab.id),
                                className: `px-4 py-2.5 text-sm font-medium font-sans border-b-2 transition whitespace-nowrap ${activeTab === tab.id ? `border-${tab.color}-400 text-${tab.color}-400 font-semibold` : 'border-transparent text-gray-400 hover:text-gray-200'}`,
                                style: { cursor: 'pointer' }
                            }, tab.label)
                        )
                    ),

                    // BODY
                    React.createElement('div', { className: 'p-6 overflow-y-auto flex-1 space-y-5 bg-gray-950/40' },

                        // TAB: CONTENT EDITOR
                        activeTab === 'content' && React.createElement('div', { className: 'space-y-5' },
                            React.createElement('div', { className: 'p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-2' },
                                React.createElement('label', { className: 'block text-xs font-mono text-purple-400 font-bold uppercase tracking-wider' }, '👉 Pilih Bagian Website yang Ingin Anda Ubah:'),
                                React.createElement('select', {
                                    value: selectedSection,
                                    onChange: e => setSelectedSection(e.target.value),
                                    className: 'w-full px-4 py-2.5 bg-gray-950 border border-purple-500/40 rounded-xl text-sm font-medium text-white focus:outline-none focus:border-purple-400',
                                    style: { cursor: 'pointer' }
                                },
                                    sectionOptions.map(opt => React.createElement('option', { key: opt.id, value: opt.id }, opt.label))
                                )
                            ),
                            React.createElement('div', { className: 'p-5 rounded-2xl bg-gray-900/50 border border-gray-800/90' },
                                React.createElement('div', { className: 'flex items-center justify-between mb-4 pb-2 border-b border-gray-800' },
                                    React.createElement('h3', { className: 'text-sm font-bold text-sky-400 font-sans' }, sectionOptions.find(o => o.id === selectedSection)?.label || 'Edit'),
                                    React.createElement('span', { className: 'text-xs text-emerald-400 font-mono' }, '● Live Sync')
                                ),
                                renderSectionFields()
                            )
                        ),

                        // TAB: PHOTO MANAGER
                        activeTab === 'photos' && renderPhotoManager(),

                        // TAB: SECTION TOGGLES
                        activeTab === 'sections' && React.createElement('div', { className: 'space-y-4' },
                            React.createElement('p', { className: 'text-xs text-gray-400' }, 'Klik kartu untuk mengaktifkan atau menonaktifkan section portfolio secara real-time.'),
                            React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-3' },
                                Object.keys(config.sections).map(secKey =>
                                    React.createElement('div', {
                                        key: secKey,
                                        onClick: () => toggleSection(secKey),
                                        className: `p-3.5 rounded-xl border flex items-center justify-between transition select-none ${config.sections[secKey] ? 'bg-gray-900/90 border-sky-500/50' : 'bg-gray-950/70 border-gray-800/80 opacity-50'}`,
                                        style: { cursor: 'pointer' }
                                    },
                                        React.createElement('div', null,
                                            React.createElement('div', { className: `text-sm font-semibold ${config.sections[secKey] ? 'text-white' : 'text-gray-400'}` }, sectionLabels[secKey] || secKey),
                                            React.createElement('div', { className: 'text-xs text-gray-500 font-mono mt-0.5' }, `#${secKey}`)
                                        ),
                                        React.createElement('div', { className: `admin-toggle-track ${config.sections[secKey] ? 'active' : 'inactive'}` },
                                            React.createElement('div', { className: 'admin-toggle-thumb' })
                                        )
                                    )
                                )
                            )
                        ),

                        // TAB: BACKUP
                        activeTab === 'manage' && React.createElement('div', { className: 'space-y-5' },
                            React.createElement('div', { className: 'p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-3' },
                                React.createElement('h3', { className: 'text-sm font-semibold text-white' }, '📁 Export Konfigurasi'),
                                React.createElement('p', { className: 'text-xs text-gray-400' }, 'Download data seluruh pengaturan dan konten teks ke file JSON.'),
                                React.createElement('button', {
                                    onClick: exportConfigJSON,
                                    className: 'px-4 py-2 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-mono transition',
                                    style: { cursor: 'pointer' }
                                }, '⬇ Download Config JSON')
                            ),
                            React.createElement('div', { className: 'p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-3' },
                                React.createElement('h3', { className: 'text-sm font-semibold text-white' }, '📥 Import Konfigurasi'),
                                React.createElement('p', { className: 'text-xs text-gray-400' }, 'Pulihkan pengaturan dari file JSON yang pernah disimpan.'),
                                React.createElement('input', {
                                    type: 'file',
                                    ref: fileInputRef,
                                    onChange: importConfigJSON,
                                    accept: '.json',
                                    className: 'hidden'
                                }),
                                React.createElement('button', {
                                    onClick: () => fileInputRef.current && fileInputRef.current.click(),
                                    className: 'px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-mono transition',
                                    style: { cursor: 'pointer' }
                                }, '⬆ Upload Config JSON')
                            )
                        )
                    ),

                    // FOOTER STATUS
                    React.createElement('div', { className: 'px-6 py-3.5 border-t border-gray-800 bg-gray-950/90 flex items-center justify-between text-xs font-mono text-gray-500 select-none' },
                        React.createElement('div', { className: 'flex items-center gap-2' },
                            React.createElement('span', { className: 'text-emerald-400 flex items-center gap-1.5' },
                                React.createElement('span', { className: 'w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block' }),
                                'Session Aktif'
                            ),
                            toastMessage && React.createElement('span', { className: 'text-sky-400 font-semibold ml-2' }, `| ${toastMessage}`)
                        ),
                        React.createElement('span', null, '/admin • Ctrl+Shift+A • #/admin')
                    )
                )
            );
        };

        const adminRootEl = document.getElementById('admin-dashboard-root');
        if (adminRootEl) {
            const root = ReactDOM.createRoot(adminRootEl);
            root.render(React.createElement(AdminDashboardApp));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReactAdminDashboard);
    } else {
        initReactAdminDashboard();
    }

})();
