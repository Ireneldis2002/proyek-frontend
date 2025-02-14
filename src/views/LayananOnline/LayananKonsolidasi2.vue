<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>
  
      <div class="content-container">
        <!-- Formulir Konsolidasi Database -->
        <div class="form-container">
          <h2>KONSOLIDASI DATABASE</h2>
          <br>
          <br>
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
                  <option value="">KTP-El</option>
                  <option value="">AKta Kelahiran</option>
                  <option value="">Kartu Keluarga</option>
                  <option value="tidak ditemukan">Data tidak ditemukan</option>
                  <option value="lain">Lain-lain</option>
                </select>
              </div>
  
              <!-- Baris 4: Tuliskan Permasalahan (Lebih besar) -->
              <div class="input-container full-width">
                <label>Tuliskan Permasalahan</label>
                <textarea v-model="form.permasalahan" required></textarea>
                <p class="help-text">*(Silahkan isi permasalahan anda secara lengkap) contoh :
                  NIK saya tidak ditemukan didata pusat untuk
                  keperluan pendaftaran CPNS
                </p>
              </div>
  
              <div class="input-container">
                <label>Kartu keluarga</label>
                 <div class="upload-box" @click="triggerFileInput('fileKartuKeluarga')">
                </div>
                 <input type="file" ref="fileKartuKeluarga" class="hidden-file-input" @change="handleFileUpload($event, 'fileKartuKeluarga')" />
                 <p v-if="uploadedFiles.fileKartuKeluarga" class="file-name">{{ uploadedFiles.fileKartuKeluarga.name }}</p>
                </div>

            </div>
  
            <!-- Checkbox Persetujuan -->
            <div class="terms-container">
              <input type="checkbox" v-model="form.persetujuan" />
              <label>Saya menyetujui syarat dan ketentuan di atas.</label>
            </div>
  
            <!-- Tombol Kirim -->
            <div class="button-container">
              <button type="submit" class="btn-submit" >KIRIM</button>
            </div>

            <!-- MODAL VALIDASI -->
        <div :style="{ display: showModal ? 'flex' : 'none' }" class="modal-overlay">
            <div class="modal">
                <h3 class="modal-title">TERIMAKASIH TELAH MENGISI FORMULIR</h3>
                <br>
                <br>
                <p>Proses Pembuatan/Perubahan Data dalam Formulir Konsolidasi Database akan kami proses dengan kurun waktu maksimal 3 hari.</p>
                <p>Silakan cek email yang telah diisi untuk menerima informasi lebih lanjut.</p>
                <p>Untuk proses pengaduan, silakan hubungi: <strong>0813-1975-0033</strong></p>
                <br>
                <button @click="closeModal" class="btn-modal" >Kembali ke Menu Layanan Online</button>
            </div>
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
    name: "LayananKonsolidasiDuaView",
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
        showModal: false, // Menyembunyikan modal di awal
      };
    },
    mounted() {
    this.showModal = true; // Modal langsung muncul setelah halaman dimuat
  },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      closeModal() {
        this.$router.push('/layanan-online');
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
.input-container select {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  width: 100%;
}
  
  /* Teks Bantuan */
  .help-text {
    font-size: 12px;
    color: gray;
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

  /* Modal Overlay */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Pastikan di atas elemen lain */
}

/* Modal Box */
.modal {
    background: #d2e3f3;
    padding: 4%;
    border-radius: 8px;
    width: 50%;
    max-width: 600px; /* Batas maksimum agar tidak terlalu besar */
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Judul Modal */
.modal-title {
    font-size: 2rem; /* Ukuran lebih proporsional */
    font-weight: bold;
    margin-bottom: 15px;
}

/* Paragraf dalam Modal */
.modal p {
    font-size: 1.2rem; /* Tidak terlalu besar */
    margin-bottom: 10px;
    line-height: 1.5;
}

/* Tombol Modal */
.btn-modal {
    background-color: #65A5CA;
    color: white;
    padding: 12px 18px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 15px;
}
  </style>
  