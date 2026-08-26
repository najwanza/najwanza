# 📁 Feature: Parallax Tilt (`assets/features/parallax-tilt/`)

Modul 3D card tilt & bidirectional parallax scroll engine. Menggunakan `requestAnimationFrame` + LERP untuk fluid parallax.

## 📄 Berkas:
- **`parallax-tilt.js`**: Logika utama tilt 3D + parallax scroll bidirectional.

## 🎯 Fitur:
- **3D Tilt**: Kartu dengan class `tilt-card-3d` mendapat efek hover 3D perspektif.
- **Bidirectional Scroll**: Elemen `.reveal-on-scroll` muncul saat scroll ke bawah (`.in-view`) dan menghilang saat scroll ke atas (`.exit-up`).
- **LERP Depth Parallax**: Latar belakang menggunakan interpolasi linear untuk kedalaman paralaks halus.
- **Counter & Skill Bar Reset**: Angka statistik dan progress bar di-reset saat keluar viewport, lalu di-animate ulang saat masuk viewport.
- **Stagger Delays**: Class `.delay-1` s/d `.delay-8` untuk animasi bertahap.

## ⚙️ Cara Mengubah:
- **Intensitas tilt**: Edit `tiltIntensity` di dalam `parallax-tilt.js`.
- **Threshold viewport**: Edit `scrollThreshold` untuk mengatur kapan elemen dianggap masuk/keluar viewport.
- **Kecepatan LERP**: Edit `lerpFactor` di dalam loop animasi.
