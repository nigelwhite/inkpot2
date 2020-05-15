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
			<v-col class="col-12 col-md-6">
				<h2 class="text-center mb-2">Instagram</h2>
				<div class="d-flex justify-center">
					<div class="instagram-container">
						<div
							v-for="edge in $page.allInstagramPhoto.edges"
							key="edge.node.id"
							class="instagram-post"
						>
							<img :src="edge.node.display_url" alt="Latest Instagram image" />
							<p class="pa-2">
								{{ edge.node.edge_media_to_caption.edges[0].node.text }}
							</p>
							<p>{{ edge.node.taken_at_timestamp }}</p>
							<!-- <p :value="formatDate(edge.node.taken_at_timestamp)"></p> -->
							<!-- <p :value="formattedDate(edge.node.taken_at_timestamp)"></p> -->
							<!-- <p
								:value="format(edge.node.taken_at_timestamp, 'DD.MM.YYYY')"
							></p> -->
							<p>{{ testDate }}</p>
						</div>
					</div>
				</div>
			</v-col>
			<v-col>
				<h2 class="text-center">Buy our produce</h2>
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
import fromUnixTime from 'date-fns/fromUnixTime';

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
			fromUnixTime,
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
		formattedDate: function(due) {
			// turnery says if the first thing is true, do the stuff on the left of the colon, if not do the stuff on the right
			var newDate = due ? format(new Date(due)) : '';
			return newDate;
		},
		testDate: function() {
			return fromUnixTime('1588491974', 'DD/MM/YYYY');
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

.instagram-container
	overflow: scroll
	border: 1px solid black
	border-radius: 10px
	max-width: 400px
	max-height: 600px

.instagram-post img
	max-width: 100%
	height: auto
	border-top-right-radius: 10px
	border-top-left-radius: 10px
</style>
