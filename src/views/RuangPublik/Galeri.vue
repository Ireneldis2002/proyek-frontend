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

      <!-- Sidebar n -->
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

.image-container img {
  width: 75%;
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
</style>
