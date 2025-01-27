<template>
    <div class="ruang-download">
        <button @click="goBack" class="btn-back">⬅</button>
  

      <!-- Main Content -->
      <div class="content-container">
        <div class="card-content">
              <h1>"Penerbitan Data Kependudukan"</h1>
              <p>
                Terbitnya Surat Edaran Menteri Dalam Negeri Nomor 470/135/SJ tanggal 13 Februari 2013, 
                menjelaskan bahwa data kependudukan yang dapat digunakan sebagai data penduduk Kabupaten/Kota 
                adalah data yang telah diolah dan dikonsolidasikan oleh Kementerian Dalam Negeri dan dapat 
                diterbitkan per semester, yaitu Semester I pada 30 Juni dan Semester II pada 31 Desember. 
                Selain itu jika ada keperluan khusus atau hal tertentu sesuai kebutuhan juga dapat diterbitkan. 
                Hal ini dijelaskan pula pada Penjelasan pasal 5 s/d 7 UU No. 24 Tahun 2013.
              </p>
            </div>
      <!-- Bagian Teks -->
      
      
      <!-- Foto di Sebelah Kanan -->
      <aside class="sidebar">
        <div class="image-container">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
      </aside>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArtiKamusAdmindukView",
    methods: {
        goBack() {
            this.$router.go(-1);
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

.content-container {
  display: flex;
  gap: 20px; /* Jarak antara teks dan sidebar */
  align-items: flex-start; /* Memastikan elemen sejajar di bagian atas */
}

  h1 {
    font-size: 28px;
    color: #65A5CA;
    text-align: center;
    margin-bottom: 20px;
}

.content-section {
  flex-basis: 50%; /* Teks mendapatkan ruang lebih besar */
  display: flex;
  flex-direction: column;
  gap: 40px; /* Jarak antar bagian teks */
  margin-left: -50px; /* Geser lebih ke kiri */
}
.content-item {
  position: relative;
  padding-left: 20px; /* Indentasi kecil untuk teks */
  margin-left: -20px; /* Geser konten lebih ke kiri */
}
  
/* Konten Teks */
.card-content {
  flex: 3; /* Memberikan proporsi lebih besar untuk teks */
}

/* Sidebar */
.sidebar {
  flex: 1; /* Ukuran sidebar lebih kecil dari teks */
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 200px; /* Pastikan sidebar tidak terlalu kecil */
}

.image-container img {
  width: 100%; /* Gambar menyesuaikan lebar kontainer */
  max-width: 200px; /* Batas maksimal lebar gambar */
  border-radius: 10px;
  margin: 0 auto;
  display: block; /* Menjadikan gambar terpusat */
}


  .btn-back {
    color: white;
    background-color: #8bbbd7;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px;
  }
  </style>
  