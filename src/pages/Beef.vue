<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<slot name="mainImage" />
		<template slot="textContent">
			<p>
				This is the first Inkpot beef, from our pedigree Lincoln Red herd.
			</p>
			<p>
				They live a healthy, high welfare, friendly life, only ever eat grass
				and hay and are raised to organic standards so no sprays are used and no
				routine medicines.
			</p>
			<p>
				The herd, along with the sheep, are moved on to fresh pastures every
				day, all year round, leaving at least three months for the grass to
				re-grow. This system is a regenerative grazing technique which builds
				soil, creates habitat and sequesters more carbon from the atmosphere and
				into the soil, than any tree-based system. It also creates the perfect
				conditions for soil bacteria called methanotropes, which breathe in more
				methane than the cows produce and poo it into the soil as carbon.
			</p>
			<p>
				By buying this beef, you are supporting a small family farm, a local
				abattoir and helping to reverse climate change!
			</p>
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
		title: 'Inkpot | Beef',
	},
	data() {
		return {
			title: 'Beef',
			linkedDoc: 'beefpricelist.doc',
			pic1: 'cows1.png',
			pic2: 'cows2.png',
			pic3: 'cows3.png',
		};
	},
};
</script>
