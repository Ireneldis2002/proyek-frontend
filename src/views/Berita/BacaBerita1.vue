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
            <h2>SIDAK KE KANTOR DUKCAPIL, BUPATI ENDE TEPATI JANJI EVALUASI KINERJA KADIS</h2>
            <br>
            <br>
            <div class="info-header">
              <p><span class="icon">📅</span> 19/11/2020</p>
              <p><span class="icon">👤</span> Penulis Berita :</p>
              <p><span class="icon">👤</span> Editor Berita :</p>
              <p><span class="icon">👁</span> 220</p>
            </div>
            
          </div>
          <div class="berita-image">
            <img src="@/assets/Berita1.jpeg" alt="Gambar Berita" />
          </div>
          <div class="berita-content">
            <p>
              Bupati Ende Djafar Ahmad menepati janjinya mengevaluasi kinerja Kepala 
              Dinas Kependudukan dan Pencatatan Sipil (Dukcapil), Lambertus Sigasare.
            </p>
            <p>
              Evaluasi yang dilakukan Bupati Ende kali ini tergolong unik. Sebab, tidak 
              lagi dilakukan melalui laporan melainkan dengan Inspeksi Mendadak (Sidak). 
              Bupati Ende mendatangi langsung kantor Dukcapil pada Kamis, 19 November 2020.
            </p>
            <P>
              Evaluasi terhadap kinerja Lambertus Sigasare merupakan janji Bupati Ende 
              saat melantiknya sebagai Kepala Dinas pada 7 Agustus lalu. Kala itu sang 
              Bupati memberi waktu 3 bulan kepada Lambertus membenahi tata administrasi 
              dan membuat terobosan.
            </P>
            <P>
              Kini setelah 3 bulan memimpin tiba giliran bagi Lambertus dievaluasi.
            </P>
            <P>
              Saat menyambangi kantor Dukcapil, Bupati Ende langsung melihat perubahan 
              signifikan. Misalnya, di halaman telah disiapkan tenda besar beserta puluhan
               kursi bagi para pengantri. Bahkan, Dukcapil menyiapkan televisi yang bisa 
               ditonton warga.
            </P>
            <P>
              Bupati Ende kemudian bertanya kepada para pengantri. 
              Sepertinya Bupati Djafar ingin mengetahui secara langsung pendapat warga.
            </P>
            <p>
              Selesai mengamati berbagai perubahan dirinya mendapat penjelasan dari Kadis 
              Lambertus Sigasare. Berbagai inovasi dipaparkan Lambertus, termasuk dua 
              program unggulan yakni Garugiwa dan pelayaan langsung ke desa-desa.
            </p>
            <p>
              Selain itu, Bupati Ende juga mendapat penjelasan mengenai program Mobil 
              Pelayanan dan kerjasama dengan 6 Rumah Sakit, yang segera dieksekusi.
            </p>
            <p>
              Terakhir, Lambertus menyampaikan harapan terkait penambahan tenaga kerja pada 
              dinasnya. Penambahan dibutuhkan agar ketika melakukan pelayanan ke desa, 
              aktivitas di kantor Dukcapil tidak terganggu.
            </p>
            <p>
              Bupati Ende Djafar Ahmad mengaku puas atas pembenahan pelayanan Dukcapil 
              Ende. Mengenai harapan Kadis Lambertus, dirinya akan mencermati dan mengambil 
              keputusan. (ARA/EN)
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
    name: "BacaIsiBeritaSatuView",
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
  