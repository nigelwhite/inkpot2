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
.has-bg-img
  height: 161px
  background-size: cover
  background: url("~@/assets/images/hero/vista-mobile-768x161.jpg") center center
  @media only screen and (min-width: 30em)
    height: 353px
    background-size: auto 100%
    background: url("~@/assets/images/hero/vista-tablet-1009x353.jpg") center center
  @media only screen and (min-width: 40em)
    height: 353px
    background: url("~@/assets/images/hero/vista-desktop-1393x353.jpg") center center
  @media only screen and (min-width: 64em)
    height: 353px
    background: url("~@/assets/images/hero/vista-fullhd-2500x353.jpg") center center

.hannah-container
	width: 250px
</style>
