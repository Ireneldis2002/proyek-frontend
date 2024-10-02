// src/plugins/vuetifi.js
import 'vuetify/styles'; // Impor gaya Vuetify
import { createVuetify } from 'vuetify'; // Impor createVuetify dari Vuetify
import { mdi } from 'vuetify/iconsets/mdi'; // Jika menggunakan ikon Material Design Icons

const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi,
    },
  },
});

export default vuetify;
