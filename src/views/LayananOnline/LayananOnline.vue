<template>
  <h1>Layanan Online</h1>
  <div class="container">

    <section class="menu-grid">
      <div class="card">
        <img
          src="@/assets/AktaKelahiran.jpg"
          alt="Akta Kelahiran"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">
            <span>[Online]</span> <br />
            Layanan Akta Kelahiran
          </h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan layanan pembuatan akta kelahiran secara online
          </p>
          <br />
          <button class="card-button" @click="keHalamanAktaKelahiran">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img
          src="@/assets/KartuKeluarga.png"
          alt="Kartu Keluarga"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">
            <span>[Online]</span> <br />
            Layanan Kartu Keluarga
          </h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan layanan pembuatan kartu keluarga (KK) secara online
          </p>
          <br />
          <button class="card-button" @click="keHalamanKartuKeluarga">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img
          src="@/assets/KartuKeluarga.png"
          alt="Kartu Keluarga"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">
            <span>[Online]</span> <br />
            Layanan Kartu Identitas Anak (KIA)
          </h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan layanan pembuatan kartu identitas anak (KIA) secara online
          </p>
          <br />
          <button class="card-button" @click="keHalamanKIA">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
      <div class="card">
        <img
          src="@/assets/database.jpg"
          alt="Data Penduduk"
          class="card-image"
        />
        <div class="card-content">
          <h3 class="card-title">
            <span>[Online]</span> <br />
            Konsolidasi Database
          </h3>
          <br />
          <p class="card-description">
            Menu ini menyediakan layanan mengsinkronisasi data secara online
          </p>
          <br />
          <button class="card-button" @click="keHalamanKonsolidasi">
            Lihat Selengkapnya...
          </button>
        </div>
      </div>
    </section>

    <!-- Persyaratan Sidebar -->
    <section class="persyaratan">
      <h2>Persyaratan</h2>
      <hr />
      <ol>
        <li>
          <router-link :to="{ name: 'CatatLahir' }"
            >Pencatatan Kelahiran</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'CatatLahir' }"
            >Pencatatan Lahir Mati</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'TerbitKIA' }"
            >Penerbitan Kartu Identitas Anak (KIA)</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'TerbitKK' }"
            >Penerbitan Kartu Keluarga Baru</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'TerbitKK' }"
            >Penerbitan Kartu Keluarga Karena Perubahan Data</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'TerbitKK' }"
            >Penerbitan Kartu Keluarga Karena Hilang</router-link
          >
        </li>
        <li>
          <router-link :to="{ name: 'LayananKonsolidasi2' }"
            >Konsolidasi Database</router-link
          >
        </li>
      </ol>
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
    keHalamanAktaKelahiran() {
      this.$router.push("/layanan-online/layanan-akta-kelahiran");
    },
    keHalamanKartuKeluarga() {
      this.$router.push("/layanan-online/layanan-kartu-keluarga");
    },
    keHalamanKIA() {
      this.$router.push("/layanan-online/layanan-kartu-identitas-anak");
    },
    keHalamanKonsolidasi() {
      this.$router.push("/layanan-online/konsolidasi-database");
    },
  },
};
</script>

<style>
.container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin: 20px;
}

h1 {
  font-size: 32px;
  text-align: center;
  color: #65a5ca;
  margin-bottom: 30px;
  margin-top: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  flex: 1;
}

.card {
  width: 400px;
  height: 500px;
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
  margin: 10px 50px;
}

.card-image {
  width: 100%;
  height: 250px;
  border-radius: 10px;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.card-description {
  font-size: 20px;
  color: #666;
  margin-bottom: 12px;
}

.card-button {
  background: white;
  border: 1px solid #ccc;
  padding: 8px 12px;
  font-size: 18px;
  border-radius: 18px;
  border-color: #78a3bd;
  cursor: pointer;
  transition: all 0.3s ease;
}

.card-button:hover {
  background: #8bbbd7;
}

/* Sidebar Persyaratan */
.persyaratan {
  width: 300px;
  border: 1px solid #ddd;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
}

.persyaratan h2 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 5px;
}

.persyaratan hr {
  border: 1px solid #ddd;
}

.persyaratan ol {
  padding-left: 20px;
}

.persyaratan li {
  font-size: 20px;
  margin-bottom: 8px;
  color: #333;
  line-height: 1.5;
}


</style>
