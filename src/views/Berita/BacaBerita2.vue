<template>
  <div class="ruang-download">
    <!-- Main Content -->
    <div class="content-container">
      <button @click="goBack" class="btn-back">⬅</button>

      <!-- Berita Section -->
      <div class="berita">
        <div class="berita-header">
          <br />
          <br />
          <h2>PELAYANAN JEMPUT BOLA DUKCAPIL ENDE DIAPRESIASI MASYARAKAT</h2>
          <br />
          <br />
          <div class="info-header">
            <p>
              <b><span class="icon">📅</span> 10/10/2020</b>
            </p>
            <p>
              <b><span class="icon">👤</span> Penulis Berita :</b>
            </p>
            <p>
              <b><span class="icon">👤</span> Editor Berita :</b>
            </p>
            <p>
              <b><span class="icon">👁</span> 167</b>
            </p>
          </div>
          <br />
          <br />
        </div>
        <div class="berita-image">
          <img src="@/assets/Berita2.jpg" alt="Gambar Berita" />
        </div>
        <br />
        <br />
        <div class="berita-content">
          <p>
            Ende, Florespos.net—Dinas Kependudukan dan Pencatatan Sipil
            (Disdukcapil) Kabupaten Ende sejak pertengahan tahun ini sudah
            merombak sistem pelayanan dokumen kependudukan. Disdukcapil Ende
            turun ke desa melayani perekaman E- KTP, kartu keluarga dan dokumen
            kependudukan lainnya serta Kartu Identitas Anak ( KIA). Model
            pelayanan ini mendapatkan apresiasi dari warga karena warga dari
            desa tidak lagi mendatangi kantor Disdukcapil Ende.
          </p>
          <p>
            Yunita Avinta Lori dari Desa Kelisamba, Kecamatan Ndori,
            mengapresiai pelayanan dari Disdukcapil Ende saat pelayanan dokumen
            kependudukan warga di desa itu, Sabtu (10/10/2020).
          </p>
          <p>
            Yunita mengatakan, pada hakekatnya warga di desa merasa terbantu
            dengan model pelayanan seperti itu karena warga tidak ke kota dan
            mengantre di kantor Disdukcapil Ende. Yunita mengharapkan model
            pelayanan seperti ini tetap dipertahankan untuk pendekatan
            pelayanan. Selain melayani dokumen kependudukan umum, Ia juga
            berharap Disdukcapil juga menggunakan kesempatan itu untuk
            memberikan pelayanan Kartu Identitas Anak (KIA).
          </p>
          <p>.........................................................</p>
          <p>
            Sementara itu sekretaris Disdukcapil Kabupaten Ende, Syarul Yahya
            saat pelayanan di Desa Kelisamba, Kecamatan Ndori, Sabtu
            (10/10/2020) tim Disdukcapil Ende melayani 52 warga yang mengurus
            perekaman E- KTP di desa itu. Pihaknya juga membantu warga yang
            memiliki data ganda dan masih memiliki KTP luar Kabupaten Ende.
            Selain itu saat pelayanan di desa Kelisamba, tim Disdukcapil Ende
            juga melakukan sosialiasi tentang Kartu Identitas Anak ( KIA). *
          </p>
        </div>
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
  name: "BacaIsiBeritaDuaView",
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-download {
  max-width: 100%;
  padding: 20px 50px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
}

.berita {
  flex: 3;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.berita-header {
  margin-bottom: 20px;
}

.berita-header h2 {
  font-size: 24px;
  color: #65a5ca;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 20px;
}

.info-header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: gray;
}

.berita-image img {
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  margin: 20px auto;
  display: block;
}

.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.berita-content p {
  font-size: 20px;
  line-height: 1.6;
  margin-bottom: 10px;
  text-align: justify;
}

.icon {
  width: 80px;
  height: 80px;
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

.sidebar .logo img {
  width: 150px;
  margin-bottom: 30px;
}

.sidebar .card1 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 150px;
}

.sidebar .card2 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 280px;
}

.sidebar .card3 {
  background: white;
  padding: 15px;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 420px;
}

.sidebar .card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

.sidebar .card1 h3,
.sidebar .card2 h3,
.sidebar .card3 h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
  text-align: left;
}

.sidebar .card p,
.sidebar .card ol {
  font-size: 12px;
  text-align: left;
  color: #333;
  margin: 0;
  padding: 0;
}

.sidebar .card1 p,
.sidebar .card1 li,
.sidebar .card2 p,
.sidebar .card2 li,
.sidebar .card3 p,
.sidebar .card3 li {
  text-align: left;
}

.sidebar .card ol {
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
