<template>
    <h1>FORMULIR PERSYARATAN PELAYANAN ADMINDUK</h1>
    
        <div class="profil-visi-misi">
          <!-- Ruang Publik Section -->
          <section class="menu-grid">
            <div class="menu-column">
              <div class="menu-item">
                <table class="box-bordered-table">
                  <tbody>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.04 Surat Pernyataan Tidak Memiliki Dokumen Kependudukan </b></td>
                      <td>
                        <a href="/assets/F-1.04_Surat_Pernyataan_Tidak_Memiliki_Dokumen_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b> F-1.06 Surat Pernyataan Perubahan Elemen Data Kependudukan</b></td>
                      <td>
                        <a href="/assets/F-1.06_Surat_Pernyataan_Perubahan_Elemen_Data_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.07 Surat Kuasa Dalam Pelayanan Administrasi Kependudukan</b></td>
                      <td>
                        <a href="/assets/F-1.07_Surat_Kuasa_Dalam_Pelayanan_Administrasi_Kependudukan.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.03 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran</b></td>
                      <td>
                        <a href="/assets/F-2.03_SPTJM_Kebenaran_Data_Kelahiran.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-2.04 Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri	
                    </b></td>
                      <td>
                        <a href="/assets/F-2.04_SPTJM_Kebenaran_Sebagai_Pasangan_Suami_Isteri.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td><i class="fas fa-file-pdf"></i></td>
                      <td><b>F-1.05 Surat Pernyataan Tanggung Jawab Mutlak Perkawinan Perceraian Belum Tercatat</b></td>
                      <td>
                        <a href="/assets/F-1.05_SPTJM_Perkawinan_Perceraian_Belum_Tercatat.pdf" download>
                          <i class="fas fa-download"></i>
                        </a>
                      </td>
                    </tr>
                    
                    <!-- Tambahkan baris lainnya sesuai kebutuhan -->
                  </tbody>
                </table>
              </div>
      
              </div>
          </section>
      
          <!-- Profil Pimpinan Section -->
          <div>
            <section class="profil-pimpinan">
              <div class="pimpinan-content">
                <img src="@/assets/Disdukcapil.png" alt="Foto Pimpinan" class="pimpinan-photo" />
                <div class="sidebar-section">
                  <div class="judul-sidebar">
                    <p>MOTTO</p>
                  </div>
                  <div class="isi-sidebar">
                    <p>"PELAYANAN RAMAH, MUDAH, CEPAT DAN AKUNTABEL"</p>
                  </div>
                </div>
                <div class="sidebar-section">
                  <div class="judul-sidebar">
                    <p>KOMITMEN</p>
                  </div>
                  <div class="isi-sidebar">
                    <ol>
                      <li>Berjanji dan sanggup untuk melaksanakan Pelayanan yang transparan sesuai dengan Standar Pelayanan yang ditetapkan</li>
                      <li>Berjanji akan memberikan Pelayanan sesuai dengan hak dan kewajiban serta melakukan perbaikan secara terus menerus</li>
                      <li>Siap menerima sanksi dari Pimpinan apabila pelayanan yang kami berikan tidak sesuai dengan Standar Pelayanan yang ada</li>
                    </ol>
                  </div>
                </div>
                <div class="sidebar-section">
                  <div class="judul-sidebar">
                    <p>MAKLUMAT PELAYANAN</p>
                  </div>
                  <div class="isi-sidebar">
                    <ol>
                      <li>Berjanji dan memiliki kesanggupan untuk melaksanakan pelayanan publik sesuai dengan Standar Pelayanan Publik yang telah ditetapkan</li>
                      <li>Memberikan pelayanan publik sesuai dengan kewajiban dan akan melakukan perbaikan secara terus-menerus</li>
                      <li>Bersedia untuk menerima sanksi dan/atau memberikan kompensasi sesuai dengan ketentuan peraturan perundang-undangan apabila pelayanan publik yang diberikan tidak sesuai dengan standar yang ditetapkan</li>
                    </ol>
                  </div>
                  <div class="sign">
                    <p>KEPALA DINAS<br/>KEPENDUDUKAN DAN PENCATATAN SIPIL<br/>KABUPATEN ENDE</p>
                    <p>(Lambertus Sigasare, ST.M.Eng)<br/>Pembina Tk. I<br/>197510232002121006</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        
    
      </template>
    
    <script>
    
      export default {
        name: 'RuangDownloadFormulirView',
    
      };
    </script>
    
    <style scoped>
      .profil-visi-misi {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 40px;
        padding: 10px;
      }
      
      .profil-pimpinan {
        background-color: #727e89;
        text-align: center;
        border: 2px solid #000;
        width: 300px;
      }
      
      .pimpinan-content {
        align-items: center;
      }
      
      .pimpinan-photo {
        width: 150px;
        height: auto;
        margin: 10px;
      }
      
      .judul-sidebar {
        font-size: 20px;
        font-weight: bold;
        color: #000;
        text-align: left;
        margin-bottom: 20px;
      }
      
      .isi-sidebar {
        font-size: 16px;
        color: #0b0b0b;
        text-align: left;
        margin-top: 20px;
      }
      
      .sign {
        font-size: 16px;
        color: #0b0b0b;
        text-align: center;
        margin-top: 20px;
      }
      
      .menu-grid {
        display: flex;
        flex-direction: column;
        margin: 30px 0 50px 0;
      }
      
      .menu-column {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      
      .menu-item {
        width: 120%;
        height: 100%;
        overflow: hidden;
        border: 1px solid #000;
        padding: 5px;
        background-color: #fff;
        text-align: left;
      }
      
      
      
      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      th, td {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 8px;
        text-align: left;
      }
      
      /* Tambahkan garis luar di sisi kiri, kanan, atas, dan bawah tabel */
      .box-bordered-table {
        border: 1px solid black;
      }
      
      .box-bordered-table th, .box-bordered-table td {
        border-left: none;
        border-right: none;
      }
      
      td i {
        font-size: 2.0em; /* Ukuran ikon */
      }
    
      
      /* Styling untuk sidebar section */
      .sidebar-section {
        border: 1px solid white;
        margin: 20px;
        background-color: white;
      }
    </style>