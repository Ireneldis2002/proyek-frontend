<template>
  <div class="ruang-download">
    <!-- Main Content -->
    <div class="content-container">
      <button @click="goBack" class="btn-back">⬅</button>

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
  name: "ArtiKamusEmpatView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-download {
  max-width: 100%;
  padding: 20px 50px;
}

/* Tombol Back */
.btn-back {
  color: white;
  background-color: #8bbbd7;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px; /* Jarak antara tombol dan konten */
}

/* Container utama */
.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

/* Card Konten */
.card-content {
  flex: 3; /* Ukuran lebih besar dibanding sidebar */
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Pusatkan teks */
}

/* Judul dalam Card */
.card-content h1 {
  font-size: 28px;
  font-weight: 600;
  color: #4a6fa1;
  margin-bottom: 15px;
}

/* Paragraf dalam Card */
.card-content p {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  text-align: justify; /* Rata kiri-kanan */
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
