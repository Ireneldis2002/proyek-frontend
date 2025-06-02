<template>
  <div class="data-penduduk">
    <h1>Wajib KTP</h1>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
    <br />
    <br />
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
            <p>
              <b>
                Jumlah Penduduk Wajib KTP Berdasarkan Data Konsolidasi Bersih
                (DKB) Semester I</b
              >
            </p>
            <p><b>(30 Juni 2022)</b></p>
            <p><b>Per Desa-Kelurahan Tahun 2022</b></p>
            <br />
            <ol></ol>
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
    <p class="update">Sumber : Data Konsolidasi Bersih Semester I Tahun 2022</p>
  </div>
</template>

<script>
export default {
  name: "DataJumlahWajibKTPView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.data-penduduk {
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
  border: 1px solid #000000;
  border-radius: 0px;
  padding: 10px;
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
  background-color: #8bbbd7;
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

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #8bbbd7;
  color: white;
  font-weight: bold;
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
