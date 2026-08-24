# 📸 Panduan Foto Section Leadership — Najwan Zaki Portfolio

Folder ini berisi **slot foto** untuk section **"Organization & Leadership"** di website portofolio.

---

## 📂 Struktur Folder

```
assets/images/org/
├── pramuka/          ← 10 foto kegiatan Gerakan Pramuka
│   ├── foto-1.jpg
│   ├── foto-2.jpg
│   └── ... (hingga foto-10.jpg)
├── osis/             ← 10 foto kegiatan Pengurus OSIS
│   ├── foto-1.jpg
│   └── ...
├── kir/              ← 10 foto kegiatan KIR (Karya Ilmiah Remaja)
│   ├── foto-1.jpg
│   └── ...
├── pensi/            ← 10 foto kegiatan Panitia Pentas Seni & HUT
│   ├── foto-1.jpg
│   └── ...
└── mpk/              ← 10 foto kegiatan Pengurus MPK
    ├── foto-1.jpg
    └── ...
```

---

## 🎯 Cara Mengganti Foto

### ✅ Cara Termudah (Copy-Paste Nama File)

1. Siapkan foto Anda dalam format **JPG / PNG / WebP**
2. Ubah nama file sesuai slot:
   - `foto-1.jpg` → foto pertama di marquee
   - `foto-2.jpg` → foto kedua
   - ... hingga `foto-10.jpg`
3. Copy foto ke dalam folder organisasi yang sesuai:
   - Foto Pramuka → `pramuka/`
   - Foto OSIS → `osis/`
   - Foto KIR → `kir/`
   - Foto Pentas Seni → `pensi/`
   - Foto MPK → `mpk/`
4. Upload semua file ke hosting **bersama folder ini**
5. **Selesai!** Foto langsung tampil di website

---

## 📋 Daftar Slot Foto per Organisasi

### 1. 🟡 Pramuka (`pramuka/`)
| File | Caption Default |
|---|---|
| `foto-1.jpg` | 1. Perkemahan |
| `foto-2.jpg` | 2. Api Unggun |
| `foto-3.jpg` | 3. Pionering |
| `foto-4.jpg` | 4. Jelajah Alam |
| `foto-5.jpg` | 5. PBB (Baris Berbaris) |
| `foto-6.jpg` | 6. Upacara |
| `foto-7.jpg` | 7. Kerjasama Regu |
| `foto-8.jpg` | 8. Semaphore |
| `foto-9.jpg` | 9. Bakti Lingkungan |
| `foto-10.jpg` | 10. Kecakapan |

### 2. 🔵 OSIS (`osis/`)
| File | Caption Default |
|---|---|
| `foto-1.jpg` | 1. Tim OSIS |
| `foto-2.jpg` | 2. Rapat OSIS |
| `foto-3.jpg` | 3. Classmeeting |
| `foto-4.jpg` | 4. Bakti Sosial |
| `foto-5.jpg` | 5. Peringatan Hari Besar |
| `foto-6.jpg` | 6. LDKS |
| `foto-7.jpg` | 7. Pentas Seni |
| `foto-8.jpg` | 8. Kerjasama Tim |
| `foto-9.jpg` | 9. Literasi |
| `foto-10.jpg` | 10. Pelantikan |

### 3. 🟢 KIR (`kir/`)
| File | Caption Default |
|---|---|
| `foto-1.jpg` | 1. Eksperimen |
| `foto-2.jpg` | 2. Uji Lab |
| `foto-3.jpg` | 3. Coding Web |
| `foto-4.jpg` | 4. Diskusi |
| `foto-5.jpg` | 5. Perangkat Cerdas |
| `foto-6.jpg` | 6. Workshop Tech |
| `foto-7.jpg` | 7. Aplikasi |
| `foto-8.jpg` | 8. Analisis Data |
| `foto-9.jpg` | 9. Presentasi |
| `foto-10.jpg` | 10. Pameran Sains |

### 4. 🟣 Panitia Pensi (`pensi/`)
| File | Caption Default |
|---|---|
| `foto-1.jpg` | 1. Panggung Utama |
| `foto-2.jpg` | 2. Kemeriahan |
| `foto-3.jpg` | 3. Performance |
| `foto-4.jpg` | 4. Lighting |
| `foto-5.jpg` | 5. Event Dokumentasi |
| `foto-6.jpg` | 6. Perayaan HUT |
| `foto-7.jpg` | 7. Crew Backstage |
| `foto-8.jpg` | 8. Desain Panggung |
| `foto-9.jpg` | 9. Briefing Panitia |
| `foto-10.jpg` | 10. Closing Ceremony |

### 5. 🔴 MPK (`mpk/`)
| File | Caption Default |
|---|---|
| `foto-1.jpg` | 1. Rapat Pleno |
| `foto-2.jpg` | 2. Notulensi |
| `foto-3.jpg` | 3. Kolaborasi |
| `foto-4.jpg` | 4. Proposal |
| `foto-5.jpg` | 5. Forum Aspirasi |
| `foto-6.jpg` | 6. Program Kerja |
| `foto-7.jpg` | 7. Koordinasi Seksi |
| `foto-8.jpg` | 8. Audiensi Sekolah |
| `foto-9.jpg` | 9. Arsip Digital |
| `foto-10.jpg` | 10. Serah Terima Jabatan |

---

## 💡 Tips Foto Terbaik

- **Resolusi ideal:** `600×400 px` atau lebih (landscape / horizontal)
- **Format terbaik:** JPG (kualitas 80%) untuk ukuran file kecil dan loading cepat
- **Ukuran maks per foto:** Sebaiknya di bawah 300KB agar website tidak lambat
- **Jika kurang dari 10 foto:** Tidak masalah — slot yang kosong akan tetap menggunakan foto Unsplash otomatis sebagai fallback
- **Jika lebih dari 10 foto:** Edit `index.html` dan tambah baris `<div class="org-photo-card">` baru

---

## ⚠️ Penting saat Deploy ke Hosting

Pastikan **folder `assets/images/org/` ikut diupload** bersama seluruh file website:
```
📁 public_html/          ← root hosting Anda
├── index.html
├── admin/
├── assets/
│   ├── images/
│   │   ├── org/         ← ✅ Folder ini HARUS ikut diupload
│   │   │   ├── pramuka/
│   │   │   ├── osis/
│   │   │   ├── kir/
│   │   │   ├── pensi/
│   │   │   └── mpk/
│   │   └── (gambar lainnya)
│   ├── js/
│   ├── styles/
│   ├── admin/
│   └── ai-service/
└── ...
```

---

*Dibuat untuk portfolio Najwan Zaki — [zakyy.dev](https://zakyy.dev)*
