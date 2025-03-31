<template>
  <div class="profil-visi-misi">
    <h1>Penghargaan</h1>
    <div class="content-container">

      <div class="penghargaan-container">
        <!-- Bagian Teks -->
        <div class="text-section">
          <p class="penghargaan-title">
            <b>PIAGAM PENGHARGAAN DARI BUPATI ENDE</b>
          </p>
          <p class="penghargaan-subtitle">
            SEBAGAI UNIT PELAYANAN PUBLIK DENGAN PREDIKAT
            <span class="highlight">BAIK</span> TAHUN (78,74) 2021
          </p>
        </div>
        <div class="images-wrapper">
          <img
            src="@/assets/Penghargaan1.jpg"
            alt="Gambar1"
            class="penghargaan-image"
          />
          <img
            src="@/assets/Penghargaan2.jpeg"
            alt="Gambar2"
            class="penghargaan-image"
          />
          <img
            src="@/assets/Penghargaan3.png"
            alt="Gambar3"
            class="penghargaan-image"
          />
          <img
            src="@/assets/Penghargaan4.png"
            alt="Gambar4"
            class="penghargaan-image"
          />
        </div>
      </div>

      <!-- Sidebar -->
      <div class="sidebar">
        <div class="profile">
          <img
            src="@/assets/pimpinan.png"
            alt="Profil Pimpinan"
            class="profile-img"
          />
          <h2 class="position">KEPALA DINAS</h2>
          <h3 class="name">Lambertus Sigasare, ST. M.Eng</h3>
          <p class="sub-title"><strong>Mulai Menjabat</strong></p>
          <p class="date">7 Agustus 2022</p>
        </div>

        <div class="info-section">
          <div class="info-header">Informasi Pribadi</div>
          <div class="info-content">
            <p><strong>Lahir</strong> <span>29 Januari 1953</span></p>
            <p><strong>Istri</strong> <span>Ny. Sigasare</span></p>
            <p><strong>Anak</strong> <span>Sigasare</span></p>
          </div>
        </div>

        <div class="info-section">
          <div class="info-header">Riwayat Pendidikan</div>
          <div class="info-content">
            <p>- (Tambahkan Riwayat Pendidikan di sini) -</p>
          </div>
        </div>

        <div class="info-section">
          <div class="info-header">Riwayat Jabatan</div>
          <div class="info-content">
            <p>- (Tambahkan Riwayat Jabatan di sini) -</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Update -->
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
  </div>
</template>

<script>
export default {
  name: "VisiMisiView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.profil-visi-misi {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  gap: 40px; 
  align-items: flex-start;
}

.penghargaan-container {
  flex: 2; 
  display: flex;
  flex-direction: column;
}

.content-item {
  padding-bottom: 20px;
}

.images-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}

.penghargaan-image {
  width: 48%; 
  border-radius: 5px;
  border: 1px solid #000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.text-section {
  margin-bottom: 20px;
}

.penghargaan-title {
  font-size: 24px;
  font-weight: bold;
  color: black;
  margin-bottom: 5px;
}

.penghargaan-subtitle {
  font-size: 20px;
  color: black;
}

.highlight {
  color: green;
  font-weight: bold;
}

.sidebar {
  width: 320px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.profile {
  padding-bottom: 20px;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.position {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.name {
  font-size: 18px;
  color: black;
}

.sub-title {
  font-size: 16px;
  color: black;
  margin: 5px 0;
}

.date {
  font-size: 16px;
  color: #333;
}

.info-section {
  margin-top: 15px;
}

.info-content {
  background: #f9f9f9;
  padding: 12px;
  text-align: left;
  font-size: 18px; 
}

.info-header {
  background: #65a5ca;
  color: white;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 4px 0 0;
  font-size: 20px; /* Ukuran font header ditingkatkan */
}

.info-content p {
  margin: 5px 0;
}

.info-content strong {
  display: inline-block;
  width: 100px; 
  font-weight: bold;
  color: #333;
}

.info-content span {
  font-size: 18px; 
  color: #555;
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
}
</style>
