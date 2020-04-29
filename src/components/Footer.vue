<template>
	<v-footer height="75">
		<v-row justify="center" align="center">
			<div class="d-flex flex-column flex-md-row">
				<v-btn v-for="link in links" :key="link.name" text rounded class="mr-4">
					<g-link :to="link.url" class="title">
						{{ link.name }}
					</g-link>
				</v-btn>
			</div>
		</v-row>
	</v-footer>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					name: 'About',
					url: '/about/',
				},

				{
					name: 'Contact',
					url: '/contact/',
				},
			],
		};
	},
};
</script>

<style scoped></style>
