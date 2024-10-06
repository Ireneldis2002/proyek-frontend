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

  <div style="display: flex">
    <!-- 4 Menu Items Section -->
    <section class="menu-grid">
      <div class="menu-item" @click="navigateTo('/persyaratan')">
        <img src="@/assets/Menu1.png" alt="Persyaratan Administrasi" />
      </div>
      <div class="menu-item" @click="navigateTo('/kartu-anak')">
        <img src="@/assets/Menu3.png" alt="Kartu Indonesia Anak" />
      </div>
      <div class="menu-item" @click="navigateTo('/form-administrasi')">
        <img src="@/assets/Menu2.png" alt="Form Administrasi" />
      </div>
      <div class="menu-item" @click="navigateTo('/layanan-pengaduan')">
        <img src="@/assets/Menu4.png" alt="Layanan Pengaduan Online" />
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="latest-news" style="margin-left: auto">
      <div class="news-box">
        <div style="margin-left: 15px; margin-right: 15px">
          <h2>Berita Terbaru</h2>
          <hr />
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
          <p>
            Isi berita terbaru akan tampil di sini...Isi berita terbaru akan
            tampil di sini...
          </p>
        </div>
      </div>
    </section>
  </div>
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

<style>
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

/* Latest News Styling */
.latest-news {
  text-align: left;
  margin: 20px 0;
  color: white;
}
.news-box {
  border: 1px solid #ddd;
  width: 100%;
  background-color: #27394a;
}

/* 4 Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Adjust number of columns as needed */
  /* Set gap between items to 20px */
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Reduced height for smaller images */
  overflow: hidden; /* Hide overflow if the image is larger */
}

.menu-item img {
  max-width: 80%; /* Limit width to 70% of the parent */
  max-height: 80%; /* Limit height to 70% of the parent */
  object-fit: contain; /* Maintain aspect ratio and fit within the container */
  margin-top: 10px;
}

</style>
