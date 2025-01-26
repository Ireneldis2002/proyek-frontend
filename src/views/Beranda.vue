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
      <div class="menu-item" @click="navigateTo('/persyaratan')">
        <img src="@/assets/Beranda1.png" alt="Persyaratan Administrasi" />
      </div>
      <div class="menu-item" @click="navigateTo('/kartu-anak')">
        <img src="@/assets/Beranda2.png" alt="Kartu Indonesia Anak" />
      </div>
      <div class="menu-item" @click="navigateTo('/form-administrasi')">
        <img src="@/assets/Beranda3.png" alt="Form Administrasi" />
      </div>
      <div class="menu-item" @click="navigateTo('/layanan-pengaduan')">
        <img src="@/assets/Beranda4.png" alt="Layanan Pengaduan Online" />
      </div>
    </div>

    <div class="latest-news">
      <div class="news-box">
        <h3>Berita Terbaru</h3>
        <ul>
          <li>Sidak ke Kantor Dukcapil Bupati Ende Tepati Janji Evaluasi Kinerja Kadis</li>
          <li>Disdukcapil Kabupaten Ende Terjun Langsung ke Masyarakat Untuk Pembuatan KTP-El</li>
          <li>Disdukcapil Ende Gandeng Dinas Pendidikan dan Kebudayaan Sosialisasi Program KIA</li>
          <li>Strategi Lambertus Sigasare Kadis Dukcapil Ende Percepat Kepemilikan Adminduk</li>
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
        require("@/assets/Carrousel.png"), // Ganti dengan path gambar yang sesuai
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
  },
};
</script>

<style >
/* Reset default margin dan padding */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Lato', sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

/* Gaya untuk konten utama */
.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff; /* Warna latar belakang konten */
}

/* Gaya untuk gambar */
.responsive-image {
  width: 100%; /* Mengatur lebar gambar 100% dari kontainer */
  height: auto; /* Biarkan tinggi otomatis agar gambar tidak terdistorsi */
  max-height: 50vh; /* Membatasi tinggi gambar agar tidak lebih dari 50% dari viewport height */
  object-fit: cover; /* Mengatur gambar agar terjaga proporsinya */
  margin: 10px 0; /* Memberikan jarak atas dan bawah untuk gambar */
}

/* Gaya untuk carousel */
.carousel {
  position: relative;
  text-align: center; /* Agar tombol berada di tengah */
}

/* Gaya untuk tombol panah */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white; /* Warna tombol putih */
  font-weight: bold; /* Menebalkan teks */
  font-size: 36px; /* Ukuran font untuk tombol panah */
  background: none; /* Tanpa latar belakang */
  border: none; /* Tanpa border */
  cursor: pointer; /* Mengubah kursor saat hover */
  z-index: 1; /* Pastikan tombol di atas gambar */
}

.left-arrow {
  left: 10px; /* Letak tombol kiri */
}

.right-arrow {
  right: 10px; /* Letak tombol kanan */
}

/* Styling untuk berita */
.latest-news {
  text-align: left;
  margin: 20px 0;
  color: white;
}

.news-box {
  background-color: #8BBBD7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  color: #000;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.latest-news {
  text-align: left;
  margin: 20px 0;
  color: white;
}

/* Mengatur kotak berita agar proporsional */
.news-box {
  background-color: #8BBBD7;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
  font-family: 'Lato', sans-serif;
  color: #000;
  width: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Mengatur elemen berita di dalam kotak */
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

/* Mengatur layout konten utama agar rapi */
.content-wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr; /* 1 kolom berita dan 1 kolom menu */
  gap: 20px;
  width: 100%; /* Pastikan lebar kontainer sesuai */
}

.container {
  display: flex; /* Menggunakan Flexbox untuk menyusun elemen secara horizontal */
  justify-content: space-between; /* Memberikan ruang antara menu-item dan latest-news */
  align-items: flex-start; /* Menyelaraskan elemen ke atas */
  gap: 20px; /* Jarak antar elemen */
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Menyusun 4 kolom secara otomatis */
  gap: 20px; /* Memberikan jarak antar item */
  width: 100%; /* Pastikan menu-grid memenuhi lebar kontainer */
}

.menu-item {
  width: 500px; /* Lebar kontainer */
  height: 500px; /* Tinggi kontainer */
}

.menu-item img {
  width: 200%;
  height: 200%;
  object-fit: cover;
}


</style>
