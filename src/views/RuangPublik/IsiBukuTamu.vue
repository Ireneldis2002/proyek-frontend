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
            <input
              type="email"
              id="email"
              v-model="form.email"
              placeholder="Alamat Email Pengunjung"
              required
            />
          </div>

          <div class="form-group">
            <label for="nama">Nama Pengunjung</label>
            <input
              type="text"
              id="nama"
              v-model="form.nama"
              placeholder="Nama Pengunjung"
              required
            />
          </div>

          <div class="form-group">
            <label for="pesan">Keperluan/Kritik/Saran/Pesan/Kesan</label>
            <textarea
              id="pesan"
              v-model="form.pesan"
              placeholder="Keperluan/Kritik/Saran/Pesan/Kesan"
              required
            ></textarea>
          </div>

          <div class="button-container">
            <button type="submit" class="btn-submit" @click="keHalamanBukuTamu">
              Simpan
            </button>
          </div>
        </form>
      </div>

      <aside class="sidebar">
        <div class="logo">
          <img src="@/assets/Disdukcapil.png" alt="Logo Disdukcapil" />
        </div>

        <div class="card1">
          <h3>MOTTO</h3>
          <p>“Pelayanan Ramah, Mudah, Cepat dan Akuntabel”</p>
        </div>

        <div class="card2">
          <h3>KOMITMEN</h3>
          <ol>
            <li>Berjanji dan sanggup untuk melaksanakan pelayanan yang</li>
            <li>Berjanji akan memberikan pelayanan</li>
            <li>Siap menerima sanksi dari Pimpinan</li>
          </ol>
        </div>

        <div class="card3">
          <h3>MAKLUMAT PELAYANAN</h3>
          <ol>
            <li>
              Berjanji dan memiliki kesanggupan untuk melaksanakan pelayanan
              publik
            </li>
            <li>
              Memberikan pelayanan publik sesuai dengan kewajiban dan akan
            </li>
            <li>
              Bersedia untuk menerima sanksi dan/atau memberikan kompensasi
              sesuai dengan ketentuan peraturan
            </li>
          </ol>
        </div>

        <div class="kepala-dinas">
          <p>
            KEPALA DINAS <br />KEPENDUDUKAN DAN PENCATATAN SIPIL <br />KABUPATEN
            ENDE
          </p>
          <p class="nama"><strong>Lambertus Sigasare, ST. M.Eng</strong></p>
          <p class="nip">Pembina Tk. I</p>
          <p class="nip">NIP. 197510232002121006</p>
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
        tanggal: "",
        email: "",
        nama: "",
        pesan: "",
      },
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    keHalamanBukuTamu() {
      this.$router.push("/ruang-publik/buku-tamu");
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-buku-tamu {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: center;
  color: #65a5ca;
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
  margin-bottom: 10px; 
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  font-size: 22px;
}

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
  font-size: 18px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

.icon-calendar {
  position: absolute;
  right: 10px;
  cursor: pointer;
  font-size: 18px;
}

input,
textarea {
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

.button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.btn-submit {
  padding: 10px 25px;
  background-color: #65a5ca;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #a0b6d6;
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

/* Sidebar */
.sidebar {
  width: 350px;
  background-color: #8bbbd7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Arial", sans-serif;
}

.logo img {
  width: 150px;
  margin-bottom: 30px;
}

.card1 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 150px;
}

.card2 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 280px;
}

.card3 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 420px;
}

.card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

.card1 h3,
.card2 h3,
.card3 h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px; 
  text-align: left;
}

.card p, .card ol {
  font-size: 8px;
  text-align: left;
  color: #333;
  margin: 0;
  padding: 0;
}

.card1 p, .card1 li,
.card2 p, .card2 li,
.card3 p, .card3 li {
  text-align: left;
}

.card ol {
  padding-left: 18px;
}

.kepala-dinas {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.kepala-dinas .nama {
  margin-top: 100px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}

.kepala-dinas .nip {
  font-weight: bold;
  color: #555;
  font-size: 16px;
}
</style>
