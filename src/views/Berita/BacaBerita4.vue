<template>
    <div class="ruang-download">
      <!-- Main Content -->
      <div class="content-container">
        <button @click="goBack" class="btn-back">⬅</button>
  
        <!-- Berita Section -->
        <div class="berita">
          <div class="berita-header">
            <br>
            <br>
            <h2>DISDUKCAPIL KABUPATEN ENDE TERJUN LANGSUNG KE MASYARAKAT UNTUK PEMBUATAN KTP-EL</h2>
            <br>
            <br>
            <div class="info-header">
              <p><span class="icon">📅</span> 10/10/2020</p>
              <p><span class="icon">👤</span> Penulis Berita :</p>
              <p><span class="icon">👤</span> Editor Berita :</p>
              <p><span class="icon">👁</span> 167</p>
            </div>
            
          </div>
          <div class="berita-image">
            <img src="@/assets/Berita4.jpg" alt="Gambar Berita" />
          </div>
          <div class="berita-content">
            <p>
                ENDE . Spektrum-ntt.com ||Dinas Kependudukan dan Catatan Sipil (Disdukcapil) 
                kabupaten Ende melakukan perekaman Kartu Tanda Penduduk Elektronik (KTP-e) 
                dengan cara terjun langsung ke masyarakat, sebagai upaya pendekatan pelayanan, 
                kali ini pelayanan diberikan kepada masyarakat desa Aewora kecamatan Maurole 
                pada Selasa (22/09/2020)
            </p>
            <p>
                Demikian hal ini disampaikan langsung Syarul Yahya sekretaris Dinas 
                Kependudukan dan Catatan Sipil (Disdukcapil) kabupaten Ende di sela-sela 
                kegiatan perekaman KTP elektronik di desa Aewora kecamatan Maurole
            </p>
            <p>
                Dikatakan Syarul kami tidak mau hanya bekerja di belakang meja saja, inilah 
                yang dinamakan dengan pendekatan pelayanan kepada masyarakat, dan saat ini 
                Disdukcapil Ende sudah menerapkan penambahan jam pelayanan kepada masyarakat 
                yang mengurus dokumen kependudukan
            </p>
            <p>
                Lanjutnya pada tanggal 11 September 2020 kepala desa Aewora mengajukan 
                permohonan pengurusan dokumen kependudukan agar dilakukan di desa Aewora 
                mengingat jumlah warga desa Aewora yang belum memiliki KTP elektronik cukup 
                banyak makanya kami dari pihak Disdukcapil Ende merespon ini dengan 
                menurunkan team ke desa Aewora
            </p>
            <p>
                ..........................................................................
            </p>
            <p>
                Selain KTP-e masih banyak masyarakat desa saya yang belum memiliki dokumen 
                kependudukan lain seperti Kartu Keluarga, untuk itu setelah perkaman KTP el 
                pemerintah desa akan mengurus kartu keluarga secara kolektif seghingga dapat 
                diproses di Disdukcapil secara serentak. Hal ini saya lakukan sebagai upaya 
                setiap warga masyarakat desa saya memiliki dokumen kependudukan yang sah sesuai 
                dan itu tugas saya
            </p>
          </div>
        </div>
  
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
    name: "BacaIsiBeritaEmpatView",
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
    gap: 20px;
    align-items: flex-start;
  }
  
  .berita {
    flex: 3;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .berita-header {
    margin-bottom: 20px;
  }
  
  .berita-header h2 {
    font-size: 24px;
    text-align: center;
    color: black;
  }
  
  .info-header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: gray;
  }
  
  .berita-image img {
  width: 80%; /* Ukuran gambar dibuat lebih kecil */
  max-width: 300px; /* Maksimal lebar gambar */
  border-radius: 8px;
  margin: 20px auto; /* Gambar dipusatkan secara horizontal */
  display: block; /* Untuk memastikan gambar menjadi elemen blok */
}

.image-container img {
  width: 100%;
  border-radius: 10px;
}
  
  .berita-content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  
  .sidebar {
    flex: 1;
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
  