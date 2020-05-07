<template>
	<div>
		<h2>{{ currentCard }}</h2>
		<!-- <h2>{{ currentCard.status }}</h2> -->
	</div>
</template>

//
<script>
import cards from '@/data/cards.yaml';
export default {
	data() {
		return {
			cards,
			currentCard: 'Beef',
		};
	},
	props: ['pageTitle'],
	// computed: {
	// 	currentCard: function() {
	// 		let thisCard = cards.filter(function(e) {
	// 			return e.title === Beef;
	// 		});
	// 		return thisCard;
	// 	},
	// },
};
</script>
