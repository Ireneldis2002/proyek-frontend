<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>

      <div class="content-container">
        <!-- Formulir Pendaftaran -->
        <div class="form-container">
          <h2>FORMULIR PENDAFTARAN</h2>
          <form>
            <h3 class="section-title">• Identitas Ibu Kandung Anak</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="text" placeholder="NIK Ibu Kandung Bayi/Anak" v-model="form.nik" required />
                <small>*Isi dengan NIK Ibu Kandung (16 digit angka)
                    <br>
                    Catatan : Jika Ibu Kandung sudah meninggal atau tidak tau keberadaannya silahkan mengisi dengan angka nol contoh:0
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nama Lengkap Ibu Kandung Bayi/Anak" v-model="form.nama" required />
                <small>*Isi dengan nama lengkap Ibu Kandung sesuai dengan identitas yang terdaftar tanpa mencantumkan gelar</small>
              </div>
              <div class="input-container">
                <input type="date" v-model="form.tanggalLahir" required />
                <small>*Tanggal Perkawinan (bisa dilihat pada akta perkawinan)</small>
              </div>
              <div class="input-container">
                <select v-model="form.kewarganegaraan" required>
                  <option disabled value="">Kewarganegaraan Ibu Kandung</option>
                  <option>Warga Negara Indonesia (WNI)</option>
                  <option>Warga Negara Asing (WNA)</option>
                </select>
              </div>   
            </div>
            <h3 class="section-title">• Identitas Ayah Kandung Anak</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="text" placeholder="NIK Ayah Kandung Bayi/Anak" v-model="form.nik" required />
                <small>*Isi dengan NIK Ayah Kandung (16 digit angka)
                    <br>
                    Catatan : Jika Ayah Kandung sudah meninggal atau tidak tau keberadaannya silahkan mengisi dengan angka nol contoh:0
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nama Lengkap Ayah Kandung Bayi/Anak" v-model="form.nama" required />
                <small>*Isi dengan nama lengkap Ayah Kandung sesuai dengan identitas yang terdaftar tanpa mencantumkan gelar</small>
              </div>  
            </div>
            <h3 class="section-title">• Identitas Saksi Kelahiran</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="text" placeholder="NIK Saksi Kelahiran" v-model="form.nik" required />
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nama Lengkap Saksi Kelahiran" v-model="form.nama" required />
              </div>
              <div class="input-container">
                <input type="text" placeholder="Umur Saksi Kelahiran" v-model="form.umur" required />
                <small>*Format : "__ Tahun" (Tanpa tanda kutip)</small>
              </div>   
            </div>
            
            <!-- Kontainer untuk tombol agar posisinya ke kanan -->
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanAktaEmpat">BERIKUTNYA</button>
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
    name: "LayananAktaTigaView",
    data() {
      return {
        form: {
          nik: "",
          nama: "",
          umur: "",
          jenisKelamin: "",
          kewarganegaraan: "",
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
      keHalamanAktaEmpat() {
      this.$router.push('/layanan-online/layanan-akta-kelahiran-4');
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

.btn-submit:hover {
  background-color: #A0B6D6;
}
</style>
