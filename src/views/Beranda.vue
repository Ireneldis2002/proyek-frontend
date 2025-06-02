<template>
  <!-- Carousel Gambar -->
  <div class="carousel">
    <button class="arrow left-arrow" @click="prevImage">&lt;&lt;</button>
    <img
      :src="images[currentImage]"
      alt="Carousel Image"
      class="responsive-image"
    />
    <button class="arrow right-arrow" @click="nextImage">&gt;&gt;</button>
  </div>

  <section class="container">
    <div class="menu-grid">
      <div class="card">
        <img src="@/assets/KTP.jpg" alt="KTP Elektronik" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">Penerbitan KTP Elektronik</h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan informasi lengkap mengenai persyaratan,
            prosedur, waktu, biaya, dan produk layanan untuk pengurusan KTP
            elektronik.
          </p>
          <br />
          <button class="card-button" @click="keHalamanTerbitKTP">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/KartuKeluarga.png" alt="Kartu Keluarga" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">Penerbitan Kartu Keluarga</h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan informasi lengkap mengenai persyaratan,
            prosedur, waktu, biaya, dan produk layanan untuk pengurusan Kartu Keluarga
          </p>
          <br />
          <button class="card-button" @click="keHalamanTerbitKK">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/AktaKelahiran.jpg" alt="Akta Kelahiran" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">Layanan Akta Kelahiran (Online)</h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan akses formulir online untuk mempermudah pengurusan akta kelahiran
          </p>
          <br />
          <button class="card-button" @click="keHalamanLayananAkta">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/Penduduk.jpg" alt="Data Penduduk" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">Data Jumlah Penduduk</h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan informasi data kependudukan berdasarkan nama wilayah, jenis kelamin, dan total jumlah penduduk
          </p>
          <br />
          <button class="card-button" @click="keHalamanDataPenduduk">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>

    </div>

    <div class="latest-news">
      <div class="news-box">
        <h3>Berita Terbaru</h3>
        <ul>
          <li>
            <router-link to="/berita/baca-berita-1">
              Sidak ke Kantor Dukcapil Bupati Ende Tepati Janji Evaluasi Kinerja
              Kadis
            </router-link>
          </li>
          <li>
            <router-link to="/berita/baca-berita-2">
              Pelayanan Jemput Bola Dukcapil Ende Diapresiasi Masyarakat
            </router-link>
          </li>
          <li>
            <router-link to="/berita/baca-berita-3">
              Tingkat Kualitas Layanan, Disdukcapil Ende, Kembali Turun ke Desa
              Kelisamba
            </router-link>
          </li>
          <li>
            <router-link to="/berita/baca-berita-4">
              Disdukcapil Kabupaten Ende Terjun Langsung Ke Masyarakat Untuk
              Pembuatan KTP-El
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: [
        require("@/assets/Carrousel.png"),
        require("@/assets/Carrousel1.jpg"),
        require("@/assets/Carrousel2.jpg"),
      ],
      currentImage: 0,
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    navigateTo(path) {
      this.$router.push(path);
    },
    keHalamanTerbitKTP() {
      this.$router.push("/standar-pelayanan/penerbitan/penerbitan-KTP");
    },
    keHalamanTerbitKK() {
      this.$router.push("/standar-pelayanan/penerbitan/penerbitan-KK");
    },
    keHalamanLayananAkta() {
      this.$router.push("/layanan-online/layanan-akta-kelahiran");
    },
    keHalamanDataPenduduk() {
      this.$router.push("/data-penduduk/jumlah-penduduk");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Lato", sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
}

.responsive-image {
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: cover;
  margin: 10px 0;
}

.carousel {
  position: relative;
  text-align: center;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  font-size: 36px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

/* Berita */

.latest-news {
  text-align: left;
  margin: 20px 0;
  color: white;
}

.news-box {
  background-color: #8bbbd7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  font-family: "Lato", sans-serif;
  color: #000;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.news-box h3 {
  font-size: 30px;
  margin-bottom: 15px;
}

.news-box ul {
  list-style-type: none;
  padding: 0;
  font-size: 20px;
}

.news-box li {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
}

.news-box li:last-child {
  border-bottom: none;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
  gap: 30px; 
  padding: 20px; 
}

.menu-item {
  width: 500px;
  height: 500px;
}

.menu-item img {
  width: 200%;
  height: 200%;
  object-fit: cover;
}

.card {
  width: 350px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  margin: 10px 50px; 
}

.card-image {
  width: 100%;
  height: 250px;
  border-radius: 10px;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.card-description {
  font-size: 20px;
  color: #666;
  margin-bottom: 12px;
}

.card-button {
  background: white;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 18px;
  border-radius: 18px;
  border-color: #78A3BD;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-button:hover {
  background: #8bbbd7;
}
</style>
