// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import '~/assets/styles.sass'

import DefaultLayout from '~/layouts/Default.vue'

import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

export default function(Vue, { appOptions, head }) {
	head.link.push({
		rel: 'stylesheet',
		href:
			'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css'
	})

	head.link.push({
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900'
	})

	const opts = {
		icons: {
			iconfont: 'fa' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
		},
		// adjust the theme if you would like to
		theme: {
			themes: {
				light: {
					// primary: colors.teal.darken2,
					// primary: '#ff4137'
					// secondary: '#424242',
					// accent: '#82B1FF',
					// error: '#FF5252',
					// info: '#2196F3',
					// success: '#4CAF50',
					// warning: '#FFC107'
				}
			}
		}
	}
	Vue.use(Vuetify)

	appOptions.vuetify = new Vuetify(opts)

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout)
}
