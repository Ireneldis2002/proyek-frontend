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

                    <button type="submit" class="btn-submit">Simpan</button>
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
        }
    }
};
</script>

<style scoped>
.ruang-buku-tamu {
    max-width: 1200px;
    margin: 0 auto;
    font-family: 'Open Sans', sans-serif;
}

header h1 {
    font-size: 28px;
    color: #65A5CA;
    text-align: center;
    margin-bottom: 20px;
}

/* Tombol Kembali */
.btn-back {
    color: white;
    background-color: #8bbbd7;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    margin-bottom: 10px;
}

/* Kontainer Utama */
.content-container {
    display: flex;
    gap: 20px;
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

/* Tombol Simpan */
.btn-submit {
    width: 100%;
    padding: 10px;
    background-color: #65A5CA;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
}

/* Sidebar */
.sidebar {
    flex: 1;
    background-color: #f8f9fa;
    padding: 20px;
}

.image-container img {
    width: 100%;
    border-radius: 10px;
}
</style>
