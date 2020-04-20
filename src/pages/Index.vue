<template>
	<Layout>
		<template slot="hero-img">
			<div class="has-bg-img"></div>
		</template>
		<h1>home page</h1>
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
</style>
