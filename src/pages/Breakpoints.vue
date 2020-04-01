<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<!-- content of page goes here -->
		<p>
			<a
				href="https://vuetifyjs.com/en/customization/breakpoints/#breakpoints"
				target="_blank"
				>Breakpoints docs</a
			>
		</p>
		<v-btn class="hidden-md-and-down">Click me</v-btn>
		<v-btn class="hidden-md-and-up">Click me now</v-btn>
		<v-btn class="hidden-sm-only">Click me very</v-btn>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Breakpoints'
		}
	}
}
</script>

<style lang="sass" scoped></style>
