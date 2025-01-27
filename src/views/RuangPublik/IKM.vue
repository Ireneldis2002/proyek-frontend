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
.ruang-download {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
}

header h1 {
  font-size: 28px;
  color: #65A5CA;
  margin-bottom: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.menu {
  flex: 2;
}

.menu-table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  color: #333;
}

.menu-table td i {
  font-size: 24px;
  color: #65A5CA;
}

.sidebar {
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar-content {
  text-align: center;
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
</style>