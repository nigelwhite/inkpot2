<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>
		<v-row>
			<v-col class="col-12 col-lg-5 col-xl-6">
				<p>
					All about learning Permaculture at The Inkpot
				</p>
				<p>Courses happen occasionally, etc</p>
				<p>Working Wednesday, etc</p>
			</v-col>
			<v-col>
				<div text-center class="outer-video-container">
					<div class="video-container mt-12">
						<div class="youtube-responsive-container">
							<iframe
								width="444"
								height="250"
								src="https://www.youtube.com/embed/viGvddHenA8"
								frameborder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<p class="text-right">Aerial Tour of the Inkpot</p>
					</div>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	metaInfo: {
		title: 'Learn',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'Learn Permaculture at The Inkpot' },
			{
				name: 'keywords',
				content: 'learn, courses, workshops, volunteer, work, working',
			},
		],
	},
	data() {
		return {
			title: 'Learn Permaculture',
		};
	},
	props: {
		img1: {
			type: String,
			default: 'https://via.placeholder.com/400x250.png?text=Carla+movie',
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
