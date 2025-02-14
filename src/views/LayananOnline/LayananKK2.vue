<template>
    <div class="ruang-buku-tamu">
      <!-- Tombol Kembali -->
      <button @click="goBack" class="btn-back">⬅</button>

      <div class="content-container">
        <!-- Formulir Pendaftaran -->
        <div class="form-container">
          <h2>FORMULIR PENDAFTARAN</h2>
          <form>
            <h3 class="section-title">• Form Pendaftaran Baru/Perubahan Data/Pisah</h3>
            <div class="form-grid">
              <div class="input-container">
                <input type="text" placeholder="Nomor Kartu Keluarga" v-model="form.nokk" required />
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nama Kepala Keluarga" v-model="form.namakepala" required />
              </div>
              <div class="input-container">
                <input type="text" placeholder="Alamat" v-model="form.alamat" required />
                <small>
                    Catatan : Isi alamat lengkap Kepala Keluarga, lengkap dengan RT/RW, 
                    Desa/Kelurahan, Kecamatan, Kabupaten
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Jumlah Anggota Keluarga" v-model="form.jumlahanggota" required />
                <small>
                    Catatan : Isi jumlah anggota keluarga dengan angka
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Pekerjaan" v-model="form.pekerjaan" required />
                <small>
                    *Catatan : (Isi pekerjaan masing-masing anggota keluarga yang ada dalam kartu Keluarga,
                     jika pekerjaannya pada masing-masing anggota keluarga tidak berubah/sesuai yang 
                     tertera dalam Kartu Keluarga tidak perlu diisi atau diisi pekerjaan masih sama tidak 
                     ada perubahan)
                     <br> 
                    Contoh: 1. Nama: Revan Pekerjaan: Wiraswasta ; 2. Nama: Sherina Pekerjaan: ASN, dan seterusnya....
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Golongan Darah" v-model="form.goldar" required />
                <small>
                    *Catatan : (Isi Golongan Darah masing-masing anggota keluarga yang ada dalam 
                    kartu Keluarga, jika Golongan Darah sudah ada pada kartu Keluarga tidak perlu 
                    diisi) 
                    <br>
                    Contoh: 1. Nama: Revan Golongan Darah: A; 2. Nama: Sherina Golongan Darah: B, 
                    dan seterusnya.....
                </small>    
              </div>
              <div class="input-container">
                <input type="text" placeholder="Nomor Telepon" v-model="form.nohp" required />
                <small>
                    Catatan : Isi Nomor Tlp/Hp Kepala Keluarga untuk di integrasikan dengan SIAK
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Alamat Baru" v-model="form.alamat" required />
                <small>
                    Catatan : (Silahkan isi alamat baru jika ada Alamat Baru, jika tidak ada abaikan saja)
                </small>
              </div>
              <div class="input-container">
                <input type="text" placeholder="Email" v-model="form.email" required />
                <small>
                    Catatan : Isi Email Kepala Keluarga untuk di integrasikan dengan SIAK
                </small>
              </div>
              <div class="input-container">
                
              </div>
              <div class="input-container">
                
            </div>
            
            
            <!-- Kontainer untuk tombol agar posisinya ke kanan -->
            <div class="button-container">
              <button type="submit" class="btn-submit" @click="keHalamanKKTiga">BERIKUTNYA</button>
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
    name: "LayananKIADuaAView",
    data() {
      return {
        form: {
          nik: "",
          nama: "",
          jenisKelamin: "",
          tempatDilahirkan: "",
          kabupaten: "",
          tanggalLahir: "",
          waktuLahir: "",
          berat: "",
          panjang: "",
        },
      };
    },
    methods: {
      goBack() {
        this.$router.go(-1);
      },
      keHalamanKKTiga() {
      this.$router.push('/layanan-online/layanan-kartu-keluarga-3');
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
  gap: 40px;
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
