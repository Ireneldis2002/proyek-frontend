<template>
  <div class="ruang-buku-tamu">
    <header>
      <h1>Buku Tamu</h1>
      <button class="isi-buku-tamu" @click="keHalamanIsiBukuTamu">Isi Buku Tamu</button>

    </header>

    <div class="content-container">
      <!-- Daftar Buku Tamu -->
      <main class="buku-tamu-container">
        <div class="buku-tamu-entry" v-for="(tamu, index) in daftarTamu" :key="index">
          <div class="entry-header">
            <strong>{{ tamu.nama }}</strong>
            <span>{{ tamu.tanggal }}</span>
          </div>
          <p class="entry-message">{{ tamu.pesan }}</p>
          <p class="entry-email">ditulis oleh: {{ tamu.email }}</p>
        </div>
      </main>

      <!-- Sidebar -->
      <aside class="sidebar">
        <div class="image-container">
          <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
        </div>
      </aside>
    </div>

    <!-- Pagination -->
    <nav class="pagination">
      <button>&laquo;&laquo;</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>&raquo;&raquo;</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "RuangBukuTamuView",
  data() {
    return {
      daftarTamu: [
        { nama: "Andi Pratama", tanggal: "15-Oktober-2024", pesan: "Ingin mengetahui prosedur pengurusan KTP secara online.", email: "andi.pratama@email.com" },
        { nama: "Rina Setiawan", tanggal: "14-Oktober-2024", pesan: "Mengajukan permohonan akta kelahiran. Tapi kenapa website sering lambat diakses pada jam kerja.", email: "setiawan.rina@email.com" },
        { nama: "Fajar Wijaya", tanggal: "13-Oktober-2024", pesan: "Mengecek status pengurusan Kartu Keluarga.", email: "fwijaya123@email.com" },
      ]
    };
  },
  methods: {
    keHalamanIsiBukuTamu() {
      this.$router.push('/ruang-publik/isi-buku-tamu');
    }
  }
};
</script>

<style scoped>
.ruang-buku-tamu {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

header h1 {
  font-size: 28px;
  color: #65A5CA;
}

.isi-buku-tamu {
  background-color: #8bbbd7;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
}

.content-container {
  display: flex;
  gap: 20px;
}

.buku-tamu-container {
  flex: 2;
}

.buku-tamu-entry {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  background: white;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
}

.entry-message {
  margin: 10px 0;
}

.entry-email {
  font-size: 12px;
  color: gray;
}

.sidebar {
  flex: 1;
  background-color: #f8f9fa;
  padding: 20px;
}

.image-container img {
  width: 100%;
  border-radius: 10px;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination button {
  background: #65A5CA;
  color: white;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
