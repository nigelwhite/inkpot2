<template>
	<Layout>
		<template slot="hero-img">
			<g-image src="~/assets/images/vista-1.png" class="gimage" width="2560" />
		</template>
		<template slot="title">{{ title }}</template>

		<v-row>
			<v-col>first</v-col>
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
			title: 'The Inkpot',
			cards,
		};
	},
};
</script>

<style scoped lang="sass"></style>
