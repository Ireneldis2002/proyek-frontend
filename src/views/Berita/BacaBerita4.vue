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
              <p><b><span class="icon">📅</span> 10/10/2020</b></p>
              <p><b><span class="icon">👤</span> Penulis Berita :</b></p>
              <p><b><span class="icon">👤</span> Editor Berita :</b></p>
              <p><b><span class="icon">👁</span> 267</b></p>
            </div>
            <br>
            <br>
            
          </div>
          <div class="berita-image">
            <img src="@/assets/Berita4.jpg" alt="Gambar Berita" />
          </div>
          <br>
          <br>
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
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

  .ruang-download {
    max-width: 100%;
    padding: 20px 50px;
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
    color: #65A5CA;
    text-align: center;
    margin-bottom: 50px;
    margin-top: 20px;
  }
  
  .info-header {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: gray;
  }
  
  .berita-image img {
  width: 100%; /* Ukuran gambar dibuat lebih kecil */
  max-width: 800px; /* Maksimal lebar gambar */
  border-radius: 8px;
  margin: 20px auto; /* Gambar dipusatkan secara horizontal */
  display: block; /* Untuk memastikan gambar menjadi elemen blok */
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
  
  .berita-content p {
    font-size: 20px;
    line-height: 1.6;
    margin-bottom: 10px;
    text-align:justify;
  }

  .icon{
    width: 80px;
    height: 80px;
  }
  
  .image-container {
flex: 1;
display: flex;
justify-content: flex-end;
align-items: flex-start;
padding-right: 20px;

}

.image-container img {
max-width: 100%;
height: auto;
border-radius: 10px;
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

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
  
  