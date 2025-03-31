<template>
  <div class="ruang-download">
    <button @click="goBack" class="btn-back">⬅</button>

    <header>
      <h1>[Album] Pelayanan Jemput Bola</h1>
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

      <!-- Sidebar dengan Info dan Pencarian -->
      <aside class="sidebar">
        <div class="image-container1">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "GaleriEmpatView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      fotoAlbum: [
        { src: require("@/assets/LayananJemputBola1.jpg"), title: "Layanan Jemput Bola Kec. Ndori 1" },
        { src: require("@/assets/LayananJemputBola2.jpg"), title: "Layanan Jemput Bola Kec. Ndori 2" },
        { src: require("@/assets/LayananJemputBola3.jpg"), title: "Layanan Jemput Bola Kec. Ndori 3" },
        { src: require("@/assets/LayananJemputBola4.jpg"), title: "Layanan Jemput Bola Kec. Ndori 4" },
        { src: require("@/assets/LayananJemputBola5.jpg"), title: "Layanan Jemput Bola Kec. Ndori 5" },
        { src: require("@/assets/LayananJemputBola6.jpg"), title: "Layanan Jemput Bola Kec. Ndori 6" },
        { src: require("@/assets/LayananJemputBola7.jpg"), title: "Layanan Jemput Bola Kec. Ndori 7" },
        { src: require("@/assets/LayananJemputBola8.jpg"), title: "Layanan Jemput Bola Kec. Ndori 8" },
    ],
      videoAlbum: [
        {
          thumbnail: require("@/assets/LayananJemputBola1.jpg"),
          title: "Proses LayananJemput Bola Kec. Ndori",
          url: "https://www.youtube.com/watch?v=example1",
        },
        {
          thumbnail: require("@/assets/LayananJemputBola1.jpg"),
          title: "Proses LayananJemput Bola Kec. Ndori",
          url: "https://www.youtube.com/watch?v=example2",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-download {
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

.image-container img {
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar {
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
</style>
