<template>
    <div class="header-container">
    <h1 class="download-title">DOWNLOAD</h1>

    <div class="search-container">
        <input type="text" placeholder="Cari..." class="search-input" />
        <button class="search-button">🔍</button>
    </div>

    
</div>


  
    <div class="profil-visi-misi">
      <!-- Ruang Publik Section -->
      <section class="menu-grid">
        <div class="menu-column">
          <div class="menu-item">
            <table class="box-bordered-table">
              <tbody>
                <tr>
                  <td><i class="fas fa-folder"></i></td>
                  <td><router-link :to="{ name: 'DownloadRegulasi' }">Regulasi</router-link></td>
                </tr>
                <tr>
                  <td><i class="fas fa-folder"></i></td>
                  <td><router-link :to="{ name: 'DownloadSPTJM' }">SPTJM</router-link></td>
                </tr>
                <tr>
                  <td><i class="fas fa-folder"></i></td>
                  <td><router-link :to="{ name: 'DownloadFormulir' }">Formulir Persyaratan Pelayanan Adminduk</router-link></td>
                </tr>
                <tr>
                  <td><i class="fas fa-folder"></i></td>
                  <td><router-link :to="{ name: 'DownloadPengajuan' }">Pengajuan Pelayanan Adminduk</router-link></td>
                </tr>
                <!-- Tambahkan baris lainnya sesuai kebutuhan -->
              </tbody>
            </table>
          </div>
  
          </div>
      </section>
  
      <!-- Profil Pimpinan Section -->
      <div>
        <section class="profil-pimpinan">
          <div class="pimpinan-content">
            <img src="@/assets/Disdukcapil.png" alt="Foto Pimpinan" class="pimpinan-photo" />
            <div class="sidebar-section">
              <div class="judul-sidebar">
                <p>MOTTO</p>
              </div>
              <div class="isi-sidebar">
                <p>"PELAYANAN RAMAH, MUDAH, CEPAT DAN AKUNTABEL"</p>
              </div>
            </div>
            <div class="sidebar-section">
              <div class="judul-sidebar">
                <p>KOMITMEN</p>
              </div>
              <div class="isi-sidebar">
                <ol>
                  <li>Berjanji dan sanggup untuk melaksanakan Pelayanan yang transparan sesuai dengan Standar Pelayanan yang ditetapkan</li>
                  <li>Berjanji akan memberikan Pelayanan sesuai dengan hak dan kewajiban serta melakukan perbaikan secara terus menerus</li>
                  <li>Siap menerima sanksi dari Pimpinan apabila pelayanan yang kami berikan tidak sesuai dengan Standar Pelayanan yang ada</li>
                </ol>
              </div>
            </div>
            <div class="sidebar-section">
              <div class="judul-sidebar">
                <p>MAKLUMAT PELAYANAN</p>
              </div>
              <div class="isi-sidebar">
                <ol>
                  <li>Berjanji dan memiliki kesanggupan untuk melaksanakan pelayanan publik sesuai dengan Standar Pelayanan Publik yang telah ditetapkan</li>
                  <li>Memberikan pelayanan publik sesuai dengan kewajiban dan akan melakukan perbaikan secara terus-menerus</li>
                  <li>Bersedia untuk menerima sanksi dan/atau memberikan kompensasi sesuai dengan ketentuan peraturan perundang-undangan apabila pelayanan publik yang diberikan tidak sesuai dengan standar yang ditetapkan</li>
                </ol>
              </div>
              <div class="sign">
                <p>KEPALA DINAS<br/>KEPENDUDUKAN DAN PENCATATAN SIPIL<br/>KABUPATEN ENDE</p>
                <p>(Lambertus Sigasare, ST.M.Eng)<br/>Pembina Tk. I<br/>197510232002121006</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'RuangDownloadView',
    data() {
      return {
        
      };
    },
  };
  </script>
  
  <style scoped>
  .profil-visi-misi {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
    padding: 10px;
  }
  
  .profil-pimpinan {
    background-color: #727e89;
    text-align: center;
    border: 2px solid #000;
    width: 300px;
  }
  
  .pimpinan-content {
    align-items: center;
  }
  
  .pimpinan-photo {
    width: 150px;
    height: auto;
    margin: 10px;
  }
  
  .judul-sidebar {
    font-size: 20px;
    font-weight: bold;
    color: #000;
    text-align: left;
    margin-bottom: 20px;
  }
  
  .isi-sidebar {
    font-size: 16px;
    color: #0b0b0b;
    text-align: left;
    margin-top: 20px;
  }
  
  .sign {
    font-size: 16px;
    color: #0b0b0b;
    text-align: center;
    margin-top: 20px;
  }
  
  .menu-grid {
    display: flex;
    flex-direction: column;
    margin: 30px 0 50px 0;
  }
  
  .menu-column {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .menu-item {
    width: 300%;
    height: 100%;
    overflow: hidden;
    border: 1px solid #000;
    padding: 5px;
    background-color: #fff;
    text-align: left;
  }
  
  
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  /* Tambahkan garis luar di sisi kiri, kanan, atas, dan bawah tabel */
  .box-bordered-table {
    border: 1px solid black;
  }
  
  .box-bordered-table th, .box-bordered-table td {
    border-left: none;
    border-right: none;
  }
  
  td i {
    font-size: 2.0em; /* Ukuran ikon */
  }
  
  /* Styling untuk sidebar section */
  .sidebar-section {
    border: 1px solid white;
    margin: 20px;
    background-color: white;
  }

  /* Styling untuk button pencarian */
  .header-container {
    display: flex;
    justify-content: space-between; /* Menempatkan elemen di ujung kiri dan kanan */
    align-items: center; /* Vertikal tengah */
    gap: 10px;
}

  .download-title {
    display: inline-block;
    
    margin-top: 10px;
}

  .search-container {
  display: flex;
  align-items: center;
  position: relative; /* Agar tombol dapat diposisikan relatif terhadap kontainer */
  width: 200px; /* Lebar kontainer pencarian */
  margin-right: 375px;
  margin-top: 100px;
  
}

.search-input {
  padding: 10px 40px 10px 10px; /* Tambahkan padding di kanan untuk memberi ruang untuk tombol */
  border: 2px solid #27394a; /* Border input */
  border-radius: 10px; /* Sudut melengkung */
  margin-right: 5px; /* Menghapus margin agar tidak ada jarak antara input dan tombol */
  background-color: white; /* Sesuaikan dengan latar belakang header */
  color: black; /* Warna teks di dalam input */
  width: 100%; /* Input memenuhi lebar kontainer */
  box-sizing: border-box; /* Pastikan padding tidak mempengaruhi lebar total */
}

.search-input::placeholder {
  color: #b0c4de; /* Warna placeholder */
}

.search-button {
  position: absolute; /* Posisi tombol menjadi absolute */
  right: 10px; /* Jarak dari kanan kontainer */
  top: 50%; /* Pusatkan secara vertikal */
  transform: translateY(-50%); /* Menggeser tombol ke tengah secara vertikal */
  padding: 10px; /* Jarak dalam tombol */
  background-color: transparent; /* Mengatur latar belakang tombol menjadi transparan */
  color: #27394a; /* Warna ikon tombol (gunakan warna yang sesuai) */
  border: none; /* Tanpa border */
  cursor: pointer; /* Mengubah kursor saat hover */
  font-size: 16px; /* Ukuran font untuk ikon */
}

.search-button:hover {
  color: #ffcc00; /* Warna tombol saat hover */
}
  </style>
  