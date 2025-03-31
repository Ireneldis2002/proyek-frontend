<template>
  <div class="berita-disdukcapil">
    <h1>Berita</h1>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Berita Section -->
      <div class="berita">
        <!-- Card 1 -->
        <div class="card">
          <div class="line"></div>
          <div class="card-image">
            <img src="@/assets/Berita1.jpeg" alt="Gambar Berita 1" />
          </div>
          <div class="card-content">
            <h3>
              Sidak Ke Kantor Dukcapil, Bupati Ende Tepati Janji Evaluasi
              Kinerja Kadis
            </h3>
            <p class="date">19/11/2020</p>
            <p>
              Bupati Ende Djafar Ahmad menepati janjinya mengevaluasi kinerja
              Kepala Dinas Kependudukan dan Pencatatan Sipil (Dukcapil),
              Lambertus Sigasare.
            </p>
            <button class="btn" @click="keHalamanBacaBeritaSatu">
              Baca Selengkapnya...
            </button>
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
            <button class="btn" @click="keHalamanBacaBeritaDua">
              Baca Selengkapnya...
            </button>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card">
          <div class="card-image">
            <img src="@/assets/Berita3.jpg" alt="Gambar Berita 3" />
          </div>
          <div class="card-content">
            <h3>
              Tingkat Kualitas Layanan, Disdukcapil Ende, Kembali Turun ke Desa
              Kelisamba
            </h3>
            <p class="date">10/10/2020</p>
            <p>
              ENDE, Spektrum-ntt.com ||Untuk menyukseskan program Kartu Tanda
              Penduduk Elektronik (KTP-e) dan Kartu Identitas Anak (KIA)...
            </p>
            <button class="btn" @click="keHalamanBacaBeritaTiga">
              Baca Selengkapnya...
            </button>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="card">
          <div class="card-image">
            <img src="@/assets/Berita4.jpg" alt="Gambar Berita 4" />
          </div>
          <div class="card-content">
            <h3>
              Disdukcapil Kabupaten Ende Terjun Langsung Ke Masyarakat Untuk
              Pembuatan KTP-El
            </h3>
            <p class="date">22/09/2020</p>
            <p>
              ENDE . Spektrum-ntt.com ||Dinas Kependudukan dan Catatan Sipil
              (Disdukcapil) kabupaten Ende melakukan perekaman Kartu Tanda
              Penduduk Elektronik (KTP-el)
            </p>
            <button class="btn" @click="keHalamanBacaBeritaEmpat">
              Baca Selengkapnya...
            </button>
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
      this.$router.push("/berita/baca-berita-1");
    },
    keHalamanBacaBeritaDua() {
      this.$router.push("/berita/baca-berita-2");
    },
    keHalamanBacaBeritaTiga() {
      this.$router.push("/berita/baca-berita-3");
    },
    keHalamanBacaBeritaEmpat() {
      this.$router.push("/berita/baca-berita-4");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.berita-disdukcapil {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 36px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
  font-weight: bold;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

/* Berita Section */
.berita {
  flex: 3;
}

.berita h2 {
  font-size: 28px;
  color: #65a5ca;
  margin-bottom: 20px;
  font-weight: bold;
}

.card {
  display: flex;
  align-items: center;
  max-width: 1100px; /* Lebih panjang */
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  padding: 20px; /* Lebih luas */
  border-left: 6px solid #65a5ca; /* Garis di samping kiri */
}

.card-image {
  flex-shrink: 0;
  width: 220px; /* Lebih besar */
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 5px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-content {
  flex: 1;
  padding: 15px;
  max-width: 800px;
}

.card-content h3 {
  font-size: 24px; /* Ukuran lebih besar */
  margin: 0;
  color: #333;
  font-weight: bold;
}

.card-content .date {
  font-size: 18px;
  color: #777;
}

.card-content p {
  font-size: 18px; /* Lebih besar */
  color: #555;
  margin: 10px 0;
  line-height: 1.6;
}

.btn {
  background-color: #65a5ca;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.btn:hover {
  background-color: #4a90e2;
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
}


@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .card {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
  }

  .card-image {
    width: 100%;
    height: auto;
  }

  .card-content {
    max-width: 100%;
  }
}

</style>
