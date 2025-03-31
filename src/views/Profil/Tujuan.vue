<template>
  <div class="profil-visi-misi">
    <h1>Tujuan dan Sasaran</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="content-item">
          <h2>Tujuan</h2>
          <div class="line"></div>
          <p>
            Untuk mewujudkan Visi Kabupaten Ende yaitu Mewujudkan Karateristik
            Kabupaten Ende dengan Membangun dari Desa dan Kelurahan Menuju
            Masyarakat yang Mandiri, Sejahtera dan Berkeadilan, Misi Provinsi
            Nusa Tenggara Timur ke 1 dan 5 yaitu Kesejahteraan Masyarakat serta
            Reformasi Birokrasi Berkelanjutan Guna Mewujudkan Tata Kelola
            Pemerintah yang Baik dan Bersih (Good Governance and Clean
            Governance) yang difokuskan pada Tata Kelola Pemerintah yang Baik
            dan Bersih.
          </p>
        </div>

        <div class="content-item">
          <h2>Sasaran</h2>
          <div class="line"></div>
          <p>
            Untuk memastikan pencapaian tujuan yang diharapkan, maka sasaran
            jangka menengah Dinas Kependudukan dan Pencatatan Sipil Kabupaten
            Ende dijabarkan sebagai berikut:
          </p>
          <ol>
            <li>
              Meningkatnya kualitas pelayanan administrasi kependudukan dan
              pencatatan sipil
            </li>
            <li>
              Meningkatnya kualitas pendataan dan pemanfaatan teknologi
              informasi dalam administrasi kependudukan dan pencatatan sipil
            </li>
          </ol>
        </div>

        <!-- Tabel Sasaran -->
        <div class="table-container">
          <h2>Tabel Sasaran</h2>
          <div class="line"></div>
          <table>
            <thead>
              <tr>
                <th rowspan="4">NO</th>
                <th rowspan="4">TUJUAN</th>
                <th rowspan="4">SASARAN</th>
                <th rowspan="4">INDIKATOR SASARAN</th>
                <th colspan="6">TARGET KINERJA TUJUAN/SASARAN PADA TAHUN KE</th>
              </tr>
              <tr>
                <th>2019</th>
                <th>2020</th>
                <th>2021</th>
                <th>2022</th>
                <th>2023</th>
                <th>2024</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Terwujudnya tata kelola pemerintahan yang baik (good
                  governance)
                </td>
                <td>
                  Meningkatnya kualitas pelayanan publik di bidang administrasi
                  kependudukan
                </td>
                <td>Cakupan penerbitan KTP berbasis NIK</td>
                <td>92,50%</td>
                <td>95%</td>
                <td>97,50%</td>
                <td>100%</td>
                <td>100%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>2</td>
                <td></td>
                <td></td>
                <td>
                  Presentase akte kelahiran untuk bayi yang diselesaikan dalam
                  jangka waktu 1(satu) hari
                </td>
                <td>2,57%</td>
                <td>3,85%</td>
                <td>5,13%</td>
                <td>6,41%</td>
                <td>7,70%</td>
                <td>8,40%</td>
              </tr>
              <tr>
                <td>3</td>
                <td></td>
                <td></td>
                <td>Rasio pasangan ber-akte nikah</td>
                <td>25%</td>
                <td>33%</td>
                <td>43%</td>
                <td>53%</td>
                <td>65%</td>
                <td>73%</td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td>Cakupan kepemilikan akta kelahiran</td>
                <td>93%</td>
                <td>94%</td>
                <td>96%</td>
                <td>97%</td>
                <td>98%</td>
                <td>100%</td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td>Prosentase kepemilikan kartu keluarga</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
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
  text-align: center;
}

th {
  background-color: #8bbbd7;
  color: white;
  font-weight: bold;
}
</style>
