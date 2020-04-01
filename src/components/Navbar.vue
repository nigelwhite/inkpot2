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

				<div class="hidden-sm-and-down">
					<v-btn v-for="link in links" :key="link.text" text>
						<g-link :to="link.url">{{ link.text }}</g-link>
					</v-btn>
				</div>
			</v-toolbar>
		</v-card>

		<v-navigation-drawer v-model="drawer" app class="indigo">
			<div class="ml-4">
				<p class="headline white--text">
					NW Starter
				</p>
			</div>

			<v-divider class="white"></v-divider>
			<div class="d-flex flex-column">
				<v-btn v-for="link in links" :key="link.text" text>
					<g-link :to="link.url">{{ link.text }}</g-link>
				</v-btn>
			</div>
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
				{ icon: 'backup', text: 'Grid', url: '/grid/' },
				{ icon: 'compare_arrows', text: 'Buttons', url: '/buttons/' },
				{ icon: 'compare_arrows', text: 'Typography', url: '/typography/' },
				{ icon: 'compare_arrows', text: 'Flex', url: '/flex/' },
				{ icon: 'compare_arrows', text: 'Breakpoints', url: '/breakpoints/' },
				{ icon: 'explore', text: 'Colours', url: '/colors/' }
			]
		}
	}
}
</script>

<style scoped lang="sass">
.drawer-link, .drawer-icon
	font-size: 1.25rem
</style>
