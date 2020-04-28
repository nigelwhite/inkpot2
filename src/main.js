// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify';
import '~/assets/styles.sass';

import DefaultLayout from '~/layouts/Default.vue';

import 'vuetify/dist/vuetify.min.css';
import colors from 'vuetify/lib/util/colors';

export default function(Vue, { appOptions, head }) {
	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
	});

	head.link.push({
		rel: 'stylesheet',
		href:
			'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
	});

	const opts = {
		icons: {
			iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
		},
		// adjust the theme if you would like to
		theme: {
			themes: {
				light: {
					background: colors.brown.lighten5,
					// primary: colors.teal.darken2,
					primary: '#3e4618', // dark green. h text colour
					secondary: '#67682c', // medium green. download buttons
					accent: '#5c4831', // dark brown
					error: '#f7d3c1', // light brown
					info: '#b8bac1', // medium blue
					success: '#d7dcdf', // medium blue
					warning: '#cc9c84', // medium brown. instagram container background
				},
			},
		},
	};
	Vue.use(Vuetify);

	appOptions.vuetify = new Vuetify(opts);

	// Set default layout as a global component
	Vue.component('Layout', DefaultLayout);
}
