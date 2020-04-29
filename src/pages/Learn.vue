<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col>
				<p>
					All about learning Permaculture at The Inkpot
				</p>
				<p>Courses happen occasionally, etc</p>
				<p>Working Wednesday, etc</p>
			</v-col>
			<v-col class="px-lg-12 text-center">
				<v-img :src="img1" max-width="400" class="mx-auto"></v-img>
			</v-col>
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
	props: {
		img1: {
			type: String,
			default:
				'https://via.placeholder.com/400x400.png?text=At+least+one+image',
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
