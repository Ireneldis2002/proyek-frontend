<template>
    <div class="ruang-buku-tamu">
        <button @click="goBack" class="btn-back">⬅</button>

        <header>
            <h1>Isi Buku Tamu</h1>
        </header>

        <div class="content-container">
            <div class="form-container">
                <form>
                    <div class="form-group">
                        <label for="tanggal">Tanggal Kunjungan</label>
                        <div class="input-group">
                            <input type="date" id="tanggal" v-model="form.tanggal" required />
                            <label for="tanggal" class="icon-calendar">📅</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Alamat Email Pengunjung</label>
                        <input type="email" id="email" v-model="form.email" placeholder="Alamat Email Pengunjung" required />
                    </div>

                    <div class="form-group">
                        <label for="nama">Nama Pengunjung</label>
                        <input type="text" id="nama" v-model="form.nama" placeholder="Nama Pengunjung" required />
                    </div>

                    <div class="form-group">
                        <label for="pesan">Keperluan/Kritik/Saran/Pesan/Kesan</label>
                        <textarea id="pesan" v-model="form.pesan" placeholder="Keperluan/Kritik/Saran/Pesan/Kesan" required></textarea>
                    </div>

                    <div class="button-container">
                        <button type="submit" class="btn-submit" @click="keHalamanBukuTamu">Simpan</button>
                    </div>
                    
                </form>
            </div>

            <aside class="sidebar">
                <div class="image-container">
                    <img src="@/assets/SidebarStandar.png" alt="Sidebar Informasi" />
                </div>
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: "IsiBukuView",
    data() {
        return {
            form: {
                tanggal: '',
                email: '',
                nama: '',
                pesan: ''
            }
        };
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        keHalamanBukuTamu() {
            this.$router.push('/ruang-publik/buku-tamu');
        }

    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

.ruang-buku-tamu {
    max-width: 100%;
    padding: 20px 50px;
}

header h1 {
    font-size: 32px;
  text-align: center;
  color: #65A5CA;
  margin-bottom: 30px;
  margin-top: 50px;
  margin-right: 250px;
}

.btn-back {

color: white;
background-color: #8bbbd7;
padding: 10px 20px;
border-color: white;
border-radius: 5px;
cursor: pointer;
font-size: 18px;
margin-bottom: 10px; /* Jarak antara tombol dan judul */
}

/* Kontainer Utama */
.content-container {
    display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

/* Form Buku Tamu */
.form-container {
    flex: 2;
    background: white;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.input-group {
    position: relative;
    display: flex;
    align-items: center;
}

input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

/* Hapus ikon kalender bawaan browser */
input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
}

/* Icon kalender manual */
.icon-calendar {
    position: absolute;
    right: 10px;
    cursor: pointer;
    font-size: 18px;
}

/* Input dan Textarea */
input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    height: 100px;
    resize: none;
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

.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;

}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  
}
</style>
