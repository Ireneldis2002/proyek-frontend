<template>
  <div class="data-penduduk">
    <h1>Kelompok Umur</h1>
    <p class="update">Terakhir Update: 2 Oktober 2024</p>
    <br />
    <br />
    <div class="content-container">
      <!-- Bagian Teks -->
      <div class="content-section">
        <div class="menu-column">
          <div class="menu-item">
            <p>
              <b>
                Jumlah Penduduk Menurut Kelompok Umur dan Jenis Pendidikan
                Berdasarkan Data Konsolidasi Bersih (DKB) Semester I</b
              >
            </p>
            <p><b>(30 Juni 2022)</b></p>
            <p><b>Per Desa-Kelurahan Tahun 2022</b></p>
            <br />
            <ol>
              <!-- Tabel 1 -->
              <table
                border="1"
                cellpadding="10"
                cellspacing="0"
                style="
                  width: 100%;
                  margin-top: 20px;
                  border-collapse: collapse;
                  text-align: left;
                "
              >
                <thead>
                  <tr>
                    <th>UMUR</th>
                    <th>TIDAK/BLM SEKOLAH</th>
                    <th>BELUM TAMAT SD</th>
                    <th>TAMAT SD</th>
                    <th>SLTP</th>
                    <th>SLTA</th>
                    <th>DIPLOMA I/II</th>
                    <th>DIPLOMA III</th>
                    <th>STRATA I</th>
                    <th>STRATA II</th>
                    <th>STRATA III</th>
                    <th>JUMLAH PENDUDUK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>00-04</td>
                    <td>7561</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>7561</td>
                  </tr>
                  <tr>
                    <td>05-09</td>
                    <td>16116</td>
                    <td>4872</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>20989</td>
                  </tr>
                  <tr>
                    <td>10-14</td>
                    <td>12454</td>
                    <td>14374</td>
                    <td>2072</td>
                    <td>27</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>1</td>
                    <td>0</td>
                    <td>0</td>
                    <td>28928</td>
                  </tr>
                  <tr>
                    <td>15-19</td>
                    <td>3198</td>
                    <td>12027</td>
                    <td>5900</td>
                    <td>5476</td>
                    <td>2283</td>
                    <td>0</td>
                    <td>1</td>
                    <td>2</td>
                    <td>0</td>
                    <td>0</td>
                    <td>28887</td>
                  </tr>
                  <tr>
                    <td>20-24</td>
                    <td>550</td>
                    <td>5325</td>
                    <td>4916</td>
                    <td>4814</td>
                    <td>10930</td>
                    <td>20</td>
                    <td>185</td>
                    <td>302</td>
                    <td>1</td>
                    <td>1</td>
                    <td>27044</td>
                  </tr>
                  <tr>
                    <td>25-29</td>
                    <td>269</td>
                    <td>1344</td>
                    <td>4182</td>
                    <td>4697</td>
                    <td>8864</td>
                    <td>87</td>
                    <td>769</td>
                    <td>2145</td>
                    <td>25</td>
                    <td>0</td>
                    <td>22382</td>
                  </tr>
                  <tr>
                    <td>30-34</td>
                    <td>234</td>
                    <td>1495</td>
                    <td>5323</td>
                    <td>3025</td>
                    <td>7188</td>
                    <td>295</td>
                    <td>799</td>
                    <td>2951</td>
                    <td>70</td>
                    <td>3</td>
                    <td>21383</td>
                  </tr>
                  <tr>
                    <td>35-39</td>
                    <td>270</td>
                    <td>1796</td>
                    <td>6215</td>
                    <td>3169</td>
                    <td>5907</td>
                    <td>523</td>
                    <td>641</td>
                    <td>2063</td>
                    <td>67</td>
                    <td>0</td>
                    <td>20651</td>
                  </tr>
                  <tr>
                    <td>40-44</td>
                    <td>276</td>
                    <td>1972</td>
                    <td>6778</td>
                    <td>2852</td>
                    <td>4607</td>
                    <td>303</td>
                    <td>343</td>
                    <td>1469</td>
                    <td>62</td>
                    <td>1</td>
                    <td>18663</td>
                  </tr>
                  <tr>
                    <td>45-49</td>
                    <td>288</td>
                    <td>2091</td>
                    <td>7021</td>
                    <td>2818</td>
                    <td>3780</td>
                    <td>207</td>
                    <td>243</td>
                    <td>962</td>
                    <td>70</td>
                    <td>4</td>
                    <td>17484</td>
                  </tr>
                  <tr>
                    <td>50-54</td>
                    <td>368</td>
                    <td>2257</td>
                    <td>6064</td>
                    <td>2182</td>
                    <td>3569</td>
                    <td>189</td>
                    <td>165</td>
                    <td>845</td>
                    <td>62</td>
                    <td>1</td>
                    <td>15702</td>
                  </tr>
                  <tr>
                    <td>55-59</td>
                    <td>468</td>
                    <td>2573</td>
                    <td>5975</td>
                    <td>1409</td>
                    <td>2455</td>
                    <td>199</td>
                    <td>133</td>
                    <td>593</td>
                    <td>26</td>
                    <td>3</td>
                    <td>13834</td>
                  </tr>
                  <tr>
                    <td>60-64</td>
                    <td>558</td>
                    <td>2691</td>
                    <td>5465</td>
                    <td>992</td>
                    <td>1257</td>
                    <td>196</td>
                    <td>124</td>
                    <td>292</td>
                    <td>26</td>
                    <td>3</td>
                    <td>11604</td>
                  </tr>
                  <tr>
                    <td>65-69</td>
                    <td>463</td>
                    <td>2000</td>
                    <td>3787</td>
                    <td>650</td>
                    <td>641</td>
                    <td>81</td>
                    <td>75</td>
                    <td>106</td>
                    <td>14</td>
                    <td>2</td>
                    <td>7819</td>
                  </tr>
                  <tr>
                    <td>70-74</td>
                    <td>524</td>
                    <td>1720</td>
                    <td>2725</td>
                    <td>446</td>
                    <td>374</td>
                    <td>69</td>
                    <td>44</td>
                    <td>46</td>
                    <td>3</td>
                    <td>1</td>
                    <td>5952</td>
                  </tr>
                  <tr>
                    <td>>=75</td>
                    <td>1030</td>
                    <td>2418</td>
                    <td>3001</td>
                    <td>416</td>
                    <td>507</td>
                    <td>25</td>
                    <td>50</td>
                    <td>18</td>
                    <td>1</td>
                    <td>2</td>
                    <td>7468</td>
                  </tr>
                  <tr>
                    <td><b>Jumlah</b></td>
                    <td>44627</td>
                    <td>58955</td>
                    <td>69425</td>
                    <td>32973</td>
                    <td>52362</td>
                    <td>2194</td>
                    <td>3572</td>
                    <td>11795</td>
                    <td>427</td>
                    <td>21</td>
                    <td>276351</td>
                  </tr>
                </tbody>
              </table>
            </ol>
          </div>
        </div>
      </div>

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
    <p class="update">Sumber : Data Konsolidasi Bersih Semester I Tahun 2020</p>
  </div>
</template>

<script>
export default {
  name: "DataJumlahUmurView",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.data-penduduk {
  max-width: 100%;
  padding: 20px 50px;
}

h1 {
  font-size: 32px;
  text-align: left;
  color: #65a5ca;
  margin-bottom: 30px;
}

.content-container {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}

.content-section {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-left: 20px;
}

.menu-item {
  height: auto;
  width: 100%;
  overflow: hidden;
  border: 1px solid #000000;
  border-radius: 0px;
  padding: 10px;
  background-color: #ffffff;
  text-align: left;
  word-wrap: break-word;
  white-space: normal;
}

.menu-item p {
  margin: 5px 0;
  padding-left: 10px;
  text-align: left;
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

.content-item {
  position: relative;
  padding-left: 25px;
}

.line {
  width: 5px;
  height: 100%;
  background-color: #8bbbd7;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 3px;
}

h2 {
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin: 0 0 10px 0;
}

p {
  font-size: 22px;
  color: #333;
  margin: 0;
}

ol,
ul {
  padding-left: 40px;
}

li {
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
}

.content-section ol {
  list-style-position: outside;
  padding-left: 40px;
  font-size: 22px;
}

.content-section li {
  margin-left: 0;
  font-size: 22px;
}

.update {
  margin-top: 40px;
  font-size: 14px;
  color: #666;
  font-style: italic;
  text-align: left;
  display: block;
  clear: both;
}

/* Styling Tabel */
.table-container {
  margin-top: 30px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}

th {
  background-color: #8bbbd7;
  color: white;
  font-weight: bold;
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
  padding: 0;
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
