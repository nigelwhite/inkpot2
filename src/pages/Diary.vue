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
								<v-dialog v-modal="dialog" max-width="600px">
									<template v-slot:activator="{ on, attrs }">
										<v-card flat tile class="d-flex" v-bind="attrs" v-on="on">
											
											<p class="text-center mt-3">
									{{ post.timestamp | readableDate2 }}
								</p>
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
									</template>
								
									<v-card>
										<v-card-title>
											<h4>{{ post.timestamp | readableDate }}</h4>
										</v-card-title>
										<v-card-text class="text-center mt-3">
									
									<div v-show="post.media_type === 'IMAGE'">
								<img
									:src="post.media_url"
									class="insta-image"
								/>
								

								<p class="pa-2">
									{{ post.caption }}
								</p>
							</div>
							<div v-show="post.media_type === 'VIDEO'">
								<video controls>
									<source
										:src="post.media_url"
										type="video/mp4"
										class="insta-vid"
									/>
								</video>
								

								<p class="pa-2">
									{{ post.caption }}
								</p>
							</div>
										</v-card-text>
										<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn
											color="blue darken-1"
											text
											@click="dialog = false"
										>Close</v-btn>
										
										</v-card-actions>
									</v-card>
								</v-dialog>
							</v-col>
						</v-row>
					</v-container>
				</v-card>
				<div class="text-center mt-4">
					<a
						href="https://www.instagram.com/inkpotfarm/"
						target="_blank"
						>The Inkpot on Instagram</a
					>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import axios from 'axios';
import dateFormat from 'dateformat';
// docs at http://blog.stevenlevithan.com/archives/date-time-format

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
			},
			dialog: false,
		}
	},
	filters: {
		readableDate: function (value) {
			return dateFormat(value, 'dddd d mmm, h:MM tt');
		},
		readableDate2: function (value) {
			return dateFormat(value, 'd mmm');
		}
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

// .instagram-container
// 	overflow-y: auto
// 	border: 1px solid black
// 	border-radius: 10px
// 	max-width: 500px
// 	max-height: 700px

.insta-vid, .insta-image
	width: 100%
	height: auto
	border-top-left-radius: 10px
</style>
