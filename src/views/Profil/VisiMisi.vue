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
      <div class="image-container">
        <img src="@/assets/ProfilPimpinan.png" alt="Gambar Profil" />
      </div>
    </div>
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
  padding: 20px 50px; /* Tambahkan padding untuk memberi ruang */
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
  gap: 40px; /* Sesuaikan jarak antar elemen */
  padding-left: 20px; /* Pastikan tidak terlalu mepet ke kiri */
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
  margin-right: 0px;
}

.content-item {
  position: relative; /* Pastikan ini ada agar .line bisa absolute terhadapnya */
  padding-left: 25px; /* Beri ruang untuk garis */
}

.line {
  width: 5px;
  height: 60px; /* Atur tinggi agar garis terlihat jelas */
  background-color: #8bbbd7;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
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
