<template>
  <div class="ruang-buku-tamu">
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <div class="form-container">
        <h2>FORMULIR PENDAFTARAN</h2>
        <br />
        <form>
          <h3 class="section-title">• Data Berkas Persyaratan</h3>
          <div class="form-grid">
            <div class="input-container">
              <label>Akta Kelahiran</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileAktaKelahiran')"
              ></div>
              <input
                type="file"
                ref="fileAktaKelahiran"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileAktaKelahiran')"
              />
              <p v-if="uploadedFiles.fileAktaKelahiran" class="file-name">
                {{ uploadedFiles.fileAktaKelahiran.name }}
              </p>
            </div>

            <div class="input-container">
              <label>KTP El-Ayah Kandung</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileKTPAyah')"
              ></div>
              <input
                type="file"
                ref="fileKTPAyah"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileKTPAyah')"
              />
              <p v-if="uploadedFiles.fileKTPAyah" class="file-name">
                {{ uploadedFiles.fileKTPAyah.name }}
              </p>
            </div>

            <div class="input-container">
              <label>Kartu Keluarga</label>
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
              <label>KTP El-Ibu Kandung</label>
              <div
                class="upload-box"
                @click="triggerFileInput('fileKTPIbu')"
              ></div>
              <input
                type="file"
                ref="fileKTPIbu"
                class="hidden-file-input"
                @change="handleFileUpload($event, 'fileKTPIbu')"
              />
              <p v-if="uploadedFiles.fileKTPIbu" class="file-name">
                {{ uploadedFiles.fileKTPIbu.name }}
              </p>
            </div>

            <div class="info-box full-width">
              <p>
                Permohonan ini saya ajukan dengan sebenar-benarnya dan apabila
                dikemudian hari ditemukan pemalsuan data maka SAYA BERSEDIA
                DIPROSES SECARA HUKUM sesuai dengan peraturan perundang-undangan
                yang berlaku, dan dokumen yang diterbitkan menjadi tidak sah.
              </p>

              <div class="terms-container">
                <input type="checkbox" v-model="form.persetujuan" />
                <label>Saya menyetujui syarat dan ketentuan di atas.</label>
              </div>
            </div>

            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanKKLima">
                KIRIM
              </button>
            </div>

            <div
              :style="{ display: showModal ? 'flex' : 'none' }"
              class="modal-overlay"
            >
              <div class="modal">
                <h3 class="modal-title">TERIMAKASIH TELAH MENGISI FORMULIR</h3>
                <br />
                <br />
                <p>
                  Proses Pembuatan Kartu Identitas Anak Berusia 0 s/d 5 Tahun
                  akan kami proses dengan kurun waktu maksimal 3 hari.
                </p>
                <p>
                  Silakan cek email yang telah diisi untuk menerima informasi
                  lebih lanjut.
                </p>
                <p>
                  Untuk proses pengaduan, silakan hubungi:
                  <strong>0813-1975-0033</strong>
                </p>
                <br />
                <button @click="closeModal" class="btn-modal">
                  Kembali ke Menu Layanan Online
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <aside class="sidebar">
        <div class="persyaratan-box">
          <h2>
            PERSYARATAN <br /><span>(Penerbitan Kartu Identitas Anak)</span>
          </h2>
          <ol>
            <li>Berumur Kurang dari (tujuh belas) tahun dan belum kawin</li>
            <li>Kutipan Akta Perkawinan</li>
            <li>Kartu Keluarga</li>
            <li>
              Pas Photo ukuran 3x4 bagi anak usia 5 tahun s/d kurang 17 (tujuh
              belas) tahun dengan latar merah untuk tahun kelahiran ganjil dan
              latar biru untuk tahun kelahiran genap
            </li>
            <li>Dokumen Perjalanan RI atau Dokumen Perjalanan</li>
            <li>Kartu izin tinggal tetap bagi WNA</li>
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
  name: "LayananKIAAKirimView",
  data() {
    return {
      form: {
        persetujuan: false,
      },
      uploadedFiles: {
        fileAktaKelahiran: null,
        fileKTPAyah: null,
        fileKartuKeluarga: null,
        fileKTPIbu: null,
      },
      showModal: false,
    };
  },
  mounted() {
    this.showModal = true;
  },
  methods: {
    closeModal() {
      this.$router.push("/layanan-online");
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
  margin: 20px;
}

.form-container {
  flex: 2;
  background: white;
  padding: 30px;
  border-radius: 8px;
  border: 2px solid #000;
}

h2 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.section-title {
  color: #0073b7;
  font-size: 16px;
  margin-bottom: 15px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.full-width {
  grid-column: span 2;
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

.info-box {
  background-color: #fff;
  border: 2px solid #ccc;
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: #d2e3f3;
  padding: 4%;
  border-radius: 8px;
  width: 50%;
  max-width: 600px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.modal-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 15px;
}

.modal p {
  font-size: 1.2rem;
  margin-bottom: 10px;
  line-height: 1.5;
}

.btn-modal {
  background-color: #65a5ca;
  color: white;
  padding: 12px 18px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
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
