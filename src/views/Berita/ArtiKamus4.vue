<template>
    <div class="ruang-download">
      <!-- Main Content -->
      <div class="content-container">
        <button @click="goBack" class="btn-back">⬅</button>
  
        
  
        <!-- Sidebar -->
        <aside class="sidebar">
                <div class="image-container">
                    <img src="@/assets/SidebarStandar.png" alt="Sidebar Informasi" />
                </div>
            </aside>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArtiKamusEmpatView",
    methods: {
        goBack() {
            this.$router.go(-1);
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

/* Tombol Back */
.btn-back {
  color: white;
  background-color: #8bbbd7;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px; /* Jarak antara tombol dan konten */
}

/* Container utama */
.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

/* Card Konten */
.card-content {
  flex: 3; /* Ukuran lebih besar dibanding sidebar */
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Pusatkan teks */
}

/* Judul dalam Card */
.card-content h1 {
  font-size: 28px;
  font-weight: 600;
  color: #4a6fa1;
  margin-bottom: 15px;
}

/* Paragraf dalam Card */
.card-content p {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  text-align: justify; /* Rata kiri-kanan */
}

/* Sidebar */
.sidebar {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
}

/* Gambar dalam Sidebar */
.image-container1 img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

  
  </style>
  