<template>
<div>
    <h1>Data Jumlah Anak Usia 0-18 Tahun</h1>
    <table class="box-bordered-table">
      <thead>
        <tr>
          <th></th>
          <th>Nama Desa/Kelurahan</th>
          <th>Jumlah Anak</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i class="fas fa-folder"></i></td>
          <td>Desa A</td>
          <td>100</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Desa B</td>
          <td>120</td>
        </tr>
        <!-- Tambahkan baris lainnya sesuai kebutuhan -->
      </tbody>
    </table>
  </div>
</template>
  
 
<script>
  export default {
    name: 'RuangBukuTamuView',
  };
</script>
  
  <style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border-top: 1px solid black;  /* Garis horizontal */
  border-bottom: 1px solid black;
  padding: 8px;
  text-align: left;
}

/* Tambahkan garis luar di sisi kiri, kanan, atas, dan bawah tabel */
.box-bordered-table {
  border: 1px solid black; /* Garis kotak luar */
}

.box-bordered-table th, .box-bordered-table td {
  border-left: none;
  border-right: none;
}

td i {
  font-size: 2.0em; /* Ukuran ikon */
}
  </style>
  