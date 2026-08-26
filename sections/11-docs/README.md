# 📁 Section 11: Docs & API (`sections/11-docs/`)

Folder ini mengatur kartu-kartu shortcut bergaya REST API endpoint ke berbagai section portofolio.

## 📄 Berkas di Folder ini:
1. **`docs.html`**: Markup HTML kartu docs dengan badge metode GET/POST.
2. **`content.json`**: Data endpoint path, judul, deskripsi, dan link internal.

## ✏️ Cara Mengedit:
- **Mengubah Endpoint Path**: Edit teks pada `<span class="docs-method-badge">GET /api/v1/profile</span>`.
- **Mengubah Judul/Deskripsi Kartu**: Edit teks pada `<h4>` dan `<p>` dalam setiap `<a class="docs-card">`.
- **Mengubah Link Tujuan**: Ganti `href="#about"` pada kartu yang diinginkan.
- **Menambah Endpoint Baru**: Salin blok `<a class="docs-card tilt-card-3d">...</a>` dan sesuaikan isinya.
