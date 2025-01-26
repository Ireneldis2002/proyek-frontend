<template>
  <div class="profil-visi-misi">
    <h1>Kartu Identitas Anak</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-item">
            <ol>
              <p><b>Penerbitan Kartu Identitas Anak</b> </p>
             
              <!-- Tabel 1 -->
            <table border="1" cellpadding="10" cellspacing="0" style="width: 100%; margin-top: 20px; border-collapse: collapse; text-align: left;">
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
                  <td>Persyaratan Pelayanan</td>
                  <td>
                    <ol>
                        <li>Berumur kurang 17 (tujuh belas) tahun dan belum kawin;</li>
                        <li>Kutipan Akta Kelahiran;</li>
                        <li>Kartu Keluarga;</li>
                        <li>Pas Photo ukuran 3x4 bagi anak usia 5 tahun s/d kurang 17
                            (tujuh belas) tahun dengan latar merah untuk tahun kelahiran ganjil dan latar biru untuk tahun kelahiran genap;
                        </li>
                        <li>Dokumen Perjalanan RI atau Dokumen Perjalanan; dan</li>
                        <li>Kartu Izin Tinggal Tetap bagi WNA</li>
                    </ol>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Prosedur</td>
                  <td>
                    <ol>
                        <li>Penduduk mengajukan permohonan dengan melampirkan persyaratan;</li>
                        <li>Petugas pelayanan melakukan input data dan scan Pas Photo ke dalam aplikasi SIAK</li>
                        <li>Petugas mencetak KIA; dan</li>
                        <li>Petugas menyerahkan KIA kepada Penduduk</li>
                    </ol>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>3.</td>
                  <td>Waktu Pelayanan</td>
                  <td>1 Hari</td>
                  <td></td>
                </tr>
                <tr>
                  <td>4.</td>
                  <td>Biaya Pelayanan</td>
                  <td>GRATIS</td>
                  <td></td>
                </tr>
                <tr>
                  <td>5.</td>
                  <td>Produk Layanan</td>
                  <td>Kutipan Identitas Anak</td>
                  <td></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Pengelolaan Pengaduan</td>
                  <td></td>
                  <td></td>

                </tr>
              </tbody>
            </table>
            </ol>
          </div>
      </div>
      
      <!-- Foto di Sebelah Kanan -->
      <div class="image-container">
        <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
      </div>
    </div>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
  </div>
</template>


<script>
export default {
  name: 'PenerbitanKIAView',
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
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
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
