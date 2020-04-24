<template>
	<v-app>
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<!-- this additional slot is needed to keep the hero image outside the container so it can display at 100% wide -->
			<slot name="hero-img" />

			<v-container class="my-4 my-md-12">
				<slot />
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
		Footer,
	},
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? 'dark' : 'light';
		},
	},
};
</script>

<style lang="sass" scoped></style>
