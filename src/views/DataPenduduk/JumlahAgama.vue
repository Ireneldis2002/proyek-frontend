<template>
  <div class="profil-visi-misi">
    <h1>Agama</h1>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
    <br>
    <br>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
            <ol>
              <p><b> Jumlah Penduduk Menurut Agama Berdasarkan Data Konsolidasi Bersih (DKB) Semester I</b> </p>
                <p><b>(30 Juni 2022)</b></p>
                <p><b>Per Desa-Kelurahan Tahun 2022</b></p>

            <!-- Tabel 1 -->
            <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: left;">
              <thead>
                <tr>
                    <th>KODE</th>
                    <th>WILAYAH</th>
                    <th colspan="3"> ISLAM</th>
                    <th colspan="3"> KRISTEN</th>
                    <th colspan="3"> KATHOLIK</th>
                    <th colspan="3"> HINDU</th>
                    <th colspan="3"> BUDHA</th>
                    <th colspan="3"> KONGHUCU</th>
                    <th colspan="3"> KEPERCAYAAN</th>
                </tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th>
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th>
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th>
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th> 
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th> 
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th> 
                    <th>L</th>
                    <th>P</th>
                    <th>JMLH</th>         
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><b>5308</b></td>
                  <td><b>KAB. ENDE</b></td>
                  <td><b>36548</b></td>
                  <td><b>38762</b></td>
                  <td><b>75310</b></td>
                  <td><b>2841</b></td>
                  <td><b>2866</b></td>
                  <td><b>5707</b></td>
                  <td><b>96303</b></td>
                  <td><b>100164</b></td>
                  <td><b>196467</b></td>
                  <td><b>97</b></td>
                  <td><b>100</b></td>
                  <td><b>197</b></td>
                  <td><b>9</b></td>
                  <td><b>12</b></td>
                  <td><b>21</b></td>
                  <td><b>1</b></td>
                  <td><b>1</b></td>
                  <td><b>2</b></td>
                  <td><b>0</b></td>
                  <td><b>0</b></td>
                  <td><b>0</b></td>
                </tr>
                <tr>
                  <td><b>530801</b></td>
                  <td><b>NANGAPANDA</b></td>
                  <td>4169</td>
                  <td>4386</td>
                  <td>8555</td>
                  <td>28</td>
                  <td>36</td>
                  <td>64</td>
                  <td>7080</td>
                  <td>7286</td>
                  <td>14366</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>5308011001</td>
                  <td>NDORUREA</td>
                  <td>724</td>
                  <td>785</td>
                  <td>1509</td>
                  <td>9</td>
                  <td>11</td>
                  <td>20</td>
                  <td>203</td>
                  <td>206</td>
                  <td>409</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
                  <td>0</td>
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
    <p class="update">Sumber : Data Konsolidasi Bersih Semester II Tahun 2021</p>
  </div>
</template>


<script>
export default {
  name: "DataJumlahAgamaView",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.profil-visi-misi {
  max-width: 1200px;
  margin: 0 auto; /* Pusatkan kontainer secara horizontal */
  padding: 10px;
  font-family: 'Open Sans', Arial, sans-serif;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65A5CA;
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  gap: 20px; /* Jarak antara teks dan gambar */
  align-items: flex-start;
  justify-content: space-between;
}

.content-section {
  flex-basis: 40%; /* Teks mendapatkan ruang lebih besar */
  display: flex;
  flex-direction: column;
  gap: 60px; /* Jarak antar bagian teks */
  margin-left: -100px;
}

.image-container {
  flex-basis: 50%; /* Foto mendapatkan ruang lebih kecil */
  display: flex;
  justify-content: flex-end; /* Geser gambar lebih ke kanan */
  align-items: right;
  margin-right: -100px;
}

.image-container img {
  max-width: 100%; /* Agar gambar tidak melebihi ruang yang disediakan */
  height: auto; /* Menjaga proporsi gambar */
  border-radius: 10px; /* Opsional: tambahkan border radius */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Opsional: efek bayangan */
  margin-right: 0px;
}

.content-item {
  position: relative;
  padding-left: 20px; /* Memberikan indentasi kecil untuk teks */
  margin-left: -100px; /* Geser konten lebih ke kiri */
}

h2 {
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 0 0 10px 0;
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

p {
  font-size: 22px;
  color: #333;
  margin: 0;
}

ol {
    padding-left: 40px; /* Memberikan indentasi pada daftar */
  }

ul {
    padding-left: 40px; /* Memberikan indentasi */
    list-style-type: disc; /* Menggunakan bullet default */
 }


li {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
  padding-left: 40px;
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
}

.konten-box {
  display: block;                 /* Menggunakan Flexbox */
  justify-content: center;      /* Mengatur konten secara horizontal di tengah */
  align-items: center;          /* Mengatur konten secara vertikal di tengah */
  height: 50px;                /* Sesuaikan tinggi sesuai kebutuhan */
  padding: 5px;               /* Memberikan padding dalam box */
  margin-top: 30px;
  margin-bottom: 75px;
}

.teks-janji {
    font-weight: bold;
    color: red;                  /* Mengubah warna teks menjadi merah */
    text-align: center;          /* Mengatur teks agar rata tengah */
}

.teks-janji2 {
    font-weight: bold;
    color: rgb(0, 0, 0);                  /* Mengubah warna teks menjadi merah */
    text-align: center;          /* Mengatur teks agar rata tengah */
}

.menu-column {
    display: flex;
    flex-direction: column; /* Mengatur item secara vertikal */
    gap: 20px; /* Menambahkan jarak antara menu item dan update */
  }
  
  .menu-item {
    height: auto; /* Sesuaikan tinggi otomatis */
    width: 100%; /* Mengisi lebar penuh */
    overflow: hidden;
    border: 1px solid #000000;
    border-radius: 0px;
    padding: 5px;
    background-color: #ffffff;
    text-align: left;
    word-wrap: break-word;
    white-space: normal;
  }

</style>