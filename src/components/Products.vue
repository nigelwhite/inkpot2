<template>
	<v-row>
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
</template>

<script>
import cards from '@/data/cards.yaml';

export default {
	data() {
		return {
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

.action
	position: relative

.badges
	position: absolute
	top: -25px
	right: 10px
</style>
