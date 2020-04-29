<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col>
				<p>
					Learn text
				</p>
			</v-col>
			<v-col class="px-lg-12 text-center"> </v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Inkpot | Learn',
	},
	data() {
		return {
			title: 'Learn Permaculture',
		};
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
