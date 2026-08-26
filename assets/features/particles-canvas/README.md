# 📁 Feature: Particles Canvas (`assets/features/particles-canvas/`)

Modul latar belakang interaktif partikel canvas. Menampilkan titik-titik bergerak acak yang saling terhubung dengan garis saat berdekatan.

## 📄 Berkas:
- **`particles.js`**: Logika utama partikel animasi canvas interaktif.

## 🎯 Fitur:
- Partikel bergerak acak di latar belakang.
- Garis koneksi muncul saat dua partikel berdekatan (proximity-based).
- Interaktif: partikel bereaksi terhadap posisi kursor mouse.
- Responsif: jumlah partikel menyesuaikan ukuran layar.

## ⚙️ Cara Mengubah:
- **Jumlah partikel**: Edit `particleCount` di dalam `particles.js`.
- **Warna partikel**: Edit `particleColor` (format RGBA).
- **Jarak koneksi garis**: Edit `connectionDistance`.
