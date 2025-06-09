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


        <div :style="{ display: showModal ? 'flex' : 'none' }" class="modal-overlay">
            <div class="modal">
                <h3 class="modal-title">TERIMAKASIH TELAH MENGISI FORMULIR</h3>
                <br>
                <br>
                <p>Proses Pembuatan/Perubahan Data dalam Akta Kelahiran akan kami proses dengan kurun waktu maksimal 3 hari.</p>
                <p>Silakan cek email yang telah diisi untuk menerima informasi lebih lanjut.</p>
                <p>Untuk proses pengaduan, silakan hubungi: <strong>0813-1975-0033</strong></p>
                <br>
                <button @click="closeModal" class="btn-modal" >Kembali ke Menu Layanan Online</button>
            </div>
        </div>
            </div>
          </form>
        </div>

        <aside class="sidebar">
        <div class="persyaratan-box">
          <h2>PERSYARATAN <br /><span>(Pencatatan Kelahiran)</span></h2>
          <p class="subheading">Pencatatan Kelahiran WNI :</p>
          <ol>
            <li>Mengisi Formulir Pelaporan Kelahiran (F2-2.05)</li>
            <li>
              Foto Copy Surat Keterangan Kelahiran dari Rumah
              Sakit/Puskesmas/Bidan Penolong Kelahiran
            </li>
            <li>Foto copy Akta Perkawinan/Buku Nikah Orang Tua</li>
            <li>Foto Copy Kartu Keluarga dan KTP-El Orang Tua</li>
            <li>
              Jika tidak memiliki persyaratan pada point 2, wajib mengisi
              Formulir SPTJM (F-2.03) Kebenaran data Kelahiran yaitu pernyataan
              yang dibuat oleh orang tua Kandung/Wali/Pemohon dengan tanggung
              jawab penuh atas kebenaran data kelahiran seseorang dengan
              diketahui oleh dua orang saksi
            </li>
            <li>
              Bagi salah satu / kedua pasangan suami istri meninggal, maka wajib
              mengisi Formulir F2-2.04 (SPTJM) Surat Keterangan Tanggung Jawab
              Mutlak Kebenaran Sebagai Pasangan Suami Istri dengan melampirkan
              surat nikah.
            </li>
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
    name: "LayananAktaEnamView",
    data() {
      return {
        form: {
          persetujuan: false,
        },
        uploadedFiles: {
            fileDataPendukung: null,
    },
    showModal: false, 
      };
    },
    mounted() {
    this.showModal = true; 
  },
  methods: {
    closeModal() {
        this.$router.push('/layanan-online');
    },
}
    


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
  gap: 30px;
  margin: 20px;
}

.form-container {
  flex: 1;
  background: white;
  padding: 30px;
  border-radius: 10px; 
  border: 2px solid #999; 
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.form-container h2 {
  text-align: center;
  font-size: 22px;
  font-weight: bold;
}

.section-title {
  color: #0073b7;
  font-size: 16px;
  margin-bottom: 15px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 0fr;
  gap: 30px;
  margin-bottom: 20px;
}

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

.full-width {
  grid-column: span 2;
}

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.info-box {
  background-color: #fff;
  border: 2px solid #ccc; 
  padding: 15px;
  border-radius: 5px;
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  text-align: justify;
}

.terms-container {
  border: 2px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 14px;
}

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
    z-index: 1000; 
}

.modal {
    background: #d2e3f3;
    padding: 4%;
    border-radius: 8px;
    width: 50%;
    max-width: 600px; 
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.modal-title {
    font-size: 2rem; 
    font-weight: bold;
    margin-bottom: 15px;
}

.modal p {
    font-size: 1.2rem; 
    margin-bottom: 10px;
    line-height: 1.5;
}

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
