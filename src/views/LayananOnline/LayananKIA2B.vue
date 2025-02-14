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
            <h3 class="section-title">• Data Berkas Persyaratan</h3>
            <div class="form-grid">
                
                <div class="input-container">
                <label>Akta Kelahiran</label>
                 <div class="upload-box" @click="triggerFileInput('fileAktaKelahiran')">
                </div>
                 <input type="file" ref="fileAktaKelahiran" class="hidden-file-input" @change="handleFileUpload($event, 'fileAktaKelahiran')" />
                 <p v-if="uploadedFiles.fileAktaKelahiran" class="file-name">{{ uploadedFiles.fileAktaKelahiran.name }}</p>
                </div>

                <div class="input-container">
                <label>KTP El-Ayah Kandung</label>
                 <div class="upload-box" @click="triggerFileInput('fileKTPAyah')">
                </div>
                 <input type="file" ref="fileKTPAyah" class="hidden-file-input" @change="handleFileUpload($event, 'fileKTPAyah')" />
                 <p v-if="uploadedFiles.fileKTPAyah" class="file-name">{{ uploadedFiles.fileKTPAyah.name }}</p>
                </div>

                <div class="input-container">
                <label>Kartu Keluarga</label>
                 <div class="upload-box" @click="triggerFileInput('fileKartuKeluarga')">
                </div>
                 <input type="file" ref="fileKartuKeluarga" class="hidden-file-input" @change="handleFileUpload($event, 'fileKartuKeluarga')" />
                 <p v-if="uploadedFiles.fileKartuKeluarga" class="file-name">{{ uploadedFiles.fileKartuKeluarga.name }}</p>
                </div>

                <div class="input-container">
                <label>KTP El-Ibu Kandung</label>
                 <div class="upload-box" @click="triggerFileInput('fileKTPIbu')">
                </div>
                 <input type="file" ref="fileKTPIbu" class="hidden-file-input" @change="handleFileUpload($event, 'fileKTPIbu')" />
                 <p v-if="uploadedFiles.fileKTPIbu" class="file-name">{{ uploadedFiles.fileKTPIbu.name }}</p>
                </div>

                <div class="input-container">
                <label>Pas Photo Ukuran 3 X 4</label>
                 <div class="upload-box" @click="triggerFileInput('filePhoto')">
                </div>
                 <input type="file" ref="filePhoto" class="hidden-file-input" @change="handleFileUpload($event, 'filePhoto')" />
                 <p v-if="uploadedFiles.filePhoto" class="file-name">{{ uploadedFiles.filePhoto.name }}</p>
                </div>

                <div class="info-box full-width">
                <p>
                    Sebelum anda menyetujui mohon perhatiannya : Kami akan meng-verifikasi dan meng-validasi formulir elektronik yang anda isi beserta 
                    berkas persyaratan yang anda upload jika ternyata ditemukan tidak lengkap atau ada perbedaan nama, maka kami akan menghubungi 
                    via nomor Tlp WhastApp yang anda daftar. Untuk pengambilan dokumen Akta Kelahiran yang sudah jadi pada kantor Dukcapil bisa 
                    membawa serta berkas persyaratan yang asli. Jika kami merasa formulir elektronik yang anda kirim dan berberkas persyaratan 
                    yang anda kirim ternyata lengkap maka kami akan mengirim softcopy file Akta Kelahiran ke email atau nomor WhatsApp yang terdaftar 
                    (silakan anda print sendiri menggunakan kertas putih A4 / 80 gram) dokumen softcopy itu asli karena sudah dilengkapi Barcode. 
                    Untuk mengecek keaslian anda bisa scand menggunakan aplikasi android QR Code atau Scand me silakan anda download secara gratis 
                    di Play Store.
                </p>
                </div>

                
                <div class="info-box full-width">
                <p>
                    Permohonan ini saya ajukan dengan sebenar-benarnya dan apabila dikemudian hari ditemukan pemalsuan data maka SAYA BERSEDIA DIPROSES SECARA HUKUM 
                    sesuai dengan peraturan perundang-undangan yang berlaku, dan dokumen yang diterbitkan menjadi tidak sah.
                </p>
                   <!-- Checkbox Persetujuan -->
            <div class="terms-container">
              <input type="checkbox" v-model="form.persetujuan" />
              <label>Saya menyetujui syarat dan ketentuan di atas.</label>
            </div>
                </div>


             

   

                 <!-- Tombol Kirim -->
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanKirim">KIRIM</button>
            </div>



           
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
    name: "LayananKIADuaBView",
    data() {
      return {
        form: {
          persetujuan: false,
        },
        uploadedFiles: {
            fileAktaKelahiran: null,
            fileKTPAyah: null,
            fileKartuKeluarga: null,
            fileKTPIbu: null,
            filePhoto: null,

    },
      };
    },
    methods: {
        triggerFileInput(refName) {
    this.$refs[refName].click();
  },
  handleFileUpload(event, fileKey) {
    this.uploadedFiles[fileKey] = event.target.files[0];
  },
      goBack() {
        this.$router.go(-1);
      },
      keHalamanKirim() {
      this.$router.push('/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun-kirim');
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

.full-width {
    grid-column: span 2;
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
