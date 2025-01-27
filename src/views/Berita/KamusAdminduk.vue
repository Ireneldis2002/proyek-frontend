<template>
    <div class="ruang-download">
      <header>
        <h1>Kamus Adminduk</h1>
      </header>
  
      <!-- Main Content -->
      <div class="content-container">
        <!-- Grid for Kamus Adminduk -->
        <div class="grid-container">
          <!-- Kartu "Penerbitan Data Kependudukan" -->
          <router-link class="card" to="/berita/baca-penjelasan-arti-penerbitan-data-kependudukan">
            Penerbitan Data Kependudukan
          </router-link>
  
          <!-- Kartu "Alur Status Perekaman KTP-el" -->
          <router-link class="card" to="/berita/baca-penjelasan-arti-alur-status-perekaman">
            Alur Status Perekaman KTP-el
          </router-link>
  
          <!-- Kartu lainnya -->
          <router-link class="card" to="/berita/baca-penjelasan-arti-pengertian-PIAK-dan-PD">
            Pengertian PIAK dan PD
          </router-link>

          <router-link class="card" to="/berita/baca-penjelasan-arti-ktp-berlaku-seumur-hidup">
            KTP Berlaku Seumur Hidup
          </router-link>

          <div class="card">
            Jika Kutipan Akta Kelahiran Anda Hilang
          </div>
          <div class="card">
            Jenis Status Anak Pada Kutipan Akta Kelahiran
          </div>
          <div class="card">
            Cara Mengurus Akta Kelahiran Anak Diluar Kawin
          </div>
          <div class="card">
            Langkah Mengurus Surat Keterangan Pindah Datang
          </div>
          <div class="card">
            Langkah-Langkah Jika Ada Kesalahan Pengetikan di Akta Kelahiran
          </div>
          <div class="card">
            Hak Akses dan Pemanfaatan Data Kependudukan
          </div>
          <div class="card">
            Penambahan Anggota Keluarga pada Kartu Keluarga
          </div>
          <div class="card">
            Sistem Informasi Administrasi Kependudukan (SIAK)
          </div>
        </div>
  
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="image-container">
            <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
          </div>
        </aside>
      </div>
  
      <!-- Pagination -->
      <nav class="pagination">
        <button>&laquo;&laquo;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;&raquo;</button>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'KamusAdminduk',
  };
  </script>
  
  <style scoped>
  .ruang-download {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
  }
  
  .content-container {
    display: flex;
    gap: 20px;
    align-items: flex-start;
  }
  
  /* Grid Layout */
  .grid-container {
    flex: 3; /* Ukuran grid lebih besar */
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4 kolom */
    gap: 20px;
  }
  
  /* Styling Card */
  .card {
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.2s;
    font-size: 16px; /* Ukuran font sama */
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  /* Sidebar Section */
  .sidebar {
    flex: 1; /* Ukuran sidebar lebih kecil */
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image-container img {
    width: 100%; /* Gambar menyesuaikan lebar kontainer */
    max-width: 200px; /* Batas maksimal lebar gambar */
    border-radius: 10px;
    margin: 0 auto;
    display: block; /* Menjadikan gambar terpusat */
  }
  
  /* Pagination */
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  
  .pagination button {
    background: #65A5CA;
    color: white;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    cursor: pointer;
    border-radius: 5px;
  }
  </style>
  