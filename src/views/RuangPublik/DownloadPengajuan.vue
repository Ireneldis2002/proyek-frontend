<template>
  <div class="ruang-download">

    <button @click="goBack" class="btn-back">⬅ </button>

    <header>
      <h1> Surat Pernyataan Tanggung Jawab Mutlak</h1>
    </header>

    <div class="header-container">
      <div class="search-container">
        <input
          type="text"
          class="search-input"
          placeholder="Cari file..."
        />
        <button class="search-button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>

    <div class="content-container">
      <!-- Bagian Menu -->
      <section class="menu">
        <table class="menu-table">
          <tbody>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.01 Biodata Keluarga </b></td>
                      <td>
                        <a href="/assets/F-1.01_Biodata_Keluarga.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.02 Pendaftaran Peristiwa Kependudukan</b></td>
                      <td>
                        <a href="/assets/F-1.02_Pendaftaran_Peristiwa_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.03 Pendaftaran Perpindahan Penduduk</b></td>
                      <td>
                        <a href="/assets/F-1.03_Pendaftaran_Perpindahan_Penduduk.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.01 Pelaporan Pencatatan Sipil di dalam wilayah NKRI</b></td>
                      <td>
                        <a href="/assets/F-2.01_Pelaporan_Pencatatan_Sipil_di_dalam_wilayah_NKRI.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.02 Pelaporan Pencatatan Sipil di luar wilayah NKRI	
                    </b></td>
                      <td>
                        <a href="/assets/F-2.02_Pelaporan_Pencatatan_Sipil_di_luar_wilayah_NKRI.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-3.01 Formulir Pengajuan User ID </b></td>
                      <td>
                        <a href="/assets/F-3.01_Formulir_Pengajuan_User_ID.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>Formulir Permohonan KIA </b></td>
                      <td>
                        <a href="/assets/Formulir Permohonan KIA.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    
                    <!-- Tambahkan baris lainnya sesuai kebutuhan -->
                  </tbody>
        </table>
      </section>

      <!-- Sidebar dengan Info dan Pencarian -->
      <aside class="sidebar">
        <div class="image-container">
        <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
      </div>
      </aside>
    </div>

    <!-- Pagination -->
    <footer class="pagination">
      <nav>
        <button>&laquo;</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;</button>
      </nav>
    </footer>

  </div>
</template>

<script>
export default {
  name: "RuangDownloadPengajuanView",
  methods: {
            goBack() {
                this.$router.go(-1); // Untuk kembali ke halaman sebelumnya
                }
            }
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: space-between; /* Menempatkan elemen di ujung kiri dan kanan */
  align-items: center; /* Vertikal tengah */
  gap: 10px;
}

.search-container {
  display: flex;
  align-items: center;
  position: relative; /* Agar tombol dapat diposisikan relatif terhadap kontainer */
  width: 300px; /* Lebar kontainer pencarian */
}

.search-input {
  padding: 10px 40px 10px 10px; /* Tambahkan padding di kanan untuk memberi ruang untuk tombol */
  border: 2px solid #27394a; /* Border input */
  border-radius: 10px; /* Sudut melengkung */
  background-color: white; /* Latar belakang input */
  color: black; /* Warna teks di dalam input */
  width: 100%; /* Input memenuhi lebar kontainer */
  box-sizing: border-box; /* Pastikan padding tidak mempengaruhi lebar total */
}

.search-input::placeholder {
  color: #b0c4de; /* Warna placeholder */
}

.search-button {
  position: absolute; /* Posisi tombol menjadi absolute */
  right: 10px; /* Jarak dari kanan kontainer */
  top: 50%; /* Pusatkan secara vertikal */
  transform: translateY(-50%); /* Menggeser tombol ke tengah secara vertikal */
  padding: 10px; /* Jarak dalam tombol */
  background-color: transparent; /* Latar belakang transparan */
  color: #27394a; /* Warna ikon */
  border: none; /* Tanpa border */
  cursor: pointer; /* Ubah kursor saat hover */
  font-size: 16px; /* Ukuran font */
}

.search-button:hover {
  color: #ffcc00; /* Warna saat hover */
}

.ruang-download {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
}

header h1 {
  font-size: 28px;
  color: #65A5CA;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.menu {
  flex: 2;
}

.menu-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}

.menu-table td i {
  font-size: 24px;
  color: #65A5CA;
}

.sidebar {
  flex: 1;
  background-color: #ffffff;
  padding: 20px;

}

.sidebar-content {
  text-align: center;
}

.profile-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.info-section h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.info-section p, .info-section ul {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination nav button {
  background-color: #65A5CA;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination nav button:hover {
  background-color: #5093b8;
}

.btn-back {

color: white;
background-color: #8bbbd7;
padding: 10px 20px;
border-color: white;
border-radius: 5px;
cursor: pointer;
font-size: 18px;
margin-bottom: 10px; /* Jarak antara tombol dan judul */
}

</style>
