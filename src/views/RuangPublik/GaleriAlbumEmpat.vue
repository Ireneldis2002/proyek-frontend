<template>
    <div class="ruang-download">

        <button @click="goBack" class="btn-back">⬅ </button>
        
        <header>
        <h1>[Album] Pelayanan Jemput Bola</h1>

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
          <div class="image-container1">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
        </aside>
      </div>
  
      <!-- Pagination -->
     
  
    </div>
  </template>
  
  <script>
  export default {
    name: "GaleriEmpatView",
    methods: {
              goBack() {
                  this.$router.go(-1); // Untuk kembali ke halaman sebelumnya
                  }
              }
  };
  </script>
  
  <style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.ruang-download {
  max-width: 100%;
padding: 20px 50px;
}

header h1 {
  font-size: 32px;
text-align: center;
color: #65A5CA;
margin-bottom: 50px;
margin-top: 20px;
margin-right: 500px;
}

.content-container {
display: flex;
gap: 20px;
align-items: flex-start;
justify-content: space-between;
}


.menu {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* Membuat 4 kolom */
    gap: 20px; /* Jarak antar gambar */
  }
  
  .image-container img {
    width: 80%; /* Gambar responsive */
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

.image-container1 {
flex: 1;
display: flex;
justify-content: flex-end;
align-items: flex-start;
padding-right: 20px;

}

.image-container1 img {
max-width: 100%;
height: auto;
border-radius: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

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