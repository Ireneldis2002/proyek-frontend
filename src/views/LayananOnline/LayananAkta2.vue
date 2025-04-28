<template>
  <div>
    <!-- Tombol Kembali -->
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <!-- Formulir Pendaftaran -->
      <div class="form-container">
        <h2>FORMULIR PENDAFTARAN</h2>
        <form>
          <h3 class="section-title">• Identitas Bayi/Anak</h3>
          <div class="form-grid">
            <div class="input-container">
              <input
                type="text"
                placeholder="NIK Bayi/Anak"
                v-model="form.nik"
                required
              />
              <small
                >*Isi NIK Bayi/Anak (16 digit angka, diisi apabila sudah
                memiliki NIK dalam Kartu Keluarga)</small
              >
            </div>
            <div class="input-container">
              <input
                type="text"
                placeholder="Nama Lengkap Bayi/Anak"
                v-model="form.nama"
                required
              />
              <small
                >*Isi Nama Lengkap Bayi/Anak (maksimal 25 karakter, termasuk
                huruf dan spasi)</small
              >
            </div>
            <div class="input-container">
              <select v-model="form.jenisKelamin" required>
                <option disabled value="">Jenis Kelamin Bayi/Anak</option>
                <option>Laki-laki</option>
                <option>Perempuan</option>
              </select>
            </div>
            <div class="input-container">
              <select v-model="form.tempatDilahirkan" required>
                <option disabled value="">Tempat Dilahirkan Bayi/Anak</option>
                <option>Rumah Sakit</option>
                <option>Puskesmas</option>
                <option>Rumah</option>
              </select>
            </div>
            <div class="input-container full-width">
              <input
                type="text"
                placeholder="Kabupaten/Kota Tempat Kelahiran Bayi/Anak"
                v-model="form.kabupaten"
                required
              />
              <small>*Isi dengan nama kabupaten/kota kelahiran bayi/anak</small>
            </div>
            <div class="input-container">
              <input type="date" v-model="form.tanggalLahir" required />
              <small>*Tanggal Lahir</small>
            </div>
            <div class="input-container">
              <input type="time" v-model="form.waktuLahir" required />
              <small>*Waktu Lahir</small>
            </div>
            <div class="input-container">
              <input
                type="number"
                placeholder="Berat (Kg)"
                v-model="form.berat"
                required
              />
            </div>
            <div class="input-container">
              <input
                type="number"
                placeholder="Panjang (Cm)"
                v-model="form.panjang"
                required
              />
            </div>
          </div>

          <div class="button-container">
            <button type="submit" class="btn-submit" @click="keHalamanAktaTiga">
              BERIKUTNYA
            </button>
          </div>
        </form>
      </div>

      <aside class="sidebar">
        <div class="persyaratan-box">
          <h2>PERSYARATAN <br /><span>(Pencatatan Kelahiran)</span></h2>
          <p class="subheading">Pencatatan Kelahiran WNI :</p>
          <ol>
            <li>Mengisi Formulir Pelaporan Kelahiran (F2-2.05)</li>
            <li>
              Foto Copy Surat Keterangan Kelahiran dari Rumah
              Sakit/Puskesmas/Bidan Penolong Kelahiran
            </li>
            <li>Foto copy Akta Perkawinan/Buku Nikah Orang Tua</li>
            <li>Foto Copy Kartu Keluarga dan KTP-El Orang Tua</li>
            <li>
              Jika tidak memiliki persyaratan pada point 2, wajib mengisi
              Formulir SPTJM (F-2.03) Kebenaran data Kelahiran yaitu pernyataan
              yang dibuat oleh orang tua Kandung/Wali/Pemohon dengan tanggung
              jawab penuh atas kebenaran data kelahiran seseorang dengan
              diketahui oleh dua orang saksi
            </li>
            <li>
              Bagi salah satu / kedua pasangan suami istri meninggal, maka wajib
              mengisi Formulir F2-2.04 (SPTJM) Surat Keterangan Tanggung Jawab
              Mutlak Kebenaran Sebagai Pasangan Suami Istri dengan melampirkan
              surat nikah.
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
  name: "LayananAktaDuaView",
  data() {
    return {
      form: {
        nik: "",
        nama: "",
        jenisKelamin: "",
        tempatDilahirkan: "",
        kabupaten: "",
        tanggalLahir: "",
        waktuLahir: "",
        berat: "",
        panjang: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    keHalamanAktaTiga() {
      this.$router.push("/layanan-online/layanan-akta-kelahiran-3");
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
  padding: 8px 20px;
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
