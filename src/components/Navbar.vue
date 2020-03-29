<template>
	<v-card color="grey lighten-4" text tile>
		<v-toolbar dense>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>NW Gridsome Starter</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-btn v-for="link in links" :key="link.text" text>
				<g-link :to="link.url">{{ link.text }}</g-link>
			</v-btn>
		</v-toolbar>
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			links: [
				{ text: 'Home', url: '/' },
				{ text: 'About', url: '/about/' },
				{ text: 'Colours', url: '/colors/' }
			]
		}
	}
}
</script>

<style scoped></style>
