<template>
  <div class="profil-visi-misi">
    <h1>Tugas Pokok dan Fungsi (TUPOKSI)</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item">
          <p>Berdasarkan Peraturan Daerah Kabupaten Ende Nomor 11 Tahun 2016 tentang Pembentukan dan 
            Susunan Perangkat Daerah Kabupaten Endeserta Peraturan Bupati Ende Nomor 35 Tahun 2016 
            tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi serta Tata Kerja Dinas Daerah 
            Kabupaten Ende, Tugas, Fungsi dan Struktur Organisasi Dinas Kependudukan dan Pencatatan 
            Sipil Kabupaten Ende adalah:
            </p>
            <br>
            <ul>
              <li>Meningkatnya kualitas pelayanan administrasi kependudukan dan pencatatan sipil</li>
              <li>Meningkatnya kualitas pendataan dan pemanfaatan teknologi informasi dalam administrasi kependudukan dan pencatatan sipil</li>
            </ul>
            <br>
            <ol>
              <li>Pengkoordinasian Program dan Pengelolaan Anggaran</li>
              <li>Pengkoordinasian Pengelolaan Perlengkapan, Urusan Tata Usaha Rumah Tangga dan Barang Milik Negara dan Daerah,</li>
              <li>Pengkoordinasian pengelolaan urusan Aparatur Sipil Negara,</li>
              <li>Pengkoordinasian Penyusunan Perencanaan di Bidang Pendaftaran Penduduk, Pencatatan Sipil, Pengelolaan Informasi Administrasi Kependudukan, Kerjasama Administrasi Kependudukan, Pemanfaatan Data Dokumen KependudukanIn,</li>
              <li>Pengkordinasian kegiatan pelayanan pendaftaran penduduk, kegiatan pelayanan pencatatan sipil, pelaksanaan pengelolaan administrasi kependudukan,</li>
              <li>Pengkoordinasian Pelaksanaan Kerjasama Administrasi Kependudukan,</li>
              <li>Pengkoordinasian pelaksanaan pemanfaatan data dan data dokumen kependudukan,</li>
              <li>Pengkoordinasian pelaksanaan inovasi pelayanan administrasi kependudukan,</li>
              <li>Membina, mengkoordinasi pengendalian bidang administrasi kependudukan,</li>
              <li>Pengkoordinasian pelaksanaan kegiatan penatausahaan Dinas Kependudukan dan Pencatatan Sipil</li>
            </ol>
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


</style>
