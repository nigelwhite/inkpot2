<template>
	<Layout>
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
			<v-col 
				<div v-for="edge in $page.allInstagramPhoto.edges" key="edge.node.id">
					<img :src="edge.node.display_url" alt="Latest Instagram image">
					<p>{{ edge.node.edge_media_to_caption }}</p>
				</div>
			</v-col>
			<v-col class="col-12 col-md-8 col-lg-9">
				<div class="d-flex flex-wrap justify-center">
					<div v-for="(card, index) in sortedCards" :key="index">
						<g-link :to="'produce/' + card.link">
							<v-hover v-slot:default="{ hover }" class="ink-grow">
								<v-card
									:class="{ 'on-hover': hover }"
									class="ink-card mx-2 my-2 warning"
									max-width="250px"
								>
									<v-responsive :aspect-ratio="25 / 15">
										<v-img
											:src="require('~/assets/images/' + card.image)"
											class="white--text align-end"
										>
											<v-card-title class="headline font-weight-bold">{{
												card.title
											}}</v-card-title>
										</v-img>
									</v-responsive>

									<v-card-actions>
										<v-btn class="primary--text" text>
											{{ card.action }}
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-hover>
						</g-link>
					</div>
				</div>
			</v-col>
		</v-row>
	</Layout>
</template>

<page-query>
	query {
  allInstagramPhoto(limit: 1) {
    edges {
      node {
				id
        display_url
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

export default {
	metaInfo: {
		title: 'Home',
		meta: [
			{charset: "utf-8"},
			{name: "description", content: "The Inkpot farm homepage"},
			{name: "keywords", content: "homepage"}
		]
	},
	data() {
		return {
			title: 'A Permaculture farm in Lincolnshire',
			cards,
		};
	},
	computed: {
		sortedCards: function() {
			// ordering works, filtering does not. Removed Open Farm Sunday from cards.yaml
			let filteredCards = cards.filter((card) => {
				return card.show;
			});
			let orderedCards = filteredCards.sort((a, b) =>
				a.order > b.order ? 1 : -1
			);
			return orderedCards;
		},
	},
};
</script>

<style scoped lang="sass">

.on-hover
  -webkit-transform: scale(1.05)
          transform: scale(1.05)
.ink-grow
	-webkit-transition: all .2s ease-in-out
  transition: all .2s ease-in-out
</style>
