<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<p>content goes here</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores
			cupiditate, nihil sit deserunt nesciunt laudantium vero commodi. Natus ex
			incidunt, quisquam, perferendis repellendus voluptatem eos quis ipsum
			minus distinctio culpa.
		</p>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
			possimus sed harum ullam, soluta deleniti porro explicabo voluptas sunt
			quam aspernatur veritatis, perferendis obcaecati? Id sit quasi non harum!
		</p>
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
