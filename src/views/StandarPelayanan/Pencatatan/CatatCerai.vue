<template>
  <div class="profil-visi-misi">
    <h1>Akta Perceraian</h1>
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-item">
          <ol>
            <p><b> PENCATATAN PERCERAIAN</b></p>

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
                  <td>Persyaratan Pelayanan</td>
                  <td>
                    <p>
                      <b
                        >Perceraian di wilayah NKRI dengan memenuhi
                        persyaratan:</b
                      >
                    </p>
                    <ol>
                      <li>Formulir Pelaporan Perceraian (F-2-19)</li>
                      <li>
                        Foto copy Salinan Putusan Perceraian dari PN yang
                        berkekuatan hukum tetap
                      </li>
                      <li>Kutipan Akta Perkawinan Asli</li>
                      <li>Kartu Keluarga Asli</li>
                      <li>Foto copy KTP Elektronik Pasangan Suami Istri</li>
                      <li>
                        Dalam hal Pemohon tidak dapat menyerahkan Kutipan Akta
                        Perkawinan, Pemohon membuat Surat Pernytaan yang
                        menyatakan Kutipan Akta Perkawinan tidak dimiliki dengan
                        alasan sesuai dengan Ketentuan Peraturan
                        Perundang-undangan
                      </li>
                    </ol>
                    <br />
                    <p>
                      <b
                        >Perceraian di luar wilayah NKRI dengan memenuhi
                        persyaratan :</b
                      >
                    </p>
                    <ol>
                      <li>
                        Kutipan akta perceraian/bukti pencatatan perceraian dari
                        negara setempat;
                      </li>
                      <li>Dokumen perjalanan RI</li>
                      <li>
                        Surat keterangan yang menunjukkan domisili atau surat
                        keterangan pindah luar negeri.
                      </li>
                    </ol>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>2.</td>
                  <td>Prosedur</td>
                  <td>
                    <ol>
                      <li>Pemohon Melengkapi Persyaratan</li>
                      <li>
                        Petugas Pelayanan Melakukan Verifikasi dan Validasi
                        terhadap Formulir Pelaporan dan Persyaratan, jika belum
                        lengkap dikembalikan ke Pemohon
                      </li>
                      <li>
                        Petugas Melakukan Perekaman Data ke dalam Database
                        Kependudukan
                      </li>
                      <li>
                        Kepala Seksi Mengajukan Ke Kepala bidang utk
                        Memverifikasi
                      </li>
                      <li>Kepala Dinas menandatangani Kutipan Akta</li>
                      <li>Kutipan Akta Kelahiran disampaikan kepada Pemohon</li>
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
                  <td>Kutipan Akta Perkawinan</td>
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
  name: "PencatatanPerceraianView",
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
</style>
