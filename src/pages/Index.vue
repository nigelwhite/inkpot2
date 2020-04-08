<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col cols="12">
				<div class="d-flex flex-wrap justify-center">
					<v-card
						v-for="(card, index) in cards"
						:key="index"
						class="mx-12"
						width="250"
					>
						<g-image :src="require('~/assets/images/' + card.image)" />
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
import cards from '@/data/cards.yaml';

export default {
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

<style lang="sass" scoped></style>
