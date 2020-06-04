<template>
	<Layout :hideLogo="true">
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
							v-for="(edge, index) in $page.allInstagramPhoto.edges"
							:key="edge.node.id"
							class="instagram-post"
						>
							<img :src="edge.node.display_url" alt="Latest Instagram image" />
							<p class="text-center mt-3">
								{{ edge.node.taken_at_timestamp | moment }}
							</p>

							<p class="pa-2">
								{{ edge.node.edge_media_to_caption.edges[0].node.text }}
							</p>
						</div>
						<div class="text-center">
							<a href="https://www.instagram.com/inkpotfarm/" target="_blank"
								>The Inkpot Instagram</a
							>
						</div>
					</div>
				</div>
			</v-col>

			<Products></Products>
		</v-row>
	</Layout>
</template>

<page-query>
	query {
  allInstagramPhoto(sortBy: "taken_at_timestamp", limit: 1) {
    edges {
      node {
				id
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
import cards from '@/data/cards.yaml';
import Products from '@/components/Products';
import moment from 'moment';

export default {
	metaInfo: {
		title: 'Home',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot farm homepage' },
			{ name: 'keywords', content: 'homepage' },
		],
	},
	data() {
		return {
			title: 'A Permaculture farm in Lincolnshire',
			cards,
		};
	},
	components: {
		Products,
	},

	filters: {
		moment: function(myDate) {
			return moment.unix(myDate).format('ddd D MMM');
		},
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

.instagram-post img
	max-width: 100%
	height: auto
	border-top-left-radius: 10px
</style>
