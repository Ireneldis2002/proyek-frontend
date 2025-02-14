<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>

      <div class="content-container">
        <!-- Formulir Pendaftaran -->
        <div class="form-container">
          <h2>FORMULIR PENDAFTARAN</h2>
          <form>
            <h3 class="section-title">• Identitas Pengisi Formulir</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="email" placeholder="Alamat email" v-model="form.email" required />
              </div>
              <div class="input-container">
                <input type="text" placeholder="Alamat Lengkap" v-model="form.alamat" required />
              </div>
              <div class="input-container full-width">
                <input type="text" placeholder="Nama Lengkap" v-model="form.nama" required />
              </div>
              <div class="input-container full-width">
                <input type="text" placeholder="NIK" v-model="form.nik" required />
              </div>
              <div class="input-container full-width">
                <input type="text" placeholder="Nomor Hp/Wa" v-model="form.noHp" required />
              </div>
            </div>
            
            <!-- Kontainer untuk tombol agar posisinya ke kanan -->
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanAktaDua">BERIKUTNYA</button>
            </div>

          </form>
        </div>

        <!-- Sidebar (Tidak Diubah) -->
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
    name: "LayananAktaView",
    data() {
      return {
        form: {
          email: "",
          alamat: "",
          nama: "",
          nik: "",
          noHp: "",
        },
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      keHalamanAktaDua() {
      this.$router.push('/layanan-online/layanan-akta-kelahiran-2');
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

/* Grid Form dengan lebih banyak jarak antar input */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px; /* Lebih banyak jarak antar input */
  margin-bottom: 20px;
}

/* Input Styling */
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

/* Tombol Submit lebih kecil dan di kanan */
.btn-submit {
  padding: 8px 20px; /* Ukuran lebih kecil */
  background-color: #65A5CA;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px; /* Ukuran teks lebih kecil */
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #A0B6D6;
}
</style>
