<template>
	<Layout :hide-logo="true">
		<template slot="hero-img">
			<div class="hidden-md-and-down">
				<g-image
					src="~/assets/images/vista-1.png"
					class="gimage"
					width="2560"
				/>
			</div>
			<div class="hidden-lg-and-up">
				<g-image
					src="~/assets/images/vista-2.png"
					class="gimage"
					width="1264"
				/>
			</div>
		</template>

		<template slot="title">{{ title }}</template>

		<v-row class="mt-lg-6">
			<v-col class="col-12 col-md-6 mb-12 mb-md-0">
				<div class="d-flex justify-center mb-4">
					<g-image
						src="~/assets/images/logos/InkpotLogo_transparent.png"
						alt="Inkpot Logo"
						width="90"
						class="mr-4 align-self-center"
					/>
					<h2 class="mb-2 align-self-center">Diary</h2>
				</div>
				<div class="d-flex justify-center">
					<div class="instagram-container">
						<div
							v-for="(post, index) in photos.data.slice(0, 1)"
							:key="index"
						>
							<div v-show="post.media_type === 'IMAGE'">
								<img :src="post.media_url" />
								<p class="text-center mt-3">
									<!-- {{ post.timestamp | moment }} -->
								</p>

								<p class="pa-2">
									{{ post.caption }}
								</p>
							</div>
							<div v-show="post.media_type === 'VIDEO'">
								<video controls>
									<source
										:src="post.media_url"
										type="video/mp4"
									/>
								</video>
								<p class="text-center mt-3">
									{{ post.timestamp | moment }}
								</p>

								<p class="pa-2">
									{{ post.caption }}
								</p>
							</div>
						</div>
						<g-link to="/diary" class="text-center"
							><h3>more...</h3></g-link
						>
					</div>
				</div>
			</v-col>

			<Products></Products>
		</v-row>
	</Layout>
</template>

<script>
import moment from 'moment';
import cards from '@/data/cards.yaml';
import Products from '@/components/Products';
import axios from 'axios';

export default {
	metaInfo: {
		title: 'Home',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot farm homepage' },
			{ name: 'keywords', content: 'homepage' },
		],
	},
	components: {
		Products,
	},
	// filters: {
	// 	moment(myDate) {
	// 		return moment.unix(myDate).format('ddd D MMM');
	// 	},
	// },
	data() {
		return {
			title: 'A Permaculture farm in Lincolnshire',
			photos: {
				data: [],
			},
			cards,
		};
	},
	// mounted: function () {
	// 	axios
	// 		.get(process.env.GRIDSOME_FULL)
	// 		.then((response) => (this.photos = response.data))
	// 		.catch((error) => (this.photos = [{ title: 'No posts found' }]))
	// 		.finally(() => console.log('Data loading complete'));
	// },
	async mounted() {
		try {
			const response = await axios.get(process.env.GRIDSOME_FULL);
			this.photos = response.data;
		} catch (error) {
			console.log(error);
		}
	},
};
</script>

<style scoped lang="sass">

.instagram-container
	overflow: scroll
	border: 1px solid black
	border-radius: 10px
	max-width: 500px
	max-height: 700px

.instagram-container-temp
	overflow: scroll
	border: 1px solid black
	border-radius: 10px
	width: 500px
	height: 700px

.instagram-post img,
video
	max-width: 100%
	height: auto
	border-top-left-radius: 10px
</style>
