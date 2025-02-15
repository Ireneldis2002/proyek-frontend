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
            <h2>PELAYANAN JEMPUT BOLA DUKCAPIL ENDE DIAPRESIASI MASYARAKAT</h2>
            <br>
            <br>
            <div class="info-header">
              <p><span class="icon">📅</span> 10/10/2020</p>
              <p><span class="icon">👤</span> Penulis Berita :</p>
              <p><span class="icon">👤</span> Editor Berita :</p>
              <p><span class="icon">👁</span> 175</p>
            </div>
            
          </div>
          <div class="berita-image">
            <img src="@/assets/Berita3.jpg" alt="Gambar Berita" />
          </div>
          <div class="berita-content">
            <p>
                ENDE. Spektrum-ntt.com ||Untuk menyukseskan program Kartu Tanda Penduduk Elektronik (KTP-e) dan Kartu Indentitas Anak 
                (KIA) dan dalam rangkah meningkatkan kualitas pelayanan administrasi 
                kependudukan dan catatan sipil, maka Disdukcapil Ende kembali turun ke desa 
                untuk melakukan perekaman KTP Elektronik dan KIA
                Perekaman tersebut kembali dilakukan di desa Kelisamba kecamatan Ndori kabupaten Ende pada Sabtu (10/10/2020) 
                Dikatakan Syarul Yahya selaku sekretaris Disdukcapil Ende bahwa jumlah peserta yang melakukan perekaman 
                KTP Elektronik sebanyak 52 Orang, 48 Orang masuk dalam kategori Print Ready Record (PRR) sedangkan 3 orangnya masuk dalan kategori data ganda.
            </p>
            <p>
                Dalam proses itu juga, team dari Disdukcapik Ende menemukan beberapa 
                masyarakat yang masih menggunakan KTP Elektronik luar kabupaten seperti 
                kabupaten Malaka, Atambua dan Kutai Timur, atas permintaan warga setempat 
                team Disdukcapil Ende langsung eksekusi untuk pindah masuk ke kabupaten Ende
            </p>
            <p>
                .............................................................
            </p>
            <p>
                Harapannya kedepan Disdukcapil Ende bisa bantu kami, dalan urusan administrasi kependudukan 
                yang lainnya seperti Akta kematian, Akta Kelahiran dan lain lain" Ungkap Stefanus Lima Kades Kelisamba
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
    name: "BacaIsiBeritaTigaView",
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
  