<template>
    <div class="ruang-download">
        <button @click="goBack" class="btn-back">⬅</button>
  

      <!-- Main Content -->
      <div class="content-container">
        <div class="card-content">
              <h1>"Penerbitan Data Kependudukan"</h1>
              <br>
              <br>
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
        <div class="image-container1">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
      </aside>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ArtiKamusSatuView",
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
  font-style: italic;
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