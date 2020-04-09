<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col>
				<p>
					The Inkpot is an 18 acre field working farm which is a demonstration
					site of permaculture design. It has been home to Hannah Thorogood and
					family since September 2010 and since that time much observing and
					designing has gone on. Some projects have been implemented such as the
					planting of 3000 trees in shelter belts, long-term timber and coppice
					areas, the vegetable beds, poultry and the holistic grazing of cows
					and sheep.
				</p>
				<p>
					The classroom is a beautiful oak framed reciprocal roofed round house
					and the field has lovely views of the very gentle valley down the
					field. If you are attending a course there are options for camping or
					glamping with access to compost toilets, hot glass-roofed showers (so
					you can see the sky while you steam clean) as well as great sunsets,
					starry skies, all within a quiet rural location. The Inkpot is a
					working farm so be aware that there is often long wet grass and mud,
					especially over Autumn so make sure that if you are visiting make sure
					you bring appropriate footwear! Also please don't bring animals
					without prior arrangement from Hannah (contact here) and loud music
					and unofficial fires are not permitted.
				</p>
				<p>
					The Inkpot can be hired as a venue whether it be for a family picnic
					as a campsite or as somewhere that can host a gathering of up to 30
					people. The field shelter can seat 30 people and there is a catering
					kitchen which can be used to feed that many as well.
				</p>
			</v-col>
			<v-col class="px-lg-12 text-center">
				<v-img
					:src="require('~/assets/images/hannah.jpg')"
					max-width="250"
					class="mx-auto"
				></v-img>
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
					</div>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'About',
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
