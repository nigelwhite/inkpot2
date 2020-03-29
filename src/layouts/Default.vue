<template>
	<v-app class="grey lighten-4">
		<Navbar />
		<v-content class="mx-4 mb-4">
			<h1 class="page-title primary--text">
				<slot name="title" />
			</h1>
			<v-container class="my-5">
				<slot />
			</v-container>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

import Footer from '@/components/Footer.vue'

export default {
	components: {
		Navbar,
		Footer
	}
}
</script>

<style lang="sass">
.page-title
	margin: 20px 0
</style>
