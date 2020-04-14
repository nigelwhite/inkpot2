<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col>
				<v-img
					:src="require('~/assets/images/cows-panoram.jpg')"
					max-width="1004"
					class="mx-auto"
				></v-img>
			</v-col>
			<v-col class="px-lg-12">
				<div class="ordering text-center mb-6">
					<a href="beefpricelist.doc" download>
						<v-btn>Prices and ordering<br />(download)</v-btn>
					</a>
				</div>
				<p>
					This is the first Inkpot beef, from our pedigree Lincoln Red herd.
				</p>
				<p>
					They live a healthy, high welfare, friendly life, only ever eat grass
					and hay and are raised to organic standards so no sprays are used and
					no routine medicines.
				</p>
				<p>
					The herd, along with the sheep, are moved on to fresh pastures every
					day, all year round, leaving at least three months for the grass to
					re-grow. This system is a regenerative grazing technique which builds
					soil, creates habitat and sequesters more carbon from the atmosphere
					and into the soil, than any tree-based system. It also creates the
					perfect conditions for soil bacteria called methanotropes, which
					breathe in more methane than the cows produce and poo it into the soil
					as carbon.
				</p>
				<p>
					By buying this beef, you are supporting a small family farm, a local
					abattoir and helping to reverse climate change!
				</p>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'Beef'
		};
	}
};
</script>

<style lang="sass" scoped></style>
