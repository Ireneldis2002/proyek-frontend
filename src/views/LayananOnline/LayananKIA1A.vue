<template>
    <div class="ruang-buku-tamu">
      <button @click="goBack" class="btn-back">⬅</button>

      <div class="content-container">

        <div class="form-container">
          <h2>FORMULIR PENDAFTARAN</h2>
          <form>
            <h3 class="section-title">• Umur Anak 0 s/d 5 Tahun</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="text" placeholder="Nama Lengkap Anak" v-model="form.nama" required />
                <small>*Catatan : Isi nama sesuai dengan nama di dalam Kartu Keluarga</small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="NIK Anak" v-model="form.nik" required />
                <small>*Catatan : Isi dengan NIK 16 digit angka sesuai dengan nama di dalam Kartu Keluarga</small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Umur Anak" v-model="form.umur" required />
                <small>*Catatan : Isi umur anak saat ini dengan angka</small>
              </div>
              <div class="input-container">
                
              </div>
              <div class="input-container">
              </div>
            </div>

            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanAktaTiga">BERIKUTNYA</button>
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
    name: "LayananKIASatuAView",
    data() {
      return {
        form: {
          nama: "",
          nik: "",
          umur: "",
        },
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      keHalamanAktaTiga() {
      this.$router.push('/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun-2');
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
  background-color: #65A5CA;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #A0B6D6;
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
