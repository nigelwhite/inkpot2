<template>
	<Layout>
		<v-row>
			<v-col cols="12">
<h1 class="ink-title font-weight-bold mb-3">The Inkpot</h1>
<h2 class="ink-subtitle">A Permaculture Farm in Lincolnshire</h2>
			</v-col>
		</v-row>
		
		<v-row>
			<v-col cols="12">
				<div class="d-flex flex-wrap justify-center align-end ink-container">
					<v-hover v-slot:default="{hover}" v-for="(card, index) in cards"
							v-show="card.show"
							:key="index"
							class="ink-grow">
						<v-card
							:class="{ 'on-hover': hover }"
							class="ink-cards mx-2 mb-12"
							
						>
							<v-img :src="require('~/assets/images/' + card.image)" /></v-img>
							<v-card-title>{{ card.title }}</v-card-title>
							<v-card-subtitle class="pb-0">{{ card.content }}</v-card-subtitle>
							<v-card-actions>
								<v-btn color="orange" text>
									{{ card.action }}
								</v-btn>
							</v-card-actions>
						</v-card>
					</v-hover>
				</div>
			</v-col>
		</v-row>
		
	</Layout>
</template>

<script>
import Layout from '~/layouts/Home.vue'
import cards from '@/data/cards.yaml';

export default {
	components: {
		Layout
	},
	metaInfo: {
		title: 'Inkpot | home',
	},
	data() {
		return {
			title: 'Home page',
			cards,
		};
	},
};
</script>

<style lang="sass" scoped>
.ink-container
	min-height: 600px

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
