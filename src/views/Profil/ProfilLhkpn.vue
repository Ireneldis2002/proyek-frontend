<template>
  <div class="profil-visi-misi">
    <h1>LHKPN</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item">
          <p><b>LAPORAN HARTA KEKAYAAN PENYELENGGARAAN PEMERINTAH TAHUN 2021</b></p>

            <br>
            <!-- Tabel 1 -->
            <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: center;">

              <thead>
                <tr>
                    <th><b>No</b></th>
                    <th>Nama</th>
                    <th>NIP</th>
                    <th>Jabatan</th>
                    <th>Download</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>LAMBERTUS SIGASARE, ST. M.Eng</td>
                  <td>19751023 200212 1 006</td>
                  <td>KEPALA DINAS</td>
                  <td>LHKPN</td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>SYAHRUL YAHYA, S.Pi</td>
                  <td>19681227 199903 1 005</td>
                  <td>SEKRETARIS</td>
                  <td>LHKPN</td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>THERESIA CISILIA BUNGA, SH</td>
                  <td>19700621 199303 2 010</td>
                  <td>KABID DAFDUK</td>
                  <td>LHKPN</td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>EMILIANA ERNAS DHALE, SH</td>
                  <td>19720424 199403 2 007</td>
                  <td>KABID CAPIL</td>
                  <td>LHKPN</td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>HONORIUS BHINABODHE, A.Md</td>
                  <td>19710923 199803 1 008</td>
                  <td>KABID PIAK</td>
                  <td>LHKPN</td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>JOHANES WEE RENGGI, SH</td>
                  <td>19721125 200012 1 001</td>
                  <td>KABID PDIP</td>
                  <td>LHKPN</td>
                </tr>
               
              </tbody>
            </table>


        </div>
       
      </div>
      
      <!-- Foto di Sebelah Kanan -->
      <div class="image-container">
        <img src="@/assets/ProfilPimpinan.png" alt="Gambar Profil" />
      </div>
    </div>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
  </div>
</template>


<script>
export default {
  name: "VisiMisiView",
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
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 20px;
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

.line {
  width: 5px;
  height: 100%;
  background-color: #8BBBD7;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
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

.content-section ol {
  list-style-position: inside;
  padding-left: 20px;
  font-size: 22px;
}

.content-section li {
  margin-left: 20px;
  text-indent: -10px;
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
  margin-top: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

th {
  background-color: #8BBBD7;
  color: white;
  font-weight: bold;
}
</style>

