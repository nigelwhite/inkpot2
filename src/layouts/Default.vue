<template>
	<v-app class="grey lighten-4">
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<v-container class="my-12">
				<h1 class="primary--text mb-4 mb-md-8 mx-8 mx-md-0">
					<slot name="title" />
				</h1>
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
		Footer,
	},
};
</script>

<style lang="sass"></style>
