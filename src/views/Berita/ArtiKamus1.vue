<template>
  <div class="ruang-arti-kamus">
    <button @click="goBack" class="btn-back">⬅</button>

    <!-- Main Content -->
    <div class="content-container">
      <div class="card-content">
        <h1>"Penerbitan Data Kependudukan"</h1>
        <br />
        <br />
        <p>
          Terbitnya Surat Edaran Menteri Dalam Negeri Nomor 470/135/SJ tanggal
          13 Februari 2013, menjelaskan bahwa data kependudukan yang dapat
          digunakan sebagai data penduduk Kabupaten/Kota adalah data yang telah
          diolah dan dikonsolidasikan oleh Kementerian Dalam Negeri dan dapat
          diterbitkan per semester, yaitu Semester I pada 30 Juni dan Semester
          II pada 31 Desember. Selain itu jika ada keperluan khusus atau hal
          tertentu sesuai kebutuhan juga dapat diterbitkan. Hal ini dijelaskan
          pula pada Penjelasan pasal 5 s/d 7 UU No. 24 Tahun 2013.
        </p>
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
  name: "ArtiKamusSatuView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-arti-kamus {
  max-width: 100%;
  padding: 20px 50px;
}

.btn-back {
  color: white;
  background-color: #8bbbd7;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.card-content {
  flex: 3;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-content h1 {
  font-size: 28px;
  font-weight: 600;
  color: #4a6fa1;
  margin-bottom: 15px;
  font-style: italic;
}

.card-content p {
  font-size: 20px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
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
