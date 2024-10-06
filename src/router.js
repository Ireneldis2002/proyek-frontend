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
import ProfilIkmView from './views/Profil/ProfilIkm.vue';
import ProfilInovasiView from './views/Profil/Inovasi.vue';

import BerandaView from '@/views/Beranda.vue';

import PencatatanKelahiranView from '@/views/StandarPelayanan/Pencatatan/CatatLahir.vue';
import PencatatanKematianView from '@/views/StandarPelayanan/Pencatatan/CatatMati.vue';
import PencatatanBatalAktaView from '@/views/StandarPelayanan/Pencatatan/CatatBatalAkta.vue';
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

import DataJumlahPendudukView from '@/views/DataPenduduk/JumlahPenduduk.vue';
import DataJumlahKKView from '@/views/DataPenduduk/JumlahKK.vue';
import DataJumlahWajibKTPView from '@/views/DataPenduduk/JumlahWajibKTP.vue';
import DataJumlahAnakView from '@/views/DataPenduduk/JumlahAnak.vue';

import LayananOnlineView from '@/views/LayananOnline/LayananOnline.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
    children: [
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
        path: 'profil/profil-ikm', // Rute untuk profil
        component: ProfilIkmView, // Komponen ProfilView akan dimuat di router-view
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
        path: 'standar-pelayanan/pencatatan/pencatatan-pembatalan-akta', // Rute untuk 
        component: PencatatanBatalAktaView, // Komponen  akan dimuat di router-view
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

      // LAYANAN ONLINE
      {
        path: 'layanan-online', // Rute untuk profil
        component: LayananOnlineView, // Komponen ProfilView akan dimuat di router-view
      },

    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
