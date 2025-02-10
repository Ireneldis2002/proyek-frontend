<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>
  
      <div class="content-container">
        <!-- Formulir Konsolidasi Database -->
        <div class="form-container">
          <h2>KONSOLIDASI DATABASE</h2>
          <form>
            <div class="form-grid">
              <!-- Baris 1: NIK dan Nama Lengkap -->
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
  
              <!-- Baris 2: Nomor KK dan Nomor Telepon -->
              <div class="input-container">
                <label>Nomor Kartu Keluarga</label>
                <input type="text" v-model="form.kk" required />
              </div>
              <div class="input-container">
                <label>Nomor Telp/HP</label>
                <input type="text" v-model="form.noHp" required />
              </div>
  
              <!-- Baris 3: Email dan Pilih Layanan Online -->
              <div class="input-container">
                <label>Email</label>
                <input type="email" v-model="form.email" required />
                <p class="help-text">*Contoh: variost@gmail.com</p>
              </div>
              <div class="input-container">
                <label>Pilih Layanan Online</label>
                <select v-model="form.layanan">
                  <option value="">Silakan Pilih</option>
                  <option value="tidak ditemukan">Data tidak ditemukan</option>
                  <option value="lain">Lain-lain</option>
                </select>
              </div>
  
              <!-- Baris 4: Tuliskan Permasalahan (Lebih besar) -->
              <div class="input-container full-width">
                <label>Tuliskan Permasalahan</label>
                <textarea v-model="form.permasalahan" required></textarea>
              </div>
  
              <!-- Baris 5: Upload Kartu Keluarga -->
              <div class="input-container full-width">
                <label>Kartu Keluarga</label>
                <div class="upload-box">
                  <span>Tambahkan File</span>
                </div>
              </div>
            </div>
  
            <!-- Checkbox Persetujuan -->
            <div class="terms-container">
              <input type="checkbox" v-model="form.persetujuan" />
              <label>Saya menyetujui syarat dan ketentuan di atas.</label>
            </div>
  
            <!-- Tombol Kirim -->
            <div class="button-container">
              <button type="submit" class="btn-submit">KIRIM</button>
            </div>
          </form>
        </div>
  
        <!-- Sidebar Persyaratan -->
        <aside class="sidebar">
          <div class="image-container">
            <img src="@/assets/SidebarKonsolidasi.png" alt="Sidebar Informasi" />
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
          kk: "",
          noHp: "",
          email: "",
          layanan: "",
          permasalahan: "",
          persetujuan: false,
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
    border: 1px solid #000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    font-size: 22px;
    font-weight: bold;
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
  .input-container select,
  .input-container textarea {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
    width: 100%;
  }
  
  .input-container textarea {
    height: 80px;
  }
  
  /* Teks Bantuan */
  .help-text {
    font-size: 12px;
    color: gray;
  }
  
  /* Upload File */
  .upload-box {
    border: 1px dashed #999;
    padding: 15px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
  }
  
  /* Full-width untuk elemen yang lebih panjang */
  .full-width {
    grid-column: span 2;
  }
  
  /* Persetujuan */
  .terms-container {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    margin-top: 10px;
  }
  
  /* Container untuk tombol agar di kanan */
  .button-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
  
  /* Tombol Kirim */
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
  </style>
  