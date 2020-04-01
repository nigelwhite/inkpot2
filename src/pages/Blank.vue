<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<!-- content of page goes here -->
		<p>Content of page</p>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Blank'
		}
	}
}
</script>

<style lang="sass" scoped></style>
