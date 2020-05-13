<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col class="col-12 col-lg-3">
				<div class="ml-12">
					<p>
						Hannah Thorogood<br />The Inkpot<br />Highgate Farm<br />Gorse
						Drove<br />Scredington<br />Sleaford<br />NG34 0AH
					</p>
					<p class="mt-8">
						<g-link to="/contact/">
							<v-btn small class="secondary"> Contact Hannah</v-btn>
						</g-link>
						to send a message
					</p>
				</div>
			</v-col>

			<v-col>
				<div class="outer-video-container px-sm-8">
					<div class="video-container">
						<div class="youtube-responsive-container">
							<iframe
								width="600"
								height="494"
								frameborder="0"
								scrolling="no"
								marginheight="0"
								marginwidth="0"
								src="https://www.openstreetmap.org/export/embed.html?bbox=-0.38018703460693365%2C52.93231852759099%2C-0.3235387802124024%2C52.95536039375423&amp;layer=mapnik&amp;marker=52.94384099466375%2C-0.35186290740966797"
								style="border: 1px solid black"
							></iframe>
						</div>
					</div>
					<small
						><a
							href="https://www.openstreetmap.org/?mlat=52.9438&amp;mlon=-0.3519#map=15/52.9438/-0.3519"
							>View Larger Map</a
						></small
					>
				</div>
				<p class="mt-8">Travel directions......</p>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Location',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot location and map' },
			{ name: 'keywords', content: 'location, map, address, find, directions' },
		],
	},
	data() {
		return {
			title: 'Location',
		};
	},
};
</script>

<style lang="sass" scoped>
.outer-video-container
	max-width: 800px

.video-container
// min-width: 250px
//   max-width: 444px

.youtube-responsive-container
  position: relative
  padding-bottom: 56.25%
  height: 0
  overflow: hidden

.youtube-responsive-container iframe
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
