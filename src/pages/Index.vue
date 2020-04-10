<template>
	<Layout>
		<v-row>
			<v-col cols="12">
<h1 class="display-2 font-weight-bold mb-3">The Inkpot</h1>
<h1>A Permaculture Farm in Lincolnshire</h1>
			</v-col>
		</v-row>
		
		<v-row>
			<v-col cols="12">
				<div class="d-flex flex-wrap justify-center align-end ink-container">
					<v-card
						v-for="(card, index) in cards"
						:key="index"
						class="mx-12"
						width="175"
						height="250"
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
	height: 600px
</style>
