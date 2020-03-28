<template>
	<v-card color="grey lighten-4" text tile>
		<v-toolbar dense>
			<v-app-bar-nav-icon></v-app-bar-nav-icon>

			<v-toolbar-title>NW Gridsome Starter</v-toolbar-title>
			<v-spacer></v-spacer>

			<v-btn v-for="link in links" :key="link.text" text>
				{{ link.text }}
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
				{ icon: 'dashboard', text: 'Dashboard', route: '/' },
				{ icon: 'folder', text: 'My Projects', route: '/projects' },
				{ icon: 'person', text: 'Team', route: '/team' }
			]
		}
	}
}
</script>

<style scoped></style>
