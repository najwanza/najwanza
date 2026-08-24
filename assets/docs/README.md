# 📄 Panduan File PDF Portfolio ATS — Najwan Zaki

Folder ini digunakan untuk menyimpan file **PDF Portfolio ATS / Resume** yang dapat langsung diunduh oleh pengunjung website dari tombol **Hero / Overview** di halaman utama.

---

## 📂 Lokasi File

```text
assets/docs/
├── portfolio-ats.pdf   ← 📄 File PDF yang didownload oleh user
└── README.md           ← 📖 Panduan ini
```

---

## 🎯 Cara Mengganti File PDF dengan PDF Asli Anda

1. **Siapkan file PDF** Portfolio / CV ATS Anda.
2. **Ubah nama file** menjadi:
   ```text
   portfolio-ats.pdf
   ```
3. **Copy dan timpa (overwrite)** file `portfolio-ats.pdf` yang ada di dalam folder:
   ```text
   assets/docs/portfolio-ats.pdf
   ```
4. **Selesai!** Saat pengunjung menekan tombol **"Download Portfolio ATS (PDF)"**, browser akan langsung mendownload file PDF terbaru Anda dengan nama `Portfolio-ATS-Najwan-Zaki.pdf`.

---

## 💡 Tips & Kelebihan Fitur Download Ini

- **Atribut `download`**: Menggunakan tag HTML5 `<a href="assets/docs/portfolio-ats.pdf" download="Portfolio-ATS-Najwan-Zaki.pdf">`, sehingga file otomatis langsung terdownload ke folder *Downloads* milik pengunjung tanpa harus membuka tab baru secara manual.
- **Support Hosting**: Saat di-deploy ke hosting (cPanel, Vercel, Netlify, Github Pages), pastikan folder `assets/docs/` ikut di-upload bersama seluruh file website.
