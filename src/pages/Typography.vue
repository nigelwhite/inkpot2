<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<!-- content of page goes here -->
		<p>
			<a
				href="https://vuetifyjs.com/en/styles/typography/#typography"
				target="_blank"
				>Typography docs</a
			>
		</p>
		<p class="red white--text">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam
			cupiditate in et libero blanditiis nam fuga beatae eum impedit officia
			temporibus voluptate error at aliquam, nobis architecto sunt atque?
		</p>
		<p class="pink red--text lighten-3 text--darken-4">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam fugit
			rerum, magni beatae sapiente dolores consectetur ea laboriosam totam,
			nulla nemo atque veritatis quibusdam esse aliquid quaerat laborum id
			nihil!
		</p>
		<h1 class="display-4">Massive display text</h1>
		<h4 class="display-1">Smaller display text</h4>
		<p class="headline">this is a headline</p>
		<p class="subheading">this is a sub-heading</p>
		<p class="caption">this is a caption</p>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Typography'
		}
	}
}
</script>

<style lang="sass" scoped></style>
