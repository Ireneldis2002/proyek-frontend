<template>
  <h1 style="text-align: center">LAYANAN ONLINE</h1>
  <div style="display: flex">
    <!-- 4 Menu Items Section -->
    <section class="menu-grid">
      <router-link to="/form-addakta">
        <div class="menu-item">
          <img src="@/assets/Group Akta.png" alt="Akta Kelahitan" />
        </div>
      </router-link>

      <div class="menu-item" @click="navigateTo('/kartu-anak')">
        <img src="@/assets/Group KIA.png" alt="Kartu Indonesia Anak" />
      </div>
      <div class="menu-item" @click="navigateTo('/kartu-keluarga')">
        <img src="@/assets/Group KKpng.png" alt="Kartu Keluarga" />
      </div>
      <div class="menu-item" @click="navigateTo('/layanan-konsolidasi')">
        <img src="@/assets/Group Konsolidasi.png" alt="Konsolidasi" />
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="latest-news" style="margin-left: auto">
      <div class="news-box">
        <div style="margin-left: 15px; margin-right: 15px">
          <h2>PERSYARATAN</h2>
          <hr />
          <p>1. Akta Kelahitan</p>
          <p>2. Kartu Identitas Anak (KIA)</p>
          <p>3. Kartu Keluarga</p>
          <p>4. Konsolidasi Database</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "LayananOnlineView",
};
</script>

<style>
/* Latest News Styling */
.latest-news {
  text-align: left;
  margin: 20px 0;
  color: black;
}
.news-box {
  border: 1px solid #ddd;
  width: 100%;
  background-color: white;
}

/* 4 Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Adjust number of columns as needed */
  /* Set gap between items to 20px */
  align-items: center;
  margin-top: 30px;
  margin-bottom: 50px;
}

.menu-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Reduced height for smaller images */
  overflow: hidden; /* Hide overflow if the image is larger */
  cursor: pointer;
}

.menu-item img {
  max-width: 80%; /* Limit width to 70% of the parent */
  max-height: 80%; /* Limit height to 70% of the parent */
  object-fit: contain; /* Maintain aspect ratio and fit within the container */
  margin-top: 10px;
}
</style>
