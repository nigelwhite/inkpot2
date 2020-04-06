<template>
	<nav>
		<v-card color="grey lighten-4" text tile>
			<v-toolbar dense>
				<v-toolbar-title class="primary--text headline font-weight-bold"
					>NW Gridsome Starter</v-toolbar-title
				>
				<v-spacer></v-spacer>

				<div class="hidden-sm-and-down">
					<v-btn v-for="link in links" :key="link.text" text rounded>
						<g-link :to="link.url">{{ link.text }}</g-link>
					</v-btn>
				</div>
				<v-app-bar-nav-icon
					class="primary--text hidden-md-and-up"
					@click="drawer = !drawer"
				>
					<v-icon large v-show="!drawer">menu</v-icon>
					<v-icon large v-show="drawer">close</v-icon>
				</v-app-bar-nav-icon>
			</v-toolbar>
		</v-card>

		<v-navigation-drawer v-model="drawer" app class="primary">
			<v-list-item>
				<v-list-item-content>
					<v-list-item-title class="headline font-weight-bold white--text">
						NW Starter
					</v-list-item-title>
				</v-list-item-content>
			</v-list-item>

			<v-divider class="white"></v-divider>

			<v-list dense nav>
				<v-list-item v-for="link in links" :key="link.text" link>
					<v-list-item-icon>
						<v-icon class="white--text">{{ link.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
						<v-list-item-title class="white--text subtitle-1">
							<g-link :to="link.url" class="white--text">{{
								link.text
							}}</g-link>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
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
				{ icon: 'explore', text: 'Colours', url: '/colors/' },
			],
		};
	},
};
</script>

<style scoped lang="sass"></style>
