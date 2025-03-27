<template>
  <div class="ruang-kamus-adminduk">
    <h1>Kamus Adminduk</h1>

    <!-- Main Content -->
    <div class="content-container">
      <!-- Grid for Kamus Adminduk -->
      <div class="grid-container">
        <router-link
          class="card"
          to="/berita/kamus-adminduk/baca-penjelasan-arti-penerbitan-data-kependudukan"
        >
          Penerbitan Data Kependudukan
        </router-link>

        <router-link
          class="card"
          to="/berita/kamus-adminduk/baca-penjelasan-arti-alur-status-perekaman"
        >
          Alur Status Perekaman KTP-el
        </router-link>

        <router-link
          class="card"
          to="/berita/kamus-adminduk/baca-penjelasan-arti-pengertian-PIAK-dan-PD"
        >
          Pengertian PIAK dan PD
        </router-link>

        <router-link
          class="card"
          to="/berita/kamus-adminduk/baca-penjelasan-arti-ktp-berlaku-seumur-hidup"
        >
          KTP Berlaku Seumur Hidup
        </router-link>

        <div class="card">Jika Kutipan Akta Kelahiran Anda Hilang</div>
        <div class="card">Jenis Status Anak Pada Kutipan Akta Kelahiran</div>
        <div class="card">Cara Mengurus Akta Kelahiran Anak Diluar Kawin</div>
        <div class="card">Langkah Mengurus Surat Keterangan Pindah Datang</div>
        <div class="card">
          Langkah-Langkah Jika Ada Kesalahan Pengetikan di Akta Kelahiran
        </div>
        <div class="card">Hak Akses dan Pemanfaatan Data Kependudukan</div>
        <div class="card">Penambahan Anggota Keluarga pada Kartu Keluarga</div>
        <div class="card">
          Sistem Informasi Administrasi Kependudukan (SIAK)
        </div>
      </div>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="image-container">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
      </aside>
    </div>

    <!-- PAGINATION -->
    <footer class="pagination">
      <div class="pagination-container">
        <nav>
          <button>&laquo;</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>&raquo;</button>
        </nav>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "KamusAdminduk",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-kamus-adminduk {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-top: 20px;
  margin-bottom: 50px;
}

/* Grid Layout */
.grid-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  column-gap: 5px;
}

/* Styling Card */
.card {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s;
  font-size: 20px;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:hover {
  transform: scale(1.05);
}

/* Sidebar Section */
.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.pagination-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 1220px;
  right: 1450px;
}

.pagination button {
  padding: 8px 12px;
  margin: 2px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
}

.pagination button.active {
  background-color: #8bbbd7;
  color: white;
}

.pagination button:hover {
  background-color: #65a5ca;
  color: white;
}
</style>
