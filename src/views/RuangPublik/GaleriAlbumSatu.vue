<template>
  <div class="ruang-galeri">
    <button @click="goBack" class="btn-back">⬅</button>

    <header>
      <h1>[Album] Sosialisasi KIA</h1>
    </header>

    <div class="content-container">
      <!-- Bagian Menu -->
      <section class="menu">
        <!-- Foto -->
        <div class="album-container">
          <h2 class="album-title">FOTO</h2>
          <div class="photo-grid">
            <div
              class="photo-card"
              v-for="(foto, index) in fotoAlbum"
              :key="index"
            >
              <img :src="foto.src" :alt="foto.title" class="photo-image" />
              <div class="photo-title">{{ foto.title }}</div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <!-- Video -->
        <div class="video-container">
          <h2 class="video-title">VIDEO</h2>
          <div class="video-grid">
            <div
              class="video-card"
              v-for="(video, index) in videoAlbum"
              :key="index"
            >
              <a :href="video.url" target="_blank" class="video-link">
                <img
                  :src="video.thumbnail"
                  :alt="video.title"
                  class="video-thumbnail"
                />
                <div class="overlay">
                  <span class="play-icon">▶</span>
                </div>
              </a>
              <div class="video-title-text">{{ video.title }}</div>
            </div>
          </div>
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
  name: "GaleriSatuView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      fotoAlbum: [
        { src: require("@/assets/Sosialisasi_KIA_1.jpg"), title: "Sosialisasi KIA 1" },
        { src: require("@/assets/Sosialisasi_KIA_2.jpg"), title: "Sosialisasi KIA 2" },
        { src: require("@/assets/Sosialisasi_KIA_3.jpg"), title: "Sosialisasi KIA 3" },
        { src: require("@/assets/Sosialisasi_KIA_4.jpg"), title: "Sosialisasi KIA 4" },
        { src: require("@/assets/Sosialisasi_KIA_5.jpg"), title: "Sosialisasi KIA 5" },
        { src: require("@/assets/Sosialisasi_KIA_6.jpg"), title: "Sosialisasi KIA 6" },
        { src: require("@/assets/Sosialisasi_KIA_7.jpg"), title: "Sosialisasi KIA 7" },
        { src: require("@/assets/Sosialisasi_KIA_8.jpg"), title: "Sosialisasi KIA 8" },
      ],
      videoAlbum: [
        {
          thumbnail: require("@/assets/Sosialisasi_KIA_1.jpg"),
          title: "Sosialisasi Tentang KIA",
          url: "https://www.youtube.com/watch?v=example1",
        },
        {
          thumbnail: require("@/assets/Sosialisasi_KIA_1.jpg"),
          title: "Sosialisasi Tentang KIA",
          url: "https://www.youtube.com/watch?v=example2",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-galeri {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: center;
  color: #65a5ca;
  margin-bottom: 50px;
  margin-top: 20px;
  margin-right: 500px;
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
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
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

.album-container {
  padding: 20px;
}

.album-title {
  font-size: 24px;
  font-weight: bold;
  background-color: #a8c3d1;
  padding: 8px 12px;
  display: inline-block;
  border-radius: 4px;
}

.photo-grid {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
}

.photo-card {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  background: white;
}

.photo-image {
  width: 100%;
  height: 265px;
  object-fit: cover;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.photo-title {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 8px;
  font-size: 14px;
}

.video-container {
  padding: 20px;
}

.video-title {
  font-size: 24px;
  font-weight: bold;
  background-color: #a8c3d1;
  padding: 8px 12px;
  display: inline-block;
  border-radius: 4px;
}

.video-grid {
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 20px;
}

.video-card {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  background: white;
}

.video-link {
  display: block;
  position: relative;
}

.video-thumbnail {
  width: 100%;
  height: 265px;
  object-fit: cover;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.video-link:hover .overlay {
  opacity: 1;
}

.play-icon {
  font-size: 24px;
  color: white;
  background: rgba(0, 0, 0, 0.6);
  padding: 10px;
  border-radius: 50%;
}

.video-title-text {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 8px;
  font-size: 14px;
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
