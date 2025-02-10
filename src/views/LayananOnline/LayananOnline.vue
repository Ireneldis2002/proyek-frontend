<template>
  <h1 style="text-align: center">Layanan Online</h1>
  <div class="container">
    <!-- 4 Menu Items Section -->
    <section class="menu-grid">
      <router-link to="/layanan-online/layanan-akta-kelahiran" class="menu-item">
        <img src="@/assets/Layanan1.png" alt="Akta Kelahiran" />
      </router-link>

      <router-link to="/layanan-online/layanan-kartu-keluarga" class="menu-item">
        <img src="@/assets/Layanan2.png" alt="Kartu Keluarga" />
      </router-link>

      <router-link to="/layanan-online/layanan-kartu-identitas-anak" class="menu-item">
        <img src="@/assets/Layanan3.png" alt="Kartu Identitas Anak" />
      </router-link>

      <router-link to="/layanan-online/konsolidasi-database" class="menu-item">
        <img src="@/assets/Layanan4.png" alt="Kartu Identitas Anak" />
      </router-link>

    </section>

    <!-- Persyaratan Section -->
    <section class="persyaratan">
      <h2>Persyaratan</h2>
      <hr />
      <ul>
        <li>1. Pencatatan Kelahiran</li>
        <li>2. Pencatatan Lahir Mati</li>
        <li>3. Penerbitan Kartu Identitas Anak (KIA)</li>
        <li>4. Penerbitan Kartu Keluarga Baru</li>
        <li>5. Penerbitan Kartu Keluarga Karena Perubahan Data</li>
        <li>6. Penerbitan Kartu Keluarga Karena Hilang</li>
        <li>7. Konsolidasi Database</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "LayananOnlineView",
  methods: {
    navigateTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style>
/* Kontainer utama */
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin: 20px;
}

/* Grid Layanan */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
}

.menu-item img {
  max-width: 80%;
  height: auto;
  border-radius: 5px;
}

/* Persyaratan */
.persyaratan {
  width: 300px;
  border: 1px solid #ddd;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
}

.persyaratan h2 {
  font-size: 18px;
  text-align: center;
  margin-bottom: 5px;
}

.persyaratan hr {
  border: 1px solid #ddd;
}

.persyaratan ul {
  list-style: none;
  padding: 0;
}

.persyaratan li {
  font-size: 14px;
  margin-bottom: 8px;
  color: #333;
}
</style>
