# Panduan Deployment & Launch Website (Gratis)

Dokumen ini berisi panduan lengkap untuk meluncurkan website landing page Anda secara gratis, mulai dari persiapan kode hingga live di internet.

## 1. Status Kesiapan Code (Readiness Report)

Berdasarkan analisa terhadap folder project Anda:
- **Status**: ✅ **SIAP DEPLOY**
- **Teknologi**: Next.js 15 (App Router), React 19, Tailwind CSS.
- **Database**: Tidak diperlukan saat ini (Website bersifat Statis/Landing Page).
- **Biaya**: Rp 0 (Gratis selamanya untuk tier Hobby di Vercel).

> **Catatan**: Project ini sudah menggunakan struktur folder `app/` (App Router) yang modern dan sangat kompatibel dengan Vercel.

---

## 2. Langkah-Langkah Deployment (Gratis)

Kita akan menggunakan **Vercel** karena ini adalah platform terbaik untuk Next.js (dibuat oleh pencipta Next.js) dan memiliki tier gratis yang sangat generous.

### Langkah 1: Upload Code ke GitHub
Agar website bisa online dan ter-update otomatis saat Anda edit code, kita perlu taruh code di GitHub.

1.  Buka [GitHub.com](https://github.com) dan login (daftar jika belum).
2.  Buat Repository baru (Klik tombol **New**).
3.  Beri nama, misal: `auralink-landing-page`.
4.  Pilih **Public** atau **Private** (bebas).
5.  Klik **Create repository**.
6.  Di komputer Anda (folder project ini), buka terminal dan jalankan perintah berikut satu per satu:
    ```bash
    git init
    git add .
    git commit -m "Initial commit - Landing page launch"
    git branch -M main
    git remote add origin https://github.com/USERNAME_ANDA/auralink-landing-page.git
    git push -u origin main
    ```
    *(Ganti URL di atas dengan URL repository yang baru Anda buat di GitHub)*

### Langkah 2: Connect ke Vercel
1.  Buka [Vercel.com](https://vercel.com) dan login (bisa login pakai akun GitHub).
2.  Klik **Add New...** > **Project**.
3.  Di bagian "Import Git Repository", cari `auralink-landing-page` yang tadi dibuat, klik **Import**.
4.  Di halaman konfigurasi:
    -   **Framework Preset**: Next.js (biasanya otomatis terdeteksi).
    -   **Root Directory**: `./` (biarkan default).
    -   **Environment Variables**: Kosongkan saja (karena belum pakai database/API key).
5.  Klik **Deploy**.

Tunggu sekitar 1-2 menit. Vercel akan memproses (build) website Anda. Jika sukses, layar akan penuh dengan confetti 🎉 dan website Anda sudah live!

### Langkah 3: Mengatur Domain (Gratis)
Secara default, Anda dapat domain gratis seperti `auralink-landing-page.vercel.app`.

Jika ingin mengubahnya (misal jadi `auralink-official.vercel.app`):
1.  Di dashboard project Vercel, masuk ke **Settings** > **Domains**.
2.  Klik **Edit** pada domain yang ada, ubah sesuai keinginan (selama masih tersedia).

**Jika ingin domain .com / .id (Berbayar):**
Nanti jika sudah ada budget, Anda bisa beli domain di penyedia domain (Niagahoster, IDCloudHost, Namecheap, dll) lalu sambungkan ke Vercel di menu Domains ini. Tapi untuk R&D, domain `.vercel.app` sudah sangat cukup dan valid.

---

## 3. Rencana Masa Depan (Database & Automation)

Anda menyebutkan ingin eksplorasi automation. Berikut roadmap-nya:

### A. Database (Jika Nanti Perlu)
Saat ini landing page Anda hanya menampilkan informasi. Jika nanti Anda butuh fitur seperti:
-   Formulir kontak yang tersimpan ke database.
-   Login user.
-   Blog post dinamis.

**Solusi Gratis Terbaik:**
-   **Supabase**: Database PostgreSQL gratis, sangat mudah dipakai dengan Next.js.
-   **Neon**: Alternatif PostgreSQL serverless yang juga punya tier gratis bagus.

### B. Automation (n8n / Make)
Karena Anda bergerak di bidang AI Automation:
1.  **Formulir ke WhatsApp**: Saat user isi form di web -> Kirim data ke Webhook (n8n) -> n8n kirim WA ke Anda.
2.  **Analitik**: Pasang Google Analytics (Gratis) atau Vercel Analytics (Gratis tier Hobby) untuk lihat pengunjung.

---

## 4. Cara Preview Website

Ada dua cara untuk melihat hasil website Anda:

### Cara A: Preview Online (Disarankan)
Ikuti langkah deployment di atas (Upload ke GitHub -> Vercel).
-   **Kelebihan**: Tidak perlu install software berat di laptop.
-   **Hasil**: Anda dapat link asli (misal: `auralink.vercel.app`) yang bisa dibuka di HP/Laptop lain.

### Cara B: Preview di Laptop Sendiri (Localhost)
Jika Anda ingin melihat website di laptop sebelum upload, Anda wajib menginstall **Node.js**.
1.  Download & Install **Node.js** (versi LTS) dari [nodejs.org](https://nodejs.org).
2.  Setelah install, restart VS Code.
3.  Buka terminal di VS Code, ketik: `npm install` (tunggu selesai).
4.  Ketik: `npm run dev`.
5.  Buka browser ke `http://localhost:3000`.

> **Catatan**: Karena di laptop Anda saat ini belum terdeteksi Node.js, saya sarankan gunakan **Cara A** agar lebih cepat.

---

## 5. Cara Update Website
Setiap kali Anda mengedit code di komputer:
1.  Edit file (misal ganti teks di `HeroSection.tsx`).
2.  Jalankan:
    ```bash
    git add .
    git commit -m "Update teks hero section"
    git push
    ```
3.  Vercel akan **otomatis** mendeteksi perubahan dan men-deploy ulang website Anda dalam hitungan menit.

---

**Selamat! Website Anda siap untuk Go Public! 🚀**
