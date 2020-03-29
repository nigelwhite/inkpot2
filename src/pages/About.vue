<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<p>content goes here</p>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'About'
		}
	}
}
</script>

<style lang="scss" scoped></style>
