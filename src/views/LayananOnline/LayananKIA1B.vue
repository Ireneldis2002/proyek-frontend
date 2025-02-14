<template>
  <div class="ruang-buku-tamu">
    <!-- Tombol Kembali -->
    <button @click="goBack" class="btn-back">⬅</button>

    <div class="content-container">
      <!-- Formulir Pendaftaran -->
      <div class="form-container">
        <h2>FORMULIR PENDAFTARAN</h2>
        <form>
          <h3 class="section-title">• Umur Anak 5 s/d 17 Tahun</h3>
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
          
          <!-- Kontainer untuk tombol agar posisinya ke kanan -->
          <div class="button-container">
            <button type="submit" class="btn-submit" @click="keHalamanAktaTiga">BERIKUTNYA</button>
          </div>
        </form>
      </div>

      <!-- Sidebar (Ditambahkan) -->
      <aside class="sidebar">
        <div class="image-container">
          <img src="@/assets/SidebarLayananKIA.png" alt="Sidebar Informasi" />
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "LayananKIASatuBView",
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
    this.$router.push('/layanan-online/layanan-kartu-identitas-anak-5-sd-17-tahun-2');
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
