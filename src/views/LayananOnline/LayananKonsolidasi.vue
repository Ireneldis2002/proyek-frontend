<template>
  <div class="ruang-buku-tamu">
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <div class="form-container">
        <h2>KONSOLIDASI DATABASE</h2>
        <br />
        <br />
        <form>
          <div class="form-grid">
            <div class="input-container">
              <label>NIK</label>
              <input type="text" v-model="form.nik" required />
              <p class="help-text">*Silakan isi NIK sesuai KK</p>
            </div>
            <div class="input-container">
              <label>Nama Lengkap</label>
              <input type="text" v-model="form.nama" required />
              <p class="help-text">*Sesuaikan dengan KTP</p>
            </div>

            <div class="input-container">
              <label>Nomor Kartu Keluarga</label>
              <input type="text" v-model="form.kk" required />
            </div>
            <div class="input-container">
              <label>Nomor Telp/HP</label>
              <input type="text" v-model="form.noHp" required />
            </div>

            <div class="input-container">
              <label>Email</label>
              <input type="email" v-model="form.email" required />
              <p class="help-text">*Contoh: variost@gmail.com</p>
            </div>
            <div class="input-container">
              <label>Pilih Layanan Online</label>
              <select v-model="form.layanan">
                <option value="">KTP-El</option>
                <option value="">AKta Kelahiran</option>
                <option value="">Kartu Keluarga</option>
                <option value="tidak ditemukan">Data tidak ditemukan</option>
                <option value="lain">Lain-lain</option>
              </select>
            </div>

            <div class="input-container full-width">
              <label>Tuliskan Permasalahan</label>
              <textarea v-model="form.permasalahan" required></textarea>
              <p class="help-text">
                *(Silahkan isi permasalahan anda secara lengkap) contoh : NIK
                saya tidak ditemukan didata pusat untuk keperluan pendaftaran
                CPNS
              </p>
            </div>

            <div class="input-container">
              <label>Kartu keluarga</label>
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
          </div>

          <div class="terms-container">
            <input type="checkbox" v-model="form.persetujuan" />
            <label>Saya menyetujui syarat dan ketentuan di atas.</label>
          </div>

          <div class="button-container">
            <button type="submit" class="btn-submit" @click="keHalamanKirim">
              KIRIM
            </button>
          </div>
        </form>
      </div>

      <aside class="sidebar">
        <div class="persyaratan-box">
          <h2>KONSOLIDASI DATABASE</h2>
          <br />
          <p>
            Konsolidasi database adalah proses mensingkronasikan (menyesuaikan)
            data yang tertera pada dokumen kependudukan dan catatan sipil paling
            mutakhir pada dokumen Anda ke Data Center Kependudukan Nasional
            Indonesia.
          </p>
          <br />
          <p>
            Bagi warga Kabupaten Ende, jika data NIK, nama lengkap, tempat dan
            tgl lahir sudah sesuai dengan KTP-el dan KK namun data masih tidak
            ditemukan atau tidak sesuai pada aplikasi online Seperti :
          </p>
          <ol>
            <li>Tidak bisa mendaftar CPNS</li>
            <li>Tidak bisa mengurus BPJS</li>
            <li>Tidak bisa mengurus rekening bank</li>
            <li>dll</li>
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
  name: "LayananKonsolidasiView",
  data() {
    return {
      form: {
        nik: "",
        nama: "",
        noHp: "",
        email: "",
        layanan: "",
        permasalahan: "",
        persetujuan: false,
      },
      uploadedFiles: {
        fileKartuKeluarga: null,
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    keHalamanKirim() {
      this.$router.push("/layanan-online/konsolidasi-database-kirim");
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
  gap: 20px;
}

.form-container {
  flex: 2;
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
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

.input-container input,
.input-container select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
}

.help-text {
  font-size: 12px;
  color: gray;
}

.full-width {
  grid-column: span 2;
}

.terms-container {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  margin-top: 10px;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

.btn-submit {
  padding: 10px 25px;
  background-color: #6ea4d3;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
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

p {
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
