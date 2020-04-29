<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col>
				<p>
					Address
				</p>
				<p>Travel directions</p>
				<p>etc</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<v-img :src="img2" max-width="600"></v-img>
			</v-col>
			<v-col class="px-lg-12">
				<v-img :src="img1" max-width="400" class="mx-auto"></v-img>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Inkpot | Contact',
	},
	data() {
		return {
			title: 'Contact The Inkpot',
		};
	},
	props: {
		img1: {
			type: String,
			default: 'https://via.placeholder.com/400x400.png?text=Google+map',
		},
		img2: {
			type: String,
			default:
				'https://via.placeholder.com/600x400.png?text=Contact+form+for+messages',
		},
	},
};
</script>

<style lang="sass" scoped>
.outer-video-container
	padding: 5%

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
