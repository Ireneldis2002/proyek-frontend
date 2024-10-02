import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import VisiMisiView from '@/views/Profil/VisiMisi.vue';
import BerandaView from '@/views/Beranda.vue';
import StandarPelayananView from '@/views/StandarPelayanan.vue';
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
      {
        path: 'profil/visi-misi', // Rute untuk profil
        component: VisiMisiView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'standar-pelayanan', // Rute untuk profil
        component: StandarPelayananView, // Komponen ProfilView akan dimuat di router-view
      },
      {
        path: 'layanan-online', // Rute untuk profil
        component: LayananOnlineView, // Komponen ProfilView akan dimuat di router-view
      },
      // Tambahkan rute lain di sini
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
