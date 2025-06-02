<template>
  <div class="home">
    <header class="header">
      <div class="logo-container">
        <img
          src="@/assets/LogoDukcapil.png"
          alt="Logo Disdukcapil Kabupaten Ende"
          class="logo"
        />

        <h1>
          Dinas Pendudukan dan Pencatatan Sipil <br />
          Kabupaten Ende
        </h1>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Cari..." class="search-input" />
        <button class="search-button">🔍</button>
      </div>
    </header>

    <!-- Bagian Navigasi -->
    <nav class="navbar">
      <ul>
        <li>
          <router-link to="/">
            <i class="mdi mdi-home social-icon"></i>
          </router-link>
        </li>
        <li
          class="dropdown"
          @mouseenter="showDropdown('profil')"
          @mouseleave="hideDropdown('profil')"
        >
          <router-link to="" class="dropdown-toggle">
            <h2>Profil</h2>
          </router-link>
          <ul class="dropdown-menu" v-if="dropdownVisible.profil">
            <div class="menu-gridd">
              <li>
                <router-link to="/profil/visi-misi" class="menu-griddd"
                  ><p style="margin: 5px 5px">Visi dan Misi</p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/profil-strategi" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Strategi dan Kebijakan
                  </p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/penghargaan" class="menu-griddd"
                  ><p style="margin: 5px 5px">Penghargaan</p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/tujuan-sasaran" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Tujuan dan Sasaran
                  </p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/ketenagaan" class="menu-griddd"
                  ><p style="margin: 5px 5px">Ketenagaan</p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/profil-lhkpn" class="menu-griddd"
                  ><p style="margin: 5px 5px">LHKPN</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/profil/struktur-organisasi"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Struktur Organisasi
                  </p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/sarana-prasarana" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Sarana dan Prasarana
                  </p></router-link
                >
              </li>

              <li>
                <router-link to="/profil/tupoksi" class="menu-griddd"
                  ><p style="margin: 5px 5px">Tupoksi</p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/maklumat-pelayanan" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Maklumat Pelayanan
                  </p></router-link
                >
              </li>
              <li>
                <router-link to="/profil/inovasi" class="menu-griddd"
                  ><p style="margin: 5px 5px">Inovasi</p></router-link
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
            <h2>Standar Pelayanan</h2>
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
                  <p style="margin: 5px 5px">Pencatatan</p>
                </router-link>
                <ul
                  class="dropdown-menu"
                  style="margin-top: 3px"
                  v-if="dropdownVisible.pencatatan"
                >
                  <div class="menu-gridd">
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-kelahiran"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Kelahiran
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-perkawinan"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Perkawinan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-sah-anak"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Pengesahan Anak
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-kematian"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Kematian
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-perceraian"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Perceraian
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-ubah-nama"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan Perubahan Nama <br />
                          (Anak Angkat)
                        </p></router-link
                      >
                    </li>

                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-pembetulan"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pembetulan <br />Akta Catatan Sipil
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pendataan-penduduk-rentan"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pendataan Penduduk <br />Rentan Administrasi
                          Kependudukan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-perubahan-status"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan Perubahan <br />Status Kewarganegaraan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-biodata"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Biodata Kependudukan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-peristiwa"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan Peristiwa <br />Penting Lainnya
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-angkat-anak"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Pengangkatan Anak
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pencatatan/pencatatan-pengakuan-anak"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pencatatan <br />Pengakuan Anak
                        </p></router-link
                      >
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
                  <p style="margin: 5px 5px">Penerbitan</p>
                </router-link>
                <ul
                  class="dropdown-menu"
                  style="margin-top: 3px"
                  v-if="dropdownVisible.penerbitan"
                >
                  <div class="menu-gridd">
                    <li>
                      <router-link
                        to="/standar-pelayanan/penerbitan/penerbitan-KTP"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Penerbitan <br />KTP Elektronik
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/penerbitan/penerbitan-surat-keterangan"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Penerbitan Surat <br />Keterangan Kependudukan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/penerbitan/penerbitan-KK"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Penerbitan <br />Kartu Keluarga
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/penerbitan/penerbitan-KIA"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Penerbitan <br />Kartu Identitas Anak (KIA)
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/penerbitan/penerbitan-kembali-akta"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Penerbitan Kembali Register <br />dan Akta Catatan
                          Sipil
                        </p></router-link
                      >
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
                  <p style="margin: 5px 5px">Pembatalan</p>
                </router-link>
                <ul
                  class="dropdown-menu"
                  style="margin-top: 3px"
                  v-if="dropdownVisible.pembatalan"
                >
                  <div class="menu-griddb">
                    <li>
                      <router-link
                        to="/standar-pelayanan/pembatalan/pembatalan-perkawinan"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pembatalan Perkawinan
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pembatalan/pembatalan-perceraian"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pembatalan Perceraian
                        </p></router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/standar-pelayanan/pembatalan/pembatalan-akta"
                        class="menu-griddd"
                        ><p style="margin: 5px 5px">
                          Pembatalan Akta
                        </p></router-link
                      >
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
            <h2>Data Penduduk</h2>
          </router-link>
          <ul class="dropdown-menu" v-if="dropdownVisible.penduduk">
            <div class="menu-gridd">
              <li>
                <router-link
                  to="/data-penduduk/jumlah-penduduk"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Jumlah Penduduk</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-pendidikan"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Pendidikan</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-disabilitas"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Disabilitas</p></router-link
                >
              </li>
              <li>
                <router-link to="/data-penduduk/jumlah-KK" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Jumlah Kepala Keluarga
                  </p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-umur-pendidikan"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Kelompok Umur</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-golongan-darah"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Golongan Darah</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-wajib-KTP"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Wajib KTP</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-perkawinan"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Status Kawin</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-pekerjaan"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Pekerjaan</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-anak-remaja"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Anak 0 - 18 Tahun</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/data-penduduk/jumlah-agama"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">Agama</p></router-link
                >
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
            <h2>Ruang Publik</h2>
          </router-link>
          <ul class="dropdown-menu" v-if="dropdownVisible.publik">
            <div class="menu-gridd">
              <li>
                <router-link to="/ruang-publik/download" class="menu-griddd"
                  ><p style="margin: 5px 5px">Download</p></router-link
                >
              </li>
              <li>
                <router-link to="/ruang-publik/buku-tamu" class="menu-griddd"
                  ><p style="margin: 5px 5px">Buku Tamu</p></router-link
                >
              </li>
              <li>
                <router-link to="/ruang-publik/galeri" class="menu-griddd"
                  ><p style="margin: 5px 5px">Galeri</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/ruang-publik/frequently-asked-question"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">FAQ</p></router-link
                >
              </li>
              <li>
                <router-link
                  to="/ruang-publik/indeks-kepuasan-masyarakat"
                  class="menu-griddd"
                  ><p style="margin: 5px 5px">IKM</p></router-link
                >
              </li>
            </div>
          </ul>
        </li>

        <li
          class="dropdown"
          @mouseenter="showDropdown('berita')"
          @mouseleave="hideDropdown('berita')"
        >
          <router-link to="" class="dropdown-toggle">
            <h2>Berita</h2>
          </router-link>
          <ul class="dropdown-menu" v-if="dropdownVisible.berita">
            <div class="menu-griddb">
              <li>
                <router-link to="/berita/berita-disdukcapil" class="menu-griddd"
                  ><p style="margin: 5px 5px">
                    Berita Disdukcapil
                  </p></router-link
                >
              </li>
              <li>
                <router-link to="/berita/kamus-adminduk" class="menu-griddd"
                  ><p style="margin: 5px 5px">Kamus Adminduk</p></router-link
                >
              </li>
            </div>
          </ul>
        </li>
        <li>
          <router-link to="/layanan-online"
            ><h2>Layanan Online</h2></router-link
          >
        </li>
      </ul>
    </nav>

    <!-- Bagian Utama (untuk konten dinamis) -->
    <main class="content">
      <router-view />
    </main>

    <!-- Bagian Footer -->
    <footer class="footer">
      <p class="footer-text">
        <i class="mdi mdi-facebook social-icon"></i>
        Disdukcapil Kapubaten Ende
      </p>
      <p class="footer-text">
        <i class="mdi mdi-instagram social-icon"></i>
        Disdukcapil_Ende
      </p>
      <p class="footer-text">
        <i class="mdi mdi-email social-icon"></i>
        Pengaduan.dukcapilende@gmail.com
      </p>
      <p class="footer-text">
        <i class="mdi mdi-phone social-icon"></i>
        0813-1975-003
      </p>
      <p class="footer-text">
        <i class="mdi mdi-map-marker-radius social-icon"></i>
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

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@400;700&family=Oswald:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap");

/* Gaya untuk layout Home.vue */

@import url("https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Open+Sans:wght@400;700&family=Oswald:wght@400;700&display=swap");

.home {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Arial", sans-serif;
}

.header {
  background-color: #65a5ca;
  color: white;
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
  height: 70px;
  width: auto;
  margin-right: 50px;
  margin-left: 20px;
}

h1 {
  font-family: "Oswald", sans-serif;
  font-size: 40px;
  color: white;
  text-align: left;
}

h2 {
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-size: 26px; 
}

p {
  font-family: "Open Sans", sans-serif;
  font-size: 20px; 
}

.secondary-text {
  font-family: "Lato", sans-serif;
  font-size: 16px;
}

/* Tombol pencarian */
.search-container {
  display: flex;
  align-items: center;
  position: relative;
  width: 250px;
  margin-right: 20px;
}
.search-input {
  padding: 8px 35px 8px 8px;
  border: 2px solid white;
  border-radius: 15px;
  background-color: white;
  color: black;
  width: 100%;
  box-sizing: border-box;
}
.search-input::placeholder {
  color: black;
}
.search-button {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 8px;
  background-color: transparent;
  color: #b04848;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.search-button:hover {
  color: #ffcc00;
}

/* Navbar */
.navbar {
  background-color: #8bbbd7;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
}

.navbar ul {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
}

.navbar ul li {
  flex: 1;
  text-align: center;
  position: relative;
}

.navbar ul li a {
  display: block;
  color: white;
  text-decoration: none;
  font-size: 26px;
  line-height: 1.5;
  padding: 8px 0;
  transition: color 0.3s;
}

/* Dropdown Menu */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  min-width: max-content;
  top: 100%;
  left: 0;
  z-index: 1000;
  transition: opacity 0.2s ease;
}
.dropdown-menu li a {
  padding: 8px;
  display: block;
  color: black !important;
  margin-left: 10px;
  text-align: center;
}
.dropdown-menu li a:hover {
  background-color: rgba(139, 187, 215, 0.5);
  color: black !important;
}
.dropdown.active .dropdown-menu {
  display: block;
}
.dropdown:hover .dropdown-menu {
  display: block;
}
.navbar ul li a:hover {
  color: black;
  text-decoration: underline;
}

/* Konten utama */
.content {
  flex: 1;
  padding: 15px;
  background-color: #ffffff;
}

/* Gambar */
.responsive-image {
  width: 100%;
  height: auto;
  max-height: 40vh; /* Lebih kecil dari sebelumnya */
  object-fit: cover;
  margin: 15px 0;
}

/* Carousel */
.carousel {
  position: relative;
  text-align: center;
}

/* Tombol panah */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  font-size: 30px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

/* Latest News */
.latest-news {
  text-align: left;
  margin: 15px 0;
  color: white;
}

.news-box {
  border: 1px solid #ddd;
  width: 100%;
  background-color: #27394a;
}

/* Menu Grid */
.menu-gridd {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  margin-right: 8px;
  margin-top: 8px;
  text-align: center;
}

.menu-item {
  text-align: center;
  cursor: pointer;
  padding: 8px;
}

.menu-item img {
  width: 120px;
  height: 80px;
  object-fit: cover;
}

.menu-item p {
  margin-top: 8px;
  font-weight: bold;
  font-size: 12px;
}

/* Ikon di navbar */
.navbar .social-icon {
  font-size: 30px; 
}

.footer {
  background-color: #8bbbd7;
  text-align: center;
  padding: 12px;
  display: flex;
  justify-content: space-evenly;
}

.footer-text {
  color: white;
  font-size: 16px; 
}

.footer .social-icon {
  font-size: 25px;
}

</style>
