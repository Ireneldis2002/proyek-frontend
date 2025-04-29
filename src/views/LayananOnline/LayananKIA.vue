<template>
  <div class="ruang-buku-tamu">
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <div class="form-container">
        <h2>FORMULIR PENDAFTARAN</h2>
        <form @submit.prevent="nextPage">
          <h3 class="section-title">• Identitas Pengisi Formulir</h3>
          <div class="form-grid">
            <div class="input-container">
              <input
                type="email"
                placeholder="Alamat email"
                v-model="form.email"
                required
              />
            </div>
            <div class="input-container">
              <input
                type="text"
                placeholder="Nama Lengkap"
                v-model="form.nama"
                required
              />
            </div>

            <div class="input-container">
              <input
                type="text"
                placeholder="NIK"
                v-model="form.nik"
                required
              />
            </div>
            <div class="input-container">
              <input
                type="text"
                placeholder="Nomor Hp/Wa"
                v-model="form.noHp"
                required
              />
            </div>

            <div class="input-container full-width">
              <input
                type="text"
                placeholder="Alamat Lengkap"
                v-model="form.alamat"
                required
              />
            </div>
          </div>

          <h3 class="section-title">• Pilih Umur Anak</h3>
          <div class="radio-group">
            <label>
              <input type="radio" v-model="form.umur" value="0-5" /> Umur 0 s/d
              5 Tahun
            </label>
            <label>
              <input type="radio" v-model="form.umur" value="5-17" /> Umur 5 s/d
              17 Tahun
            </label>
          </div>

          <div class="button-container">
            <button type="submit" class="btn-submit">BERIKUTNYA</button>
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
  name: "LayananKIAView",
  data() {
    return {
      form: {
        email: "",
        alamat: "",
        nama: "",
        nik: "",
        noHp: "",
        umur: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    nextPage() {
      if (!this.form.umur) {
        alert("Silakan pilih umur terlebih dahulu!"); 
        return;
      }

      if (this.form.umur === "0-5") {
        this.$router.push(
          "/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun"
        );
      } else if (this.form.umur === "5-17") {
        this.$router.push(
          "/layanan-online/layanan-kartu-identitas-anak-5-sd-17-tahun"
        );
      }
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

.section-title {
  color: #0073b7;
  font-size: 16px;
  margin-bottom: 10px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  align-items: center;
  width: 100%;
}

.input-container input {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
}

.umur-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.radio-group label {
  display: flex;
  align-items: center;
  font-size: 14px;
}

.radio-group input {
  margin-right: 8px;
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
