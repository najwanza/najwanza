# 📦 Modul Fitur-Fitur Website Portofolio — Najwan Zaki

Seluruh fitur di website ini telah dipisahkan menjadi folder dan file independen agar mudah dipelajari, dibaca, dan dikelola tanpa saling tumpang tindih.

---

## 📂 Struktur Folder Fitur (`assets/features/`)

```text
assets/
├── 📁 admin/                         ← [MODUL 1] Secret Admin Panel (React 18 + Tailwind)
│   ├── admin.css
│   └── admin.js
│
├── 📁 ai-service/                    ← [MODUL 2] AI Copilot Assistant (Gemini Knowledge Engine)
│   ├── ai-service.css
│   ├── ai-service.js
│   └── README.md
│
├── 📁 docs/                          ← [MODUL 3] Dokumen PDF ATS Resume
│   ├── portfolio-ats.pdf
│   └── README.md
│
├── 📁 features/                      ← [MODUL FITUR INTERAKTIF FRONTEND]
│   │
│   ├── 📁 welcome-intro/             ← Animasi Pembuka ("Selamat" -> "datang" -> "di" ...)
│   │   └── welcome-intro.js
│   │
│   ├── 📁 particles-canvas/          ← Latar Belakang Jaring Partikel Fisika (Canvas 2D)
│   │   └── particles.js
│   │
│   ├── 📁 cursor-follower/           ← Dual-Layer Glowing Cursor Follower (Desktop)
│   │   └── cursor.js
│   │
│   ├── 📁 parallax-tilt/             ← 60 FPS 3D Card Tilt & Bidirectional Scroll Parallax
│   │   └── parallax-tilt.js
│   │
│   ├── 📁 typewriter/                ← Zero-CLS Locked Hero Typewriter Effect
│   │   └── typewriter.js
│   │
│   └── 📁 ui-interactions/           ← Navigasi Mobile, Tabs Preview, CLI Copy, Observers
│       └── ui-interactions.js
│
├── 📁 images/
│   └── 📁 org/                       ← Galeri Foto 5 Organisasi (Pramuka, OSIS, KIR, Pensi, MPK)
│
├── 📁 js/
│   └── main.js                       ← Master Hub Orchestrator
│
└── 📁 styles/
    └── style.css                     ← Core Design System & Tokens
```

---

## 🎯 Panduan Singkat untuk Mengedit Fitur Tertentu

| Ingin Mengedit Fitur | Buka File di Folder |
| :--- | :--- |
| **Admin Panel & Login** | `assets/admin/admin.js` |
| **AI Assistant / Bot Gemini** | `assets/ai-service/ai-service.js` |
| **Animasi Sambutan Layar Awal** | `assets/features/welcome-intro/welcome-intro.js` |
| **Partikel & Garis Latar Belakang** | `assets/features/particles-canvas/particles.js` |
| **Kursor Mouse Glow** | `assets/features/cursor-follower/cursor.js` |
| **Efek 3D Miring & Parallax Scroll** | `assets/features/parallax-tilt/parallax-tilt.js` |
| **Teks Mengetik di Bagian Hero** | `assets/features/typewriter/typewriter.js` |
| **Tabs Code Preview / Menu / Form** | `assets/features/ui-interactions/ui-interactions.js` |
| **File Download PDF ATS** | `assets/docs/portfolio-ats.pdf` |
| **Foto-foto Leadership** | `assets/images/org/` |
