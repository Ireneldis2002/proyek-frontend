<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>

      <div class="content-container">
        <!-- Formulir Pendaftaran -->
        <div class="form-container">
          <h2>FORMULIR PENDAFTARAN</h2>
          <br>
          <form>
            <h3 class="section-title">• Data Pendukung Lainnya</h3>
            <div class="form-grid">
                
                <div class="input-container">
                <label>Berkas Data Pendukung</label>
                 <div class="upload-box" @click="triggerFileInput('fileDataPendukung')">
                </div>
                 <input type="file" ref="fileDataPendukung" class="hidden-file-input" @change="handleFileUpload($event, 'fileDataPendukung')" />
                 <p v-if="uploadedFiles.fileDataPendukung" class="file-name">{{ uploadedFiles.fileDataPendukung.name }}</p>
                 <p class="help-text">*Catatan : Isi Jika terdapat perbedaan data diri yang dimohonkan, contoh yang bisa dijadikan pendukung antara lain : IJazah, Buku/Akta Nikah, Raport, dsb. JIka tidak ada abaikan (Anda bisa Upload lebih dari satu dokumen)</p>
                </div>

                
                <div class="input-container">
                
                </div>

                <div class="info-box">
                <p>
                Sebelum anda menyetujui, mohon perhatiannya: Kami akan meng-verifikasi dan meng-validasi formulir elektronik yang anda isi beserta berkas persyaratan yang anda upload. Jika ternyata ditemukan tidak lengkap atau ada perbedaan nama, maka kami akan menghubungi via nomor WhatsApp yang anda daftar. 
                 Untuk pengambilan dokumen Akta Kelahiran yang sudah jadi pada kantor Dukcapil, silakan membawa serta berkas persyaratan yang asli. Jika kami merasa formulir elektronik yang anda kirim dan berkas persyaratan yang anda kirim ternyata lengkap maka kami akan mengirim softcopy file Akta Kelahiran ke email atau nomor WhatsApp yang terdaftar. 
                Silakan anda print sendiri menggunakan kertas putih A4 / 80 gram dokumen softcopy itu, karena sudah dilengkapi Barcode. Untuk mengecek keaslian data bisa scan menggunakan aplikasi android QR Code atau ScanMe yang bisa diunduh secara gratis di Play Store.
                </p>
                </div>

                <div class="input-container">
                
            </div>



                <!-- Checkbox Persetujuan -->
            <div class="terms-container">
              <input type="checkbox" v-model="form.persetujuan" />
              <label>Saya menyetujui syarat dan ketentuan di atas.</label>
            </div>

            <div class="input-container">
                
            </div>

                 <!-- Tombol Kirim -->
            <div class="button-container">
              <button type="submit" class="btn-submit">KIRIM</button>
            </div>

    
            <!-- MODAL VALIDASI -->
        <div :style="{ display: showModal ? 'flex' : 'none' }" class="modal-overlay">
            <div class="modal">
                <h3 class="modal-title">TERIMAKASIH TELAH MENGISI FORMULIR</h3>
                <br>
                <br>
                <p>Proses Pembuatan/Perubahan Data dalam kartu keluarga akan kami proses dengan kurun waktu maksimal 3 hari.</p>
                <p>Silakan cek email yang telah diisi untuk menerima informasi lebih lanjut.</p>
                <p>Untuk proses pengaduan, silakan hubungi: <strong>0813-1975-0033</strong></p>
                <br>
                <button @click="closeModal" class="btn-modal" >Kembali ke Menu Layanan Online</button>
            </div>
        </div>
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
    name: "LayananAktaEnamView",
    data() {
      return {
        form: {
          persetujuan: false,
        },
        uploadedFiles: {
            fileDataPendukung: null,
    },
    showModal: false, // Menyembunyikan modal di awal
      };
    },
    mounted() {
    this.showModal = true; // Modal langsung muncul setelah halaman dimuat
  },
  methods: {
    closeModal() {
        this.$router.push('/layanan-online');
    },
}
    


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

/* Kontainer Formulir */
.form-container {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 10px; /* Lebih melengkung agar mirip */
  border: 2px solid #999; /* Warna border lebih lembut */
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1); /* Efek bayangan */
  position: relative;
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
  grid-template-columns: 1fr 0fr;
  gap: 30px;
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

/* Kotak Informasi */
.info-box {
  background-color: #fff;
  border: 2px solid #ccc; /* Border lebih tegas */
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
}

/* Checkbox Persetujuan */
.terms-container {
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 14px;
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
