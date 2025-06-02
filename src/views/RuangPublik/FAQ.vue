<template>
  <div class="ruang-publik">
    <header>
      <h1>FAQ</h1>
      <p>
        FAQ (Frequently Asked Question) merupakan daftar pertanyaan-pertanyaan
        yang sering diajukan oleh masyarakat. FAQ pada Layanan Dukcapil juga
        disertakan dengan jawaban, sehingga memudahkan bagi masyarakat jika ada
        pertanyaan
        <br />atau kendala yang sering dialami. Berikut langkah untuk mengakses
        FAQ adalah dengan memilih pertanyaan di bawah ini.
        <br />
        <br />
      </p>
    </header>

    <div class="content-container">
      <!-- Bagian FAQ -->
      <section class="faq-list">
        <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
          <div class="faq-question" @click="toggleAnswer(index)">
            <i class="fas fa-comment"></i> {{ faq.question }}
          </div>
          <div class="faq-answer" v-if="activeIndex === index">
            {{ faq.answer }}
          </div>
        </div>
      </section>
      
      <aside class="sidebar">
        <div class="logo">
          <img src="@/assets/Disdukcapil.png" alt="Logo Disdukcapil" />
        </div>

        <div class="card1">
          <h3>MOTTO</h3>
          <p>“Pelayanan Ramah, Mudah, Cepat dan Akuntabel”</p>
        </div>

        <div class="card2">
          <h3>KOMITMEN</h3>
          <ol>
            <li>Berjanji dan sanggup untuk melaksanakan pelayanan yang</li>
            <li>Berjanji akan memberikan pelayanan</li>
            <li>Siap menerima sanksi dari Pimpinan</li>
          </ol>
        </div>

        <div class="card3">
          <h3>MAKLUMAT PELAYANAN</h3>
          <ol>
            <li>
              Berjanji dan memiliki kesanggupan untuk melaksanakan pelayanan
              publik
            </li>
            <li>
              Memberikan pelayanan publik sesuai dengan kewajiban dan akan
            </li>
            <li>
              Bersedia untuk menerima sanksi dan/atau memberikan kompensasi
              sesuai dengan ketentuan peraturan
            </li>
          </ol>
        </div>

        <div class="kepala-dinas">
          <p>
            KEPALA DINAS <br />KEPENDUDUKAN DAN PENCATATAN SIPIL <br />KABUPATEN
            ENDE
          </p>
          <p class="nama"><strong>Lambertus Sigasare, ST. M.Eng</strong></p>
          <p class="nip">Pembina Tk. I</p>
          <p class="nip">NIP. 197510232002121006</p>
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
      activeIndex: null,
      faqs: [
        {
          question: "Apakah saya bisa mengubah data dalam akta kelahiran?",
          answer:
            "Ya, Anda dapat mengubah data dalam Akta Kelahiran jika terdapat kesalahan. Proses perubahan dilakukan melalui Dinas Dukcapil.",
        },
        {
          question: "Bagaimana cara mengetahui keaslian kartu keluarga?",
          answer:
            "Anda dapat memeriksa keaslian Kartu Keluarga melalui barcode yang tertera di dokumen atau mengunjungi Dinas Dukcapil.",
        },
        {
          question: "Bagaimana jika akta kelahiran saya hilang?",
          answer:
            "Jika akta kelahiran Anda hilang, Anda dapat mengajukan permohonan cetak ulang di Dinas Dukcapil dengan melampirkan dokumen pendukung.",
        },
        {
          question:
            "Saya baru pindah domisili. Apakah perlu membuat KTP-EL baru?",
          answer:
            "Ya, Anda perlu memperbarui KTP-EL Anda dengan data alamat baru. Proses ini dapat dilakukan di Dinas Dukcapil setempat.",
        },
        {
          question: "Bagaimana cara mengetahui keaslian akta kelahiran?",
          answer:
            "Keaslian akta kelahiran dapat dicek melalui tanda tangan elektronik (barcode) atau mengonfirmasinya di Dinas Dukcapil.",
        },
        {
          question: "Apakah Kartu Keluarga memiliki masa berlaku?",
          answer:
            "Tidak, Kartu Keluarga tidak memiliki masa berlaku, namun harus diperbarui jika ada perubahan data.",
        },
        {
          question:
            "Apa yang harus saya lakukan jika data dalam kartu keluarga saya ada yang salah?",
          answer:
            "Jika ada kesalahan data dalam Kartu Keluarga, Anda harus segera mengajukan pembetulan ke Dinas Dukcapil dengan membawa dokumen pendukung.",
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
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.ruang-publik {
  max-width: 100%;
  padding: 20px 50px;
}

header h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
  margin-top: 20px;
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


.info-section h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.info-section p,
.info-section ul {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.faq-item {
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.faq-question {
  font-size: 20px;
  font-weight: normal;
  color: #333;
  display: flex;
  align-items: center;
  gap: 10px;
}

.faq-question i {
  font-size: 24px;
  color: #65a5ca;
}

.faq-answer {
  font-size: 18px;
  color: #666;
  margin-top: 10px;
  padding: 5px 0;
  border-top: 1px solid #ddd;
}

.faq-item:hover {
  background-color: #f0f9ff;
}

.faq-question:hover i {
  color: #5093b8;
}

p {
  font-size: 18px;
  color: #333;
  line-height: 1.8;
}

/* Sidebar */
.sidebar {
  width: 350px;
  background-color: #8bbbd7;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-family: "Arial", sans-serif;
}

.logo img {
  width: 150px;
  margin-bottom: 30px;
}

.card1 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 150px;
}

.card2 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 280px;
}

.card3 {
  background: white;
  padding: 15px;
  margin : 0 auto;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 420px;
}

.card h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
}

.card1 h3,
.card2 h3,
.card3 h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px; 
  text-align: left;
}

.card p, .card ol {
  font-size: 8px;
  text-align: left;
  color: #333;
  margin: 0;
  padding: 5px;
}

.card1 p, .card1 li,
.card2 p, .card2 li,
.card3 p, .card3 li {
  text-align: left;
}

.card ol {
  padding-left: 18px;
}

.kepala-dinas {
  font-size: 18px;
  color: #333;
  text-align: center;
  margin-top: 50px;
  font-weight: bold;
}

.kepala-dinas .nama {
  margin-top: 100px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: underline;
}

.kepala-dinas .nip {
  font-weight: bold;
  color: #555;
  font-size: 16px;
}
</style>
