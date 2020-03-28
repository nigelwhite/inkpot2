<template>
	<v-footer color="primary lighten-1" height="75">
		<div class="mx-auto">
			<v-btn v-for="link in links" :key="link.name" text class="mr-4">
				<a :href="link.url" target="_blank">
					{{ link.name }}
				</a>
			</v-btn>
		</div>
	</v-footer>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					name: 'Vuetify docs',
					url: 'https://vuetifyjs.com/en/getting-started/quick-start/'
				},

				{
					name: 'YouTube tutorial',
					url:
						'https://www.youtube.com/playlist?list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5'
				},

				{
					name: 'Course files',
					url: 'https://github.com/iamshaunjp/vuetify-playlist'
				}
			]
		}
	}
}
</script>

<style scoped></style>
