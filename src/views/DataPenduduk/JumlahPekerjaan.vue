<template>
  <div class="profil-visi-misi">
    <h1>Pekerjaan</h1>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
    <br>
    <br>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
            <p><b> Jumlah Penduduk Menurut Pekerjaan Berdasarkan Data  Konsolidasi Bersih (DKB) Semester I</b> </p>
                <p><b>(30 Juni 2022)</b></p>
                <p><b>Per Desa-Kelurahan Tahun 2022</b></p>
                <br>
            <ol>
            <!-- Tabel 1 -->
            <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: left;">
              <thead>
                <tr>
                    <th>KODE</th>
                    <th>WILAYAH</th>
                    <th colspan="2"> BELUM/TIDAK BEKERJA</th>
                    <th colspan="2"> MENGURUS RUMAH TANGGA</th>
                    <th colspan="2"> PELAJAR/MAHASISWA</th>
                    <th colspan="2"> PENSIUNAN</th>
                    <th colspan="2"> PNS</th>
                    <th colspan="2"> TNI</th>
                    <th colspan="2"> POLISI</th>
                    <th colspan="2"> DST</th>


                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    <th>L</th>
                    <th>P</th>
                    
        
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>5308</b></td>
                  <td><b>KAB. ENDE</b></td>
                  <td>17091</td>
                  <td>17900</td>
                  <td>34991</td>
                  <td>16955</td>
                  <td>18298</td>
                  <td>3523</td>
                  <td>3127</td>
                  <td>3285</td>
                  <td>6412</td>
                  <td>50318</td>
                  <td>51682</td>
                  <td>102000</td>
                  <td>2512</td>
                  <td>2642</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td><b>530801</b></td>
                  <td><b>NANGAPANDA</b></td>
                  <td>1325</td>
                  <td>1344</td>
                  <td>2669</td>
                  <td>1168</td>
                  <td>1243</td>
                  <td>2411</td>
                  <td>237</td>
                  <td>246</td>
                  <td>483</td>
                  <td>3491</td>
                  <td>3668</td>
                  <td>7159</td>
                  <td>526</td>
                  <td>590</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>5308011001</td>
                  <td>NDORUREA</td>
                  <td>137</td>
                  <td>165</td>
                  <td>302</td>
                  <td>113</td>
                  <td>119</td>
                  <td>232</td>
                  <td>35</td>
                  <td>36</td>
                  <td>71</td>
                  <td>269</td>
                  <td>317</td>
                  <td>586</td>
                  <td>35</td>
                  <td>46</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>dst......</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
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
    <p class="update">Sumber : Data Konsolidasi Bersih Semester I Tahun 2022</p>
  </div>
</template>


<script>
export default {
  name: "DataJumlahPekerjaanView",
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
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 20px;
}

.menu-item {
    height: auto;
    width: 100%;
    overflow: hidden;
    border: 1px solid #000000;
    border-radius: 0px;
    padding: 10px; /* Memberikan ruang di dalam kotak */
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
  text-align: left;
}

th {
  background-color: #8BBBD7;
  color: white;
  font-weight: bold;
}
</style>