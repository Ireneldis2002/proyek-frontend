<template>
  <div class="ruang-download">

    <header>
      <h1>FAQ</h1>
      <p>
        FAQ (Frequently Asked Question) merupakan daftar pertanyaan-pertanyaan yang sering 
        diajukan oleh masyarakat. FAQ pada Layanan Dukcapil juga disertakan dengan jawaban, 
        sehingga memudahkan bagi masyarakat jika ada pertanyaan 
        <br>atau kendala yang sering dialami. Berikut langkah untuk mengakses FAQ adalah dengan memilih pertanyaan di bawah ini.
        <br>
        <br>
      </p>
    </header>

    <div class="content-container">
      <!-- Bagian FAQ -->
      <section class="faq-list">
        <div
          class="faq-item"
          v-for="(faq, index) in faqs"
          :key="index"
        >
          <div
            class="faq-question"
            @click="toggleAnswer(index)"
          >
            <i class="fas fa-comment"></i> {{ faq.question }}
          </div>
          <div
            class="faq-answer"
            v-if="activeIndex === index"
          >
            {{ faq.answer }}
          </div>
        </div>
      </section>
      <aside class="sidebar">
        <div class="image-container">
        <img src="@/assets/SidebarStandar.png" alt="Gambar Profil" />
      </div>
      </aside>
      
    </div>
  </div>
</template>


<script>
export default {
  name: "RuangFAQView",
  data() {
    return {
      activeIndex: null, // Indeks pertanyaan yang aktif (jawaban sedang terlihat)
      faqs: [
        {
          question: "Apakah saya bisa mengubah data dalam akta kelahiran?",
          answer: "Ya, Anda dapat mengubah data dalam Akta Kelahiran jika terdapat kesalahan. Proses perubahan dilakukan melalui Dinas Dukcapil.",
        },
        {
          question: "Bagaimana cara mengetahui keaslian kartu keluarga?",
          answer: "Anda dapat memeriksa keaslian Kartu Keluarga melalui barcode yang tertera di dokumen atau mengunjungi Dinas Dukcapil.",
        },
        {
          question: "Bagaimana jika akta kelahiran saya hilang?",
          answer: "Jika akta kelahiran Anda hilang, Anda dapat mengajukan permohonan cetak ulang di Dinas Dukcapil dengan melampirkan dokumen pendukung.",
        },
        {
          question: "Saya baru pindah domisili. Apakah perlu membuat KTP-EL baru?",
          answer: "Ya, Anda perlu memperbarui KTP-EL Anda dengan data alamat baru. Proses ini dapat dilakukan di Dinas Dukcapil setempat.",
        },
        {
          question: "Bagaimana cara mengetahui keaslian akta kelahiran?",
          answer: "Keaslian akta kelahiran dapat dicek melalui tanda tangan elektronik (barcode) atau mengonfirmasinya di Dinas Dukcapil.",
        },
        {
          question: "Apakah Kartu Keluarga memiliki masa berlaku?",
          answer: "Tidak, Kartu Keluarga tidak memiliki masa berlaku, namun harus diperbarui jika ada perubahan data.",
        },
        {
          question: "Apa yang harus saya lakukan jika data dalam kartu keluarga saya ada yang salah?",
          answer: "Jika ada kesalahan data dalam Kartu Keluarga, Anda harus segera mengajukan pembetulan ke Dinas Dukcapil dengan membawa dokumen pendukung.",
        },
      ],
    };
  },
  methods: {
    toggleAnswer(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
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
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.menu-table td {
  padding: 10px;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background-color: #ffffff; /* Warna putih seperti tabel sebelumnya */
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Tambahkan sedikit bayangan */
}

.faq-question {
  font-size: 20px; /* Ukuran huruf sama seperti tabel */
  font-weight: normal; /* Font tidak tebal */
  color: #333; /* Warna teks default */
  display: flex;
  align-items: center;
  gap: 10px;
}

.faq-question i {
  font-size: 24px; /* Ukuran ikon */
  color: #65A5CA; /* Warna biru seperti gambar */
}

.faq-answer {
  font-size: 18px; /* Ukuran huruf jawaban lebih kecil */
  color: #666; /* Warna teks jawaban lebih gelap */
  margin-top: 10px;
  padding: 5px 0;
  border-top: 1px solid #ddd; /* Tambahkan garis pemisah */
}

.faq-item:hover {
  background-color: #f0f9ff; /* Warna latar belakang saat hover (biru muda) */
}

.faq-question:hover i {
  color: #5093b8; /* Warna ikon lebih gelap saat hover */
}

p {
  font-size: 18px; /* Ubah ukuran font, misalnya dari default 14px ke 18px */
  color: #333; /* Warna teks agar lebih jelas */
  line-height: 1.8; /* Menambah jarak antar baris agar lebih nyaman dibaca */
}


</style>
