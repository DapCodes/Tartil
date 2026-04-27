# Tartil - Belajar Tajwid Masa Kini

[Tartil](https://tartil-gamma.vercel.app/) adalah aplikasi web interaktif yang dirancang untuk membantu umat Islam mempelajari dan menguji pemahaman tentang hukum tajwid Al-Qur'an melalui pendekatan yang modern dan mudah digunakan.

---

## Fitur Utama

### 1. Materi Tajwid Komprehensif
Aplikasi menyediakan materi lengkap yang mencakup hukum-hukum tajwid utama:
- **Nun Sukun & Tanwin**: Izhar Halqi, Idgham, Iqlab, dan Ikhfa Haqiqi.
- **Mim Sukun**: Izhar Syafawi, Ikhfa Syafawi, dan Idgham Mimi.
- **Mad (Panjang Pendek)**: Mad Thabi'i, Mad Far'i (Wajib, Jaiz, 'Aridh, dll).
- **Qalqalah**: Sughra, Kubra, dan Akbar.
- **Ghunnah**: Hukum dengung pada Nun/Mim bertasydid.
- **Ra Tafkhim & Tarqiq**: Hukum menebalkan/menipiskan pelafalan Ra.
- **Ayat-Ayat Gharib**: Bacaan khusus seperti Imalah, Isymam, Saktah, Tashil, dan Naql.
- **Lam Ta'rif (Alif Lam)**: Qamariyah dan Syamsiyah.

Aplikasi menyajikan penjelasan detail beserta contoh interaktif untuk setiap materi.

### 2. Sistem Kuis Interaktif
Pengguna dapat menguji pemahaman mereka melalui kuis yang dapat disesuaikan berdasarkan kategori materi tertentu. Fitur ini mencakup:
- Pemilihan materi sebelum memulai kuis.
- Feedback instan untuk setiap jawaban.
- Penghitungan skor otomatis.

### 3. Riwayat Nilai & Progress
Aplikasi menyimpan riwayat kuis pengguna menggunakan penyimpanan lokal (*LocalStorage*), sehingga pengguna dapat memantau perkembangan belajar mereka dari waktu ke waktu.

### 4. Manajemen Sesi Pintar
- **Konfirmasi Navigasi**: Mencegah kehilangan progress kuis saat tidak sengaja menekan tombol kembali.
- **Persistensi Halaman**: Progress tetap terjaga meskipun halaman direfresh secara tidak sengaja.
- **Auto-Clear**: Membersihkan data sesi saat pengguna secara eksplisit meninggalkan kuis untuk menjaga integritas data.

### 5. Antarmuka Premium (UI/UX)
- Fitur *Splash Screen* dengan animasi loading.
- Desain responsif (Mobile First) yang optimal di berbagai perangkat.
- Tipografi modern menggunakan Google Fonts.

---

## Tech Stack

Aplikasi ini dibangun menggunakan teknologi web standar tanpa framework berat untuk memastikan performa yang cepat dan ringan:

- **HTML5**: Digunakan untuk struktur semantik konten.
- **CSS3 (Vanilla)**: Implementasi desain kustom, sistem grid, flexbox, dan micro-animations.
- **JavaScript (ES6+)**: Logika bisnis untuk kuis, manipulasi DOM, dan pengelolaan status aplikasi.
- **LocalStorage & SessionStorage**: Digunakan untuk persistensi data skor dan manajemen sesi kuis.
- **Vercel**: Platform hosting untuk deployment aplikasi.

---

## Instalasi & Cara Penggunaan

### Prasyarat
- Browser modern (Chrome, Firefox, Safari, atau Edge).
- Git (opsional, untuk klon repositori).

### Cara Klon & Menjalankan Lokal

1. **Klon Repositori**
   ```bash
   git clone https://github.com/username/tartil-app.git
   ```

2. **Masuk ke Direktori Proyek**
   ```bash
   cd tartil-app
   ```

3. **Jalankan Aplikasi**
   Karena aplikasi ini menggunakan vanilla HTML/JS, Anda dapat membukanya langsung dengan cara:
   - Klik dua kali pada file `index.html`.
   - Atau menggunakan ekstensi **Live Server** di VS Code untuk pengalaman pengembangan yang lebih baik.

### Deployment ke Vercel

Jika Anda ingin mendeploy sendiri ke Vercel:
1. Hubungkan repositori GitHub Anda ke akun Vercel.
2. Vercel akan secara otomatis mendeteksi konfigurasi `vercel.json` dan mendeploy aplikasi.

---

## Kontribusi

Dibuat dengan dedikasi oleh **Daffa Ramadhan Maulana** (Siswa RPL SMK Assalaam Bandung). Aplikasi ini dikembangkan sebagai sarana belajar dan berbagi pengetahuan tentang tajwid Al-Qur'an.

---

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE) - lihat file [LICENSE](LICENSE) untuk detail lebih lanjut.

---

## Link Aplikasi
Akses aplikasi secara langsung di: [https://tartil-gamma.vercel.app/](https://tartil-gamma.vercel.app/)
