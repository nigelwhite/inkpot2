<template>
	<Layout>
		<template slot="title">
			<div class="my-4 mb-lg-8">{{ title }}</div>
		</template>

		<v-row>
			<v-col cols="12" sm="6" offset-sm="3">
				<v-card>
					<v-container fluid>
						<v-row>
							<v-col
								v-for="edge in $page.allInstagramPhoto.edges"
								key="edge.node.id"
								class="instagram-post
								d-flex child-flex"
								cols="4"
							>
								<a
									:href="'https://www.instagram.com/p/' + edge.node.shortcode"
									target="_blank"
								>
									<v-card flat tile class="d-flex">
										<v-img :src="edge.node.display_url" aspect-ratio="1">
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
								</a>
							</v-col>
						</v-row>
					</v-container>
				</v-card>
			</v-col>
		</v-row>
	</Layout>
</template>

<page-query>
	query {
  allInstagramPhoto(sortBy: "taken_at_timestamp") {
    edges {
      node {
				id
        shortcode
        display_url
				taken_at_timestamp
        edge_media_to_caption {
          edges {
            node {
              text
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
export default {
	metaInfo: {
		title: 'Gallery',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot farm photo gallery' },
			{ name: 'keywords', content: 'gallery' },
		],
	},
	data() {
		return {
			title: 'Photo Gallery',
		};
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

.instagram-post img
	max-width: 100%
	height: auto
	border-top-left-radius: 10px
</style>
