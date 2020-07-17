<template>
	<v-app :style="{ background: $vuetify.theme.themes[theme].background }">
		<Navbar />
		<!-- v-main has to come first or footer is not held on bottom edge -->
		<v-main>
			<slot name="hero-img" />
			<v-container class="my-2 my-md-4">
				<div class="hidden-md-and-down">
					<div class="d-flex">
						<InkpotLogo v-if="!hideLogo"></InkpotLogo>

						<h1 class="primary--text align-self-center">
							<slot name="title" />
						</h1>
					</div>
				</div>
				<div class="hidden-lg-and-up">
					<div class="d-flex">
						<InkpotLogo v-if="!hideLogo"></InkpotLogo>

						<h2 class="primary--text align-self-center">
							<slot name="title" />
						</h2>
					</div>
				</div>
				<slot />
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import InkpotLogo from '@/components/InkpotLogo.vue';

export default {
	components: {
		Navbar,
		Footer,
		InkpotLogo,
	},
	props: ['hideLogo'],
	computed: {
		theme() {
			return this.$vuetify.theme.dark ? 'dark' : 'light';
		},
	},
};
</script>

<style lang="sass"></style>
