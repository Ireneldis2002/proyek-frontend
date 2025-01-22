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
  name: "HomePage1",
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
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap; /* Membuat layout fleksibel */
  margin-top: 20px;
}

.menu-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  width: 70%; /* Default width untuk perangkat besar */
}

.latest-news {
  width: 28%; /* Default width untuk perangkat besar */
  margin-top: 20px;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%; /* Lebar menu-item agar sesuai dengan 4 gambar dalam satu baris */
  cursor: pointer;
}

.menu-item img {
  width: 100%;
  height: auto;
}

.news-box {
  padding: 10px;
  border: 1px solid #ccc;
}

.news-box h3 {
  font-size: 18px;
}

.news-box ul {
  list-style: none;
  padding-left: 0;
}

.news-box li {
  margin-bottom: 8px;
}

/* Media Queries untuk perangkat yang lebih kecil seperti tablet dan ponsel */
@media (max-width: 1024px) {
  .container {
    flex-direction: column; /* Menyusun elemen secara vertikal pada layar yang lebih kecil */
  }

  .menu-grid {
    width: 100%; /* Lebar menu-grid diubah menjadi 100% untuk tablet */
    justify-content: center; /* Menyelaraskan elemen menu ke tengah */
  }

  .latest-news {
    width: 100%; /* Membuat latest-news lebar penuh pada tablet */
    margin-top: 20px; /* Memberikan jarak di atas latest-news */
  }

  .menu-item {
    width: 45%; /* Mengatur lebar menu-item menjadi lebih besar pada layar tablet */
  }
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .menu-grid {
    width: 100%;
  }

  .latest-news {
    width: 100%;
    margin-top: 20px;
  }

  .menu-item {
    width: 90%; /* Menu-item lebar penuh pada perangkat ponsel */
    margin-bottom: 20px; /* Memberikan jarak antar gambar pada ponsel */
  }
}
</style>
