<template>
    <div class="ruang-download">
  
      <header>
        <h1>GALERI</h1>

      </header>
  
      <div class="content-container">
        <!-- Bagian Menu -->
        <section class="menu">
            <!-- Gambar Album1 dengan Navigasi -->
        <div class="image-container">
          <router-link to='/ruang-publik/album-foto-dan-video-sosialisai-KIA'>
            <img src="@/assets/Album1.png" alt="Gambar Album 1" />
          </router-link>
        </div>
        <div class="image-container">
            <router-link to="/ruang-publik/album-foto-dan-video-Ombusmen">
            <img src="@/assets/Album2.png" alt="Gambar Album 2" />
          </router-link>
        </div>
        <div class="image-container">
            <router-link to="/ruang-publik/album-foto-dan-video-jemput-bola-kotabaru">
            <img src="@/assets/Album3.png" alt="Gambar Album 3" />
          </router-link>
        </div>
        <div class="image-container">
            <router-link to="/ruang-publik/album-foto-dan-video-persiapan-jemput-bola">
            <img src="@/assets/Album4.png" alt="Gambar Album 4" />
          </router-link>
        </div>
        <div class="image-container">
          <img src="@/assets/Album5.png" alt="Gambar Album 5" />
        </div>
        <div class="image-container">
          <img src="@/assets/Album6.png" alt="Gambar Album 6" />
        </div>
        <div class="image-container">
          <img src="@/assets/Album7.png" alt="Gambar Album 7" />
        </div>
        <div class="image-container">
          <img src="@/assets/Album8.png" alt="Gambar Album 8" />
        </div>
        </section>
  
        <!-- Sidebar dengan Info dan Pencarian -->
        <aside class="sidebar">
          <div class="image-container">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
        </aside>
      </div>
  
      <!-- Pagination -->
     
  
    </div>
  </template>
  
  <script>
  export default {
    name: "RuangGaleriView",
  };
  </script>
  
  <style scoped>
  .ruang-download {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
  }
  
  header h1 {
    font-size: 28px;
    color: #65A5CA;
    margin-bottom: 20px;
    text-align: left; /* Teks di tengah */
  }
  
  .content-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .menu {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Membuat 4 kolom */
    gap: 20px; /* Jarak antar gambar */
  }
  
  .image-container img {
    width: 100%; /* Gambar responsive */
    height: auto;
    border-radius: 10px; /* Opsional: Sudut melengkung */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Opsional: Menambahkan bayangan */
  }
  
  .sidebar {
    flex: 1;
    background-color: #f8f9fa;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  </style>