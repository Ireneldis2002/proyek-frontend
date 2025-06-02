<template>
  <div class="berita-disdukcapil">
    <h1>Berita</h1>

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

      <aside class="sidebar">
        <div class="logo">
          <img src="@/assets/Disdukcapil.png" alt="Logo Disdukcapil" />
        </div>

        <div class="card1">
          <h3>MOTTO</h3>
          <p>“Pelayanan Ramah, Mudah, Cepat dan Akuntabel”</p>
        </div>

        <div class="card2">
          <h3>KOMITMEN</h3>
          <ol>
            <li>Berjanji dan sanggup untuk melaksanakan pelayanan yang</li>
            <li>Berjanji akan memberikan pelayanan</li>
            <li>Siap menerima sanksi dari Pimpinan</li>
          </ol>
        </div>

        <div class="card3">
          <h3>MAKLUMAT PELAYANAN</h3>
          <ol>
            <li>
              Berjanji dan memiliki kesanggupan untuk melaksanakan pelayanan
              publik
            </li>
            <li>
              Memberikan pelayanan publik sesuai dengan kewajiban dan akan
            </li>
            <li>
              Bersedia untuk menerima sanksi dan/atau memberikan kompensasi
              sesuai dengan ketentuan peraturan
            </li>
          </ol>
        </div>

        <div class="kepala-dinas">
          <p>
            KEPALA DINAS <br />KEPENDUDUKAN DAN PENCATATAN SIPIL <br />KABUPATEN
            ENDE
          </p>
          <p class="nama"><strong>Lambertus Sigasare, ST. M.Eng</strong></p>
          <p class="nip">Pembina Tk. I</p>
          <p class="nip">NIP. 197510232002121006</p>
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
  max-width: 1100px;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  overflow: hidden;
  padding: 20px; 
  border-left: 6px solid #65a5ca; 
}

.card-image {
  flex-shrink: 0;
  width: 220px; 
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
  font-size: 24px; 
  margin: 0;
  color: #333;
  font-weight: bold;
}

.card-content .date {
  font-size: 18px;
  color: #777;
}

.card-content p {
  font-size: 18px; 
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

/* Sidebar */
.sidebar {
  width: 350px;
  background-color: #8bbbd7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Arial", sans-serif;
}

.sidebar .logo img {
  width: 150px;
  margin-bottom: 30px;
}

.sidebar .card1 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 150px;
}

.sidebar .card2 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 280px;
}

.sidebar .card3 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 420px;
}

.sidebar .card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

.sidebar .card1 h3,
.sidebar .card2 h3,
.sidebar .card3 h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: left;
}

.sidebar .card p,
.sidebar .card ol {
  font-size: 12px;
  text-align: left;
  color: #333;
  margin: 0;
  padding: 0;
}

.sidebar .card1 p,
.sidebar .card1 li,
.sidebar .card2 p,
.sidebar .card2 li,
.sidebar .card3 p,
.sidebar .card3 li {
  text-align: left;
}

.sidebar .card ol {
  padding-left: 18px;
}

.kepala-dinas {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.kepala-dinas .nama {
  margin-top: 100px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}

.kepala-dinas .nip {
  font-weight: bold;
  color: #555;
  font-size: 16px;
}
</style>
