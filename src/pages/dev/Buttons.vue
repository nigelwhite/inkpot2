<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<!-- content of page goes here -->
		<p>
			<a
				href="https://vuetifyjs.com/en/components/buttons/#buttons"
				target="_blank"
				>Buttons docs</a
			>
		</p>
		<v-btn>Click me</v-btn>
		<v-btn depressed>Click me</v-btn>
		<v-btn color="pink">Click me</v-btn>
		<v-btn text color="pink">Click me</v-btn>

		<v-btn depressed class="pink white--text">
			<v-icon left>email</v-icon>
			<span>email me</span>
		</v-btn>

		<v-btn depressed small class="pink white--text">
			<v-icon left small>email</v-icon>
			<span>email me</span>
		</v-btn>

		<v-btn depressed large class="pink white--text">
			<v-icon>favorite</v-icon>
		</v-btn>

		<v-btn fab depressed small dark color="purple">
			<v-icon left>email</v-icon>
			<span>email me</span>
		</v-btn>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Buttons'
		}
	}
}
</script>

<style lang="sass" scoped></style>
