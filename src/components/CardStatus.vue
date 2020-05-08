<template>
	<div>
		<!-- the value of action in cards.yaml -->
		<h2>{{ currentCard }}</h2>

		<!-- <h2>{{ currentCard.status }}</h2> -->
	</div>
</template>

<script>
import cards from '@/data/cards.yaml';
export default {
	data() {
		return {
			cards,
		};
	},
	props: {
		pageTitle: {
			type: String,
		},
	},
	computed: {
		// use the prop 'pageTitle' in the filter of cards. Return that card' action
		currentCard: function() {
			let thisTitle = this.pageTitle;
			let thisCard = cards.filter(function(e) {
				return e.title === thisTitle;
			});
			return thisCard[0].action;
		},
	},
};
</script>
