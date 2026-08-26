# 📁 Section 09: Skills (`sections/09-skills/`)

Folder ini mengatur baris progress bar tingkat kemahiran bahasa web (HTML5, CSS3, JavaScript, React) serta badge alur kerja / toolchain.

## 📄 Berkas di Folder ini:
1. **`skills.html`**: Markup HTML kartu skill bar dan daftar tools.
2. **`content.json`**: Data persentase, nama bahasa/tools, dan ikon.

## ✏️ Cara Mengedit:
- **Mengubah Persentase Skill**:
  - Ganti nilai `data-width="80%"` pada `<div class="dev-skill-track"><span data-width="80%"></span></div>`.
  - Ganti teks persentase visual pada `<span style="color: var(--syn-tag);">80%</span>`.
- **Menambah/Mengedit Bahasa Baru**: Salin blok `<div class="dev-skill-bar-row">...</div>` dan sesuaikan nama serta persentasenya.
- **Menambah Toolchain Badge**: Tambahkan tag `<span class="dev-tag-badge"><i class="bx bxl-..."></i> Nama Tool</span>`.
