<template>
  <div class="ruang-download">

    <header>
      <h1>IKM</h1>
      <p> Berikut merupakan Indeks Kepuasan Masyarakat (IKM) dalam menggunakan situs web Disdukcapil Kabupaten Ende</p>
        <br>
        <br>
    </header>

    <div class="content-container">
      <!-- Bagian Menu -->
      <section class="menu">
        <table class="menu-table">
              <tbody>
                <tr>
                  <td><i class="fas fa-smile"></i></td>
                  <td><router-link :to="{ name: 'IKMPertama' }">Indeks Kepuasan Masyarakat Semester I Tahun 2024</router-link></td>
                </tr>
                <tr>
                <td><i class="fas fa-smile"></i></td>
                  <td><router-link :to="{ name: 'IKMKedua' }">Indeks Kepuasan Masyarakat Semester III Tahun 2023</router-link></td>
                </tr>
                <tr>
                    <td><i class="fas fa-smile"></i></td>
                  <td><router-link :to="{ name: 'IKMKetiga' }">Indeks Kepuasan Masyarakat Semester I Tahun 2023</router-link></td>
                </tr>
                
                <!-- Tambahkan baris lainnya sesuai kebutuhan -->
              </tbody>
            </table>
      </section>

      <!-- Sidebar dengan Info dan Pencarian -->
      <aside class="sidebar">
        <div class="image-container">
        <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
      </div>
      </aside>
    </div>

    <!-- Pagination -->
   

  </div>
</template>

<script>
export default {
  name: "RuangIKMView",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');


.ruang-download {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: left;
  color: #65A5CA;
  margin-bottom: 30px;
  margin-top: 20px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.menu {
  flex: 2;
}

.menu-table {
  width: 90%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 20px;
  color: #333;
}

.menu-table td i {
  font-size: 24px;
  color: #65A5CA;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-right: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-image {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.info-section h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.info-section p, .info-section ul {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination nav button {
  background-color: #65A5CA;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  border-radius: 5px;
  cursor: pointer;
}

.pagination nav button:hover {
  background-color: #5093b8;
}

p {
  font-size: 18px; /* Ubah ukuran font, misalnya dari default 14px ke 18px */
  color: #333; /* Warna teks agar lebih jelas */
  line-height: 1.8; /* Menambah jarak antar baris agar lebih nyaman dibaca */
}
</style>