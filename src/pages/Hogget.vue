<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<template slot="textContent">
			<h1>hogget</h1>
		</template>
	</Layout>
</template>

<script>
import Layout from '~/layouts/Product.vue';

export default {
	components: {
		Layout,
	},
	metaInfo: {
		title: 'Inkpot | Hogget',
	},
	data() {
		return {
			title: 'Hogget',
		};
	},
};
</script>
