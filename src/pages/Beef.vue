<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/cows-pan.png"
						class="gimage mx-auto mt-lg-8 mb-xl-8"
						width="1200"
					/>
				</v-row>
				<v-row>
					<v-col>
						<Portraits3Wide
							:img1="require('~/assets/images/' + pic1)"
							:img2="require('~/assets/images/' + pic2)"
							:img3="require('~/assets/images/' + pic3)"
						></Portraits3Wide>
					</v-col>
				</v-row>
			</v-col>
			<v-col class="px-lg-12">
				<CardStatus :pageTitle="title"></CardStatus>

				<div v-if="linkedDoc" class="ordering text-center mb-10">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
				</div>
				<div v-if="!linkedDoc" class="ordering text-center mb-10">
					<ContactUsBtn></ContactUsBtn>
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
		<v-row>
			<v-col class="px-lg-12">
				<Portraits3Narrow
					:img1="require('~/assets/images/' + pic1)"
					:img2="require('~/assets/images/' + pic2)"
					:img3="require('~/assets/images/' + pic3)"
				></Portraits3Narrow>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3Wide from '@/components/Portraits3Wide.vue';
import Portraits3Narrow from '@/components/Portraits3Narrow.vue';
import ContactUsBtn from '@/components/ContactUsBtn.vue';
import CardStatus from '@/components/CardStatus.vue';

export default {
	data() {
		return {
			title: 'Beef',
			linkedDoc: 'beef-price-list-2020-6.doc',
			pic1: 'cows1.png',
			pic2: 'cows2.png',
			pic3: 'cows3.png',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		ContactUsBtn,
		CardStatus,
	},
};
</script>

<style lang="sass" scoped></style>
