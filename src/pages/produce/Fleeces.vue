<template>
	<Layout>
		<template slot="title">{{ title }}</template>
		<v-row>
			<v-col class="col-12 col-xl-8">
				<v-row>
					<g-image
						src="~/assets/images/fleece-pan.png"
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
					The Inkpot fleeces are an ad-hoc that we have if and when we have
					them!!
				</p>
				<p>
					Please get in touch if this is something that you might be interested
					in and Hannah will be able to tell you if and when one might be
					available and what price is is likely to be.
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
	metaInfo: {
		title: 'Fleeces',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'description', content: 'The Inkpot fleeces' },
			{ name: 'keywords', content: 'fleeces, wool, pasture fed, sheep, order' },
		],
	},
	data() {
		return {
			title: 'Fleeces',
			linkedDoc: '',
			pic1: 'fleece1.png',
			pic2: 'fleece3.png',
			pic3: 'fleece2.png',
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
