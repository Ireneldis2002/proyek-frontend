<template>
  <div class="ruang-buku-tamu">
    <header>
      <h1>Buku Tamu</h1>
      <br />
      <br />
      <div class="header-container">
        <div class="isi-container">
          <button class="isi-buku-tamu" @click="keHalamanIsiBukuTamu">
            Isi Buku Tamu
          </button>
        </div>
      </div>
    </header>

    <div class="content-container">
      <!-- Daftar Buku Tamu -->
      <main class="buku-tamu-container">
        <div
          class="buku-tamu-entry"
          v-for="(tamu, index) in daftarTamu"
          :key="index"
        >
          <div class="entry-header">
            <strong>{{ tamu.nama }}</strong>
            <span>{{ tamu.tanggal }}</span>
          </div>
          <p class="entry-message">{{ tamu.pesan }}</p>
          <p class="entry-email">ditulis oleh: {{ tamu.email }}</p>
        </div>
      </main>

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
  name: "RuangBukuTamuView",
  data() {
    return {
      daftarTamu: [
        {
          nama: "Andi Pratama",
          tanggal: "15-Oktober-2024",
          pesan: "Ingin mengetahui prosedur pengurusan KTP secara online.",
          email: "andi.pratama@email.com",
        },
        {
          nama: "Rina Setiawan",
          tanggal: "14-Oktober-2024",
          pesan:
            "Mengajukan permohonan akta kelahiran. Tapi kenapa website sering lambat diakses pada jam kerja.",
          email: "setiawan.rina@email.com",
        },
        {
          nama: "Fajar Wijaya",
          tanggal: "13-Oktober-2024",
          pesan: "Mengecek status pengurusan Kartu Keluarga.",
          email: "fwijaya123@email.com",
        },
      ],
    };
  },
  methods: {
    keHalamanIsiBukuTamu() {
      this.$router.push("/ruang-publik/isi-buku-tamu");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-buku-tamu {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
}


.content-section {
  flex: 1;
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

.menu-item p {
  margin: 5px 0;
  padding-left: 10px;
  text-align: left;
}

.header-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
}

.isi-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 380px;
  right: 420px;
}

.isi-buku-tamu {
  background-color: #8bbbd7;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  color: white;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.buku-tamu-container {
  flex: 2;

  background: #f8f8f8;
  border-radius: 10px;
}

.buku-tamu-entry {
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: white;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
}

.entry-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.entry-message {
  margin: 10px 0;
}

.entry-email {
  font-size: 12px;
  color: gray;
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

/* Pagination lebih dekat ke tabel */
.pagination {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}

.pagination-container {
  display: flex;
  align-items: center;
  position: absolute;
  top: 900px;
  right: 1350px;
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
