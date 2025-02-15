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
              <p><span class="icon">👁</span> 167</p>
            </div>
            
          </div>
          <div class="berita-image">
            <img src="@/assets/Berita2.jpg" alt="Gambar Berita" />
          </div>
          <div class="berita-content">
            <p>
                Ende, Florespos.net—Dinas Kependudukan dan Pencatatan Sipil (Disdukcapil) 
                Kabupaten Ende sejak pertengahan tahun ini sudah merombak sistem pelayanan 
                dokumen kependudukan. Disdukcapil Ende turun ke desa melayani perekaman 
                E- KTP, kartu keluarga dan dokumen kependudukan lainnya serta Kartu Identitas 
                Anak ( KIA). Model pelayanan ini mendapatkan apresiasi dari warga karena warga 
                dari desa tidak lagi mendatangi kantor Disdukcapil Ende.
            </p>
            <p>
                Yunita Avinta Lori dari Desa Kelisamba, Kecamatan Ndori, mengapresiai 
                pelayanan dari Disdukcapil Ende saat pelayanan dokumen kependudukan warga di 
                desa itu, Sabtu (10/10/2020).
            </p>
            <p>
                Yunita mengatakan, pada hakekatnya warga di desa merasa terbantu dengan model 
                pelayanan seperti itu karena warga tidak ke kota dan mengantre di kantor 
                Disdukcapil Ende. Yunita mengharapkan model pelayanan seperti ini tetap 
                dipertahankan untuk pendekatan pelayanan. Selain melayani dokumen kependudukan 
                umum, Ia juga berharap Disdukcapil juga menggunakan kesempatan itu untuk 
                memberikan pelayanan Kartu Identitas Anak (KIA).
            </p>
            <p>
                .........................................................
            </p>
            <p>
                Sementara itu sekretaris Disdukcapil Kabupaten Ende, Syarul Yahya saat pelayanan 
                di Desa Kelisamba, Kecamatan Ndori, Sabtu (10/10/2020) tim Disdukcapil Ende 
                melayani 52 warga yang mengurus perekaman E- KTP di desa itu. Pihaknya juga 
                membantu warga yang memiliki data ganda dan masih memiliki KTP luar Kabupaten 
                Ende. Selain itu saat pelayanan di desa Kelisamba, tim Disdukcapil Ende juga 
                melakukan sosialiasi tentang Kartu Identitas Anak ( KIA). *
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
    name: "BacaIsiBeritaDuaView",
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
  