<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/sheep-pan.png"
						class="gimage mx-auto mt-lg-8 mb-xl-8"
						width="1200"
					/>
				</v-row>
				<v-row>
					<v-col>
						<Portraits3Wide></Portraits3Wide>
					</v-col>
				</v-row>
			</v-col>
			<v-col class="px-lg-12">
				<div v-if="linkedDoc" class="ordering text-center mb-10">
					<DownloadBtn :doc="linkedDoc"></DownloadBtn>
				</div>
				<div v-if="!linkedDoc" class="ordering text-center mb-10">
					<PricesNeeded></PricesNeeded>
				</div>
				<p>
					The Inkpot hogget has a great flavour and is of fantastic quality
					because it is nutrient dense and is as close as possible to meats from
					the wild as farmed meats can get. The Inkpot hogget is dry aged on the
					bone for 2 weeks to intensify the flavours and tenderise the meat.
				</p>

				<p>
					The Inkpot lambs were bought from Village Farm Organics in Summer 2017
					and are rare breed Shetlands. Hogget is neither lamb nor mutton but is
					a 'halfway' meat between one and two-year-old and is often referred to
					as 'shearling.' The Inkpot hogget is fed entirely on pasture and is
					raised to organic standards (the Inkpot is currently working towards
					organic as well as 'Pasture for Life' certification.)
				</p>

				<p>
					The Inkpot hogget has a great flavour and is of fantastic quality
					because it is nutrient dense and is as close as possible to meats from
					the wild as farmed meats can get. The Inkpot hogget is dry aged on the
					bone for 2 weeks to intensify the flavours and tenderise the meat.
				</p>

				<p>
					Whether you buy a whole or half you will get joints, chops and mince.
				</p>

				<p>
					Packaging to keep the meat frozen is £7 and courier fees are £10 on
					top of that. These P&P fees will be added when you checkout via
					paypal.
				</p>
			</v-col>
		</v-row>
		<v-row>
			<v-col>
				<Portraits3Narrow></Portraits3Narrow>
			</v-col>
		</v-row>
	</Layout>
</template>

<script>
import DownloadBtn from '@/components/DownloadBtn.vue';
import Portraits3Wide from '@/components/Portraits3Wide.vue';
import Portraits3Narrow from '@/components/Portraits3Narrow.vue';
import PricesNeeded from '@/components/PricesNeeded.vue';

export default {
	data() {
		return {
			title: 'Hogget',
			linkedDoc: '',
			pic1: '',
			pic2: '',
			pic3: '',
		};
	},
	components: {
		DownloadBtn,
		Portraits3Wide,
		Portraits3Narrow,
		PricesNeeded,
	},
};
</script>

<style lang="sass" scoped></style>
