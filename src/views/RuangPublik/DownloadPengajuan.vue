<template>
  <div class="profil-visi-misi">

    <button @click="goBack" class="btn-back">⬅ </button>
    <br>
    <br>
    <h1>Pengajuan Pelayanan Adminduk </h1>
    <br>
    <br>
    <div class="content-container">
      <!-- PENCARIAN -->
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

      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
            <ol>
            <!-- Tabel 1 -->
            <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: left;">
              <thead>
                <tr>
                    <th></th>
                    <th>Nama File</th>
                    <th>Download</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.04 Surat Pernyataan Tidak Memiliki Dokumen Kependudukan </b></td>
                      <td>
                        <a href="/assets/F-1.04_Surat_Pernyataan_Tidak_Memiliki_Dokumen_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b> F-1.06 Surat Pernyataan Perubahan Elemen Data Kependudukan</b></td>
                      <td>
                        <a href="/assets/F-1.06_Surat_Pernyataan_Perubahan_Elemen_Data_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.07 Surat Kuasa Dalam Pelayanan Administrasi Kependudukan</b></td>
                      <td>
                        <a href="/assets/F-1.07_Surat_Kuasa_Dalam_Pelayanan_Administrasi_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.03 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran</b></td>
                      <td>
                        <a href="/assets/F-2.03_SPTJM_Kebenaran_Data_Kelahiran.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.04 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri	
                    </b></td>
                      <td>
                        <a href="/assets/F-2.04_SPTJM_Kebenaran_Sebagai_Pasangan_Suami_Isteri.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.05 Surat Pernyataan Tanggung Jawab Mutlak Perkawinan Perceraian Belum Tercatat</b></td>
                      <td>
                        <a href="/assets/F-1.05_SPTJM_Perkawinan_Perceraian_Belum_Tercatat.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    
                    <!-- Tambahkan baris lainnya sesuai kebutuhan -->
                  </tbody>

            </table>
            </ol>
          </div>
          </div>
      </div>
      
      <!-- Foto di Sebelah Kanan -->
      <div class="image-container">
        <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
      </div>
    </div>

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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.profil-visi-misi {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65A5CA;
  margin-bottom: 30px;
  margin-top: 50px;
  margin-left: 50px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.content-section {
  flex: 6;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 20px;
}

.menu-item {
    height: auto;
    width: 100%;
    overflow: hidden;
    background-color: #ffffff;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
}

.menu-item p {
    margin: 5px 0; /* Jarak antar teks */
    padding-left: 10px; /* Membuat teks tetap dalam kotak dan tidak terlalu mepet ke kiri */
    text-align: left;
}

/* Pindahkan search ke atas kanan tabel */
.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.search-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 400px; /* Jarak dari atas */
  right: 900px; /* Jarak dari kanan */
}

.search-input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

.search-button {
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
}

.search-button i {
  font-size: 16px;
  color: #555;
}


.image-container {
  flex: 3;
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

.content-item {
  position: relative;
  padding-left: 25px;
}



h2 {
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 0 0 10px 0;
}

p {
  font-size: 22px;
  color: #333;
  margin: 0;
}

ol, ul {
    padding-left: 40px; /* Indentasi yang cukup */
}

li {
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
}

.content-section ol {
    list-style-position: outside;
    padding-left: 40px;
    font-size: 22px;
}

.content-section li {
    margin-left: 0;
    font-size: 22px;
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
  display: block;
  clear: both;
}

/* Styling Tabel */
.table-container {
  width: 98%; /* Dari 95% menjadi lebih besar */
  max-width: 100%;
  margin: auto;
}

table {
  width: 100%; /* Full width untuk tabel */
  table-layout: fixed; /* Mengatur lebar kolom secara otomatis */
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  word-wrap: break-word; /* Pastikan teks bisa turun jika panjang */
}


th {
  background-color: #8BBBD7;
  color: white;
  font-weight: bold;
}

/* Lebar kolom gambar folder */
th:nth-child(1), td:nth-child(1) {
  width: 10%; 
  text-align: center; /* Agar ikon folder rata tengah */
}

/* Lebar kolom nama file */
th:nth-child(2), td:nth-child(2) {
  width: 60%; /* Membuat kolom nama file lebih lebar */
}

/* Lebar kolom gambar folder */
th:nth-child(3), td:nth-child(3) {
  width: 10%; 
  text-align: center; /* Agar ikon folder rata tengah */
}

th {
  background-color: #8BBBD7;
  color: white;
  font-weight: bold;
}

/* Lebar kolom jumlah file */
th:nth-child(3), td:nth-child(3) {
  width: 30%; /* Kolom jumlah file lebih kecil */
}

.fa-download{
  color: #78A3BD;
}

.fa-file-pdf{
  color: #78A3BD;
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