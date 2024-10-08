<template>
  <div class="home">
    <!-- Bagian Header -->
    <header class="header">
      <div class="logo-container">
        <router-link to="/">
          <img
            src="@/assets/LogoDukcapil.png"
            alt="Logo Disdukcapil Kabupaten Ende"
            class="logo"
          />
        </router-link>
        <div class="header-title">
          <h1 style="font-size: xx-large">
            Dinas Pendudukan dan Pencatatan Sipil Kabupaten Ende
          </h1>
        </div>
      </div>
      <!-- Bagian Pencarian -->
      <div class="search-container">
        <input type="text" placeholder="Cari..." class="search-input" />
        <button class="search-button">🔍</button>
        <!-- Tombol pencarian -->
      </div>
    </header>

    <!-- Bagian Navigasi -->
    <nav class="navbar">
      <ul>
        <li
  class="dropdown"
  @mouseenter="showDropdown('profil')"
  @mouseleave="hideDropdown('profil')"
>
  <router-link to="" class="dropdown-toggle">
    Profil
  </router-link>
  <ul class="dropdown-menu" v-if="dropdownVisible.profil">
    <div class="menu-gridd">
      <li>
        <router-link to="/profil/visi-misi" class="menu-griddd"><p style="margin: 5px 5px;">Visi dan Misi</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/profil-strategi" class="menu-griddd"><p style="margin: 5px 5px;">Strategi dan Kebijakan</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/penghargaan" class="menu-griddd"><p style="margin: 5px 5px;">Penghargaan</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/tujuan-sasaran" class="menu-griddd"><p style="margin: 5px 5px;">Tujuan dan Sasaran</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/ketenagaan" class="menu-griddd"><p style="margin: 5px 5px;">Ketenagaan</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/profil-lhkpn" class="menu-griddd"><p style="margin: 5px 5px;">LHKPN</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/struktur-organisasi" class="menu-griddd"><p style="margin: 5px 5px;">Struktur Organisasi</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/sarana-prasarana" class="menu-griddd"><p style="margin: 5px 5px;">Sarana dan Prasarana</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/profil-ikm" class="menu-griddd"><p style="margin: 5px 5px;">IKM</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/tupoksi" class="menu-griddd"><p style="margin: 5px 5px;">Tupoksi</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/maklumat-pelayanan" class="menu-griddd"><p style="margin: 5px 5px;">Maklumat Pelayanan</p></router-link
        >
      </li>
      <li>
        <router-link to="/profil/inovasi" class="menu-griddd"><p style="margin: 5px 5px;">Inovasi</p></router-link
        >
      </li>
    </div>

    
  </ul>
</li>

<!-- Standar Pelayanan Menu with Dropdown -->
<li
  class="dropdown"
  @mouseenter="showDropdown('layanan')"
  @mouseleave="hideDropdown('layanan')"
>
  <router-link to="" class="dropdown-toggle">
    Standar Pelayanan
  </router-link>
  <ul class="dropdown-menu" v-if="dropdownVisible.layanan">
    <div class="menu-gridd">
    <!-- <li>
      <router-link to="/standar-pelayanan/pencatatan" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan</p></router-link>
    </li> -->

    <li
  class="dropdown"
  @mouseenter="showDropdown('pencatatan')"
  @mouseleave="hideDropdown('pencatatan')"
>
  <router-link to="" class="dropdown-toggle menu-griddd">
    <p  style="margin: 5px 5px;">Pencatatan </p>
  </router-link>
  <ul class="dropdown-menu" style="margin-top: 3px;" v-if="dropdownVisible.pencatatan">
    <div class="menu-gridd">
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-kelahiran" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan <br/>Kelahiran</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-perkawinan" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan <br/>Perkawinan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-sah-anak" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan <br/>Pengesahan Anak</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-kematian" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan <br/>Kematian</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-perceraian" class="menu-griddd"><p style="margin: 5px 5px;">Pencatatan <br/>Perceraian</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-ubah-nama" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan Perubahan Nama <br/> (Anak Angkat)</p></router-link>
    </li>
    
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-pembetulan" class="menu-griddd"><p style="margin: 5px 5px;">Pembetulan <br/>Akta Catatan Sipil</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pendataan-penduduk-rentan" class="menu-griddd"><p style="margin: 5px 5px;">Pendataan Penduduk <br/>Rentan Administrasi Kependudukan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-perubahan-status" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan Perubahan <br/>Status Kewarganegaraan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-biodata" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan <br/>Biodata Kependudukan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-peristiwa" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan Peristiwa <br/>Penting Lainnya</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-angkat-anak" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan <br/>Pengangkatan Anak</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pencatatan/pencatatan-pengakuan-anak" class="menu-griddd"><p style="margin: 5px 5px;"> Pencatatan <br/>Pengakuan Anak</p></router-link>
    </li>
    </div>

  </ul>
</li>

    <!---- <li>
      <router-link to="/standar-pelayanan/penerbitan" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan</p></router-link>
    
    </li> -->

    <li
  class="dropdown"
  @mouseenter="showDropdown('penerbitan')"
  @mouseleave="hideDropdown('penerbitan')"
>
  <router-link to="" class="dropdown-toggle menu-griddd">
    <p  style="margin: 5px 5px;">Penerbitan </p>
  </router-link>
  <ul class="dropdown-menu" style="margin-top: 3px;" v-if="dropdownVisible.penerbitan">
    <div class="menu-gridd">
    <li>
      <router-link to="/standar-pelayanan/penerbitan/penerbitan-KTP" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan <br/>KTP Elektronik</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/penerbitan/penerbitan-surat-keterangan" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan Surat <br/>Keterangan Kependudukan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/penerbitan/penerbitan-KK" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan <br/>Kartu Keluarga</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/penerbitan/penerbitan-KIA" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan <br/>Kartu Identitas Anak (KIA)</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/penerbitan/penerbitan-kembali-akta" class="menu-griddd"><p style="margin: 5px 5px;">Penerbitan Kembali Register <br/>dan Akta Catatan Sipil</p></router-link>
    </li>
   
    </div>

  </ul>
</li>

<!---
    <li>
      <router-link to="/standar-pelayanan/pembatalan" class="menu-griddd"><p style="margin: 5px 5px;">Pembatalan</p></router-link>
    </li> -->

    <li
  class="dropdown"
  @mouseenter="showDropdown('pembatalan')"
  @mouseleave="hideDropdown('pembatalan')"
>
  <router-link to="" class="dropdown-toggle menu-griddd">
    <p  style="margin: 5px 5px;">Pembatalan </p>
  </router-link>
  <ul class="dropdown-menu" style="margin-top: 3px;" v-if="dropdownVisible.pembatalan">
    <div class="menu-griddb">
    <li>
      <router-link to="/standar-pelayanan/pembatalan/pembatalan-perkawinan" class="menu-griddd"><p style="margin: 5px 5px;">Pembatalan Perkawinan</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pembatalan/pembatalan-perceraian" class="menu-griddd"><p style="margin: 5px 5px;">Pembatalan Perceraian</p></router-link>
    </li>
    <li>
      <router-link to="/standar-pelayanan/pembatalan/pembatalan-akta" class="menu-griddd"><p style="margin: 5px 5px;"> Pembatalan Akta </p></router-link>
    </li>
   
   
    </div>

  </ul>
</li>

    </div>
  </ul>
</li>

<!-- Data Penduduk Menu with Dropdown -->
<li
  class="dropdown"
  @mouseenter="showDropdown('penduduk')"
  @mouseleave="hideDropdown('penduduk')"
>
  <router-link to="" class="dropdown-toggle">
    Data Penduduk
  </router-link>
  <ul class="dropdown-menu" v-if="dropdownVisible.penduduk">
    <div class="menu-gridd">
      <li>
      <router-link to="/data-penduduk/jumlah-penduduk" class="menu-griddd"><p style="margin: 5px 5px;">Jumlah Penduduk</p></router-link
      >
    </li>
    <li>
      <router-link to="/data-penduduk/jumlah-pendidikan" class="menu-griddd"><p style="margin: 5px 5px;">Pendidikan</p></router-link>
    </li>
    <li><router-link to="/data-penduduk/jumlah-disabilitas" class="menu-griddd"><p style="margin: 5px 5px;">Disabilitas</p></router-link></li>
    <li>
      <router-link to="/data-penduduk/jumlah-KK" class="menu-griddd"><p style="margin: 5px 5px;">Jumlah Kepala Keluarga</p></router-link
      >
    </li>
    <li>
      <router-link to="/data-penduduk/jumlah-umur-pendidikan" class="menu-griddd"><p style="margin: 5px 5px;">Kelompok Umur</p></router-link>
    </li>
    <li><router-link to="/data-penduduk/jumlah-golongan-darah" class="menu-griddd"><p style="margin: 5px 5px;">Golongan Darah</p></router-link></li>
    <li>
      <router-link to="/data-penduduk/jumlah-wajib-KTP" class="menu-griddd"><p style="margin: 5px 5px;">Wajib KTP</p></router-link
      >
    </li>
    <li>
      <router-link to="/data-penduduk/jumlah-perkawinan" class="menu-griddd"><p style="margin: 5px 5px;">Status Kawin</p></router-link>
    </li>
    <li><router-link to="/data-penduduk/jumlah-pekerjaan" class="menu-griddd"><p style="margin: 5px 5px;">Pekerjaan</p></router-link></li>
    <li>
      <router-link to="/data-penduduk/jumlah-anak-remaja" class="menu-griddd"><p style="margin: 5px 5px;">Anak 0 - 18 Tahun</p></router-link
      >
    </li>
    <li>
      <router-link to="/data-penduduk/jumlah-agama" class="menu-griddd"><p style="margin: 5px 5px;">Agama</p></router-link>
    </li>
    </div>
    
  </ul>
</li>

<!-- Ruang Publik Menu with Dropdown -->
<li
  class="dropdown"
  @mouseenter="showDropdown('publik')"
  @mouseleave="hideDropdown('publik')"
>
  <router-link to="" class="dropdown-toggle">
    Ruang Publik
  </router-link>
  <ul class="dropdown-menu" v-if="dropdownVisible.publik">
    <div class="menu-gridd">
            <li>
      <router-link to="/ruang-publik/download" class="menu-griddd"><p style="margin: 5px 5px;">Download</p></router-link>
    </li>
    <li><router-link to="/ruang-publik/faq" class="menu-griddd"><p style="margin: 5px 5px;">FAQ</p></router-link></li>
    <li><router-link to="/ruang-publik/buku-tamu" class="menu-griddd"><p style="margin: 5px 5px;">Buku Tamu</p></router-link></li>
    <li><router-link to="/ruang-publik/ikm" class="menu-griddd"><p style="margin: 5px 5px;">IKM</p></router-link></li>
    <li><router-link to="/ruang-publik/galeri" class="menu-griddd"><p style="margin: 5px 5px;">Galeri </p></router-link></li>

    </div>

  </ul>
</li>


<li
  class="dropdown"
  @mouseenter="showDropdown('berita')"
  @mouseleave="hideDropdown('berita')"
>
  <router-link to="" class="dropdown-toggle">
    Berita
  </router-link>
  <ul class="dropdown-menu" v-if="dropdownVisible.berita">
    <div class="menu-griddb">
    <li>
      <router-link to="/berita/berita-disdukcapil" class="menu-griddd"><p style="margin: 5px 5px;">Berita Disdukcapil</p></router-link>
    </li>
    <li>
      <router-link to="/berita/kamus-adminduk" class="menu-griddd"><p style="margin: 5px 5px;">Kamus Adminduk</p></router-link>
    </li>
    </div>

  </ul>
</li>
        <li><router-link to="/layanan-online">Layanan Online</router-link></li>
      </ul>
    </nav>

    <!-- Bagian Utama (untuk konten dinamis) -->
    <main class="content">
      <router-view />
    </main>

    <!-- Bagian Footer -->

    <footer class="footer">
      <p>
        <i class="mdi mdi-facebook social-icon"></i>
        Disdukcapil Kapubaten Ende
      </p>
      <p>
        <i class="mdi mdi-instagram social-icon"></i>
        Disdukcapil_Ende
      </p>
      <p>
        <i class="mdi mdi-email social-icon"></i>
        Pengaduan.dukcapilende@gmail.com
      </p>
      <p>
        <i class="mdi mdi-phone social-icon"></i>
        0813-1975-003
      </p>
      <p>
        <i class="mdi mdi-phone social-icon"></i>
        Jl. Eltari Atas, Kel. Onekore, Kec. Ende Tengah, Kab. Ende
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      images: [
        require("@/assets/Carrousel.png"),
        require("@/assets/logo.png"),
        require("@/assets/LogoDukcapil.png"),
      ],
      currentImage: 0,
      dropdownVisible: {
        profil: false,
        layanan: false,
        penduduk: false,
        publik: false,
        berita: false,
        pencatatan: false,
      }, // Variabel untuk mengontrol visibilitas dropdown
    };
  },
  methods: {
    nextImage() {
      this.currentImage = (this.currentImage + 1) % this.images.length;
    },
    prevImage() {
      this.currentImage =
        (this.currentImage - 1 + this.images.length) % this.images.length;
    },
    showDropdown(menu) {
      this.dropdownVisible[menu] = true; // Tampilkan dropdown berdasarkan menu
    },
    hideDropdown(menu) {
      this.dropdownVisible[menu] = false; // Sembunyikan dropdown berdasarkan menu
    },
  },
};
</script>


<style scoped>
/* Gaya untuk layout Home.vue */
.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Arial", sans-serif; /* Gaya font untuk keseluruhan */
}

.header {
  background-color: white; /* Warna latar belakang header */
  color: black;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  height: 80px; /* Ukuran logo sesuai gambar */
  margin-right: 15px;
}

.header-title h1 {
  font-size: 24px; /* Ukuran font judul */
  margin: 0;
}

.header-title h2 {
  font-size: 16px; /* Ukuran font subjudul */
  margin: 0;
}

/* Gaya untuk kontainer pencarian */
.search-container {
  display: flex;
  align-items: center;
  position: relative; /* Agar tombol dapat diposisikan relatif terhadap kontainer */
  width: 300px; /* Lebar kontainer pencarian */
}

.search-input {
  padding: 10px 40px 10px 10px; /* Tambahkan padding di kanan untuk memberi ruang untuk tombol */
  border: 2px solid #27394a; /* Border input */
  border-radius: 20px; /* Sudut melengkung */
  margin-right: 0; /* Menghapus margin agar tidak ada jarak antara input dan tombol */
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

.navbar {
  background-color: #27394a; /* Warna navbar */
  padding: 10px 0;
  display: flex; /* Menggunakan Flexbox untuk distribusi menu */
  justify-content: space-around; /* Menyebar item navbar secara merata */
  
}

.navbar ul {
  display: flex;
  justify-content: space-between; /* Mengatur item agar merata */
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; /* Memastikan ul memenuhi lebar navbar */
}

.navbar ul li {
  flex: 1; /* Setiap item akan mengambil ruang yang sama */
  text-align: center; /* Menyelaraskan teks di tengah */
  position: relative;
}

.navbar ul li a {
  display: block; /* Mengubah anchor menjadi block agar memenuhi li */
  color: white;
  text-decoration: none;
  font-size: 18px; /* Ukuran font menu */

  padding: 10px 0; /* Menambah padding vertikal untuk klik yang lebih mudah */
  transition: color 0.3s; /* Efek transisi saat hover */
}

/* Dropdown Menu */
.dropdown-menu {
  display: none; /* Sembunyikan menu dropdown secara default */
  position: absolute;
  background-color: #727e89;
  min-width: max-content;
  top: 100%;
  left: 0;
  z-index: 1000;
  transition: opacity 0.2s ease;
  
}

.dropdown-menu li {
  width: 100%;
}

.dropdown-menu li a {
  padding: 10px;
  display: block;
  color: black;
  margin-left: 10px;
  text-align: center;
}

.dropdown-menu li a:hover {
  background-color: #d9d9d9;
  color: black;
}

/* Tampilkan dropdown saat .active ditambahkan */
.dropdown.active .dropdown-menu {
  display: block; /* Tampilkan menu dropdown jika kelas active ditambahkan */
  
}

/* Tampilkan dropdown saat hover */
.dropdown:hover .dropdown-menu {
  display: block; /* Pastikan menu dropdown ditampilkan saat hover */
}

.navbar ul li a:hover {
  color: black; /* Warna saat hover */
  text-decoration: underline;
}

/* Gaya untuk konten utama */
.content {
  flex: 1;
  padding: 20px;
  background-color: #ffffff; /* Warna latar belakang konten */
}

/* Gaya untuk gambar */
.responsive-image {
  width: 100%; /* Mengatur lebar gambar 100% dari kontainer */
  height: auto; /* Biarkan tinggi otomatis agar gambar tidak terdistorsi */
  max-height: 50vh; /* Membatasi tinggi gambar agar tidak lebih dari 50% dari viewport height */
  object-fit: cover; /* Mengatur gambar agar terjaga proporsinya */
  margin: 20px 0; /* Memberikan jarak atas dan bawah untuk gambar */
}

/* Gaya untuk carousel */
.carousel {
  position: relative;
  text-align: center; /* Agar tombol berada di tengah */
}

/* Gaya untuk tombol panah */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white; /* Warna tombol putih */
  font-weight: bold; /* Menebalkan teks */
  font-size: 36px; /* Ukuran font untuk tombol panah */
  background: none; /* Tanpa latar belakang */
  border: none; /* Tanpa border */
  cursor: pointer; /* Mengubah kursor saat hover */
  z-index: 1; /* Pastikan tombol di atas gambar */
}

.left-arrow {
  left: 10px; /* Letak tombol kiri */
}

.right-arrow {
  right: 10px; /* Letak tombol kanan */
}

/* Latest News Styling */
.latest-news {
  text-align: left;
  margin: 20px 0;
  color: white;
}
.news-box {
  border: 1px solid #ddd;
  width: 100%;
  background-color: #27394a;
}

.menu-gridd {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 2 items per row */
  gap: 1px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
}

.menu-griddb {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 items per row */
  gap: 1px;
  margin-right: 10px;
  margin-top: 10px;
  text-align: center;
}

.menu-griddd {
  border: 2px solid white;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 10px;
}

.menu-items {
  text-align: center;
  cursor: pointer;
  padding: 10px;
  border: 1px solid black;
}

/* 4 Menu Grid */
.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 items per row */
  gap: 20px;
  margin: 20px 0;
}
.menu-item {
  text-align: center;
  cursor: pointer;
  padding: 10px;
}
.menu-item img {
  width: 150px; /* Smaller width */
  height: 100px; /* Smaller height */
  object-fit: cover; /* Ensure the image is contained within the box */
}
.menu-item p {
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px; /* Smaller text size */
}

.footer {
  background-color: #27394a; /* Warna footer */
  color: white;
  text-align: center;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
}
</style>
