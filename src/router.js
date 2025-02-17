import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';

import VisiMisiView from '@/views/Profil/VisiMisi.vue';
import TujuanSasaranView from '@/views/Profil/Tujuan.vue';
import StrukturOrganisasiView from './views/Profil/StrukturOrganisasi.vue';
import TupoksiView from './views/Profil/Tupoksi.vue';
import ProfilStrategiView from './views/Profil/Kebijakan.vue';
import KetenagaanView from './views/Profil/Ketenagaan.vue';
import SaranaPrasaranaView from './views/Profil/Sarana.vue';
import MaklumatPelayananView from './views/Profil/Maklumat.vue';
import PenghargaanView from './views/Profil/Penghargaan.vue';
import ProfilLhkpnView from './views/Profil/ProfilLhkpn.vue';
import ProfilInovasiView from './views/Profil/Inovasi.vue';

//import testBerandaView from '@/views/testBeranda.vue';
import BerandaView from '@/views/Beranda.vue';

import PencatatanKelahiranView from '@/views/StandarPelayanan/Pencatatan/CatatLahir.vue';
import PencatatanKematianView from '@/views/StandarPelayanan/Pencatatan/CatatMati.vue';
import PencatatanUbahStatusView from '@/views/StandarPelayanan/Pencatatan/CatatUbahStatus.vue';
import PencatatanAngkatAnakView from '@/views/StandarPelayanan/Pencatatan/CatatAngkatAnak.vue';
import PencatatanPerkawinanView from '@/views/StandarPelayanan/Pencatatan/CatatKawin.vue';
import PencatatanPerceraianView from '@/views/StandarPelayanan/Pencatatan/CatatCerai.vue';
import PembetulanAktaView from '@/views/StandarPelayanan/Pencatatan/BetulAkta.vue';
import PencatatanBiodataView from '@/views/StandarPelayanan/Pencatatan/CatatBiodata.vue';
import PencatatanSahAnakView from '@/views/StandarPelayanan/Pencatatan/CatatSahAnak.vue';
import PencatatanUbahNamaAnakView from '@/views/StandarPelayanan/Pencatatan/CatatUbahNama.vue';
import PendataanPendudukView from '@/views/StandarPelayanan/Pencatatan/DataPendudukRentan.vue';
import PencatatanPeristiwaView from '@/views/StandarPelayanan/Pencatatan/CatatPeristiwa.vue';
import PencatatanPengakuanAnakView from '@/views/StandarPelayanan/Pencatatan/CatatPengakuan.vue';

import PenerbitanKTPView from '@/views/StandarPelayanan/Penerbitan/TerbitKTP.vue';
import PenerbitanKIAView from '@/views/StandarPelayanan/Penerbitan/TerbitKIA.vue';
import PenerbitanSuratKeteranganView from '@/views/StandarPelayanan/Penerbitan/TerbitSuratKeterangan.vue';
import PenerbitanKembaliView from '@/views/StandarPelayanan/Penerbitan/TerbitKembali.vue';
import PenerbitanKartuKeluargaView from '@/views/StandarPelayanan/Penerbitan/TerbitKK.vue';

import PembatalanPerkawinanView from '@/views/StandarPelayanan/Pembatalan/BatalKawin.vue';
import PembatalanPerceraianView from '@/views/StandarPelayanan/Pembatalan/BatalCerai.vue';
import PembatalanAktaView from '@/views/StandarPelayanan/Pembatalan/BatalAkta.vue';

import DataJumlahPendudukView from '@/views/DataPenduduk/JumlahPenduduk.vue';
import DataJumlahKKView from '@/views/DataPenduduk/JumlahKK.vue';
import DataJumlahWajibKTPView from '@/views/DataPenduduk/JumlahWajibKTP.vue';
import DataJumlahAnakView from '@/views/DataPenduduk/JumlahAnak.vue';
import DataJumlahPendidikanView from '@/views/DataPenduduk/JumlahPendidikan.vue';
import DataJumlahUmurView from '@/views/DataPenduduk/JumlahUmur.vue';
import DataJumlahPerkawinanView from '@/views/DataPenduduk/JumlahKawin.vue';
import DataJumlahAgamaView from '@/views/DataPenduduk/JumlahAgama.vue';
import DataJumlahDisabilitasView from '@/views/DataPenduduk/JumlahDisabilitas.vue';
import DataJumlahGoldarView from '@/views/DataPenduduk/JumlahGoldar.vue';
import DataJumlahPekerjaanView from '@/views/DataPenduduk/JumlahPekerjaan.vue';

import RuangDownloadView from '@/views/RuangPublik/Download.vue';
import RuangBukuTamuView from '@/views/RuangPublik/BukuTamu.vue';
import IsiBukuView from '@/views/RuangPublik/IsiBukuTamu.vue';
import RuangDownloadRegulasiView from '@/views/RuangPublik/DownloadRegulasi.vue';
import RuangDownloadSPTJMView from '@/views/RuangPublik/DownloadSPTJM.vue';
import RuangDownloadFormulirView from '@/views/RuangPublik/DownloadFormulir.vue';
import RuangDownloadPengajuanView from '@/views/RuangPublik/DownloadPengajuan.vue';
import RuangFAQView from '@/views/RuangPublik/FAQ.vue';
import RuangIKMView from '@/views/RuangPublik/IKM.vue';
import IKMPertamaView from '@/views/RuangPublik/IKMSatu.vue';
import IKMKeduaView from '@/views/RuangPublik/IKMDua.vue';
import IKMKetigaView from '@/views/RuangPublik/IKMTiga.vue';
import RuangGaleriView from '@/views/RuangPublik/Galeri.vue';
import GaleriSatuView from '@/views/RuangPublik/GaleriAlbumSatu.vue';
import GaleriDuaView from '@/views/RuangPublik/GaleriAlbumDua.vue';
import GaleriTigaView from '@/views/RuangPublik/GaleriAlbumTiga.vue';
import GaleriEmpatView from '@/views/RuangPublik/GaleriAlbumEmpat.vue';

import BeritaBeritaView from '@/views/Berita/BeritaDukcapil.vue';
import BacaIsiBeritaSatuView from '@/views/Berita/BacaBerita1.vue';
import BacaIsiBeritaDuaView from '@/views/Berita/BacaBerita2.vue';
import BacaIsiBeritaTigaView from '@/views/Berita/BacaBerita3.vue';
import BacaIsiBeritaEmpatView from '@/views/Berita/BacaBerita4.vue';
import BeritaKamusView from '@/views/Berita/KamusAdminduk.vue';
import ArtiKamusAdmindukView from '@/views/Berita/ArtiKamus.vue';
import ArtiKamusSatuView from '@/views/Berita/ArtiKamus1.vue';
import ArtiKamusDuaView from '@/views/Berita/ArtiKamus2.vue';
import ArtiKamusTigaView from '@/views/Berita/ArtiKamus3.vue';

import LayananOnlineView from '@/views/LayananOnline/LayananOnline.vue';
import LayananAktaView from '@/views/LayananOnline/LayananAkta.vue';
import LayananAktaDuaView from '@/views/LayananOnline/LayananAkta2.vue';
import LayananAktaTigaView from '@/views/LayananOnline/LayananAkta3.vue';
import LayananAktaEmpatView from '@/views/LayananOnline/LayananAkta4.vue';
import LayananAktaLimaView from '@/views/LayananOnline/LayananAkta5.vue';
import LayananAktaEnamView from '@/views/LayananOnline/LayananAkta6.vue';
import LayananKKView from '@/views/LayananOnline/LayananKK.vue';
import LayananKKDuaView from '@/views/LayananOnline/LayananKK2.vue';
import LayananKKTigaView from '@/views/LayananOnline/LayananKK3.vue';
import LayananKKEmpatView from '@/views/LayananOnline/LayananKK4.vue';
import LayananKKLimaView from '@/views/LayananOnline/LayananKK5.vue';
import LayananKIAView from '@/views/LayananOnline/LayananKIA.vue';
import LayananKIASatuAView from '@/views/LayananOnline/LayananKIA1A.vue';
import LayananKIADuaAView from '@/views/LayananOnline/LayananKIA2A.vue';
import LayananKIAAKirimView from '@/views/LayananOnline/LayananKIA3A.vue';
import LayananKIASatuBView from '@/views/LayananOnline/LayananKIA1B.vue';
import LayananKIADuaBView from '@/views/LayananOnline/LayananKIA2B.vue';
import LayananKIABKirimView from '@/views/LayananOnline/LayananKIA3B.vue';
import LayananKonsolidasiView from '@/views/LayananOnline/LayananKonsolidasi.vue';
import LayananKonsolidasiDuaView from '@/views/LayananOnline/LayananKonsolidasi2.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    children: [
     // {
       // path: '/',
       //component: testBerandaView,
      //},
      {
      path: '/', // Rute untuk profil
      component: BerandaView, // Komponen ProfilView akan dimuat di router-view
      },
      //PROFIL
      {
        path: 'profil/visi-misi', // Rute untuk profil
        component: VisiMisiView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/tujuan-sasaran', // Rute untuk profil
        component: TujuanSasaranView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/struktur-organisasi', // Rute untuk profil
        component: StrukturOrganisasiView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/tupoksi', // Rute untuk profil
        component: TupoksiView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/profil-strategi', // Rute untuk profil
        component: ProfilStrategiView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/ketenagaan', // Rute untuk profil
        component: KetenagaanView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/sarana-prasarana', // Rute untuk profil
        component: SaranaPrasaranaView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/maklumat-pelayanan', // Rute untuk profil
        component: MaklumatPelayananView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/penghargaan', // Rute untuk profil
        component: PenghargaanView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'profil/profil-lhkpn', // Rute untuk profil
        component: ProfilLhkpnView, // Komponen ProfilView akan dimuat di router-view
      },

      {
        path: 'profil/inovasi', // Rute untuk profil
        component: ProfilInovasiView, // Komponen ProfilView akan dimuat di router-view
      },

      //STANDAR PELAYANAN-PENCATATAN
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-kelahiran', // Rute untuk 
        component: PencatatanKelahiranView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-kematian', // Rute untuk 
        component: PencatatanKematianView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-perubahan-status', // Rute untuk 
        component: PencatatanUbahStatusView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-angkat-anak', // Rute untuk 
        component: PencatatanAngkatAnakView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-perkawinan', // Rute untuk 
        component: PencatatanPerkawinanView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-perceraian', // Rute untuk 
        component: PencatatanPerceraianView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-pembetulan', // Rute untuk 
        component: PembetulanAktaView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-biodata', // Rute untuk 
        component: PencatatanBiodataView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-sah-anak', // Rute untuk 
        component: PencatatanSahAnakView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-ubah-nama', // Rute untuk 
        component: PencatatanUbahNamaAnakView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pendataan-penduduk-rentan', // Rute untuk 
        component: PendataanPendudukView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-peristiwa', // Rute untuk 
        component: PencatatanPeristiwaView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pencatatan/pencatatan-pengakuan-anak', // Rute untuk 
        component: PencatatanPengakuanAnakView, // Komponen  akan dimuat di router-view
      },

      //STANDAR PELAYANAN-PENERBITAN
      {
        path: 'standar-pelayanan/penerbitan/penerbitan-KTP', // Rute untuk 
        component: PenerbitanKTPView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/penerbitan/penerbitan-KIA', // Rute untuk 
        component: PenerbitanKIAView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/penerbitan/penerbitan-surat-keterangan', // Rute untuk 
        component: PenerbitanSuratKeteranganView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/penerbitan/penerbitan-kembali-akta', // Rute untuk 
        component: PenerbitanKembaliView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/penerbitan/penerbitan-KK', // Rute untuk 
        component: PenerbitanKartuKeluargaView, // Komponen  akan dimuat di router-view
      },

      //STANDAR PELAYANAN-PEMBATALAN
      {
        path: 'standar-pelayanan/pembatalan/pembatalan-perkawinan', // Rute untuk 
        component: PembatalanPerkawinanView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pembatalan/pembatalan-perceraian', // Rute untuk 
        component: PembatalanPerceraianView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan/pembatalan/pembatalan-akta', // Rute untuk 
        component: PembatalanAktaView, // Komponen  akan dimuat di router-view
      },

      //DATA PENDUDUK
      {
        path: 'data-penduduk/jumlah-penduduk', // Rute untuk 
        component: DataJumlahPendudukView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-KK', // Rute untuk 
        component: DataJumlahKKView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-wajib-KTP', // Rute untuk 
        component: DataJumlahWajibKTPView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-anak-remaja', // Rute untuk 
        component: DataJumlahAnakView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-pendidikan', // Rute untuk 
        component: DataJumlahPendidikanView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-umur-pendidikan', // Rute untuk 
        component: DataJumlahUmurView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-perkawinan', // Rute untuk 
        component: DataJumlahPerkawinanView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-agama', // Rute untuk 
        component: DataJumlahAgamaView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-disabilitas', // Rute untuk 
        component: DataJumlahDisabilitasView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-golongan-darah', // Rute untuk 
        component: DataJumlahGoldarView, // Komponen  akan dimuat di router-view
      },
      {
        path: 'data-penduduk/jumlah-pekerjaan', // Rute untuk 
        component: DataJumlahPekerjaanView, // Komponen  akan dimuat di router-view
      },

      // RUANG PUBLIK
      // Ruang Publik - Download
      {
        path: 'ruang-publik/download', // Rute untuk 
        component: RuangDownloadView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/ruang-publik/download-regulasi',
        name: 'DownloadRegulasi',
        component: RuangDownloadRegulasiView // Komponen tujuan
      },
      {
        path: '/ruang-publik/download-sptjm',
        name: 'DownloadSPTJM',
        component: RuangDownloadSPTJMView // Komponen tujuan
      },
      {
        path: '/ruang-publik/download-formulir-persyaratan',
        name: 'DownloadFormulir',
        component: RuangDownloadFormulirView // Komponen tujuan
      },
      {
        path: '/ruang-publik/download-formulir-pengajuan',
        name: 'DownloadPengajuan',
        component: RuangDownloadPengajuanView // Komponen tujuan
      },

      //Ruang Publik - Buku Tamu
      {
        path: '/ruang-publik/buku-tamu', // Rute untuk 
        component: RuangBukuTamuView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/ruang-publik/isi-buku-tamu',
        name: 'IsiBukuTamu',
        component: IsiBukuView,
      },

      //Ruang Publik - FAQ
      {
        path: 'ruang-publik/frequently-asked-question', // Rute untuk 
        component: RuangFAQView, // Komponen  akan dimuat di router-view
      },

      //Ruang Publik - IKM
      {
        path: 'ruang-publik/indeks-kepuasan-masyarakat', // Rute untuk 
        component: RuangIKMView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/ruang-publik/indeks-kepuasan-masyarakat-Semester-I-Tahun-2024',
        name: 'IKMPertama',
        component: IKMPertamaView,
      },
      {
        path: '/ruang-publik/indeks-kepuasan-masyarakat-Semester-III-Tahun-2023',
        name: 'IKMKedua',
        component: IKMKeduaView,
      },
      {
        path: '/ruang-publik/indeks-kepuasan-masyarakat-Semester-I-Tahun-2023',
        name: 'IKMKetiga',
        component: IKMKetigaView,
      },

      //Ruang Publik - Galeri
      {
        path: 'ruang-publik/galeri', // Rute untuk 
        component: RuangGaleriView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/ruang-publik/album-foto-dan-video-sosialisai-KIA',
        name: 'GaleriAlbumSatu',
        component: GaleriSatuView,
      },
      {
        path: '/ruang-publik/album-foto-dan-video-Ombusmen',
        name: 'GaleriAlbumDua',
        component: GaleriDuaView,
      },
      {
        path: '/ruang-publik/album-foto-dan-video-jemput-bola-kotabaru',
        name: 'GaleriAlbumTiga',
        component: GaleriTigaView,
      },
      {
        path: '/ruang-publik/album-foto-dan-video-persiapan-jemput-bola',
        name: 'GaleriAlbumEmpat',
        component: GaleriEmpatView,
      },

      //BERITA
      //Berita - Berita Disdukcapil
      {
        path: 'berita/berita-disdukcapil', // Rute untuk 
        component: BeritaBeritaView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/berita/baca-berita-1',
        name: 'BacaBerita1',
        component: BacaIsiBeritaSatuView,
      },
      {
        path: '/berita/baca-berita-2',
        name: 'BacaBerita2',
        component: BacaIsiBeritaDuaView,
      },
      {
        path: '/berita/baca-berita-3',
        name: 'BacaBerita3',
        component: BacaIsiBeritaTigaView,
      },
      {
        path: '/berita/baca-berita-4',
        name: 'BacaBerita4',
        component: BacaIsiBeritaEmpatView,
      },
      //Berita - Kamus Adminduk
      {
        path: 'berita/kamus-adminduk', // Rute untuk 
        component: BeritaKamusView, // Komponen  akan dimuat di router-view
      },
      {
        path: '/berita/baca-penjelasan-arti-penerbitan-data-kependudukan',
        name: 'ArtiKamus',
        component: ArtiKamusAdmindukView,
      },
      {
        path: '/berita/baca-penjelasan-arti-alur-status-perekaman',
        name: 'ArtiKamus1',
        component: ArtiKamusSatuView,
      },
      {
        path: '/berita/baca-penjelasan-arti-pengertian-PIAK-dan-PD',
        name: 'ArtiKamus2',
        component: ArtiKamusDuaView,
      },
      {
        path: '/berita/baca-penjelasan-arti-ktp-berlaku-seumur-hidup',
        name: 'ArtiKamus3',
        component: ArtiKamusTigaView,
      },

      // LAYANAN ONLINE
      {
        path: 'layanan-online', // Rute untuk profil
        component: LayananOnlineView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran',
        name: 'LayananAkta',
        component: LayananAktaView,
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran-2',
        name: 'LayananAktaDua',
        component: LayananAktaDuaView,
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran-3',
        name: 'LayananAktaTiga',
        component: LayananAktaTigaView,
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran-4',
        name: 'LayananAktaEmpat',
        component: LayananAktaEmpatView,
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran-5',
        name: 'LayananAktaLima',
        component: LayananAktaLimaView,
      },
      {
        path: '/layanan-online/layanan-akta-kelahiran-kirim',
        name: 'LayananAktaEnam',
        component: LayananAktaEnamView,
      },
      {
        path: '/layanan-online/layanan-kartu-keluarga',
        name: 'LayananKK',
        component: LayananKKView,
      },
      {
        path: '/layanan-online/layanan-kartu-keluarga-2',
        name: 'LayananKKDua',
        component: LayananKKDuaView,
      },
      {
        path: '/layanan-online/layanan-kartu-keluarga-3',
        name: 'LayananKKTiga',
        component: LayananKKTigaView,
      },
      {
        path: '/layanan-online/layanan-kartu-keluarga-4',
        name: 'LayananKKEmpat',
        component: LayananKKEmpatView,
      },
      {
        path: '/layanan-online/layanan-kartu-keluarga-kirim',
        name: 'LayananKKLima',
        component: LayananKKLimaView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak',
        name: 'LayananKIA',
        component: LayananKIAView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun',
        name: 'LayananKIA1A',
        component: LayananKIASatuAView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun-2',
        name: 'LayananKIA2A',
        component: LayananKIADuaAView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-0-sd-5-tahun-kirim',
        name: 'LayananKIA3A',
        component: LayananKIAAKirimView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-5-sd-17-tahun',
        name: 'LayananKIA1B',
        component: LayananKIASatuBView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-5-sd-17-tahun-2',
        name: 'LayananKIA2B',
        component: LayananKIADuaBView,
      },
      {
        path: '/layanan-online/layanan-kartu-identitas-anak-5-sd-17-tahun-kirim',
        name: 'LayananKIA3B',
        component: LayananKIABKirimView,
      },
      {
        path: '/layanan-online/konsolidasi-database',
        name: 'LayananKonsolidasi',
        component: LayananKonsolidasiView,
      },
      {
        path: '/layanan-online/konsolidasi-database-kirim',
        name: 'LayananKonsolidasi2',
        component: LayananKonsolidasiDuaView,
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
