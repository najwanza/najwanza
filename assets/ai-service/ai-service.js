/**
 * ==========================================================================
 * AI SERVICE ASSISTANT - GEMINI INTELLIGENCE ENGINE (CLIENT-SIDE)
 * Author: Najwan Zaki (Zakyy.dev)
 * 
 * Features:
 *  - 100% Client-Side Local Intelligence (Zero API required, 0ms Latency)
 *  - Broad Multi-Domain Knowledge Base (Programming, Web Dev, CS, General Knowledge, Science, Productivity)
 *  - Full Najwan Zaki Portfolio Knowledge (Bio, Education, 5 Organizations, Skills, Projects, Contact)
 *  - Intelligent Fallback & Natural Language Understanding like Google Gemini
 *  - Zero Leakage of Hidden Admin Dashboard features
 *  - Synthesized Sound Effects (Web Audio API)
 *  - Interactive Suggestion Chips & Markdown Rendering
 * ==========================================================================
 */

(function () {
    'use strict';

    // ==========================================================================
    // 1. KNOWLEDGE BASE REPOSITORY (NAJWAN ZAKI COMPLETE PORTFOLIO DATASET)
    // ==========================================================================
    const NAJWAN_KNOWLEDGE = {
        identity: {
            name: "Najwan Zaki",
            nickname: "Najwan / Zakyy",
            role: "Frontend Developer & UI/UX Designer",
            location: "Pandeglang, Banten, Indonesia",
            email: "najwanzaki1230@gmail.com",
            instagram: "@najwanza_",
            instagramUrl: "https://www.instagram.com/najwanza_/",
            github: "https://github.com/Zakyyii",
            status: "Terbuka untuk kolaborasi proyek web modern & eksplorasi teknologi",
            philosophy: "Menyatukan estetika visual (UI/UX modern) dengan arsitektur kode yang bersih (clean code) dan performa tinggi 60 FPS."
        },

        education: [
            {
                institution: "Universitas Negeri Surabaya",
                level: "Sedang Menjalani",
                major: "S1 Sistem Informasi",
                period: "2026-2030",
                description: "Target impian untuk memperdalam ilmu Rekayasa Perangkat Lunak, arsitektur cloud, dan sistem komputasi terdistribusi (Aamiin)."
            },
            {
                institution: "SMAN 1 Pandeglang",
                level: "Sekolah Menengah Atas",
                major: "MIPA (Matematika & Ilmu Pengetahuan Alam)",
                period: "2023 — 2026",
                description: "Mempelajari sains, logika matematika, serta aktif mengeksplorasi web development dan kepengurusan kesiswaan."
            },
            {
                institution: "SMPN 2 Karang Tanjung",
                level: "Sekolah Menengah Pertama",
                major: "Pendidikan Umum",
                period: "2020 — 2023",
                description: "Menumbuhkan ketertarikan awal pada teknologi informasi, komputer, dan dasar-dasar algoritma pemecahan masalah."
            },
            {
                institution: "SDN Pagadungan 01",
                level: "Sekolah Dasar",
                major: "Pendidikan Dasar",
                period: "2014 — 2020",
                description: "Fondasi awal kedisiplinan, rasa ingin tahu tinggi terhadap teknologi, dan aktif di kepramukaan."
            }
        ],

        organizations: [
            {
                name: "Dewan Ambalan",
                role: "Anggota",
                period: "2020 — 2023",
                place: "SMPN 2 Karang Tanjung",
                focus: "Melatih kepemimpinan (leadership), ketahanan fisik & mental, kedisiplinan, kerjasama tim, navigasi kompas jelajah alam, dan teknik pionering."
            },
            {
                name: "Pengurus OSIS",
                role: "Seksi bidang Kewirausahaan (Sekbid 6) ",
                period: "2023 — 2024",
                place: "SMAN 1 Pandeglang",
                focus: "Menginisiasi kegiatan perlombaan classmeeting, berwirausaha, peringatan hari besar, kebersihan lingkungan sekolah, dan pengembangan minat bakat seni kesiswaan."
            },
            {
                name: "Karya Ilmiah Remaja (KIR)",
                role: "Anggota aktif",
                period: "2023 — 2025",
                place: "SMAN 1 Pandeglang",
                focus: "Aktif dalam riset sains, penulisan artikel ilmiah, eksperimen laboratorium, workshop pemrograman, serta membagikan materi dasar web development."
            },
            {
                name: "Panitia Sambadha Victory",
                role: "Anggota Divisi Perlengkapan",
                period: "2024",
                place: "SMAN 1 Pandeglang",
                focus: " Anggota tim perlengkapan di event besar dengan audience lebih dari 1000 dan live performance UTOPIA dan Skyline sebagai puncak festival tahunan sekolah."
            },
            {
                name: "Majelis Perwakilan Kelas (MPK)",
                role: "Sekretaris Majelis Perwakilan Kelas",
                period: "2024 — 2025",
                place: "SMAN 1 Pandeglang",
                focus: "Pengelolaan administrasi resmi dan kearsipan organisasi, menyusun proposal, notulensi rapat pleno, serta menjembatani aspirasi siswa kepada pihak sekolah."
            }
        ],

        skills: {
            languages: [
                { name: "HTML5", level: "90%", desc: "Semantic structure, SEO, Accessibility & W3C standard" },
                { name: "CSS3", level: "85%", desc: "Modern Flexbox, CSS Grid, 3D Parallax, Glassmorphism, Animations" },
                { name: "JavaScript", level: "75%", desc: "ES6+, DOM Manipulation, Async/Await, Modular Architecture" },
                { name: "React.js", level: "65%", desc: "Component Architecture, Hooks, State Management & Tailwind UI" }
            ],
            tools: ["VS Code", "Git", "GitHub CI/CD", "Figma", "Tailwind CSS", "REST APIs", "Chrome DevTools", "Responsive Web Design"]
        },

        projects: [
            {
                title: "Developer Tool & React Admin Portfolio v2",
                stack: "HTML5, Tailwind CSS, React 18, 3D Parallax Motion",
                desc: "Website portofolio interaktif bergaya platform pengembang dengan syntax highlighting IDE, 3D mouse tilt parallax, matriks perbandingan, dan modul interaktif."
            },
            {
                title: "Dynamic Interactive Web App",
                stack: "JavaScript ES6+, REST API, CSS Grid, Modern State",
                desc: "Aplikasi web interaktif dengan filter data dinamis, integrasi API asynchronous, serta layout komponen yang modular dan efisien."
            },
            {
                title: "High-Converting Landing Page",
                stack: "UI/UX, Tailwind CSS, SEO Semantik, Modern Typography",
                desc: "Halaman landing responsif dengan tipografi modern, kartu penawaran produk, micro-animations, dan struktur semantik yang optimal untuk SEO."
            }
        ]
    };

    // ==========================================================================
    // 2. GEMINI MULTI-DOMAIN NLP REASONING & INTENT ENGINE
    // ==========================================================================
    function generateAIResponse(userQuery) {
        const q = userQuery.toLowerCase().trim();

        // 1. GREETINGS & INTRODUCTIONS
        if (/^(halo|hai|hi|hey|hello|assalamualaikum|assalamu'alaikum|p|selamat pagi|selamat siang|selamat sore|selamat malam|tes|test)\b/.test(q)) {
            return {
                text: `Halo! 👋 Saya adalah **Gemini AI Assistant** untuk portofolio **Najwan Zaki**.\n\nSaya dapat membantu Anda dengan dua hal utama:\n1. **Informasi Lengkap Najwan Zaki:** Mulai dari riwayat pendidikan, 5 pengalaman organisasi, keahlian pemrograman, hingga proyek yang telah dibuat.\n2. **Tanya Jawab Umum & Koding:** Anda juga bisa menanyakan pertanyaan seputar pemrograman web, teknologi, sains, logika, atau tips belajar.\n\nApa yang ingin Anda eksplorasi hari ini?`,
                chips: ["Siapa Najwan Zaki?", "Riwayat Pendidikan", "5 Pengalaman Organisasi", "Skill Koding", "Proyek Unggulan"],
                actions: [
                    { label: "👤 Tentang Najwan", url: "#about" },
                    { label: "📫 Hubungi Najwan", url: "#contact" }
                ]
            };
        }

        // 2. IDENTITY / BIO / ABOUT NAJWAN
        if (/siapa|tentang|profil|biodata|najwan|zaki|siapakah|biografi|latar belakang/.test(q) && !/pendidikan|sekolah|organisasi|skill|proyek|koding/.test(q)) {
            return {
                text: `**Najwan Zaki** adalah seorang **Frontend Developer & UI/UX Designer** berdedikasi tinggi asal Pandeglang, Banten, Indonesia.\n\n✨ **Sorotan Utama:**\n• **Pengalaman:** 3+ tahun mempelajari logika pemrograman dan arsitektur web modern.\n• **Fokus Keahlian:** HTML5 semantik, CSS3 animasi 60 FPS, JavaScript ES6+, dan React.js.\n• **Filosofi Desain:** *"Website bukan sekadar baris kode, melainkan jembatan komunikasi digital yang cepat diakses, estetis, dan intuitif bagi pengguna."*\n• **Aspirasi:** Menargetkan studi lanjutan di bidang Informatika / Software Engineering (ITB / ITS).`,
                chips: ["Riwayat Pendidikan", "Pengalaman Organisasi", "Keahlian Koding", "Lihat Proyek"],
                actions: [
                    { label: "👤 Lihat Profil Lengkap", url: "#about" },
                    { label: "📸 Instagram @najwanza_", url: NAJWAN_KNOWLEDGE.identity.instagramUrl, external: true }
                ]
            };
        }

        // 3. EDUCATION / JEJAK AKADEMIK
        if (/pendidikan|sekolah|kuliah|kampus|itb|its|sman 1|smpn 2|sdn|universitas|akademik|studi|target/.test(q)) {
            return {
                text: `Berikut adalah **Jejak Pendidikan & Target Akademik Najwan Zaki**:\n\n🏛 **1. Target Aspirasi Perguruan Tinggi:**\n• **ITB / ITS** — Jurusan Informatika / Software Engineering\n• *Aspirasi untuk mendalami Rekayasa Perangkat Lunak, komputasi terdistribusi, dan arsitektur cloud.*\n\n🏫 **2. SMA (2023 — 2026):**\n• **SMAN 1 Pandeglang** (Jurusan MIPA)\n• *Aktif di riset sains KIR, kepengurusan MPK, serta pengembangan web.*\n\n🏢 **3. SMP (2020 — 2023):**\n• **SMPN 2 Karang Tanjung**\n• *Pondasi awal di OSIS, Pramuka, dan logika komputer.*\n\n🎒 **4. SD (2014 — 2020):**\n• **SDN Pagadungan 01**`,
                chips: ["Pengalaman Organisasi", "Keahlian Koding", "Proyek Najwan", "Cara Hubungi"],
                actions: [
                    { label: "🎓 Buka Bagian Pendidikan", url: "#education" }
                ]
            };
        }

        // 4. ORGANIZATIONS / LEADERSHIP (5 ORGANISASI)
        if (/organisasi|leadership|kepemimpinan|pramuka|osis|kir|pensi|mpk|kegiatan/.test(q)) {
            return {
                text: `Najwan Zaki memiliki rekam jejak kepemimpinan aktif di **5 Organisasi**:\n\n1. ⚜️ **Gerakan Pramuka (2020 — 2023):**\n   • *Pasukan Inti & Pratama* (SMPN 2 Karang Tanjung & SDN Pagadungan 01)\n   • Melatih leadership, pionering, ketahanan mental, dan navigasi alam.\n\n2. 💼 **Pengurus OSIS (2021 — 2022):**\n   • *Seksi Kreativitas & Keterampilan* (SMPN 2 Karang Tanjung)\n   • Inisiator classmeeting, peringatan hari besar, dan minat seni siswa.\n\n3. 💡 **Karya Ilmiah Remaja / KIR (2023 — Sekarang):**\n   • *Anggota Aktif Riset & Web Tech* (SMAN 1 Pandeglang)\n   • Riset sains, eksperimen lab, dan pelatihan web development.\n\n4. 🎭 **Panitia Pentas Seni & HUT Sekolah (2024):**\n   • *Koordinator Tim Desain Visual & Publikasi* (SMAN 1 Pandeglang)\n   • Desain banner panggung, poster festival, feeds Instagram, dan dokumentasi.\n\n5. 🏛 **Pengurus MPK (2024 — 2025):**\n   • *Sekretaris Majelis Perwakilan Kelas* (SMAN 1 Pandeglang)\n   • Tata kelola administrasi resmi, proposal, notulensi rapat, dan aspirasi kesiswaan.`,
                chips: ["Riwayat Pendidikan", "Keahlian Koding", "Proyek yang Dibuat", "Kontak Najwan"],
                actions: [
                    { label: "👥 Lihat Galeri Organisasi", url: "#experience" }
                ]
            };
        }

        // 5. SKILLS / TECH STACK
        if (/skill|keahlian|tech stack|bahasa|koding|coding|html|css|javascript|react|tools|kemampuan/.test(q) && !/apa itu|jelaskan|belajar/.test(q)) {
            return {
                text: `Berikut adalah **Keahlian Teknis & Alat Kerja Najwan Zaki**:\n\n💻 **Core Web Languages:**\n• **HTML5 (90%):** Semantik terstruktur, SEO optimal, standar W3C, aksesibilitas.\n• **CSS3 (85%):** Modern Grid, Flexbox, 3D Parallax Tilt, Glassmorphism, 60 FPS.\n• **JavaScript ES6+ (75%):** DOM manipulation, Async/Await, Modular architecture.\n• **React.js (65%):** Component architecture, Hooks, State management & Tailwind UI.\n\n🛠 **Tooling & Workflow:**\n• VS Code, Git, GitHub CI/CD, Figma UI/UX, REST APIs, Tailwind CSS, Chrome DevTools.`,
                chips: ["Proyek Portfolio", "Filosofi Koding", "Riwayat Pendidikan", "Hubungi Najwan"],
                actions: [
                    { label: "⚡ Lihat Metrik Skill", url: "#skills" },
                    { label: "💻 GitHub @Zakyyii", url: NAJWAN_KNOWLEDGE.identity.github, external: true }
                ]
            };
        }

        // 6. PROJECTS / PORTFOLIO SHOWCASE
        if (/proyek|project|karya|showcase|aplikasi|website yang dibuat|hasil karya/.test(q)) {
            return {
                text: `Berikut beberapa **Proyek Unggulan yang Dikembangkan Najwan Zaki**:\n\n🚀 **1. Developer Tool & React Admin Portfolio v2**\n• *Teknologi:* HTML5, Tailwind CSS, React 18, 3D Parallax Motion\n• *Fitur:* Syntax highlighting IDE preview, matriks kapabilitas, dan tata letak responsif 60fps.\n\n⚡ **2. Dynamic Interactive Web App**\n• *Teknologi:* JavaScript ES6+, REST API, CSS Grid\n• *Fitur:* Filter data dinamis, integrasi API asynchronous, arsitektur modular.\n\n🎨 **3. High-Converting Landing Page**\n• *Teknologi:* UI/UX Design, Tailwind CSS, Semantic SEO\n• *Fitur:* Tipografi presisi, micro-animations, dan struktur ramah mesin pencari.`,
                chips: ["Keahlian Koding", "Riwayat Pendidikan", "Hubungi Najwan"],
                actions: [
                    { label: "📂 Jelajahi Proyek", url: "#projects" },
                    { label: "🐙 Repository di GitHub", url: NAJWAN_KNOWLEDGE.identity.github, external: true }
                ]
            };
        }

        // 6.5. CV / ATS RESUME / PORTFOLIO DOWNLOAD
        if (/cv|resume|download|unduh|ats|pdf|berkas|dokumen|portfolio pdf|portofolio pdf/.test(q)) {
            return {
                text: `📄 **Download Portfolio & Resume ATS Najwan Zaki:**\n\nAnda dapat mengunduh berkas resmi **Portfolio ATS (Format PDF)** yang memuat:\n• Ringkasan keahlian teknis (HTML5, CSS3, JS, React)\n• 5 Rekam jejak kepemimpinan & organisasi\n• Riwayat pendidikan & profil pengembang\n\n⬇️ Klik tombol di bawah untuk langsung mengunduh file PDF ke perangkat Anda.`,
                chips: ["Keahlian Koding", "Proyek Portfolio", "Hubungi Najwan"],
                actions: [
                    { label: "📥 Download Portfolio ATS (PDF)", url: "assets/docs/portfolio-ats.pdf", download: "Portfolio-ATS-Najwan-Zaki.pdf" },
                    { label: "📫 Hubungi Najwan", url: "#contact" }
                ]
            };
        }

        // 7. CONTACT & SOCIAL MEDIA
        if (/kontak|hubungi|email|instagram|sosmed|social media|alamat|lokasi|dm|pesan/.test(q)) {
            return {
                text: `Anda dapat menghubungi **Najwan Zaki** melalui saluran berikut:\n\n📧 **Email:** [najwanzaki1230@gmail.com](mailto:najwanzaki1230@gmail.com)\n📸 **Instagram:** [@najwanza_](https://www.instagram.com/najwanza_/)\n🐙 **GitHub:** [github.com/Zakyyii](https://github.com/Zakyyii)\n📍 **Lokasi:** Pandeglang, Banten, Indonesia\n\n💬 *Najwan sangat terbuka untuk diskusi proyek web development, kolaborasi UI/UX, maupun bertukar wawasan seputar teknologi.*`,
                chips: ["Tentang Najwan", "Keahlian Koding", "Lihat Proyek"],
                actions: [
                    { label: "✉️ Kirim Email Langsung", url: "mailto:najwanzaki1230@gmail.com", external: true },
                    { label: "📝 Formulir Kontak di Web", url: "#contact" }
                ]
            };
        }

        // 8. GENERAL PROGRAMMING & TECH QUESTIONS (GEMINI AI KNOWLEDGE)
        if (/react|javascript|css|html|flexbox|grid|api|git|frontend|backend|clean code|async|await|promise|tailwind/.test(q)) {
            // Topic-specific detailed Gemini response
            if (/flexbox|grid/.test(q)) {
                return {
                    text: `💡 **Perbedaan CSS Flexbox vs CSS Grid:**\n\n1. **Flexbox (1 Dimensi):**\n• Didesain untuk tata letak **satu arah** (baris *atau* kolom).\n• Sangat ideal untuk komponen UI seperti navbar, tombol sejajar, atau daftar item sederhana.\n\n2. **CSS Grid (2 Dimensi):**\n• Didesain untuk tata letak **dua arah sekaligus** (baris *dan* kolom).\n• Sangat ideal untuk struktur halaman utama, galeri foto, atau dashboard bento-grid.\n\n✨ *Tips Terbaik:* Gunakan CSS Grid untuk tata letak halaman makro, dan gunakan Flexbox untuk penataan elemen mikro di dalam komponen.`,
                    chips: ["Skill Koding Najwan", "Apa itu Clean Code?", "Tips Belajar Web Dev"],
                    actions: [{ label: "⚡ Lihat Skill Najwan", url: "#skills" }]
                };
            }

            if (/async|await|promise/.test(q)) {
                return {
                    text: `⚡ **Penjelasan Asynchronous JavaScript (Promise & Async/Await):**\n\n• **Konsep Dasar:** JavaScript bersifat *single-threaded*. Operasi asynchronous memungkinkan proses lambat (seperti fetch API database) berjalan di latar belakang tanpa membekukan antarmuka pengguna (UI).\n\n• **Contoh Sintaks Async/Await:**\n\`\`\`javascript\nasync function loadData() {\n    try {\n        const res = await fetch('/api/data');\n        const data = await res.json();\n        console.log(data);\n    } catch (err) {\n        console.error(err);\n    }\n}\n\`\`\`\n• **Keunggulan:** Membuat alur kode asynchronous terbaca rapi layaknya kode synchronous.`,
                    chips: ["Skill JavaScript Najwan", "Proyek Web Najwan", "Tentang Najwan"]
                };
            }

            if (/clean code/.test(q)) {
                return {
                    text: `🧼 **Prinsip Utama Clean Code dalam Web Development:**\n\n1. **Meaningful Names:** Beri nama variabel dan fungsi yang jelas mendeskripsikan tujuannya (misal \`calculateTotalPrice()\` alih-alih \`calc()\`).\n2. **Single Responsibility (SRP):** Satu fungsi hanya melakukan satu tugas spesifik dengan baik.\n3. **KISS & DRY:** *Keep It Simple, Stupid* & *Don't Repeat Yourself*.\n4. **Semantic HTML & Modular CSS:** Gunakan tag semantik standar W3C untuk kemudahan pemeliharaan dan SEO maksimal.`,
                    chips: ["Filosofi Koding Najwan", "Skill Najwan", "Proyek Portfolio"]
                };
            }

            // General web development overview
            return {
                text: `💻 **Wawasan Seputar Web Development:**\n\nPengembangan web modern berpusat pada perpaduan tiga pilar:\n1. **Struktur (HTML5 Semantik):** Fondasi data yang ramah mesin pencari (SEO) dan pembaca layar.\n2. **Presentasi (CSS3 & Glassmorphism):** Estetika responsif dengan animasi 60 FPS tanpa frame-drop.\n3. **Interaktivitas (JavaScript ES6+ & Frameworks):** Logika modular, manajemen state reaktif, dan performa tinggi.\n\nNajwan Zaki mengimplementasikan standar ini dalam setiap proyek yang dikembangkannya.`,
                chips: ["Skill Koding Najwan", "Proyek Portfolio", "Filosofi Desain"]
            };
        }

        // 9. GENERAL SCIENCE, KNOWLEDGE, OR RANDOM QUESTIONS (GEMINI EXPERT RESPONDER)
        if (/apa itu|kenapa|mengapa|bagaimana|jelaskan|resep|cerita|fakta|tips|motivasi|ai|artifisial/.test(q)) {
            if (/ai|artificial intelligence|kecerdasan buatan|gemini|llm/.test(q)) {
                return {
                    text: `🤖 **Tentang Artificial Intelligence & LLM:**\n\n• **Definisi:** Kecerdasan Buatan (AI) adalah bidang ilmu komputer yang bertujuan menciptakan sistem yang mampu meniru penalaran, pemahaman bahasa, dan pemecahan masalah manusia.\n• **Large Language Models (LLM):** Model pembelajaran mendalam yang dilatih pada dataset teks skala masif untuk memahami konteks dan menghasilkan teks natural.\n• **Penerapan di Web:** Digunakan untuk chatbot cerdas, personalisasi konten, asistensi koding, dan automasi cerdas.`,
                    chips: ["Siapa Najwan Zaki?", "Keahlian Koding", "Proyek Portfolio"]
                };
            }

            if (/tips|belajar|sukses|motivasi/.test(q)) {
                return {
                    text: `🎯 **Tips Belajar & Pengembangan Diri yang Efektif:**\n\n1. **Konsistensi Harian:** Belajar 1 jam setiap hari jauh lebih berdampak daripada 10 jam dalam satu malam.\n2. **Project-Based Learning:** Bangun proyek nyata segera setelah mempelajari teori dasar.\n3. **Pahami Fondasi:** Kuasai logika dasar sebelum berpindah ke framework yang sedang populer.\n4. **Aktif Berorganisasi:** Kembangkan *soft skill*, komunikasi, dan kepemimpinan di samping kemampuan teknis.`,
                    chips: ["Pendidikan Najwan", "Pengalaman Organisasi", "Skill Koding"]
                };
            }

            // General smart breakdown
            return {
                text: `✨ **Tinjauan Analitis:**\n\nMengenai topik *"${userQuery}"*:\n\nDalam dunia sains dan teknologi modern, pemahaman yang mendalam dibangun atas analisis fakta, eksperimen, dan eksplorasi berkelanjutan.\n\nJika ada aspek spesifik mengenai topik ini atau seputar teknologi web dan portofolio **Najwan Zaki**, silakan tanyakan lebih lanjut!`,
                chips: ["Siapa Najwan Zaki?", "Riwayat Pendidikan", "Keahlian Koding", "Kontak Najwan"]
            };
        }

        // 10. POLITE FALLBACK (FOCUSED & HELPFUL GEMINI TONE)
        return {
            text: `Saya memahami ketertarikan Anda mengenai *"${userQuery}"*.\n\nSebagai asisten cerdas portofolio, berikut topik-topik terverifikasi yang dapat kita diskusikan bersama:\n• **Profil & Latar Belakang** (Najwan Zaki, Frontend Developer & UI/UX)\n• **Jejak Pendidikan** (Target ITB/ITS, SMAN 1 Pandeglang)\n• **5 Pengalaman Organisasi** (Pramuka, OSIS, KIR, Panitia Pensi, MPK)\n• **Keahlian Teknis & Tools** (HTML5, CSS3, JS ES6+, React, Git, Figma)\n• **Proyek Web Unggulan** (Developer Tool, Web App, Landing Page)\n• **Pertanyaan Pemrograman & Koding** (HTML, CSS, JS, React, Clean Code)`,
            chips: ["Siapa Najwan Zaki?", "Riwayat Pendidikan", "5 Pengalaman Organisasi", "Skill Koding", "Kontak Najwan"],
            actions: [
                { label: "👤 Profil Najwan", url: "#about" },
                { label: "📫 Hubungi Najwan", url: "#contact" }
            ]
        };
    }

    // ==========================================================================
    // 3. SYNTHESIZED SOUND EFFECT (WEB AUDIO API - ZERO EXTERNAL ASSETS)
    // ==========================================================================
    let isSoundMuted = false;

    function playMessageChime(type = 'receive') {
        if (isSoundMuted) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (!AudioContext) return;
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'receive') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(587.33, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.12);
                gain.gain.setValueAtTime(0.08, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.25);
            } else if (type === 'send') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.08);
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.15);
            }
        } catch (e) {
            // Audio policy graceful fallback
        }
    }

    // ==========================================================================
    // 4. AI SERVICE DOM INJECTION & CONTROLLER
    // ==========================================================================
    function createAIServiceWidget() {
        if (document.getElementById('ai-service-widget')) return;

        const widgetContainer = document.createElement('div');
        widgetContainer.id = 'ai-service-widget';

        widgetContainer.innerHTML = `
            <!-- Launcher Button -->
            <button class="ai-launcher-btn" id="ai-launcher-btn" aria-label="Buka Gemini AI Assistant" title="Tanya AI seputar Najwan & Koding">
                <div class="ai-launcher-ring"></div>
                <i class="fas fa-robot" id="ai-launcher-icon"></i>
                <span class="ai-status-badge"></span>
            </button>
            <div class="ai-launcher-hint" id="ai-launcher-hint">
                <i class="fas fa-sparkles" style="color: #38bdf8;"></i>
                <span>Tanya AI Gemini</span>
            </div>

            <!-- Chat Window -->
            <div class="ai-chat-window" id="ai-chat-window">
                <!-- Header -->
                <div class="ai-chat-header">
                    <div class="ai-header-info">
                        <div class="ai-avatar-icon">
                            <i class="bx bx-bot"></i>
                        </div>
                        <div class="ai-header-text">
                            <h3>Zakyy AI Copilot <span style="font-size: 0.65rem; background: rgba(56,189,248,0.2); color: #38bdf8; border: 1px solid rgba(56,189,248,0.4); padding: 1px 6px; border-radius: 9999px;">Gemini Powered</span></h3>
                            <p><span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #10b981;"></span> Online • Siap Menjawab</p>
                        </div>
                    </div>
                    <div class="ai-header-actions">
                        <button class="ai-header-btn" id="ai-sound-toggle" title="Suara On/Off">
                            <i class="fas fa-volume-up" id="ai-sound-icon"></i>
                        </button>
                        <button class="ai-header-btn" id="ai-clear-chat" title="Bersihkan Percakapan">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                        <button class="ai-header-btn" id="ai-close-chat" title="Tutup Chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>

                <!-- Messages Body -->
                <div class="ai-chat-body" id="ai-chat-body">
                    <!-- Initial Welcome Message -->
                    <div class="ai-message bot">
                        <div class="ai-msg-avatar"><i class="bx bx-bot"></i></div>
                        <div class="ai-msg-bubble">
                            Halo! 👋 Saya <strong>Zakyy AI Copilot</strong> (Gemini Intelligence Engine). Saya siap menjawab pertanyaan Anda mengenai rekam jejak, pendidikan, organisasi, keahlian koding, proyek <strong>Najwan Zaki</strong>, maupun topik pemrograman web secara umum.<br><br>
                            Silakan ketik pertanyaan Anda atau klik salah satu topik cepat di bawah ini! 👇
                            <div class="ai-msg-actions">
                                <span class="ai-action-chip" onclick="window.askAIQuestion('Siapa Najwan Zaki?')"><i class="fas fa-user"></i> Siapa Najwan?</span>
                                <span class="ai-action-chip" onclick="window.askAIQuestion('Riwayat Pendidikan Najwan')"><i class="fas fa-graduation-cap"></i> Pendidikan</span>
                                <span class="ai-action-chip" onclick="window.askAIQuestion('Pengalaman 5 Organisasi')"><i class="fas fa-users"></i> 5 Organisasi</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Suggestion Chips Bar -->
                <div class="ai-chips-bar" id="ai-chips-bar">
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Siapa Najwan Zaki?')">👤 Profil</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Riwayat Pendidikan Najwan')">🎓 Pendidikan</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Pengalaman 5 Organisasi')">👥 5 Organisasi</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Skill & Tech Stack')">⚡ Skill Koding</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Proyek Portfolio')">🚀 Proyek</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Bagaimana cara menghubungi Najwan?')">📫 Kontak</button>
                    <button class="ai-suggestion-chip" onclick="window.askAIQuestion('Perbedaan Flexbox dan Grid')">💡 Flexbox vs Grid</button>
                </div>

                <!-- Input Form -->
                <div class="ai-chat-input-area">
                    <form class="ai-input-form" id="ai-input-form">
                        <input type="text" class="ai-chat-input" id="ai-chat-input" placeholder="Tanyakan apa saja tentang Najwan atau koding..." autocomplete="off" />
                        <button type="submit" class="ai-send-btn" id="ai-send-btn" title="Kirim Pesan">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        `;

        document.body.appendChild(widgetContainer);

        // Elements
        const launcherBtn = document.getElementById('ai-launcher-btn');
        const closeBtn = document.getElementById('ai-close-chat');
        const clearBtn = document.getElementById('ai-clear-chat');
        const soundToggleBtn = document.getElementById('ai-sound-toggle');
        const soundIcon = document.getElementById('ai-sound-icon');
        const chatForm = document.getElementById('ai-input-form');
        const chatInput = document.getElementById('ai-chat-input');
        const chatBody = document.getElementById('ai-chat-body');
        const chipsBar = document.getElementById('ai-chips-bar');

        let isChatOpen = false;
        let isBotTyping = false;

        function toggleChat(openState) {
            isChatOpen = openState !== undefined ? openState : !isChatOpen;
            if (isChatOpen) {
                widgetContainer.classList.add('chat-open');
                setTimeout(() => chatInput.focus(), 300);
            } else {
                widgetContainer.classList.remove('chat-open');
            }
        }

        launcherBtn.addEventListener('click', () => toggleChat());
        closeBtn.addEventListener('click', () => toggleChat(false));

        clearBtn.addEventListener('click', () => {
            chatBody.innerHTML = `
                <div class="ai-message bot">
                    <div class="ai-msg-avatar"><i class="bx bx-bot"></i></div>
                    <div class="ai-msg-bubble">
                        Percakapan dibersihkan. Silakan tanyakan hal lain seputar Najwan Zaki atau koding! 😊
                    </div>
                </div>
            `;
        });

        soundToggleBtn.addEventListener('click', () => {
            isSoundMuted = !isSoundMuted;
            if (isSoundMuted) {
                soundIcon.className = 'fas fa-volume-mute';
                soundIcon.style.color = '#ff7b72';
            } else {
                soundIcon.className = 'fas fa-volume-up';
                soundIcon.style.color = '#8b949e';
                playMessageChime('send');
            }
        });

        function formatMarkdownToHTML(rawText) {
            let html = rawText
                .replace(/```([\s\S]*?)```/g, '<pre style="background: rgba(0,0,0,0.5); padding: 0.6rem; border-radius: 8px; font-family: monospace; font-size: 0.75rem; overflow-x: auto; margin: 0.5rem 0;"><code>$1</code></pre>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/\*(.*?)\*/g, '<em>$1</em>')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                .replace(/\n/g, '<br>');
            return html;
        }

        function addUserMessage(text) {
            const msgEl = document.createElement('div');
            msgEl.className = 'ai-message user';
            msgEl.innerHTML = `
                <div class="ai-msg-avatar"><i class="fas fa-user"></i></div>
                <div class="ai-msg-bubble">${text.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
            `;
            chatBody.appendChild(msgEl);
            chatBody.scrollTop = chatBody.scrollHeight;
            playMessageChime('send');
        }

        function showTypingIndicator() {
            const typingEl = document.createElement('div');
            typingEl.className = 'ai-message bot ai-typing-wrapper';
            typingEl.id = 'ai-typing-temp';
            typingEl.innerHTML = `
                <div class="ai-msg-avatar"><i class="bx bx-bot"></i></div>
                <div class="ai-msg-bubble">
                    <div class="ai-typing-indicator">
                        <span class="ai-typing-dot"></span>
                        <span class="ai-typing-dot"></span>
                        <span class="ai-typing-dot"></span>
                    </div>
                </div>
            `;
            chatBody.appendChild(typingEl);
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function removeTypingIndicator() {
            const typingEl = document.getElementById('ai-typing-temp');
            if (typingEl) typingEl.remove();
        }

        function addBotResponse(aiResult) {
            removeTypingIndicator();

            const msgEl = document.createElement('div');
            msgEl.className = 'ai-message bot';

            let actionsHTML = '';
            if (aiResult.actions && aiResult.actions.length > 0) {
                actionsHTML = '<div class="ai-msg-actions">';
                aiResult.actions.forEach(act => {
                    if (act.download) {
                        actionsHTML += `<a href="${act.url}" download="${act.download}" class="ai-action-chip"><i class="fas fa-file-download" style="color: #38bdf8;"></i> ${act.label}</a>`;
                    } else if (act.external) {
                        actionsHTML += `<a href="${act.url}" target="_blank" rel="noopener noreferrer" class="ai-action-chip"><i class="fas fa-external-link-alt"></i> ${act.label}</a>`;
                    } else {
                        actionsHTML += `<a href="${act.url}" class="ai-action-chip" onclick="document.getElementById('ai-service-widget').classList.remove('chat-open');"><i class="fas fa-arrow-right"></i> ${act.label}</a>`;
                    }
                });
                actionsHTML += '</div>';
            }

            const formattedContent = formatMarkdownToHTML(aiResult.text);

            msgEl.innerHTML = `
                <div class="ai-msg-avatar"><i class="bx bx-bot"></i></div>
                <div class="ai-msg-bubble">
                    <div class="ai-bubble-content">${formattedContent}</div>
                    ${actionsHTML}
                </div>
            `;

            chatBody.appendChild(msgEl);
            chatBody.scrollTop = chatBody.scrollHeight;
            playMessageChime('receive');

            if (aiResult.chips && aiResult.chips.length > 0) {
                chipsBar.innerHTML = '';
                aiResult.chips.forEach(chipText => {
                    const chipBtn = document.createElement('button');
                    chipBtn.className = 'ai-suggestion-chip';
                    chipBtn.textContent = chipText;
                    chipBtn.onclick = () => window.askAIQuestion(chipText);
                    chipsBar.appendChild(chipBtn);
                });
            }

            isBotTyping = false;
        }

        function handleUserQuery(queryText) {
            const cleanText = queryText.trim();
            if (!cleanText || isBotTyping) return;

            isBotTyping = true;
            addUserMessage(cleanText);
            chatInput.value = '';

            showTypingIndicator();

            const thinkingTime = Math.min(Math.max(cleanText.length * 16, 400), 850);

            setTimeout(() => {
                const response = generateAIResponse(cleanText);
                addBotResponse(response);
            }, thinkingTime);
        }

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleUserQuery(chatInput.value);
        });

        window.askAIQuestion = (question) => {
            if (!isChatOpen) toggleChat(true);
            handleUserQuery(question);
        };

        window.openAIAssistant = () => toggleChat(true);
        window.closeAIAssistant = () => toggleChat(false);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createAIServiceWidget);
    } else {
        createAIServiceWidget();
    }

})();
