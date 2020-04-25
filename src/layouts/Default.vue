<template>
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<slot name="hero-img" />
			<v-container class="my-2 my-md-4">
				<div class="hidden-md-and-down">
					<h1 class="primary--text mt-4">
						<slot name="title" />
					</h1>
				</div>
				<div class="hidden-lg-and-up">
					<h2 class="primary--text">
						<slot name="title" />
					</h2>
				</div>
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

<style lang="sass"></style>
