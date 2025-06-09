<template>
  <div class="ruang-buku-tamu">
    <!-- Tombol Kembali -->
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <!-- Formulir Pendaftaran -->
      <div class="form-container">
        <h2>FORMULIR PENDAFTARAN</h2>
        <br />
        <form>
          <h3 class="section-title">• Data Berkas Persyaratan</h3>
          <div class="form-grid">
            <div class="input-container">
              <label>Surat Permandian</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileSuratPermandian')"
              ></div>
              <input
                type="file"
                ref="fileSuratPermandian"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileSuratPermandian')"
              />
              <p v-if="uploadedFiles.fileSuratPermandian" class="file-name">
                {{ uploadedFiles.fileSuratPermandian.name }}
              </p>
              <p class="help-text">
                *Catatan : Silahkan anda Upload/Unggah Surat Permandian dari
                anggota keluarga baru. Nama tidak boleh di singkat (dengan
                jumlah karakter 25 Digit sudah termasuk huruf dan spasi)
              </p>
            </div>

            <div class="input-container">
              <label>Kartu Keluarga Orang Tua </label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileKartuKeluarga')"
              ></div>
              <input
                type="file"
                ref="fileKartuKeluarga"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileKartuKeluarga')"
              />
              <p v-if="uploadedFiles.fileKartuKeluarga" class="file-name">
                {{ uploadedFiles.fileKartuKeluarga.name }}
              </p>
            </div>

            <div class="input-container">
              <label>Ijazah </label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileIjazah')"
              ></div>
              <input
                type="file"
                ref="fileIjazah"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileIjazah')"
              />
              <p v-if="uploadedFiles.fileIjazah" class="file-name">
                {{ uploadedFiles.fileIjazah.name }}
              </p>
            </div>

            <div class="input-container">
              <label>Surat Nikah</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileSuratNikah')"
              ></div>
              <input
                type="file"
                ref="fileSuratNikah"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileSuratNikah')"
              />
              <p v-if="uploadedFiles.fileSuratNikah" class="file-name">
                {{ uploadedFiles.fileSuratNikah.name }}
              </p>
              <p class="help-text">
                *Catatan : Jika belum menikah tidak perlu diisi
              </p>
            </div>

            <div class="input-container">
              <label>Golongan Darah </label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileGoldar')"
              ></div>
              <input
                type="file"
                ref="fileGoldar"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileGoldar')"
              />
              <p v-if="uploadedFiles.fileGoldar" class="file-name">
                {{ uploadedFiles.fileGoldar.name }}
              </p>
              <p class="help-text">
                *Catatan : (Silakan anda Upload/Unggah Kartu Golongan Darah bagi
                yang belum memiliki Golongan Darah dalam Kartu Keluarga ). Anda
                bisa Upload lebih dari satu dokumen
              </p>
            </div>

            <div class="input-container">
              <label>Surat Keterangan Belum Menikah</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileBelumNikah')"
              ></div>
              <input
                type="file"
                ref="fileBelumNikah"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileBelumNikah')"
              />
              <p v-if="uploadedFiles.fileBelumNikah" class="file-name">
                {{ uploadedFiles.fileBelumNikah.name }}
              </p>
              <p class="help-text">
                *Catatan : Jika sudah menikah tidak perlu diisi
              </p>
            </div>

            <div class="input-container full-width">
              <label
                ><b>KETERANGAN</b>
                <br />
                Silakan tuliskan secara rinci permohonan yang akan anda ajukan,
                agar memudahkan petugas dalam memproses, tuliskan yang anda
                inginkan secara detail seperti "Saya ingin mengurus Kartu
                Keluarga Baru atau Saya ingin merubah data pada kartu Keluarga
                atau Saya ingin Pisah Kartu Keluarga"</label
              >
              <textarea v-model="form.permasalahan" required></textarea>
            </div>

            <div class="input-container"></div>

            <div class="button-container">
              <button
                type="submit"
                class="btn-submit"
                @click="keHalamanKKEmpat"
              >
                BERIKUTNYA
              </button>
            </div>
          </div>
        </form>
      </div>

      <aside class="sidebar">
        <div class="persyaratan-box">
          <h2>PERSYARATAN <br /><span>(Penerbitan Kartu Keluarga)</span></h2>
          <ol>
            <li>Mengisi Formulir Isian Biodata Penduduk F1.01</li>
            <li>Izin tinggal tetap bagi WNA</li>
            <li>
              Surat Pernyataan (Kepala Keluarga) tidak terdata di daerah lain
            </li>
            <li>
              Buku Nikah/Kutipan Akta Perkawinan atau Kutipan Akta Perceraian
            </li>
            <li>Surat keterangan pindah, surat keterangan pindah datang</li>
            <li>
              Surat keterangan pindah luar negeri yang diterbitkan oleh Dinas
              Dukcapil bagi Warga Negara Asing yang datang dari luar wilayah
              NKRI
            </li>
            <li>
              Surat keterangan pengganti tanda identitas bagi Penduduk rentan
              Administrasi Kependudukan
            </li>
            <li>
              Petikan keputusan presiden tentang pewarganegaraan dan berita
              acara pengucapan sumpah atau pernyataan janji bagi penduduk WNI
              yang semua berkewarganegaraan asing atau petikan keputusan menteri
              yang menyelenggarakan urusan pemerintahan di bidang hukum tentang
              perubahan status kewarganegaraan
            </li>
          </ol>
          <div class="important-note">
            <strong>PENTING :</strong>
            <p>Perhatikan Keaslian Data dan <br />Kelengkapan Formulir !</p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayananKKTigaView",
  data() {
    return {
      uploadedFiles: {
        fileSuratKelahiran: null,
        fileKartuKeluarga: null,
        fileSPTJM: null,
        fileKTPAyah: null,
        fileAktaNikah: null,
        fileKTPIbu: null,
        fileBukuNikah: null,
        fileBelumNikah: null,
      },
      form: {
        permasalahan: "",
      },
    };
  },
  methods: {
    triggerFileInput(refName) {
      this.$refs[refName].click();
    },
    handleFileUpload(event, fileKey) {
      this.uploadedFiles[fileKey] = event.target.files[0];
    },
    goBack() {
      this.$router.go(-1);
    },
    keHalamanKKEmpat() {
      this.$router.push("/layanan-online/layanan-kartu-keluarga-4");
    },
  },
};
</script>

<style scoped>
.btn-back {
  margin: 10px;
  padding: 8px 15px;
  background-color: #8bbbd7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.content-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  margin: 20px;
}

.form-container {
  flex: 2;
  background: white;
  padding: 30px;
  border-radius: 8px;
  border: 2px solid #000;
}

.form-container h2 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.section-title {
  color: #0073b7;
  font-size: 18px;
  margin-bottom: 15px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-container input,
.input-container select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
}

.input-container small {
  font-size: 12px;
  color: #666;
}

.full-width {
  grid-column: span 2;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.btn-submit {
  padding: 10px 25px;
  background-color: #65a5ca;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #a0b6d6;
}

.persyaratan-box {
  background-color: #a3d1ed;
  border-radius: 16px;
  padding: 25px 30px;
  color: #000;
  max-width: 500px;
  font-family: "Open Sans", sans-serif;
}

.persyaratan-box h2 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

h2 span {
  font-weight: normal;
  font-size: 18px;
}

.subheading {
  font-size: 16px;
  font-weight: 600;
  margin: 10px 0;
}

ol {
  padding-left: 20px;
}

ol li {
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 1.5;
}

.important-note {
  margin-top: 20px;
  color: red;
  font-weight: bold;
}

.important-note p {
  color: black;
  font-weight: normal;
  font-size: 14px;
  margin: 5px 0 0;
}
</style>
