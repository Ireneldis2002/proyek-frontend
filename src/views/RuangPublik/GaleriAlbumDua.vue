<template>
    <div class="ruang-download">

        <button @click="goBack" class="btn-back">⬅ </button>
        
        <header>
        <h1>[Album] Ombusmen</h1>

      </header>
  
      <div class="content-container">
        <!-- Bagian Menu -->
        <section class="menu">
            <div class="image-container">
          <img src="@/assets/FotoGaleri.png" alt="Gambar Profil" />
        </div>
        <div class="image-container">
          <img src="@/assets/VideoGaleri.png" alt="Gambar Profil" />
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
    name: "GaleriDuaView",
    methods: {
              goBack() {
                  this.$router.go(-1); // Untuk kembali ke halaman sebelumnya
                  }
              }
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
    text-align: center; /* Teks di tengah */
  }
  
  .content-container {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  
  .menu {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Membuat 4 kolom */
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

  .btn-back {
  
  color: white;
  background-color: #8bbbd7;
  padding: 10px 20px;
  border-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px; /* Jarak antara tombol dan judul */
  }
  
  </style>