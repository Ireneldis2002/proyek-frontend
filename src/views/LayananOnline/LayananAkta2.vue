<template>
    <div class="ruang-buku-tamu">
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
                <input type="text" placeholder="NIK Bayi/Anak" v-model="form.nik" required />
                <small>*Isi NIK Bayi/Anak (16 digit angka, diisi apabila sudah memiliki NIK dalam Kartu Keluarga)</small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nama Lengkap Bayi/Anak" v-model="form.nama" required />
                <small>*Isi Nama Lengkap Bayi/Anak (maksimal 25 karakter, termasuk huruf dan spasi)</small>
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
                <input type="text" placeholder="Kabupaten/Kota Tempat Kelahiran Bayi/Anak" v-model="form.kabupaten" required />
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
                <input type="number" placeholder="Berat (Kg)" v-model="form.berat" required />
              </div>
              <div class="input-container">
                <input type="number" placeholder="Panjang (Cm)" v-model="form.panjang" required />
              </div>
            </div>
            
            <!-- Kontainer untuk tombol agar posisinya ke kanan -->
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanAktaTiga">BERIKUTNYA</button>
            </div>
          </form>
        </div>

        <!-- Sidebar (Ditambahkan) -->
        <aside class="sidebar">
          <div class="image-container">
            <img src="@/assets/SidebarLayananAkta.png" alt="Sidebar Informasi" />
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
      this.$router.push('/layanan-online/layanan-akta-kelahiran-3');
    },
    },
};
</script>

<style scoped>
/* Tombol Kembali */
.btn-back {
  margin: 10px;
  padding: 8px 15px;
  background-color: #8bbbd7;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* Layout Utama */
.content-container {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

/* Formulir */
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

/* Grid Form */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

/* Input Styling */
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

/* Agar beberapa input full-width */
.full-width {
  grid-column: span 2;
}

/* Container untuk tombol agar di kanan */
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}



/* Tombol Submit */
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
</style>
