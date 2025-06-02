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

.grid-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  column-gap: 5px;
}

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
  top: 1350px;
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
