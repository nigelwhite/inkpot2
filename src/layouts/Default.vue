<template>
	<v-app class="grey lighten-4">
		<Navbar />
		<!-- v-content has to come first or footer is not held on bottom edge -->
		<v-content>
			<v-container class="my-5">
				<h1 class="page-title primary--text">
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
