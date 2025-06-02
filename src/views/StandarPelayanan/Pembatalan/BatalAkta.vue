<template>
  <div class="standar-pelayanan">
    <h1>Pembatalan Akta</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-item">
          <ol>
            <p><b>Pembatalan Akta Catatan Sipil</b></p>

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
                  <th>No</th>
                  <th>Komponen</th>
                  <th>Uraian</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Jenis Pelayanan</td>
                  <td>Pembatalan Akta Pencatatan Sipil</td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Persyaratan Pelayanan</td>
                  <td>
                    <p>
                      <b
                        >Berdasarkan Putusan Pengadilan dengan memenuhi
                        persyaratan :</b
                      >
                    </p>
                    <ol>
                      <li>
                        Salinan penetapan pengadilan negeri tentang Peristiwa
                        Penting Lainnya
                      </li>
                      <li>Kutipan akta pencatatan sipil yang dibatalkan</li>
                      <li>Kartu Keluarga</li>
                      <li>Ktp-el</li>
                    </ol>
                    <br />
                    <p>
                      <b
                        >Pembatalan Tanpa Melalui Pengadilan / Asas Contrario
                        Actus dengan persyaratan :</b
                      >
                    </p>
                    <ol>
                      <li>Kutipan akta pencatatan sipil yang dibatalkan</li>
                      <li>Dokumen pendukung yang menguatkan pembatalan</li>
                      <li>Kartu Keluarga</li>
                      <li>KTP-el; atau</li>
                      <li>Surat Pernyataan Tanggung Jawab Mutlak</li>
                    </ol>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Prosedur</td>
                  <td>
                    <ol>
                      <li>
                        Pemohon mengisi dan menandatangani formulir pelaporan
                        serta menyerakan persyaratan
                      </li>
                      <li>
                        Petugas Pelayanan Melakukan Verifikasi dan Validasi
                        terhadap Formulir Pelaporan dan Persyaratan
                      </li>
                      <li>
                        Petugas Melakukan Perekaman Data ke dalam Database
                        Kependudukan
                      </li>
                      <li>
                        Pejabat Pencatatan Sipil memberikan catatan pinggir pada
                        register akta pencatatan sipil dan kutipan akta
                        pencatatan sipil
                      </li>
                      <li>
                        Pejabat Pencatatan Sipil mencabut akta pencatatan sipil
                      </li>
                      <li>
                        Pejabat Pencatatan Sipil menerbitkan register akta
                        pencatatan sipil dan kutipan akta pencatatan sipil
                        sesuai dengan putusan pengadilan dan disampaikan kepada
                        Pemohon
                      </li>
                    </ol>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Waktu Pelayanan</td>
                  <td>1 Hari</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Biaya Pelayanan</td>
                  <td>GRATIS</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6.</td>
                  <td>Produk Layanan</td>
                  <td>
                    Kutipan Akta Pencatatan Sipil Yang Telah Diberikan Catatan
                    Pinggir
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Pengelolaan Pengaduan</td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </ol>
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
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
  </div>
</template>

<script>
export default {
  name: "PembatalanAktaView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.standar-pelayanan {
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
  padding: 5px;
  background-color: #ffffff;
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
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
