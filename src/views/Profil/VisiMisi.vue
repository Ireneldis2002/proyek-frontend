<template>
   <h1>Visi dan Misi</h1>
  <div class="profil-visi-misi">

    <!-- Visi Misi Section -->
    <section class="menu-grid">
     
      <div class="menu-item">
        <div style="text-align: center;">
          <h2>Visi</h2>
          <p>{{ visi }}</p> 
        </div>
      </div>
      <div class="menu-item">
        <div style="text-align: center;">
        <h2>Misi Ke-5</h2>
        <p>{{  misi  }}</p>  
        </div>
      </div>
      <div class="menu-items">
        <div style="text-align: center;">
        <h2>Program</h2>
        <p>{{  program  }}</p>  
        </div>
      </div>
      <div class="menu-items">
        <div style="text-align: center;">
        <h2>Tujuan</h2>
        <p>{{  tujuan  }}</p>  
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
        <li>Sekolah Menengah</li>
      </ul>
    </td>

    </div>
    
</section>
</div>

  </div>
</template>

<script>
export default {
  name: 'VisiMisiView',
  data() {
    return {
      pimpinan: {
        nama: "Lambertus Sigasare, ST. M.Eng",
        tanggalMenjabat: "7 Agustus 2022"
      },
      visi: "Menjadi organisasi terbaik dalam melayani masyarakat.",
      misi: "Menciptakan Pemerintah yang Bersih Transparan dan Berkualitas serta rasa Aman, Tertib dan Nyaman bagi Pengembangan Usaha dan Kehidupan Masyarakat",
      tujuan: "Terwujudnya Tata Kelola Pemerintah yang Baik (Good Govermance)",
      program: "Reformasi untuk Peningkatan Pelayanan Publik",
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


.tujuan {
  text-align: left;
  color: #000000;
  margin-top: 50px;
  border: 3px solid #000000;
  width: 100%;
  background-color: #ffffff;
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
  justify-content: center;
  align-items: center;
  height: 100px; /* Reduced height for smaller images */
  overflow: hidden; /* Hide overflow if the image is larger */
  border: 2px solid #000000;
  border-radius: 25px;
  padding: 20px;
  background-color: #d9d9d9;
  margin-right: 25px;
  margin-bottom: 25px;
}
.menu-items {
  justify-content: center;
  align-items: center;
  height: 100px; /* Reduced height for smaller images */
  overflow: hidden; /* Hide overflow if the image is larger */
  border: 2px solid #000000;
  border-radius: 25px;
  padding: 20px;
  margin-right: 25px;
}


</style>
