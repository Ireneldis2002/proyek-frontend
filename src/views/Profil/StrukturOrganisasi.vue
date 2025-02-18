<template>
  <div class="profil-visi-misi">
    <h1>Struktur Organisasi</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item-image">
          <img src="@/assets/StrukturOrganisasi.png" alt="Struktur Organisasi" />
         </div>
        <div class="struktur-text">
  <p>Susunan organisasi Dinas Kependudukan dan Pencatatan Sipil sesuai dengan Peraturan Pemerintah Nomor 18 Tahun 2016 tentang Perangkat Daerah, yang telah ditindaklanjuti dengan Peraturan Daerah Nomor 17 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah terdiri dari:</p>
  <p>1. Kepala Dinas</p>
  <p>2. Sekretariat, membawahi:</p>
  <ul>
    <li>Sub Bagian Umum dan Kepegawaian</li>
    <li>Sub Bagian Keuangan</li>
    <li>Sub Bagian Perencanaan</li>
  </ul>
  <p>3. Bidang Pelayanan Pendaftaran:</p>
  <ul>
    <li>Seksi Identitas Penduduk</li>
    <li>Seksi Pindah Datang</li>
    <li>Seksi Pendaftaran Penduduk</li>
  </ul>
  <p>4. Bidang Pelayanan Pencatatan Sipil:</p>
  <ul>
    <li>Seksi Kelahiran</li>
    <li>Seksi Perkawinan dan Perceraian</li>
    <li>Seksi Perubahan Status Anak, Kewarganegaraan, dan Kematian</li>
  </ul>
  <p>5. Bidang Pengelolaan Informasi Administrasi Kependudukan:</p>
  <ul>
    <li>Seksi Sistem Informasi Administrasi Kependudukan</li>
    <li>Seksi Pengelolaan dan Penyajian Data Kependudukan</li>
    <li>Seksi Tata Kelola dan Sumber Daya Manusia Teknologi Informasi dan Komunikasi</li>
  </ul>
  <p>6. Bidang Pemanfaatan dan Inovasi Pelayanan:</p>
  <ul>
    <li>Seksi Kerjasama</li>
    <li>Seksi Pemanfaatan Data dan Dokumen Kependudukan</li>
    <li>Seksi Inovasi Pelayanan</li>
  </ul>
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

.content-item-image img {
  width: 100%; /* Membuat gambar mengikuti lebar parent */
  max-width: 800px; /* Atur ukuran maksimal gambar */
  height: auto; /* Menjaga proporsi gambar */
  display: block; /* Hindari ruang kosong ekstra */
  margin: 0 auto; /* Pusatkan gambar jika lebih kecil dari parent */
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

.struktur-text {
  font-size: 22px; /* Ukuran font sesuai permintaan */
  color: #333; /* Warna teks agar lebih jelas */
  line-height: 1.6; /* Jarak antar baris agar nyaman dibaca */
  margin-top: 20px; /* Jarak dari tabel di atasnya */
}

.struktur-text ul {
  padding-left: 30px; /* Beri padding agar list terlihat rapi */
}

.struktur-text li {
  margin-bottom: 5px; /* Beri jarak antar item list */
}


</style>
