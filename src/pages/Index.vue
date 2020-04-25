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

		<v-row>
			<v-col class="col-12 col-md-8">
				<div class="d-flex flex-wrap justify-center">
					<div v-for="(card, index) in cards" v-show="card.show" :key="index">
						<g-link :to="card.link">
							<v-hover v-slot:default="{ hover }" class="ink-grow">
								<v-card
									:class="{ 'on-hover': hover }"
									class="ink-card mx-2 my-2"
									max-width="250px"
								>
									<v-img
										:src="require('~/assets/images/' + card.image)"
										class="white--text align-end"
										height="150px"
									>
										<v-card-title class="headline font-weight-bold">{{
											card.title
										}}</v-card-title>
									</v-img>

									<v-card-actions>
										<v-btn color="orange" text>
											{{ card.action }}
										</v-btn>
									</v-card-actions>
								</v-card>
							</v-hover>
						</g-link>
					</div>
				</div>
			</v-col>
			<v-col>second</v-col>
		</v-row>
	</Layout>
</template>

<script>
import cards from '@/data/cards.yaml';

export default {
	metaInfo: {
		title: 'Inkpot | home',
	},
	data() {
		return {
			title: 'A Permaculture farm in Lincolnshire',
			cards,
		};
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

@media only screen and (min-width: 600px)
	.ink-card
		width: 175px
	.ink-title
		font-size: 2rem
	.ink-subtitle
		font-size: 1.5em
</style>
