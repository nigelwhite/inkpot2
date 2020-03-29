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

				<div class="nav-horizontal hidden-sm-and-down">
					<v-btn v-for="link in links" :key="link.text" text>
						<g-link :to="link.url">{{ link.text }}</g-link>
					</v-btn>
				</div>
			</v-toolbar>
		</v-card>

		<v-navigation-drawer v-model="drawer" app class="indigo">
			<div class="drawer">
				<h1 class="white--text drawer-title">NW Starter</h1>
				<v-list-item>
					<v-list-item-content>
						<v-list-item-title
							v-for="link in links"
							:key="link.text"
							class="drawer-link"
						>
							<g-link class="white--text" :to="link.url">
								<v-icon class="white--text mr-4 drawer-icon md-icon">{{
									link.icon
								}}</v-icon>
								{{ link.text }}</g-link
							>
						</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
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
				{ icon: 'explore', text: 'Colours', url: '/colors/' }
			]
		}
	}
}
</script>

<style scoped lang="sass">
.drawer
	margin: 20px
.drawer-title
	font-size: 1.5rem
.drawer-link
	margin-top: 20px
.drawer-link, .drawer-icon
	font-size: 1.25rem
</style>
