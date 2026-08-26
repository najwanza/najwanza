# 📁 Section 02: Hero (`sections/02-hero/`)

Folder ini mengatur bagian pembuka utama (Hero Section), judul, subtitle, tombol download ATS, baris CLI, dan jendela simulasi Code Editor IDE.

## 📄 Berkas di Folder ini:
1. **`hero.html`**: Markup HTML lengkap untuk Hero section.
2. **`content.json`**: Nilai teks, judul, status peran, dan data konfigurasi code editor.

## ✏️ Cara Mengedit:
- **Mengubah Badge Rilis**: Cari `id="live-hero-badge"` dan ubah teks di dalamnya (misal: `Soon to be a Frontend Engineer`).
- **Mengubah Judul Headline**: Edit teks pada `id="live-hero-title-line"` dan `id="live-hero-highlight"`.
- **Mengubah Deskripsi Subtitle**: Edit teks pada `id="live-hero-subtitle"`.
- **Mengubah Link/File Resume ATS**: Cari tag `<a>` dengan `id="btn-download-ats"` dan ubah atribut `href` atau `download`.
- **Mengubah Isi Code Editor Tab**:
  - `najwan.config.ts`: Edit baris-baris kode di dalam `<div id="tab-config">`.
  - `skills.json`: Edit persentase/data bahasa di dalam `<div id="tab-skills">`.
  - `education.sql`: Edit query riwayat di dalam `<div id="tab-edu">`.
  - `leadership.md`: Edit daftar kepemimpinan di dalam `<div id="tab-exp">`.
