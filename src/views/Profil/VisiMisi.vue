<template>
  <div class="profil-visi-misi">
    <h1>Visi dan Misi</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item">
          <h2>Visi</h2>
          <div class="line"></div>
          <p>
            "Mewujudkan karakteristik Kabupaten Ende dengan membangun dari desa
            dan kelurahan menuju masyarakat yang Mandiri, Sejahtera, dan
            berkeadilan"
          </p>
        </div>
        <div class="content-item">
          <h2>Misi ke - 5</h2>
          <div class="line"></div>
          <p>
            Menciptakan Pemerintah yang Bersih Transparan dan Berkualitas serta
            rasa Aman, Tertib dan Nyaman bagi Pengembangan Usaha dan Kehidupan
            Masyarakat
          </p>
        </div>
        <div class="content-item">
          <h2>Program</h2>
          <div class="line"></div>
          <p>Reformasi untuk Peningkatan Pelayanan Publik</p>
        </div>
        <div class="content-item">
          <h2>Tujuan</h2>
          <div class="line"></div>
          <p>Terwujudnya Tata Kelola Pemerintah yang Baik (Good Governance)</p>
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
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.content-section {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 40px; 
  padding-left: 20px; 
}

.content-item {
  position: relative;
  padding-left: 25px; 
}

h2 {
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 0 0 10px 0;
}

.line {
  width: 5px;
  height: 100%;
  background-color: #8bbbd7;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
}

p {
  font-size: 22px;
  color: #333;
  margin: 0;
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

.info-header {
  background: #65a5ca;
  color: white;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 4px 0 0;
  font-size: 18px;
}

.info-content {
  background: #f9f9f9;
  padding: 10px;
  text-align: left;
  font-size: 10px;
}

.info-content p {
  margin: 5px 0;
}

.info-content strong {
  display: inline-block;
  width: 90px;
  font-weight: bold;
  color: #333;
}

.info-content span {
  color: #555;
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
  display: block;
  clear: both;
}
</style>
