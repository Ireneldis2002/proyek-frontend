<template>
  <div class="ruang-publik-galeri">
    <header>
      <h1>GALERI</h1>
    </header>

    <div class="content-container">
      <!-- Bagian Menu -->
      <section class="menu">
        <div class="card">
          <router-link to="/ruang-publik/album-foto-dan-video-sosialisai-KIA"
            ><img
              src="@/assets/Sosialisasi_KIA_1.jpg"
              alt="Sosialisasi KIA"
              class="card-image"
            />
          </router-link>
          <h3 class="card-title">Sosialisasi KIA</h3>
        </div>

        <div class="card">
          <router-link to="/ruang-publik/album-foto-dan-video-Ombusmen"
            ><img
              src="@/assets/Ombusmen_1.jpg"
              alt="Ombusmen"
              class="card-image"
            />
          </router-link>
          <h3 class="card-title">Ombusmen</h3>
        </div>

        <div class="card">
          <router-link
            to="/ruang-publik/album-foto-dan-video-jemput-bola-kotabaru"
            ><img
              src="@/assets/JemputBola1.jpg"
              alt="Jemput Bola"
              class="card-image"
            />
          </router-link>
          <h3 class="card-title">Jemput Bola Kec. Kotabaru</h3>
        </div>

        <div class="card">
          <router-link
            to="/ruang-publik/album-foto-dan-video-persiapan-jemput-bola"
            ><img
              src="@/assets/LayananJemputBola1.jpg"
              alt="Jemput Bola Lagi"
              class="card-image"
            />
          </router-link>
          <h3 class="card-title">Pelayanan Jemput Bola</h3>
        </div>

        <div class="card">
          <img
            src="@/assets/Sosialisasi.jpg"
            alt="Kegiatan"
            class="card-image"
          />
          <h3 class="card-title">Kegiatan 1</h3>
        </div>

        <div class="card">
          <img
            src="@/assets/Sosialisasi.jpg"
            alt="Kegiatan"
            class="card-image"
          />
          <h3 class="card-title">Kegiatan 2</h3>
        </div>

        <div class="card">
          <img
            src="@/assets/Sosialisasi.jpg"
            alt="Kegiatan"
            class="card-image"
          />
          <h3 class="card-title">Kegiatan 3</h3>
        </div>

        <div class="card">
          <img
            src="@/assets/Sosialisasi.jpg"
            alt="Kegiatan"
            class="card-image"
          />
          <h3 class="card-title">Kegiatan 4</h3>
        </div>
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
  name: "RuangGaleriView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-publik-galeri {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 50px;
  margin-top: 20px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.menu {
  flex: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card {
  width: 260px;
  height: 320px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
}

.card-image {
  width: 230px;
  height: 230px;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

.card-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-top: 10px;
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

.card1, .card2, .card3 {
  overflow: auto; /* Atau ganti height dengan auto */
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
  font-size: 16px;
  line-height: 1;
  overflow-wrap: break-word;
  margin-bottom: 8px;
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
