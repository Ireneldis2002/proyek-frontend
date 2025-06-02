<template>
  <div class="ruang-publik">
    <button @click="goBack" class="btn-back">⬅</button>
    <br />
    <br />
    <h1>Surat Pernyataan Tanggung Jawab Mutlak</h1>
    <br />
    <br />
    <div class="content-container">
      <!-- PENCARIAN -->
      <div class="header-container">
        <div class="search-container">
          <input type="text" class="search-input" placeholder="Cari file..." />
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
              <table
                border="1"
                cellpadding="10"
                cellspacing="0"
                style="
                  width: 100%;
                  margin-top: 20px;
                  border-collapse: collapse;
                  text-align: left;
                "
              >
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
                    <td>
                      F-1.04 Surat Pernyataan Tidak Memiliki Dokumen
                      Kependudukan
                    </td>
                    <td>
                      <a
                        href="/assets/F-1.04_Surat_Pernyataan_Tidak_Memiliki_Dokumen_Kependudukan.pdf"
                        download
                      >
                        <i class="fas fa-download"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-file-pdf"></i></td>
                    <td>
                      F-1.05 Surat Pernyataan Tanggung Jawab Mutlak Perkawinan
                      Perceraian Belum Tercatat
                    </td>
                    <td>
                      <a
                        href="/assets/F-1.05_SPTJM_Perkawinan_Perceraian_Belum_Tercatat.pdf"
                        download
                      >
                        <i class="fas fa-download"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-file-pdf"></i></td>
                    <td>
                      F-2.03 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran
                      Data Kelahiran
                    </td>
                    <td>
                      <a
                        href="/assets/F-2.03_SPTJM_Kebenaran_Data_Kelahiran.pdf"
                        download
                      >
                        <i class="fas fa-download"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td><i class="fas fa-file-pdf"></i></td>
                    <td>
                      F-2.04 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran
                      Sebagai Pasangan Suami Isteri
                    </td>
                    <td>
                      <a
                        href="/assets/F-2.04_SPTJM_Kebenaran_Sebagai_Pasangan_Suami_Isteri.pdf"
                        download
                      >
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
  name: "RuangDownloadSPTJMView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-publik {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
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
  flex: 3;
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
  margin: 5px 0;
  padding-left: 10px;
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
  top: 400px;
  right: 700px;
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

ol,
ul {
  padding-left: 40px;
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

thead th {
  font-size: 26px;
  font-weight: bold;
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
  width: 98%;
  max-width: 100%;
  margin: auto;
}

table {
  width: 100%;
  table-layout: fixed;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
  word-wrap: break-word;
}

th {
  background-color: #8bbbd7;
  color: white;
  font-weight: bold;
}

/* Lebar kolom gambar folder */
th:nth-child(1),
td:nth-child(1) {
  width: 10%;
  text-align: center;
}

/* Lebar kolom nama file */
th:nth-child(2),
td:nth-child(2) {
  width: 60%;
}

/* Lebar kolom gambar folder */
th:nth-child(3),
td:nth-child(3) {
  width: 10%;
  text-align: center;
}

th {
  background-color: #8bbbd7;
  color: white;
  font-weight: bold;
}

/* Lebar kolom jumlah file */
th:nth-child(3),
td:nth-child(3) {
  width: 30%;
}

.fa-download {
  color: #78a3bd;
}

.fa-file-pdf {
  color: #78a3bd;
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
