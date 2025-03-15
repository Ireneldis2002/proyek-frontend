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
      <router-link
        to="/standar-pelayanan/penerbitan/penerbitan-KTP"
        class="menu-item"
      >
        <img src="@/assets/Beranda1.png" alt="Persyaratan Administrasi KTP" />
      </router-link>
      <router-link
        to="/standar-pelayanan/penerbitan/penerbitan-KK"
        class="menu-item"
      >
        <img src="@/assets/Beranda2.png" alt="Persyaratan Administrasi KK" />
      </router-link>
      <router-link
        to="/layanan-online/layanan-akta-kelahiran"
        class="menu-item"
      >
        <img src="@/assets/Beranda3.png" alt="Layanan Akta Kelahiran" />
      </router-link>
      <router-link to="/data-penduduk/jumlah-penduduk" class="menu-item">
        <img src="@/assets/Beranda4.png" alt="Informasi Penduduk" />
      </router-link>
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
        require("@/assets/logo.png"),
        require("@/assets/LogoDukcapil.png"),
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
  },
};
</script>

<style>
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

/* gambar */
.responsive-image {
  width: 100%;
  height: auto;
  max-height: 50vh;
  object-fit: cover;
  margin: 10px 0;
}

/* carousel */
.carousel {
  position: relative;
  text-align: center; 
}

/* tombol panah */
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
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;
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
</style>
