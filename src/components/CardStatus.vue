// gets the 'action' of each product from cards.yaml and puts the right one in
each product page
<template>
	<div class="mb-4 text-center">
		<!-- the value of action in cards.yaml -->
		<h2>{{ currentCard }}</h2>
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
