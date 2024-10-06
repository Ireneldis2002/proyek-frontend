<template>
    <h1>Tujuan dan Sasaran</h1>
   <div class="profil-visi-misi">
 
     <!-- Tujuan dan Sasaran Section -->
     <section class="menu-grid">
      
       <div class="menu-item">
         <div style="text-align: center;">
           <h2>Tujuan</h2>
           <div style="text-align: left;">
            <ul>
                Untuk mewujudkan Visi Kabupaten Ende yaitu Mewujudkan Karateristik Kabupaten Ende dengan Membangun dari Desa dan Kelurahan Menuju Masyarakat yang Mandiri, Sejahtera dan Berkeadilan, Misi Provinsi Nusa Tenggara Timur ke 1 dan 5 yaitu Kesejahteraan Masyarakat serta Reformasi Birokrasi Berkelanjutan Guna Mewujudkan Tata Kelola Pemerintah yang Baik dan Bersih (Good Governance and Clean Governance) yang difokuskan pada Tata Kelola Pemerintah yang Baik dan Bersih.
            </ul>
         </div>
         </div>
       </div>
       <div class="menu-items">
         <div style="text-align: center;">
         <h2>Sasaran</h2>
         <div style="text-align: left;">
            <ul>
                Untuk memastikan pencapaian tujuan yang diharapkan, maka sasaran jangka menengah Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende dijabarkan sebagai berikut:
                <li>Meningkatnya kualitas pelayanan administrasi kependudukan dan pencatatan sipil</li>
                <li>Meningkatnya kualitas pendataan dan pemanfaatan teknologi informasi dalam administrasi kependudukan dan pencatatan sipil</li>
            </ul>
         </div>
         
         </div>
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
   name: 'TujuanSasaranView',
   data() {
     return {
       pimpinan: {
         nama: "Lambertus Sigasare, ST. M.Eng",
         tanggalMenjabat: "7 Agustus 2022"
       },
       update: "Terakhir Update : 2 Oktober 2024"
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
   gap: 80px; /* Memberikan jarak antara profil dan visi misi */
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
 
 
 /* Bagian Visi Misi */
 .visi {
   text-align: left;
   color: #000000;
   margin-top: 50px;
   border: 3px solid #000000;
   width: 100%;
   background-color: red;
   margin-bottom: 30px;
   padding: 20px;
   border-radius: 50px;
 }
 
 .misi {
   text-align: left;
   color: #000000;
   margin-top: 50px;
   border: 3px solid #000000;
   width: 100%;
   background-color: #d9d9d9;
   margin-bottom: 30px;
   padding: 20px;
   border-radius: 50px;
 }
 

 
 .program {
   text-align: left;
   color: #000000;
   margin-top: 50px;
   border: 3px solid #000000;
   width: 100%;
   background-color: #ffffff;
   padding: 20px;
   border-radius: 50px;
 }

 .tujuan{
   text-align: left;
   color: #000000;
   font-size: normal;
 }
 
 .update{
   text-align: left;
   color: #000000;
   font-size: small;
   font-style: italic;
 }
 
 
 ul {
   list-style-type: disc;
   padding-left: 20px;
 }
 
 /* 4 Menu Grid */
 .menu-grid {
   display: grid;
   grid-template-columns: repeat(2, 1fr); /* Adjust number of columns as needed */
   /* Set gap between items to 20px */
   align-items: center;
   margin-top: 30px;
   margin-bottom: 50px;
 }
 
 .menu-item {
    display: flex; /* Pastikan item diatur sebagai flex container */
   justify-content: center;
   align-items: center;
   height: 250px; /* Tinggi yang sudah ditentukan */
   overflow: hidden; /* Menyembunyikan bagian teks yang melebihi */
   border: 2px solid #000000;
   border-radius: 25px;
   padding: 20px;
   background-color: #d9d9d9;
   margin-right: 25px;
   text-align: center; /* Pusatkan teks */
   word-wrap: break-word; /* Memecah kata panjang */
   overflow-wrap: break-word; /* Alternatif untuk mendukung lebih banyak browser */
   white-space: normal; /* Biarkan teks membungkus */
 }
 .menu-items {
    display: flex; /* Pastikan item diatur sebagai flex container */
   justify-content: center;
   align-items: center;
   height: 250px; /* Tinggi yang sudah ditentukan */
   overflow: hidden; /* Menyembunyikan bagian teks yang melebihi */
   border: 2px solid #000000;
   border-radius: 25px;
   padding: 20px;
   background-color: #ffffff;
   margin-right: 25px;
   text-align: center; /* Pusatkan teks */
   word-wrap: break-word; /* Memecah kata panjang */
   overflow-wrap: break-word; /* Alternatif untuk mendukung lebih banyak browser */
   white-space: normal; /* Biarkan teks membungkus */

 }
 
 
 </style>
 