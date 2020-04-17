<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col>
				<v-row>
					<v-img
						:src="require('~/assets/images/cows-panoram.jpg')"
						max-width="1004"
						class="mx-auto"
					></v-img>
				</v-row>
				<v-row class="d-none d-xl-block mx-auto mt-10">
					<p>show wide only</p>
					<Portraits3
						:img1="require('~/assets/images/cows1.png')"
						:img2="require('~/assets/images/cows2.png')"
						:img3="require('~/assets/images/cows3.png')"
					></Portraits3>
				</v-row>
			</v-col>
			<v-col class="px-lg-12">
				<div class="ordering text-center mb-6">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
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
		<v-row class="d-xl-none">
			<p>show narrow only</p>
			<v-col>
				<v-row>
					<Portraits3
						:img1="require('~/assets/images/cows1.png')"
						:img2="require('~/assets/images/cows2.png')"
						:img3="require('~/assets/images/cows3.png')"
						class="mx-auto"
					></Portraits3>
				</v-row>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3 from '@/components/Portraits3.vue';
export default {
	data() {
		return {
			title: 'Beef',
			beefpricelist: 'grand',
			linkedDoc: 'beefpricelist.doc',
		};
	},
	components: {
		DownloadBtn,
		Portraits3,
	},
};
</script>

<style lang="sass" scoped></style>
