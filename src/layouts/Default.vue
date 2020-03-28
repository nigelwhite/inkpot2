<template>
	<v-app class="grey lighten-4">
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
import Title from '@/components/Title.vue'
import Footer from '@/components/Footer.vue'

export default {
	components: {
		Title,
		Footer
	}
}
</script>
