<template>
	<nav>
		<v-card color="grey lighten-4" text tile>
			<v-toolbar dense>
				<v-app-bar-nav-icon
					class="primary--text"
					@click="drawer = !drawer"
				></v-app-bar-nav-icon>

				<v-toolbar-title class="primary--text font-weight-bold"
					>NW Gridsome Starter</v-toolbar-title
				>
				<v-spacer></v-spacer>
				<v-icon>home</v-icon>
				<v-btn v-for="link in links" :key="link.text" text>
					<g-link :to="link.url">{{ link.text }}</g-link>
				</v-btn>
			</v-toolbar>
		</v-card>

		<v-navigation-drawer v-model="drawer" app class="indigo">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title v-for="link in links" :key="link.text">
						<g-link class="white--text" :to="link.url">
							<v-icon class="white--text">{{ link.icon }}</v-icon>
							{{ link.text }}</g-link
						>
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-navigation-drawer>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			drawer: false,
			links: [
				{ icon: 'adb', text: 'Home', url: '/' },
				{ icon: 'backup', text: 'About', url: '/about/' },
				{ icon: 'explore', text: 'Colours', url: '/colors/' }
			]
		}
	}
}
</script>

<style scoped></style>
