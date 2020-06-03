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
			<v-col class="col-12 col-md-6">
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
						<g-link to="/diary" class="text-center"><h3>more...</h3></g-link>
					</div>
				</div>
			</v-col>

			<v-col>
				<div class="d-flex justify-center mb-4">
					<a
						href="https://greattasteawards.co.uk/"
						target="_blank"
						class="align-self-center"
					>
						<g-image
							src="~/assets/images/logos/GTproducer250x250.png"
							alt="Great Taste Producer logo"
							width="80"
							class="mr-6"
						/>
					</a>
					<h2 class="align-self-center">Awarded Great Taste Producer</h2>
				</div>
				<div class="d-flex flex-wrap justify-center">
					<div v-for="(card, index) in sortedCards" :key="card.title">
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

									<v-card-actions class="action">
										<v-btn class="primary--text" text>
											{{ card.action }}
										</v-btn>
										<div class="d-flex badges">
											<div v-for="(badge, index) in card.badges" :key="badge">
												<v-img
													:src="require('~/assets/images/logos/' + badge)"
													:aspect-ratio="1"
													:height="50"
													:width="50"
												></v-img>
											</div>
										</div>
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
	filters: {
		moment: function(myDate) {
			return moment.unix(myDate).format('ddd D MMM');
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
	max-width: 500px
	max-height: 700px

.instagram-post img
	max-width: 100%
	height: auto
	border-top-left-radius: 10px

.action
	position: relative

.badges
	position: absolute
	top: -25px
	right: 10px
</style>
