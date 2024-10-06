<template>
    <h1>IKM</h1>

    <h2><bold>Indeks Kepuasan Masyarakat</bold></h2>
   <div class="profil-visi-misi">
 
     <!-- Penghargaan Section -->
     <section class="menu-grid">
      
       <div class="menu-item">
                <p><b>Indeks Kepuasan Masyarakat Semester I Tahun 2024</b></p>
                <img src="@/assets/ikm1.png" alt="Gambar1" class="struktur-image" />
       </div>
       <div class="menu-item">
                <p><b>Indeks Kepuasan Masyarakat Semester II Tahun 2023</b></p>
                <img src="@/assets/ikm2.png" alt="Gambar2" class="struktur-image" />
       </div>
       <div class="menu-item">
                <p><b>Indeks Kepuasan Masyarakat Semester I Tahun 2023</b></p>
                <img src="@/assets/ikm3.png" alt="Gambar3" class="struktur-image" />
       </div>


       <div class="update">
         <p>{{  update  }}</p>
       </div>
     </section>
 
 <!-- Profil Pimpinan Section -->
 
 <div>
   <section class="profil-pimpinan">
     <h4 style="margin: 10px 0;">KEPALA DINAS</h4>
   
   <div class="pimpinan-content">
     <img src="@/assets/pimpinan.png" alt="Foto Pimpinan" class="pimpinan-photo" />
    
     <h3>{{ pimpinan.nama }}</h3>
     <p class="pimpinan-title">Mulai Menjabat</p>
     <p class="pimpinan-date">{{ pimpinan.tanggalMenjabat }}</p>
   </div>
 
 </section>
 
 <section class="profil-pimpinan1">
   <div class="pimpinan-content">
     <p><b>Informasi Pribadi</b> </p>
     </div>
     
 </section>
 
 <section class="profil-pimpinan2">
   <div class="pimpinan-content">
     <table>
   <tr>
     <td>Lahir</td>
     <td>:29 Januari 1953</td>
   </tr>
   <tr>
     <td>Suami/Istri</td>
     <td>:Mastuti</td>
   </tr>
   <tr>
     <td>Anak</td>
     <td>:Sigasare</td>
   </tr>
   
 </table>
 <tr>
     <td>Riwayat Pendidikan</td>
   </tr>
     <td>
       <ul>
         <li>Sekolah Dasar</li>
         <li>Sekolah Menengah Pertama</li>
         <li>Sekolah Menengah Atas</li>
       </ul>
     </td>
 
     </div>
     
 </section>
 </div>
 
   </div>
 </template>
 
 <script>
 export default {
   name: 'PenghargaanView',
   data() {
     return {
       pimpinan: {
         nama: "Lambertus Sigasare, ST. M.Eng",
         tanggalMenjabat: "7 Agustus 2022"
       },
       update: "Terakhir Update : 2 Oktober 2024",
      
     };
   }
 };
 </script>
 
 <style scoped>

 /* Bagian Profil */
 
 .profil-visi-misi {
   display: flex;
   justify-content: space-between;
   align-items: flex-start;
   gap: 40px; /* Memberikan jarak antara profil dan visi misi */
   padding: 10px;
 }
 
 .profil-pimpinan {
   background-color: #727e89;
 
   text-align: center; /* Agar elemen-elemen berada di tengah */
   border: 2px solid #000000;
 }
 
 .profil-pimpinan1 {
   background-color: #d9d9d9;
 
   text-align: center; /* Agar elemen-elemen berada di tengah */
   border: 1px solid #000000;
 }
 
 .profil-pimpinan2 {
   background-color: #727e89;
 
   text-align: left; /* Agar elemen-elemen berada di tengah */
   padding: 1px;
   border: 2px solid #000000;
 }
 
 .pimpinan-content {
   align-items: center; /* Menjaga elemen tetap berada di tengah */
 
 }
 
 .pimpinan-photo {
   width: 200px; /* Sesuaikan ukuran foto */
   height: auto;
   border-radius: 50%; /* Membuat gambar berbentuk lingkaran */
   margin-left: 20px;
   margin-right: 20px;
 }
 
 h2, h3, h4 {
   margin: 0; /* Menghilangkan margin default */
 }
 
 h2 {
   font-size: 22px;
   font-weight: bold;
   color: #333;
 }
 
 h3 {
   font-size: 18px;
   font-weight: normal;
   color: #000000;
 }
 
 h4 {
   font-size: 25px;
   font-weight: bold;
   color: #000000;
 }
 
 .pimpinan-title {
   font-size: 18px;
   font-weight: bold;
   color: #000000;
 }
 
 .pimpinan-date {
   font-size: 16px;
   color: #000000;
 }
 
 .informasi {
   text-align: left;
   color: #000000;
   border: 1px solid #000000;
   /* width: 100%; Mengurangi lebar sesuai dengan padding dari profil pimpinan */
   background-color: #d9d9d9;
   padding: 20px 10px; /* Tambahkan padding untuk estetika */
 }
 
 
 /* Bagian Kiri */
 


 .tujuan{
   text-align: left;
   color: #000000;
   font-size: normal;
 }
 
 ul {
   list-style-type: disc;
   padding-left: 20px;
 }
 
 /* 4 Menu Grid */
 .menu-grid {
    display: flex;
  flex-direction: column; /* Mengatur item secara vertikal */
  margin-top: 30px;
  margin-bottom: 50px;
 }
 
 

.keterangan {
  margin-top: 20px; /* Memberikan jarak antara gambar dan keterangan */
  text-align: left;
  font-size: 18px;
  color: #000000;
}

.update {
  margin-top: 10px; /* Jarak antara keterangan dan update */
  text-align: left; /* Pastikan teks rata kiri */
  font-size: small;
  font-style: italic;
  width: 100%; /* Pastikan elemen mengambil lebar penuh */
  position: relative; /* Pastikan elemen ditempatkan relatif di dalam container */
  padding-left: 10px; /* Beri sedikit padding kiri untuk jarak tambahan */
}

 
.struktur-image {
    display: block;               /* Mengatur gambar sebagai elemen blok */
    width: 100%;                  /* Gambar akan mengisi lebar penuh kontainer */
    /*max-width: 300px;            /* Batasi lebar maksimum gambar (ubah sesuai kebutuhan) */
    height: auto;                 /* Tinggi otomatis untuk menjaga proporsi */
    margin-top: 10px;

}

.menu-item {
    display: block;               /* Mengatur item sebagai blok */
    text-align: center;           /* Menjaga gambar berada di tengah secara horizontal */
    padding: 20px;               /* Padding untuk memberi ruang di dalam kontainer */
    width: 150%;                  /* Kontainer mengambil lebar penuh */
    min-height: 500px;           /* Meningkatkan tinggi minimum untuk kotak */
    background-color: #f0f0f0;   /* Contoh latar belakang untuk kontainer */
    border: 1px solid #ccc;      /* Menambahkan border untuk membedakan kontainer */
    border-radius: 5px;          /* Menambahkan sudut melengkung pada kontainer */
    margin: 10px auto;           /* Mengatur margin otomatis untuk pusat */
}





 </style>
 