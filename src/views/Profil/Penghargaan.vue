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

      <!-- Bagian Kanan: Sidebar (Profil Pimpinan) -->
      <div class="sidebar-container">
        <img
          src="@/assets/ProfilPimpinan.png"
          alt="Gambar Profil"
          class="sidebar-image"
        />
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
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
}

/* Container utama: Flexbox untuk pembagian kiri dan kanan */
.content-container {
  display: flex;
  gap: 40px; /* Jarak antara kiri (penghargaan) dan kanan (sidebar) */
  align-items: flex-start;
}

/* Bagian kiri: Container Penghargaan */
.penghargaan-container {
  flex: 2; /* Lebih besar dibanding sidebar */
  display: flex;
  flex-direction: column;
}

/* Gaya untuk teks penghargaan */
.content-item {
  padding-bottom: 20px;
}

/* Bagian kiri: Gambar-gambar Penghargaan */
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

/* Bagian teks penghargaan */
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

/* Bagian kanan: Sidebar */
.sidebar-container {
  flex: 1; /* Sidebar lebih kecil */
  display: flex;
  justify-content: flex-end;
}

.sidebar-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Gaya untuk teks terakhir update */
.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
}
</style>
