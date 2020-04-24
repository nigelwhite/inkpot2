<template>
	<Layout>
		<template slot="hero-img">
			<!-- <div class="has-bg-img"></div> -->

			<!-- // invalid regular expression flags
			<v-img
				:src="require('~/assets/images/hero/vista-mobile-768x161.jpg')"
				:srcset="~/assets/images/hero/vista-mobile-768x161.jpg 768w, 
				~/assets/images/hero/vista-tablet-1009x353.jpg 1009w, 
				~/assets/images/hero/vista-desktop-1393x353.jpg 1393w, 
				~/assets/images/hero/vista-fullhd-2500x353.jpg 2500w"
				sizes="100vw"
			></v-img> -->
			<!-- // invalid regular expression flags
			<v-img
				:src="require('~/assets/images/hero/vista-mobile-768x161.jpg')"
				:srcset="~/assets/images/hero/vista-mobile-768x161.jpg + ' 768w', 
				~/assets/images/hero/vista-tablet-1009x353.jpg + ' 1009w', 
				~/assets/images/hero/vista-desktop-1393x353.jpg + ' 1393w', 
				~/assets/images/hero/vista-fullhd-2500x353.jpg + ' 2500w'"
				sizes="100vw"
			></v-img> -->
			<!-- // invalid regular expression flags
			<v-img
				:src="require('~/assets/images/hero/vista-mobile-768x161.jpg')"
				:srcset="`${~/assets/images/hero/vista-mobile-768x161.jpg} 768w`, 
				`${~/assets/images/hero/vista-tablet-1009x353.jpg} 1009w`, 
				`${~/assets/images/hero/vista-desktop-1393x353.jpg} 1393w`, 
				`${~/assets/images/hero/vista-fullhd-2500x353.jpg} 2500w`"
				sizes="100vw"
			></v-img> -->
			<!-- <v-img
				:src="require('~/assets/images/hero/vista-mobile-768x161.jpg')"
				:srcset="require('~/assets/images/hero/vista-mobile-768x161.jpg') 768w, 
				require('~/assets/images/hero/vista-tablet-1009x353.jpg') 1009w, 
				require('~/assets/images/hero/vista-desktop-1393x353.jpg') 1393w, 
				require('~/assets/images/hero/vista-fullhd-2500x353.jpg') 2500w"
				sizes="100vw"
			></v-img> -->
			<!-- <v-img :src="require('~/assets/images/hero/vista-mobile-768x161.jpg')">
			</v-img> -->
			<!-- <g-image src="~/assets/images/hero/vista-mobile-768x161.jpg"> </g-image> -->

			<g-image src="~/assets/images/hero/vista-fullhd-2500x353.jpg" />
			<!-- works but always renders fullhd
			<v-img
				:src="require('~/assets/images/hero/vista-mobile-768x161.jpg')"
				:srcset="
					(require('~/assets/images/hero/vista-mobile-768x161.jpg') + ' 768w',
					require('~/assets/images/hero/vista-tablet-1009x353.jpg') + ' 1009w',
					require('~/assets/images/hero/vista-desktop-1393x353.jpg') + ' 1393w',
					require('~/assets/images/hero/vista-fullhd-2500x353.jpg') + ' 2500w')
				"
				sizes="100vw"
			></v-img> -->
			<!-- <g-image
				src="~/assets/images/hero/vista-mobile-768x161.jpg"
				srcset="
					~/assets/images/hero/vista-mobile-768x161.jpg 768w,
					~/assets/images/hero/vista-tablet-1009x353.jpg 1009w,
					~/assets/images/hero/vista-desktop-1393x353.jpg 1393w,
					~/assets/images/hero/vista-fullhd-2500x353.jpg 2500w
				"
				sizes="100vw"
			></g-image> -->
		</template>
		<h1>home page</h1>
		<div class="mx-auto hannah-container">
			<g-image src="~/assets/images/hannah.jpg" width="250" />
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
