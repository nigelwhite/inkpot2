<template>
	<v-app class="ink-bg">
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<v-container class="my-12">
				<div class="mx-8">
					<slot />
				</div>
			</v-container>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

import Footer from '@/components/Footer.vue';

export default {
	components: {
		Navbar,
		Footer
	},
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? 'dark' : 'light';
		}
	}
};
</script>

<style lang="sass" scoped>
.ink-bg
	// background-image: url('~@/assets/images/cover_cows.jpg')
	background-image: url('~@/assets/images/cover_sheep.jpg')
	height: 100%
	background-position: center
	background-repeat: no-repeat
	background-size: cover
</style>
