<template>
    <h1>Maklumat Pelayanan</h1>
   <div class="profil-visi-misi">
 
     <!-- Maklumat Section -->
     <section class="menu-grid">
      
        <div class="menu-column">
                <div class="menu-item">
                    
                    <ol>
    <p>Sebagai sebuah organisasi perangkat daerah yang memberikan pelayanan penerbitan dokumen-dokumen kependudukan dan pencatatan sipil kepada masyarakat, maka Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende tidak lepas dari peraturan perundang-undangan yang mengatur tentang pelayanan publik. Sesuai dengan pasal 4 Undang-undang No 25 Tahun 2009 tentang Pelayanan Publik, Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende harus memberikan pelayanan berasaskan:</p>
    
    <li>Kepentingan Umum</li>
    <li>Kepastian Hukum</li>
    <li>Kesamaan Hak</li>
    <li>Keseimbangan Hak dan Kewajiban</li>
    <li>Keprofesionalan</li>
    <li>Partisipatif</li>
    <li>Persamaan Perlakuan/Tidak Diskriminatif</li>
    <li>Keterbukaan</li>
    <li>Akuntabilitas</li>
    <li>Fasilitas dan Perlakuan Khusus bagi Kelompok Rentan</li>
    <li>Ketepatan Waktu</li>
    <li>Kecepatan, Kemudahan dan Keterjangkauan</li>

    <p> Adapun maklumat pelayanan yang dimiliki oleh Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende berbunyi sebagai berikut :</p>

    <div class="konten-box">
        <p class="teks-janji2"> MAKLUMAT PELAYANAN</p>
        <p class="teks-janji">“Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan sesuai standar pelayanan yang telah ditetapkan, dan apabila tidak menepati janji kami ini, kami siap menerima sanksi sesuai peraturan yang berlaku.”</p>
    </div>


    <p>Maklumat pelayanan adalah pernyataan tertulis yang berisi keseluruhan rincian kewajiban dan janji yang terdapat dalam standar pelayanan. Sedangkan standar pelayanan adalah tolok ukur yang dipergunakan sebagai pedoman penyelenggaraan pelayanan dan acuan penilaian kualitas pelayanan sebagai kewajiban dan janji penyelenggara kepada masyarakat dalam rangka pelayanan yang berkualitas, cepat, mudah, terjangkau dan terukur.</p>
    <p>Dengan adanya maklumat pelayanan tersebut, tentunya Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende berusaha untuk dapat memberikan pelayanan kepada masyarakat sesuai standar pelayanan yang berlaku, dan semoga maklumat tersebut bukan sekedar slogan, tapi benar–benar merupakan falsafah nilai–nilai yang diyakini dan dilaksanakan oleh seluruh karyawan Dinas Kependudukan dan Pencatatan Sipil Kabupaten Ende sesuai dengan tugas pokok, fungsi dan kewenangan.</p>
</ol>

                </div>

                <div class="update">
                    <p>{{ update }}</p>
                </div>
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
   name: 'MaklumatPelayananView',
   data() {
     return {
       pimpinan: {
         nama: "Lambertus Sigasare, ST. M.Eng",
         tanggalMenjabat: "7 Agustus 2022"
       },
       update: "Terakhir Update : 2 Oktober 2024",
       keterangan: "Susunan organisasi Dinas Kependudukan dan Pencacatan Sipil sesuai dengan Peraturan Pemerintah Nomor 18 Tahun 2016 tentang Perangkat Daerah, yang telah ditindaklanjuti dengan Peraturan Daerah Nomor 17 Tahun 2016 tentang Pembentukan dan Susunan Perangkat Daerah terdiri dari:"
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

.menu-column {
    display: flex;
    flex-direction: column; /* Mengatur item secara vertikal */
    gap: 20px; /* Menambahkan jarak antara menu item dan update */
}

.menu-item {
    height: auto; /* Sesuaikan tinggi otomatis */
    width: 100%; /* Mengisi lebar penuh */
    overflow: hidden;
    border: 1px solid #000000;
    border-radius: 0px;
    padding: 5px;
    background-color: #d9d9d9;
    text-align: left;
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

.konten-box {
  display: block;                 /* Menggunakan Flexbox */
  justify-content: center;      /* Mengatur konten secara horizontal di tengah */
  align-items: center;          /* Mengatur konten secara vertikal di tengah */
  height: 50px;                /* Sesuaikan tinggi sesuai kebutuhan */
  padding: 5px;               /* Memberikan padding dalam box */
  margin-top: 30px;
  margin-bottom: 75px;
}

.teks-janji {
    font-weight: bold;
    color: red;                  /* Mengubah warna teks menjadi merah */
    text-align: center;          /* Mengatur teks agar rata tengah */
}

.teks-janji2 {
    font-weight: bold;
    color: rgb(0, 0, 0);                  /* Mengubah warna teks menjadi merah */
    text-align: center;          /* Mengatur teks agar rata tengah */
}
 </style>
 