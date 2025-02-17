<template>
  <div class="profil-visi-misi">
    <h1>Download</h1>
    <br>
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
                    <th>Jumlah File</th>
                </tr>
              </thead>
              <tbody>
                <tr>
          <td><i class="fas fa-folder"></i></td>
          <td><router-link :to="{ name: 'DownloadRegulasi' }">Regulasi</router-link></td>
          <td>File : 4</td>
        </tr>
        <tr>
          <td><i class="fas fa-folder"></i></td>
          <td><router-link :to="{ name: 'DownloadSPTJM' }">SPTJM</router-link></td>
          <td>File : 4</td>
        </tr>
        <tr>
          <td><i class="fas fa-folder"></i></td>
          <td><router-link :to="{ name: 'DownloadFormulir' }">Formulir Persyaratan Pelayanan Adminduk</router-link></td>
          <td>File : 6</td>
        </tr>
        <tr>
          <td><i class="fas fa-folder"></i></td>
          <td><router-link :to="{ name: 'DownloadPengajuan' }">Pengajuan Pelayanan Adminduk</router-link></td>
          <td>FIle : 7</td>
        </tr>

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
  name: "RuangDownloadView",
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
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.content-section {
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 20px;
}

.menu-item {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-item td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}

.menu-item td i {
  font-size: 24px;
  color: #65A5CA;
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
  top: 300px; /* Jarak dari atas */
  right: 600px; /* Jarak dari kanan */
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
  width: 10%; /* Membuat kolom gambar folder lebih sempit */
  text-align: center; /* Agar ikon folder rata tengah */
}

/* Lebar kolom nama file */
th:nth-child(2), td:nth-child(2) {
  width: 60%; /* Membuat kolom nama file lebih lebar */
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

/* Pagination lebih dekat ke tabel */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 5px; /* Diperpendek agar pagination lebih dekat ke tabel */
}

.pagination-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 700px; /* Jarak dari atas */
  right: 1300px; /* Jarak dari kanan */
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
  background-color: #8BBBD7;
  color: white;
}

.pagination button:hover {
  background-color: #65A5CA;
  color: white;
}
</style>