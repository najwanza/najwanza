# 📁 Section 08: Organization & Leadership (`sections/08-experience/`)

Folder ini mengatur tab pengalaman organisasi kesiswaan (Pramuka, OSIS, KIR, Panitia Pensi Sambadha Victory, dan MPK) serta galeri foto kegiatan masing-masing.

## 📄 Berkas di Folder ini:
1. **`experience.html`**: Markup HTML tab switcher dan panel deskripsi organisasi.
2. **`content.json`**: Data teks organisasi, periode, peran, dan direktori foto.

## ✏️ Cara Mengedit:
- **Mengubah Teks Tab & Judul Jabatan**: Edit teks di `<button class="dev-org-tab-btn">` dan `<h3>` di dalam masing-masing `<div class="dev-org-panel">`.
- **Mengubah Deskripsi Pengalaman**: Edit teks `<p class="dev-org-desc">` pada panel organisasi yang diinginkan.
- **Mengganti Foto Galeri Dokumentasi**:
  - Letakkan foto-foto di folder masing-masing:
    - Pramuka: `assets/images/org/pramuka/foto-1.jpg` s/d `foto-10.jpg`
    - OSIS: `assets/images/org/osis/foto-1.jpg` s/d `foto-10.jpg`
    - KIR: `assets/images/org/kir/foto-1.jpg` s/d `foto-10.jpg`
    - Panitia Pensi: `assets/images/org/pensi/foto-1.jpg` s/d `foto-10.jpg`
    - MPK: `assets/images/org/mpk/foto-1.jpg` s/d `foto-10.jpg`
  - Sesuaikan caption pada `<div class="org-photo-caption">Judul Foto</div>`.
