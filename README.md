# Portfolio Yusuf Saefullah

Website portfolio statis untuk menampilkan profil, pengalaman, tools, dan proyek geospasial Yusuf Saefullah. Tampilan dibuat responsif menggunakan Bootstrap 5 dan CSS khusus.

## Teknologi

- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3 melalui CDN
- Google Fonts melalui CDN

Website ini tidak membutuhkan proses build maupun dependency lokal.

## Menjalankan secara lokal

Buka `index.html` langsung di browser atau jalankan melalui web server lokal. Jika menggunakan Laragon, simpan proyek di folder `www`, jalankan Laragon, lalu buka:

[Visit My Portfolio](https://fusuyiw.github.io/webporto/)

## Mengubah data proyek

Daftar proyek berada di `assets/js/main.js`, pada array `featuredProjects`. Untuk menambahkan proyek, salin salah satu object yang sudah ada lalu sesuaikan isinya.

Properti utama:

- `title`: nama proyek
- `year`: tahun pengerjaan
- `location`: lokasi proyek
- `type`: peran dalam proyek
- `imageUrl`: path gambar dokumentasi
- `imageAlt`: deskripsi gambar untuk aksesibilitas
- `websiteUrl`: alamat website proyek, boleh dikosongkan
- `summary`: ringkasan proyek
- `deliverables`: daftar hasil pekerjaan
- `tools`: daftar alat atau software

Gunakan gambar WebP dengan rasio sekitar 16:9, resolusi kurang lebih 640 × 360 piksel, dan ukuran ideal di bawah 150 KB.

## Struktur utama

```text
.
├── assets/
│   ├── css/style.css
│   ├── images/
│   └── js/main.js
├── index.html
└── README.md


## Lisensi dan konten

Kode dapat digunakan sebagai referensi. Foto, identitas, dan materi proyek merupakan milik pemilik portfolio dan tidak untuk digunakan ulang tanpa izin.
```
