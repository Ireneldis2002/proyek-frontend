<template>
    <div class="ruang-download">
      <!-- Main Content -->
      <div class="content-container">
        <!-- Berita Section -->
        <div class="berita">
          <h2>Berita</h2>

          <!-- Card 1 -->
          <div class="card">
            <div class="card-image">
              <img src="@/assets/Berita1.jpeg" alt="Gambar Berita 1" />
            </div>
            <div class="card-content">
              <h3>Sidak Ke Kantor Dukcapil, Bupati Ende Tepati Janji Evaluasi Kinerja Kadis</h3>
              <p class="date">19/11/2020</p>
              <p>
                Bupati Ende Djafar Ahmad menepati janjinya mengevaluasi kinerja Kepala 
                Dinas Kependudukan dan Pencatatan Sipil (Dukcapil), Lambertus Sigasare.
              </p>
              <button class="btn" @click="keHalamanBacaBeritaSatu">Baca Selengkapnya...</button>
            </div>
          </div>
   
  
          <!-- Card 2 -->
          <div class="card">
            <div class="card-image">
              <img src="@/assets/Berita2.jpg" alt="Gambar Berita 2" />
            </div>
            <div class="card-content">
              <h3>Pelayanan Jemput Bola Dukcapil Ende Diapresiasi Masyarakat</h3>
              <p class="date">10/10/2020</p>
              <p>
                Ende, Florespos.net—Dinas Kependudukan dan Pencatatan Sipil
                (Disdukcapil) Kabupaten Ende sejak pertengahan tahun ini sudah
                merombak sistem pelayanan dokumen kependudukan...
              </p>
              <button class="btn" @click="keHalamanBacaBeritaDua">Baca Selengkapnya...</button>
            </div>
          </div>

  
          <!-- Card 3 -->
          <div class="card">
            <div class="card-image">
              <img src="@/assets/Berita3.jpg" alt="Gambar Berita 3" />
            </div>
            <div class="card-content">
              <h3>Tingkat Kualitas Layanan, Disdukcapil Ende, Kembali Turun ke Desa Kelisamba</h3>
              <p class="date">10/10/2020</p>
              <p>
                ENDE, Spektrum-ntt.com ||Untuk menyukseskan program Kartu Tanda
                Penduduk Elektronik (KTP-e) dan Kartu Identitas Anak (KIA)...
              </p>
              <button class="btn" @click="keHalamanBacaBeritaTiga">Baca Selengkapnya...</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="card">
            <div class="card-image">
              <img src="@/assets/Berita4.jpg" alt="Gambar Berita 4" />
            </div>
            <div class="card-content">
              <h3>Disdukcapil Kabupaten Ende Terjun Langsung Ke Masyarakat Untuk Pembuatan KTP-El</h3>
              <p class="date">22/09/2020</p>
              <p>
                ENDE . Spektrum-ntt.com ||Dinas Kependudukan dan Catatan Sipil 
                (Disdukcapil) kabupaten Ende melakukan perekaman Kartu Tanda 
                Penduduk Elektronik (KTP-el)
              </p>
              <button class="btn" @click="keHalamanBacaBeritaEmpat">Baca Selengkapnya...</button>
            </div>
          </div>


          </div>

  
  
        <!-- Sidebar -->
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
    name: "BeritaBeritaView",
    methods: {
    keHalamanBacaBeritaSatu() {
      this.$router.push('/berita/baca-berita-1');
    },
    keHalamanBacaBeritaDua() {
      this.$router.push('/berita/baca-berita-2');
    },
    keHalamanBacaBeritaTiga() {
      this.$router.push('/berita/baca-berita-3');
    },
    keHalamanBacaBeritaEmpat() {
      this.$router.push('/berita/baca-berita-4');
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
    display: flex; /* Mengatur layout flex */
    gap: 20px; /* Jarak antara berita dan sidebar */
    align-items: flex-start; /* Mengatur posisi vertikal */
  }
  
  /* Berita Section */
  .berita {
    flex: 3; /* Ukuran berita lebih besar */
  }
  
  .berita h2 {
    font-size: 24px;
    color: #65A5CA;
    margin-bottom: 20px;
  }
  
  .card {
    display: flex;
    margin-bottom: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .card-image img {
    width: 150px;
    height: 100px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .card-content {
    padding: 10px;
  }
  
  .card-content h3 {
    font-size: 18px;
    margin: 0;
    color: #333;
  }
  
  .card-content .date {
    font-size: 14px;
    color: #777;
  }
  
  .card-content p {
    font-size: 14px;
    color: #555;
    margin: 10px 0;
  }
  
  .btn {
    background-color: #65A5CA;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Sidebar Section */
  .sidebar {
    flex: 1; /* Ukuran sidebar lebih kecil */
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .image-container img {
    width: 100%; /* Gambar menyesuaikan lebar kontainer */
    max-width: 200px; /* Batas maksimal lebar gambar */
    border-radius: 10px;
    margin: 0 auto;
    display: block; /* Menjadikan gambar terpusat */
  }
  </style>
  