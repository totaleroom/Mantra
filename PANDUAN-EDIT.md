# PANDUAN EDIT LANDING PAGE AUTOMATE.ID

## Untuk Siapa Panduan Ini?
Panduan ini dibuat untuk Anda yang ingin mengedit landing page tanpa pengalaman coding. 
Semua instruksi ditulis dengan bahasa yang mudah dipahami.

---

## DAFTAR ISI
1. [Software yang Dibutuhkan](#1-software-yang-dibutuhkan)
2. [Cara Download Project](#2-cara-download-project)
3. [Struktur File](#3-struktur-file)
4. [Yang Boleh & Tidak Boleh Diedit](#4-yang-boleh--tidak-boleh-diedit)
5. [Cara Edit Setiap Komponen](#5-cara-edit-setiap-komponen)
6. [Tips Aman Mengedit](#6-tips-aman-mengedit)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Software yang Dibutuhkan

### Opsi 1: Cursor AI (RECOMMENDED untuk pemula)
- Download di: https://cursor.sh
- Gratis untuk basic
- Bisa tanya AI kalau bingung: "Tolong ubah nomor WhatsApp jadi 628123xxx"

### Opsi 2: VS Code
- Download di: https://code.visualstudio.com
- Gratis sepenuhnya
- Perlu belajar sedikit lebih banyak

### Opsi 3: Langsung di v0.dev
- Tidak perlu download apapun
- Chat langsung: "Ubah headline menjadi..."

---

## 2. Cara Download Project

1. Di v0.dev, klik **"..."** (titik tiga) di pojok kanan atas
2. Pilih **"Download ZIP"**
3. Extract file ZIP ke folder yang mudah diakses
4. Buka folder dengan Cursor/VS Code

---

## 3. Struktur File

\`\`\`
components/
├── HeroSection.tsx      ← Bagian paling atas (headline, before/after)
├── PortfolioNavbar.tsx  ← Menu navigasi
├── ROICalculator.tsx    ← Kalkulator penghematan waktu
├── HowItWorks.tsx       ← Section "Cara Kerja"
├── SuccessStories.tsx   ← Cerita sukses klien
├── TrustSection.tsx     ← Section "Tentang Saya"
├── PricingSection.tsx   ← Daftar harga paket
├── FAQSection.tsx       ← Pertanyaan yang sering ditanya
├── FinalCTA.tsx         ← Call to action terakhir
└── Footer.tsx           ← Bagian paling bawah
\`\`\`

---

## 4. Yang Boleh & Tidak Boleh Diedit

### ✅ BOLEH DIEDIT (Aman)
- Text/tulisan di dalam tanda kutip ""
- Angka-angka (harga, statistik, jam)
- Nama, email, nomor WhatsApp
- Daftar fitur dan FAQ

### ❌ JANGAN DIEDIT (Bisa Rusak)
- Text yang diawali `className=`
- Text yang diawali `import` atau `export`
- Tanda kurung `{}`, `[]`, `()`
- Kata-kata seperti `const`, `function`, `return`

### ⚠️ HATI-HATI
- Jangan hapus koma (,) di akhir item dalam array
- Jangan hapus tanda kutip pembuka/penutup
- Selalu simpan file backup sebelum edit

---

## 5. Cara Edit Setiap Komponen

### A. Mengganti Nomor WhatsApp (PENTING!)

**Cari text ini di SEMUA file:**
\`\`\`
6281311099023
\`\`\`

**Ganti dengan nomor Anda (tanpa + dan tanpa -):**
\`\`\`
628xxxxxxxxxx
\`\`\`

**File yang perlu diedit:**
- HeroSection.tsx
- PortfolioNavbar.tsx
- PricingSection.tsx
- TrustSection.tsx
- HowItWorks.tsx
- FinalCTA.tsx
- Footer.tsx

### B. Mengganti Headline (HeroSection.tsx)

**Cari:**
\`\`\`jsx
3-4 Jam Sehari Terbuang untuk <span className="text-[#156d95]">Kerjaan Manual?</span>
\`\`\`

**Ganti text di antara > dan < :**
\`\`\`jsx
Headline Baru Anda untuk <span className="text-[#156d95]">Kata Highlight</span>
\`\`\`

### C. Mengganti Harga (PricingSection.tsx)

**Cari array `plans` dan edit:**
\`\`\`javascript
setupPrice: "Rp 3.000.000",    // Harga setup
monthlyPrice: "Rp 500.000",    // Harga bulanan
\`\`\`

### D. Menambah/Menghapus Fitur

**Untuk menambah fitur:**
\`\`\`javascript
features: [
  "Fitur yang sudah ada",
  "Fitur baru Anda",  // ← Tambahkan baris baru dengan koma
],
\`\`\`

**Untuk menghapus fitur:**
Hapus satu baris lengkap termasuk koma-nya.

### E. Mengganti FAQ

**Cari array `faqs` dan edit:**
\`\`\`javascript
{
  question: "Pertanyaan baru Anda?",
  answer: "Jawaban untuk pertanyaan tersebut.",
},
\`\`\`

### F. Mengganti Cerita Klien (SuccessStories.tsx)

**Edit di array `stories`:**
\`\`\`javascript
{
  business: "Jenis Bisnis",
  owner: "Nama Klien",
  location: "Kota",
  quote: "Testimoni dari klien...",
  // ... data lainnya
}
\`\`\`

---

## 6. Tips Aman Mengedit

1. **Selalu backup dulu**
   - Copy file asli sebelum edit
   - Rename jadi: `NamaFile_backup.tsx`

2. **Edit satu hal dalam satu waktu**
   - Jangan ubah banyak sekaligus
   - Test setelah setiap perubahan

3. **Gunakan Find & Replace**
   - Di Cursor/VS Code: Ctrl+H (Windows) atau Cmd+H (Mac)
   - Lebih cepat untuk ganti nomor WA di semua file

4. **Perhatikan tanda baca**
   - Koma (,) di akhir item array
   - Tanda kutip ("") harus berpasangan

---

## 7. Troubleshooting

### Error: "Unexpected token"
**Penyebab:** Biasanya koma atau tanda kutip hilang
**Solusi:** Cek baris yang disebutkan di error, pastikan format benar

### Halaman kosong/blank
**Penyebab:** Ada syntax error
**Solusi:** Gunakan file backup, edit ulang dengan lebih hati-hati

### Perubahan tidak muncul
**Penyebab:** File belum disimpan atau cache browser
**Solusi:** 
1. Simpan file (Ctrl+S)
2. Refresh browser (Ctrl+Shift+R)

### Butuh bantuan lebih?
- Chat kembali di v0.dev dengan pertanyaan spesifik
- Gunakan Cursor AI dan tanya: "Ada error di baris X, kenapa?"

---

## CHECKLIST SEBELUM LAUNCH

- [ ] Semua nomor WhatsApp sudah diganti
- [ ] Email sudah diganti
- [ ] Link social media sudah benar
- [ ] Harga-harga sudah sesuai
- [ ] Cerita klien sudah diganti/disesuaikan
- [ ] FAQ sudah relevan
- [ ] Test semua link berfungsi
- [ ] Test tampilan di HP

---

**Selamat mengedit! Kalau ada yang bingung, tanya saja di v0.dev.**
