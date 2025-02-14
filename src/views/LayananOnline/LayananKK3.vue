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
                <label>Surat Permandian</label>
                 <div class="upload-box" @click="triggerFileInput('fileSuratPermandian')">
                </div>
                 <input type="file" ref="fileSuratPermandian" class="hidden-file-input" @change="handleFileUpload($event, 'fileSuratPermandian')" />
                 <p v-if="uploadedFiles.fileSuratPermandian" class="file-name">{{ uploadedFiles.fileSuratPermandian.name }}</p>
                 <p class="help-text">*Catatan : Silahkan anda Upload/Unggah Surat Permandian dari anggota keluarga baru. 
                    Nama tidak boleh di singkat (dengan jumlah karakter 25 Digit sudah termasuk huruf dan spasi)</p>
                </div>

                <div class="input-container">
                <label>Kartu Keluarga Orang Tua </label>
                 <div class="upload-box" @click="triggerFileInput('fileKartuKeluarga')">
                </div>
                 <input type="file" ref="fileKartuKeluarga" class="hidden-file-input" @change="handleFileUpload($event, 'fileKartuKeluarga')" />
                 <p v-if="uploadedFiles.fileKartuKeluarga" class="file-name">{{ uploadedFiles.fileKartuKeluarga.name }}</p>
                </div>

                <div class="input-container">
                <label>Ijazah </label>
                 <div class="upload-box" @click="triggerFileInput('fileIjazah')">
                </div>
                 <input type="file" ref="fileIjazah" class="hidden-file-input" @change="handleFileUpload($event, 'fileIjazah')" />
                 <p v-if="uploadedFiles.fileIjazah" class="file-name">{{ uploadedFiles.fileIjazah.name }}</p>
                </div>

                <div class="input-container">
                <label>Surat Nikah</label>
                 <div class="upload-box" @click="triggerFileInput('fileSuratNikah')">
                </div>
                 <input type="file" ref="fileSuratNikah" class="hidden-file-input" @change="handleFileUpload($event, 'fileSuratNikah')" />
                 <p v-if="uploadedFiles.fileSuratNikah" class="file-name">{{ uploadedFiles.fileSuratNikah.name }}</p>
                 <p class="help-text">*Catatan : Jika belum menikah tidak perlu diisi</p>
                </div>

                <div class="input-container">
                <label>Golongan Darah </label>
                 <div class="upload-box" @click="triggerFileInput('fileGoldar')">
                </div>
                 <input type="file" ref="fileGoldar" class="hidden-file-input" @change="handleFileUpload($event, 'fileGoldar')" />
                 <p v-if="uploadedFiles.fileGoldar" class="file-name">{{ uploadedFiles.fileGoldar.name }}</p>
                 <p class="help-text">*Catatan : (Silakan anda Upload/Unggah Kartu Golongan Darah bagi yang belum memiliki Golongan Darah dalam Kartu Keluarga ). 
                    Anda bisa Upload lebih dari satu dokumen</p>
                </div>

                <div class="input-container">
                <label>Surat Keterangan Belum Menikah</label>
                 <div class="upload-box" @click="triggerFileInput('fileBelumNikah')">
                </div>
                 <input type="file" ref="fileBelumNikah" class="hidden-file-input" @change="handleFileUpload($event, 'fileBelumNikah')" />
                 <p v-if="uploadedFiles.fileBelumNikah" class="file-name">{{ uploadedFiles.fileBelumNikah.name }}</p>
                 <p class="help-text">*Catatan : Jika sudah menikah tidak perlu diisi</p>
                </div>
            

               <!-- Baris 4: Tuliskan Permasalahan (Lebih besar) -->
               <div class="input-container full-width">
                <label><b>KETERANGAN</b>
                    <br>
                    Silakan tuliskan secara rinci permohonan yang akan anda ajukan, agar 
                    memudahkan petugas dalam memproses, tuliskan yang anda inginkan secara detail 
                    seperti "Saya ingin mengurus Kartu Keluarga Baru atau Saya ingin merubah data 
                    pada kartu Keluarga atau Saya ingin Pisah Kartu Keluarga"</label>
                <textarea v-model="form.permasalahan" required></textarea>
              </div>


                <div class="input-container">
                
                </div>
              
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanKKEmpat">BERIKUTNYA</button>
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
    name: "LayananKKTigaView",
    data() {
      return {
        uploadedFiles: {
      fileSuratKelahiran: null,
      fileKartuKeluarga : null,
      fileSPTJM : null,
      fileKTPAyah : null,
      fileAktaNikah: null,
      fileKTPIbu : null,
      fileBukuNikah : null,
      fileBelumNikah : null,
    },
    form :{
        permasalahan : ""

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
      keHalamanKKEmpat() {
      this.$router.push('/layanan-online/layanan-kartu-keluarga-4');
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
  font-size: 18px;
  margin-bottom: 15px;
}

/* Grid Form */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
