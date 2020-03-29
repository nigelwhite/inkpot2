<template>
	<v-app class="grey lighten-4">
		<Navbar />
		<v-content>
			<v-container>
				<h1 class="page-title">
					<slot name="title" />
				</h1>
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
	},
	data() {
		return {
			title: 'I am a dynamic slot title'
		}
	}
}
</script>

<style lang="sass">
.page-title
	color: primary
	margin: 20px 0
</style>
