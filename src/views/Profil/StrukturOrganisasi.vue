<template>
    <h1>Struktur Organisasi</h1>
   <div class="profil-visi-misi">
 
     <!-- Struktur Organisasi Section -->
     <section class="menu-grid">
      
       <div class="menu-item">
         <div style="text-align: center;">
            <ul>
                <img src="@/assets/StrukturOrganisasi.png" alt="Tujuan Icon" class="atruktur-image" />
                
            </ul>
         </div>
       </div>
       <div class="keterangan">
        <p>{{ keterangan }}</p>
        <ol>
    <li>Kepala Dinas</li>
    <li>Sekretariat, membawahi:
      <ul>
        <li>Sub Bagian Umum dan Kepegawaian;</li>
        <li>Sub Bagian Keuangan;</li>
        <li>Sub Bagian Perencanaan.</li>
      </ul>
    </li>
    <li>Bidang Pelayanan Pendaftaran:
      <ul>
        <li>Seksi Identitas Penduduk;</li>
        <li>Seksi Pindah Datang;</li>
        <li>Seksi Pendataan Penduduk.</li>
      </ul>
    </li>
    <li>Bidang Pelayanan Pencatatan Sipil:
      <ul>
        <li>Seksi Kelahiran;</li>
        <li>Seksi Perkawinan dan Perceraian;</li>
        <li>Seksi Perubahan Status Anak, Kewarganegaraan dan Kematian.</li>
      </ul>
    </li>
    <li>Bidang Pengelolaan Informasi Administrasi Kependudukan:
      <ul>
        <li>Seksi Sistem Informasi Administrasi Kependudukan;</li>
        <li>Seksi Pengelolahan Dan Penyajian Data Kependudukan;</li>
        <li>Seksi Tata Kelola Dan Sumber Daya Manusia Teknologi Informasi Dan Komunikasi.</li>
      </ul>
    </li>
    <li>Bidang Pemanfaatan Dan Inovasi Pelayanan:
      <ul>
        <li>Seksi Kerjasama;</li>
        <li>Seksi Pemanfaatan Data Dan Dokumen Kependudukan;</li>
        <li>Seksi Inovasi Pelayanan.</li>
      </ul>
    </li>
  </ol>

       </div>


       <div class="update">
         <p>{{  update  }}</p>
       </div>
     </section>
     <section></section>
 
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
   name: 'StrukturOrganisasiView',
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
 
 .menu-item {
  display: flex;
  justify-content: center;
  align-items: left;
  height: 500px;
  width: 1000px;
  overflow: hidden;
  border: 1px solid #000000;
  border-radius: 0px;
  padding: 20px;
  background-color: #ffffff;
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
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
  width: 30px; /* Ukuran yang lebih kecil untuk gambar di tengah kalimat */
  height: auto;
  margin: 0 5px; /* Menambahkan jarak antara gambar dan teks */
  vertical-align: middle; /* Untuk menyejajarkan gambar dengan teks */
}



 </style>
 