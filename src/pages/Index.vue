<template>
	<Layout>
		<template slot="hero-img">
			<g-image src="~/assets/images/vista-1.png" class="gimage" width="2560" />
		</template>
		<h1>home page</h1>
		<div class="mx-auto hannah-container">
			<g-image src="~/assets/images/hannah.jpg" width="250" class="gimage" />
		</div>
		<!-- <v-img
			:src="require('~/assets/images/hannah.jpg')"
			max-width="250"
			class="mx-auto"
		></v-img> -->
	</Layout>
</template>

<script>
import Layout from '~/layouts/Heros.vue';
import cards from '@/data/cards.yaml';

export default {
	components: {
		Layout,
	},
	metaInfo: {
		title: 'Inkpot | home',
	},
	data() {
		return {
			cards,
			path: '~/assets/images/hero/',
		};
	},
};
</script>

<style scoped lang="sass">


.hannah-container
	width: 250px
</style>
