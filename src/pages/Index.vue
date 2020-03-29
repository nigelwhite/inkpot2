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
			title: 'Home page'
		}
	}
}
</script>
