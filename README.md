# Aplikasi Catatan Pribadi

Aplikasi Catatan Pribadi adalah aplikasi sederhana yang memungkinkan pengguna untuk menambah, menghapus, dan mencari catatan pribadi. Aplikasi ini dibangun dengan React dan memenuhi beberapa kriteria utama dan opsional yang mencakup:

## Kriteria Utama

1. **Mampu Menampilkan Daftar Catatan**
   - Aplikasi menggunakan state komponen untuk menyimpan data catatan.
   - Menggunakan teknik array map untuk menampilkan daftar catatan.

2. **Mampu Menambahkan Catatan**
   - Aplikasi memanfaatkan controlled component untuk membuat formulir input.
   - Data catatan disimpan dalam memori, dan setiap catatan merupakan objek JavaScript dengan struktur yang telah disebutkan.

3. **Mampu Menghapus Catatan**
   - Aplikasi menyediakan tombol hapus untuk menghapus catatan yang disimpan.
   - Terdapat conditional rendering yang menampilkan pesan "Tidak ada catatan" jika tidak ada catatan yang tersedia.

## Kriteria Opsional

1. **Fitur Pencarian Catatan**
   - Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci.
   - Jika kolom pencarian tidak kosong, aplikasi hanya menampilkan catatan yang judulnya mengandung kata kunci yang dimasukkan. Jika kolom pencarian kosong, aplikasi menampilkan seluruh catatan.

2. **Limit Karakter pada Input Judul Catatan**
   - Aplikasi mencegah pengguna memberikan judul catatan lebih dari 50 karakter.
   - Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.

3. **Fitur Arsip Catatan**
   - Aplikasi memiliki fitur arsip catatan.
   - Aplikasi menyediakan tombol untuk mengarsipkan atau memindahkan catatan dari arsip.
   - Daftar catatan yang diarsipkan ditampilkan secara terpisah dari catatan yang tidak diarsip.

## Cara Menjalankan Aplikasi

1. Pastikan Anda memiliki Node.js dan npm terinstal di komputer Anda.

2. Clone repositori ini ke komputer Anda:

