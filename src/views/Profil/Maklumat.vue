<template>
  <div class="profil-visi-misi">
    <h1>Maklumat Pelayanan</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item">
          <p>
            Sebagai sebuah organisasi perangkat daerah yang memberikan pelayanan
            penerbitan dokumen-dokumen kependudukan dan pencatatan sipil kepada
            masyarakat, maka Dinas Kependudukan dan Pencatatan Sipil Kabupaten
            Ende tidak lepas dari peraturan perundang-undangan yang mengatur
            tentang pelayanan publik. Sesuai dengan pasal 4 Undang-undang No 25
            Tahun 2009 tentang Pelayanan Publik, Dinas Kependudukan dan
            Pencatatan Sipil Kabupaten Ende harus memberikan pelayanan
            berdasatkan:
          </p>
          <br />
          <li>Kepentingan Umum</li>
          <li>Kepastian Hukum</li>
          <li>Kesamaan Hak</li>
          <li>Keseimbangan Hak dan Kewajiban</li>
          <li>Keprofesionalan</li>
          <li>Partisipatif</li>
          <li>Persamaan Perlakuan/Tidak Diskriminatif</li>
          <li>Keterbukaan</li>
          <li>Akuntabilitas</li>
          <li>Fasilitas dan Perlakuan Khusus bagi Kelompok Rentan</li>
          <li>Ketepatan Waktu</li>
          <li>Kecepatan, Kemudahan dan Keterjangkauan</li>
          <br />
          <p>
            Adapun maklumat pelayanan yang dimiliki oleh Dinas Kependudukan dan
            Pencatatan Sipil Kabupaten Ende berbunyi sebagai berikut :
          </p>
          <div class="konten-box">
            <p class="teks-janji2">MAKLUMAT PELAYANAN</p>
            <p class="teks-janji">
              “Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan
              sesuai standar pelayanan yang telah ditetapkan, dan apabila tidak
              menepati janji kami ini, kami siap menerima sanksi sesuai
              peraturan yang berlaku.”
            </p>
          </div>
          <br />
          <br />

          <p>
            Maklumat pelayanan adalah pernyataan tertulis yang berisi
            keseluruhan rincian kewajiban dan janji yang terdapat dalam standar
            pelayanan. Sedangkan standar pelayanan adalah tolok ukur yang
            dipergunakan sebagai pedoman penyelenggaraan pelayanan dan acuan
            penilaian kualitas pelayanan sebagai kewajiban dan janji
            penyelenggara kepada masyarakat dalam rangka pelayanan yang
            berkualitas, cepat, mudah, terjangkau dan terukur.
          </p>
          <p>
            Dengan adanya maklumat pelayanan tersebut, tentunya Dinas
            Kependudukan dan Pencatatan Sipil Kabupaten Ende berusaha untuk
            dapat memberikan pelayanan kepada masyarakat sesuai standar
            pelayanan yang berlaku, dan semoga maklumat tersebut bukan sekedar
            slogan, tapi benar–benar merupakan falsafah nilai–nilai yang
            diyakini dan dilaksanakan oleh seluruh karyawan Dinas Kependudukan
            dan Pencatatan Sipil Kabupaten Ende sesuai dengan tugas pokok,
            fungsi dan kewenangan.
          </p>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="sidebar">
        <div class="profile">
          <img
            src="@/assets/pimpinan.png"
            alt="Profil Pimpinan"
            class="profile-img"
          />
          <h2 class="position">KEPALA DINAS</h2>
          <h3 class="name">Lambertus Sigasare, ST. M.Eng</h3>
          <p class="sub-title"><strong>Mulai Menjabat</strong></p>
          <p class="date">7 Agustus 2022</p>
        </div>

        <div class="info-section">
          <div class="info-header">Informasi Pribadi</div>
          <div class="info-content">
            <p><strong>Lahir</strong> <span>29 Januari 1953</span></p>
            <p><strong>Istri</strong> <span>Ny. Sigasare</span></p>
            <p><strong>Anak</strong> <span>Sigasare</span></p>
          </div>
        </div>

        <div class="info-section">
          <div class="info-header">Riwayat Pendidikan</div>
          <div class="info-content">
            <p>- (Tambahkan Riwayat Pendidikan di sini) -</p>
          </div>
        </div>

        <div class="info-section">
          <div class="info-header">Riwayat Jabatan</div>
          <div class="info-content">
            <p>- (Tambahkan Riwayat Jabatan di sini) -</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Update -->
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
  </div>
</template>

<script>
export default {
  name: "VisiMisiView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.profil-visi-misi {
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

.sidebar {
  width: 320px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 20px;
  font-family: "Arial", sans-serif;
}

.profile {
  padding-bottom: 20px;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
}

.position {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.name {
  font-size: 18px;
  color: black;
}

.sub-title {
  font-size: 16px;
  color: black;
  margin: 5px 0;
}

.date {
  font-size: 16px;
  color: #333;
}

.info-section {
  margin-top: 15px;
}

.info-header {
  background: #65a5ca;
  color: white;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 4px 0 0;
  font-size: 18px;
}

.info-content {
  background: #f9f9f9;
  padding: 10px;
  text-align: left;
  font-size: 10px;
}

.info-content p {
  margin: 5px 0;
}

.info-content strong {
  display: inline-block;
  width: 90px;
  font-weight: bold;
  color: #333;
}

.info-content span {
  color: #555;
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

.konten-box {
  display: block; 
  justify-content: center; 
  align-items: center; 
  height: 50px; 
  padding: 5px; 
  margin-top: 30px;
  margin-bottom: 75px;
}

.teks-janji {
  font-weight: bold;
  color: red; 
  text-align: center; 
}

.teks-janji2 {
  font-weight: bold;
  color: rgb(0, 0, 0); 
  text-align: center; 
}
</style>
