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
                <label>Surat Permandian/Surat Kelahiran dari Dokter/Bidan/Rumah Sakit/Puseksmas</label>
                 <div class="upload-box" @click="triggerFileInput('fileSuratKelahiran')">
                </div>
                 <input type="file" ref="fileSuratKelahiran" class="hidden-file-input" @change="handleFileUpload($event, 'fileSuratKelahiran')" />
                 <p v-if="uploadedFiles.fileSuratKelahiran" class="file-name">{{ uploadedFiles.fileSuratKelahiran.name }}</p>
                 <p class="help-text">*Catatan : Jika tidak ada silahkan upload SPTJM kebenaran kelahiran</p>
                </div>

                <div class="input-container">
                <label>Kartu Keluarga Orang Tua Kandung</label>
                 <div class="upload-box" @click="triggerFileInput('fileKartuKeluarga')">
                </div>
                 <input type="file" ref="fileKartuKeluarga" class="hidden-file-input" @change="handleFileUpload($event, 'fileKartuKeluarga')" />
                 <p v-if="uploadedFiles.fileKartuKeluarga" class="file-name">{{ uploadedFiles.fileKartuKeluarga.name }}</p>
                </div>

                <div class="input-container">
                <label>SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (SPTJM) KEBENARAN DATA KELAHIRAN
                    <br>
                    <i>(Silahkan download format SPTJM kebenaran kelahiran di link ini https://bit.ly/3vofqSc )</i>
                </label>
                 <div class="upload-box" @click="triggerFileInput('fileSPTJM')">
                </div>
                 <input type="file" ref="fileSPTJM" class="hidden-file-input" @change="handleFileUpload($event, 'fileSPTJM')" />
                 <p v-if="uploadedFiles.fileSPTJM" class="file-name">{{ uploadedFiles.fileSPTJM.name }}</p>
                 <p class="help-text">*Catatan : Jika tidak memiliki surat keterangan kelahiran dari Dokter/Bidan/Rumah Sakit/Puskesmas maka WAJIB mengisi SPTJM Kebenaran Data Kelahiran</p>
                </div>

                <div class="input-container">
                <label>KTP Ayah Kandung</label>
                 <div class="upload-box" @click="triggerFileInput('fileKTPAyah')">
                </div>
                 <input type="file" ref="fileKTPAyah" class="hidden-file-input" @change="handleFileUpload($event, 'fileKTPAyah')" />
                 <p v-if="uploadedFiles.fileKTPAyah" class="file-name">{{ uploadedFiles.fileKTPAyah.name }}</p>
                 <p class="help-text">*Catatan : Jika belum memiliki KTP-el tidak perlu di upload</p>
                </div>

                <div class="input-container">
                <label>SURAT PERNYATAAN TANGGUNG JAWAB MUTLAK (SPTJM) PASANGAN SUAMI ISTRI
                    <br>
                    <i>(Silahkan download format SPTJM kebenaran pernikahan di link ini https://bit.ly/2RH4y36 )</i>
                </label>
                 <div class="upload-box" @click="triggerFileInput('fileAktaNikah')">
                </div>
                 <input type="file" ref="fileAktaNikah" class="hidden-file-input" @change="handleFileUpload($event, 'fileAktaNikah')" />
                 <p v-if="uploadedFiles.fileAktaNikah" class="file-name">{{ uploadedFiles.fileAktaNikah.name }}</p>
                 <p class="help-text">*Catatan : Jika tidak memiliki buku nikah/akta nikah, WAJIB mengisi SPTJM Kebenaran sebagai Pasangan Suami Istri yang telah memiliki Kartu Keluarga (KK)</p>
                </div>

                <div class="input-container">
                <label>KTP Ibu  Kandung</label>
                 <div class="upload-box" @click="triggerFileInput('fileKTPIbu')">
                </div>
                 <input type="file" ref="fileKTPIbu" class="hidden-file-input" @change="handleFileUpload($event, 'fileKTPIbu')" />
                 <p v-if="uploadedFiles.fileKTPIbu" class="file-name">{{ uploadedFiles.fileKTPIbu.name }}</p>
                 <p class="help-text">*Catatan : Jika belum memiliki KTP-el tidak perlu di upload</p>
                </div>

                <div class="input-container">
                <label>Buku Nikah Orang Tua/Akta Perkawinan</label>
                 <div class="upload-box" @click="triggerFileInput('fileBukuNikah')">
                </div>
                 <input type="file" ref="fileBukuNikah" class="hidden-file-input" @change="handleFileUpload($event, 'fileBukuNikah')" />
                 <p v-if="uploadedFiles.fileBukuNikah" class="file-name">{{ uploadedFiles.fileBukuNikah.name }}</p>
                 <p class="help-text">*Catatan : Jika tidak ada silahkan upload SPTJM kebenaran kelahiran atau surat keterangan belum menikah dari Desa/Kelurahan</p>
                </div>

                <div class="input-container">
                <label>Surat Keterangan Belum Menikah</label>
                 <div class="upload-box" @click="triggerFileInput('fileBelumNikah')">
                </div>
                 <input type="file" ref="fileBelumNikah" class="hidden-file-input" @change="handleFileUpload($event, 'fileBelumNikah')" />
                 <p v-if="uploadedFiles.fileBelumNikah" class="file-name">{{ uploadedFiles.fileBelumNikah.name }}</p>
                 <p class="help-text">*Catatan : Dalam hal persyaratan berupa Akta Nikah/Kutipan Akta Perkawinan belum dimiliki/tidak terpenuhi oleh pasangan, pemohon WAJIB melampirkan surat keterangan belum menikah dari Desa/Kelurahan</p>
                </div>

                <div class="input-container">
                
                </div>
              
              
              
  
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanAktaLima">BERIKUTNYA</button>
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
    name: "LayananAktaEmpatView",
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
      keHalamanAktaLima() {
      this.$router.push('/layanan-online/layanan-akta-kelahiran-5');
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
