<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>

		<v-row class="mb-10">
			<v-col cols="12" sm="6" offset-sm="3">
				<v-card>
					<v-container fluid>
						<v-row>
							<v-col
								v-for="(post, index) in photos.data.slice(0,9)"
								:key="index"
								class="instagram-post d-flex child-flex"
								cols="4"
							>
								
									<v-card flat tile class="d-flex">
										<div v-show="post.media_type === 'IMAGE'">
											<img
												aspect-ratio="1"
												:src="post.media_url"
											/>
										</div>
										<div v-show="post.media_type === 'VIDEO'">
											
											<video controls>
												<source :src="post.media_url" type="video/mp4" />
											</video>
										</div>
											<template v-slot:placeholder>
												<v-row
													class="fill-height ma-0"
													align="center"
													justify="center"
												>
													<v-progress-circular
														indeterminate
														color="grey lighten-5"
													></v-progress-circular>
												</v-row>
											</template>
										</v-img>
									</v-card>
								
							</v-col>
						</v-row>
					</v-container>
				</v-card>
				<div class="text-center">
					<a
						href="https://www.instagram.com/inkpotfarm/"
						target="_blank"
						>The Inkpot Instagram</a
					>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import axios from 'axios';

export default {
	metaInfo: {
		title: 'Diary',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot farm photo diary' },
			{ name: 'keywords', content: 'gallery, diary' },
		],
	},
	data() {
		return {
			title: 'Photo Diary',
			photos: {
				data: [],
			}
		};
	},

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
	max-height: 600px

.instagram-post img,
video
	max-width: 100%
	height: auto
	border-top-right-radius: 10px
</style>
