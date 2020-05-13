// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
	rule
		.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [path.resolve(__dirname, './src/sass/*.sass')],
		});
}

module.exports = {
	siteName: 'The Inkpot',
	siteDescription: 'A permaculture livestock farm in Lincolnshire',
	meta: [
		{ charset: 'utf-8' },
		{ lang: 'en' },
		{
			name: 'keywords',
			content:
				'Permaculture, organic, farm, Lincolnshire, demonstration, livestock',
		},
	],

	chainWebpack(config) {
		// Load variables for all vue-files
		const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];

		types.forEach((type) => {
			addStyleResource(config.module.rule('sass').oneOf(type));
		});
	},
	plugins: [
		{
			use: '@zefman/gridsome-source-instagram',
			options: {
				username: 'inkpotfarm', // Instagram username
				typeName: 'InstagramPhoto', // The GraphQL type you want the photos to be added under. Defaults to InstagramPhoto
			},
		},
	],
};
