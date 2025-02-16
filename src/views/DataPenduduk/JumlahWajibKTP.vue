<template>
  <div class="profil-visi-misi">
    <h1>Wajib KTP</h1>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
    <br>
    <br>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
                <p><b> Jumlah Penduduk Wajib KTP Berdasarkan Data Konsolidasi Bersih (DKB) Semester I</b> </p>
                <p><b>(30 Juni 2022)</b></p>
                <p><b>Per Desa-Kelurahan Tahun 2022</b></p>
                <br>
            <ol>
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
  name: "DataJumlahWajibKTPView",
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