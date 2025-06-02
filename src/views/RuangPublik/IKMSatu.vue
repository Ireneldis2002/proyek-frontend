<template>
  <div class="ruang-publik">
    <button @click="goBack" class="btn-back">⬅</button>

    <header>
      <h1>Indeks Kepuasan Masyarakat Semester I Tahun 2024</h1>
    </header>

    <div class="content-container">
      <!-- Bagian Menu -->
      <section class="menu">
        <table class="menu-table">
          <div class="image-container">
            <img src="@/assets/ikm1.png" alt="IKM" />
          </div>
        </table>
      </section>

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
  name: "IKMPertamaView",
  methods: {
    goBack() {
      this.$router.go(-1); 
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-publik {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: center;
  color: #65a5ca;
  margin-bottom: 100px;
  margin-top: 20px;
  margin-right: 300px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.menu {
  flex: 2;
}

.menu-table {
  width: 90%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
  color: #333;
}

.menu-table td i {
  font-size: 24px;
  color: #65a5ca;
}

.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.image-container1 {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
}

.image-container1 img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-back {
  color: white;
  background-color: #8bbbd7;
  padding: 10px 20px;
  border-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 10px;
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

.logo img {
  width: 150px;
  margin-bottom: 30px;
}

.card1 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 150px;
}

.card2 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 280px;
}

.card3 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 420px;
}

.card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

.card1 h3,
.card2 h3,
.card3 h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px; 
  text-align: left;
}

.card p, .card ol {
  font-size: 8px;
  text-align: left;
  color: #333;
  margin: 0;
  padding: 0;
}

.card1 p, .card1 li,
.card2 p, .card2 li,
.card3 p, .card3 li {
  text-align: left;
}

.card ol {
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
