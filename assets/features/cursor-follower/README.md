# 📁 Feature: Cursor Follower (`assets/features/cursor-follower/`)

Modul dual-layer cursor follower untuk desktop. Menampilkan dua lingkaran (inner + outer) yang mengikuti posisi mouse dengan efek LERP delay.

## 📄 Berkas:
- **`cursor.js`**: Logika utama cursor follower (inner dot + outer ring).

## 🖱️ Fitur:
- Dua layer lingkaran cursor (inner cepat, outer delayed LERP).
- Hanya aktif di perangkat desktop (>768px).
- Otomatis hilang saat mouse keluar viewport.

## ⚙️ Cara Mengubah:
- **Ukuran cursor**: Edit `width` dan `height` pada selector `.cursor-inner` / `.cursor-outer` di `style.css`.
- **Kecepatan LERP**: Edit nilai LERP factor di dalam `cursor.js`.
