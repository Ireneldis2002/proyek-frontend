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
            <div class="input-container">
              <input type="text" placeholder="Nama Lengkap" v-model="form.nama" required />
            </div>
            <div class="input-container">
              <input type="text" placeholder="NIK" v-model="form.nik" required />
            </div>
            <div class="input-container">
              <input type="text" placeholder="Nomor Hp/Wa" v-model="form.noHp" required />
            </div>
            <!-- Pilihan Umur Anak berada langsung di bawah Alamat Lengkap -->
            <div class="input-container umur-container">
              <h3 class="section-title">• Pilih Umur Anak</h3>
              <div class="radio-group">
                <label><input type="radio" v-model="form.umur" value="0-5" /> Umur 0 s/d 5 Tahun</label>
                <label><input type="radio" v-model="form.umur" value="5-17" /> Umur 5 s/d 17 Tahun</label>
              </div>
            </div>
          </div>

          <!-- Kontainer untuk tombol agar posisinya ke kanan -->
          <div class="button-container">
            <button type="submit" class="btn-submit">BERIKUTNYA</button>
          </div>
        </form>
      </div>

      <!-- Sidebar Persyaratan -->
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
  gap: 20px;
}

/* Formulir */
.form-container {
  flex: 2;
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #000; /* Border lebih tipis */
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

/* Grid Form dengan lebih banyak jarak antar input */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px; /* Lebih banyak jarak antar input */
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

/* Posisi Kolom */
.form-grid > .input-container:nth-child(1) { grid-column: 1; } /* Alamat Email di kiri */
.form-grid > .input-container:nth-child(2) { grid-column: 2; } /* Alamat Lengkap di kanan */
.form-grid > .input-container:nth-child(3) { grid-column: 1; } /* Nama Lengkap di kiri */
.form-grid > .input-container:nth-child(4) { grid-column: 1; } /* NIK di kiri */
.form-grid > .input-container:nth-child(5) { grid-column: 2; } /* Nomor HP di kanan */
.form-grid > .input-container:nth-child(6) { grid-column: 2; grid-row: 3; } /* Pilih Umur Anak langsung di bawah Alamat Lengkap */

/* Pilihan Umur Anak */
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

/* Container untuk tombol agar di kanan */
.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

/* Tombol Submit lebih kecil, soft, dan di kanan */
.btn-submit {
  padding: 10px 25px;
  background-color: #B0C4DE;
  color: white;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}

.btn-submit:hover {
  background-color: #A0B6D6;
}
</style>
