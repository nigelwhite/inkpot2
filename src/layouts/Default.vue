<template>
	<v-app class="grey lighten-4">
		<Navbar />
		<v-content>
			<v-container>
				<Title />
				<slot />
			</v-container>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Title from '@/components/Title.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Navbar,
		Title,
		Footer
	}
}
</script>
