/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {
  createVuetify
} from 'vuetify'

import {ja, ar} from  'vuetify/locale'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({

  // ! change direction from vuetify
  locale: {
    locale: 'jp',
    fallback: 'ar',
    messages: {ja, ar}
  },
  
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#55422e',
          secondary: '#6f5128',
        }
      },
      dark: {
        colors: {
          primary: '#ff0000',
          secondary: '#d2f4ae'
        }
      },
    },
    options: {
      customProperties: true,
    }
  },
})
