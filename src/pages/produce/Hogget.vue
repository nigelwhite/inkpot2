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
					<v-col class="px-lg-12">
						<Portraits3Wide
							:img1="require('~/assets/images/' + pic1)"
							:img2="require('~/assets/images/' + pic2)"
							:img3="require('~/assets/images/' + pic3)"
						>
						</Portraits3Wide>
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
			title: 'Hogget',
			linkedDoc: '',
			pic1: 'sheep1.png',
			pic2: 'sheep2.png',
			pic3: 'sheep3.png',
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
